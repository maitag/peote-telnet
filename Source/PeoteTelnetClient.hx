/*
 *        o-o    o-o  o-o-o  o-o     
 *       o   o  o        o      o    
 *      o-o-o  o-o   o    o    o-o   
 *     o      o     (_)    o      o  
 *    o      o-o    / \     o    o-o 
 * 
 * PEOTE TELNET TERMINAL - haxe terminal emulation and telnet-client
 * Copyright (c) 2015 Sylvio Sell, http://maitag.de
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

package;

import lime.app.Application;
import lime.graphics.RenderContext;
import haxe.Timer;
import lime.ui.KeyCode;
import lime.ui.KeyModifier;
import lime.ui.Window;
import lime.ui.Touch;
import lime.graphics.Renderer;

#if js
import js.html.Uint8Array;
#else
import lime.Assets;
#end
import lime.utils.ByteArray;

import de.peote.view.PeoteView;
import de.peote.socket.PeoteSocket;
import de.peote.telnet.PeoteTelnet;
import de.peote.terminal.PeoteTerminal;


class PeoteTelnetClient extends Application {
	
    var width: Int;
    var height: Int;
    var mouse_x: Int = 0;
    var mouse_y: Int = 0;
    var zoom: Int = 1;
	
	var peoteSocket:PeoteSocket;
	var is_connected:Bool = false;
	
	var peoteTelnet:PeoteTelnet;
	
	var peoteView:PeoteView;
	var peoteTerminal:PeoteTerminal;
	var startTime:Float;
	
	var conf:Dynamic;
		
	public function new () { super (); }
	
	public override function onWindowCreate (window:Window):Void
	{	
		// load config from json file
		var regex = new EReg("//.*?$","gm");
		#if js
		var req = js.Browser.createXMLHttpRequest();
		req.open('GET', "assets/config.conf", false);
		req.send();
		conf = haxe.Json.parse( regex.replace(req.responseText, "") );
		#else
		conf = haxe.Json.parse( regex.replace(Assets.getBytes("assets/config.conf").asString(), "") ); // TODO: problem with getText (.txt ??)
		#end
		
		switch (window.renderer.context) {
			case OPENGL (gl):
				
				window.enableTextEvents = true;
				
				width = window.width;
				height = window.height;
				
				startTime = Timer.stamp();
				
				peoteSocket = new PeoteSocket( { 
					onConnect: function(connected, msg) {
						trace("onConnect:" + connected + " - " + msg);
						is_connected = true;
						peoteTerminal = new PeoteTerminal(peoteTelnet, peoteView, width, height, 256);
						peoteTerminal.onWindowResize( width, height);
					},
					onClose: function(msg) {
						trace("onClose:" + msg);
						is_connected = false;
					},
					onError: function(msg) {
						trace("onError:"+msg);
					},
					onData: this.onData
				});
				
				peoteTelnet = new PeoteTelnet(peoteSocket);
				peoteView = new PeoteView(3, 10); // max_displaylists, max_programs (for all displaylists)
				
				
				peoteSocket.connect(conf.server, conf.port);
				
			default:
				trace("only opengl supported");
		}
	}
	#if js
	public inline function onData(data:Uint8Array):Void
	{
		// TODO: optimize raw-socket data from swf-bridge ( see PeoteSocketBridge.hx )
		//trace(data);
		var bytes = new ByteArray();
		for (i in 0...data.length)
			bytes.writeByte( data[i] );
		bytes.position = 0;
		
		peoteTerminal.remoteData( bytes );
	}
	#else
	public inline function onData(data:ByteArray):Void
	{
		peoteTerminal.remoteData( data );
	}
	#end
	
	// ----------- Render Loop ------------------------------------
	public override function render(renderer:Renderer):Void
	{
		peoteView.render(Timer.stamp() - startTime, width, height, mouse_x, mouse_y, zoom);
	}


	
	// ------------------------------------------------------------
	// ----------- EVENT HANDLER ----------------------------------

	// text input
	public override function onTextInput (window:Window, text:String):Void
	{
		if (is_connected) peoteTerminal.onTextInput(text);
	}
	
	
	// keyboard input
	public override function onKeyDown (window:Window, keyCode:KeyCode, modifier:KeyModifier):Void
	{
		if (is_connected) peoteTerminal.onKeyDown(keyCode, modifier);
	}
	//public override function onKeyUp (keyCode:KeyCode, modifier:KeyModifier):Void {}
	
	
	// screen and mouse
	public override function onWindowResize (window:Window, width:Int, height:Int):Void
	{
		trace("onWindowResize:"+ window.width+','+ window.height);
		this.width = window.width;
		this.height = window.height;
		if (is_connected) peoteTerminal.onWindowResize(width, height);
	}
	
	public override function onMouseMove (window:Window, x:Float, y:Float):Void
	{
		//trace("onMouseMove: " + x + "," + y );
		mouse_x = Std.int(x);
		mouse_y = Std.int(y);
	}
	public override function onTouchMove (touch:Touch):Void
	{
		trace("onTouchMove: " + touch.x + "," + touch.y );
		mouse_x = Std.int(touch.x); //* window.width;
		mouse_y = Std.int(touch.y);
	}
	public override function onMouseDown (window:Window, x:Float, y:Float, button:Int):Void
	{	
		//trace("onMouseDown: x=" + x + " y="+ y);
	}
	public override function onMouseUp (window:Window, x:Float, y:Float, button:Int):Void
	{	
		//trace("onmouseup: "+button+" x=" + x + " y="+ y);
	}
	public override function onMouseWheel (window:Window, deltaX:Float, deltaY:Float):Void
	{	
		//trace("onmousewheel: " + deltaX + ',' + deltaY );
		peoteTerminal.onMouseWheel(deltaX, deltaY);	
	}
	
	// end Event Handler

	
	

	
}
