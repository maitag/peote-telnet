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

import haxe.io.Bytes;

import lime.app.Application;
import lime.graphics.RenderContext;
import lime.ui.KeyCode;
import lime.ui.KeyModifier;
import lime.ui.Window;
import lime.ui.Touch;
import lime.graphics.Renderer;

import peote.bridge.PeoteSocketBridge;

import peote.io.PeoteBytesInput;
import peote.io.PeoteBytesOutput;
import peote.view.PeoteView;
import peote.socket.PeoteSocket;
import peote.telnet.PeoteTelnet;
import peote.terminal.PeoteTerminal;
import peote.terminal.PeoteDisplay;


class PeoteTelnetClient extends Application {
		
	var peoteSocket:PeoteSocket;
	var is_connected:Bool = false;
	
	var peoteTelnet:PeoteTelnet;
	
	var peoteTerminal:PeoteTerminal;
	var peoteDisplay:PeoteDisplay;

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
		conf = haxe.Json.parse( regex.replace(lime.Assets.getText("assets/config.conf"), "") ); // TODO: problem with getText (.txt ??)
		#end
		
		switch (window.renderer.context) {
			case OPENGL (gl):
				
				window.enableTextEvents = true;
				window.focus();
				
				peoteDisplay = new PeoteDisplay(window.width, window.height);
				
				PeoteSocketBridge.load( {
					onload: openSocket,
					//prefereWebsockets: true,  // only for js
					proxys: {
						proxyServerWS:"localhost",  // only for js
						proxyPortWS  : 3211,
						
						proxyServerSWF:"localhost", // js targets going throught peoteSocketBridge.swf
						proxyPortSWF  :3211,
					},
					onfail: function() { trace("Browser doesn't support flash or websockets"); }
				});
				
			default:
				trace("only opengl supported");
		}
	}
	
	public function openSocket():Void
	{
		peoteSocket = new PeoteSocket( { 
			onConnect: function(connected, msg) {
				trace("onConnect:" + connected + " - " + msg);
				is_connected = true;
				peoteTelnet = new PeoteTelnet(peoteSocket, peoteDisplay.size_x, peoteDisplay.size_y);
				peoteTerminal = new PeoteTerminal(peoteTelnet, peoteDisplay);
			},
			onClose: function(msg) {
				trace("onClose:" + msg);
				is_connected = false;
			},
			onError: function(msg) {
				trace("onError:"+msg);
			},
			onData: onData
		});
			
		peoteSocket.connect(conf.server, conf.port);
	}
	
	public inline function onData(bytes:Bytes):Void
	{
		var input:PeoteBytesInput = new PeoteBytesInput(bytes);
		peoteTerminal.remoteData( input );
	}
	
	// ----------- Render Loop ------------------------------------
	public override function render(renderer:Renderer):Void
	{
		peoteDisplay.render(renderer);
	}


	
	// ------------------------------------------------------------
	// ----------- EVENT HANDLER ----------------------------------

	// text input
	public override function onTextInput (window:Window, text:String):Void
	{	//trace("onTextInput");
		if (is_connected) peoteTerminal.onTextInput(text);
	}
	
	
	// keyboard input
	public override function onKeyDown (window:Window, keyCode:KeyCode, modifier:KeyModifier):Void
	{	//trace("onKeyDown");
		if (is_connected) peoteTerminal.onKeyDown(keyCode, modifier);
		// TODO :
		switch(keyCode) {
			case KeyCode.TAB: window.onKeyDown.cancel(); // TODO -> focus in event
			default:
		}
	}
	//public override function onKeyUp (window:Window, keyCode:KeyCode, modifier:KeyModifier):Void {}
	
	
	// screen and mouse
	public override function onWindowResize (window:Window, width:Int, height:Int):Void
	{
		trace("onWindowResize:"+ window.width+','+ window.height);
		if (is_connected) {
			peoteDisplay.resize(window.width, window.height);
			peoteTelnet.resize(peoteDisplay.size_x, peoteDisplay.size_y);
		}
	}
	
	public override function onMouseMove (window:Window, x:Float, y:Float):Void
	{
		//trace("onMouseMove: " + x + "," + y );
		peoteDisplay.mouse_x = Std.int(x);
		peoteDisplay.mouse_y = Std.int(y);
	}
	public override function onTouchMove (touch:Touch):Void
	{
		trace("onTouchMove: " + touch.x + "," + touch.y );
		peoteDisplay.mouse_x = Std.int(touch.x); //* window.width;
		peoteDisplay.mouse_y = Std.int(touch.y);
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
		if (is_connected) peoteDisplay.onMouseWheel(deltaX, deltaY);	
	}
	
	// end Event Handler

	
	

	
}
