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

package de.peote.terminal;

import haxe.io.StringInput;
import lime.ui.KeyCode;
import lime.ui.KeyModifier;
import lime.Assets;
import lime.utils.ByteArray;

import de.peote.telnet.PeoteTelnet;
import de.peote.view.PeoteView;
import haxe.ds.Vector;

class PeoteTerminal
{
	var peoteTelnet:PeoteTelnet;
	var peoteView:PeoteView;
	var ansiParser:AnsiParser;
	
	var size_x:Int = 256;
	var size_y:Int = 128;

	var max_size_x:Int;
	var max_size_y:Int;

	var font_size_x:Int = 10;
	var font_size_y:Int = 16;
	
	var cursor_x:Int = 0;
	var cursor_y:Int = 0;
	
	//var buffer:Array<Array<Int>>;
	var buffer:Array<Array<Null<Int>>>;
	var buffer_pos:Int = 0;
	var max_buffer:Int;
	
	var keyboardMap:Map<String, Map<Int, Array<String>> >;
	
	var max_elements:Int;
	var element_offset:Int = 0;
	
	var displaylist_y_offset:Int = 0;
	var displaylist_y_scroll:Int = 0;
	
	public function new(peoteTelnet:PeoteTelnet, peoteView:PeoteView, width:Int, height:Int, max_buffer:Int, max_size_x:Int=256, max_size_y:Int=256) 
	{
		this.peoteTelnet = peoteTelnet;
		this.peoteView = peoteView;
		
		this.size_x = Math.floor(width / font_size_x);
		this.size_y = Math.floor(height / font_size_y);

		this.max_buffer = max_buffer;
		this.max_size_x = max_size_x;
		this.max_size_y = max_size_y;
		
		this.max_elements = max_size_x * max_size_y;
		
		//buffer = new Array<Array<Int>>();
		buffer = new Array<Array<Null<Int>>>();
		for (i in 0...max_buffer) {
			buffer[buffer_pos + i] = new Array<Int>();			
		}
		
		peoteView.setProgram(0);
		peoteView.setImage(0, "assets/liberation_font_320x512_green.png", 320, 512);
		//peoteView.setImage(0, "assets/peote_font_green.png", 512, 512);
		peoteView.setDisplaylist( {
			displaylist: 0,
			max_elements: this.max_elements, // for low-end devices better max_elements < 100 000
			max_programs: 1,
			buffer_segment_size: this.max_elements,
			renderBackground:true,
			r:0.05,g:0.07
		});
		
		// cursor
		peoteView.setProgram(1, "assets/lyapunov_greencursor.frag");
		peoteView.setDisplaylist( {
			displaylist: 1,
			max_elements: 10,
			max_programs: 1,
			buffer_segment_size: 10, 
			z:1
		});
		
		updateCursor();
		ansiParser = new AnsiParser(this);
	}
	
	public inline function onKeyDown(keyCode:KeyCode, modifier:KeyModifier):Void 
	{
		switch(keyCode) {
			case KeyCode.ESCAPE:	peoteTelnet.writeByte(27);	// TODO: windows problem
			case KeyCode.LEFT:		peoteTelnet.writeByte(27); peoteTelnet.writeByte(91); peoteTelnet.writeByte('D'.charCodeAt(0));
			case KeyCode.RIGHT:		peoteTelnet.writeByte(27); peoteTelnet.writeByte(91); peoteTelnet.writeByte('C'.charCodeAt(0));	
			case KeyCode.UP:		peoteTelnet.writeByte(27); peoteTelnet.writeByte(91); peoteTelnet.writeByte('A'.charCodeAt(0));	
			case KeyCode.DOWN:		peoteTelnet.writeByte(27); peoteTelnet.writeByte(91); peoteTelnet.writeByte('B'.charCodeAt(0));
			case KeyCode.BACKSPACE:	peoteTelnet.writeByte(TermCode.BS); 
			case KeyCode.DELETE :	peoteTelnet.writeByte(27); peoteTelnet.writeByte(91); peoteTelnet.writeByte('C'.charCodeAt(0)); peoteTelnet.writeByte(TermCode.BS); 
			case KeyCode.RETURN :	peoteTelnet.writeByte(TermCode.CR);					
			case KeyCode.NUMPAD_ENTER :	peoteTelnet.writeByte(TermCode.CR);					
			
			default:
			#if js
				var char:Int = KeyboardMap.toCharCode(keyCode, modifier);
				if (char < 256) peoteTelnet.writeByte(char);
			#end
		}
	}
	
	public inline function onTextInput(text:String):Void 
	{
		#if js
			trace("textinput: (" + text + ")");
		#else
			var ba:ByteArray = new ByteArray();
			ba.writeUTFBytes( text ); //ba.writeUTF( text );
			if (text != "") peoteTelnet.writeBytes( ba );
		#end
	}
	
	public inline function remoteData(bytes:ByteArray):Void 
	{
		peoteTelnet.parseTelnetData( bytes, printChar );
	}

	public inline function printChar(char:Int):Void 
	{
		
		if (ansiParser.mode != AnsiParser.Off ) ansiParser.parsing(char); // Ansi Parser in work ?
		else
			switch(char) {
				case TermCode.NUL:	trace("no operation");
				case TermCode.BEL:	trace("beep beep bedebedebedebedebedebede...");
				case TermCode.BS:	backspace();
				case TermCode.HT:	trace('Horizontal TAB');
				case TermCode.LF:	linefeed();
				case TermCode.VT:	trace('Vertical TAB');
				case TermCode.FF:	trace('Formfeed (also: New page NP)');
				case TermCode.CR:	carriageReturn();
				case TermCode.ESC:	ansiParser.mode = AnsiParser.Start;
				case TermCode.DEL:	trace('Delete character');
				
			default:
				if (char < 27) trace("-----> DEBUG :"+char);
				setChar(cursor_x, cursor_y, char);
				buffer[buffer_pos + cursor_y][cursor_x] = char;
				cursor_x++;
				updateCursor();
			}
	}
	
	// --------------------------------------------------------------------------------
	// Terminal Commands --------------------------------------------------------------
	// --------------------------------------------------------------------------------

	public inline function backspace():Void {
		#if debugterminal trace("BackSpace"); #end
		cursor_x--;
		buffer[buffer_pos + cursor_y][cursor_x] = 0;
		updateCursor();
	}
	
	public inline function carriageReturn():Void {
		#if debugterminal trace("Carriage Return"); #end
		cursor_x=0; updateCursor();
	}
	
	public inline function linefeed():Void {
		if (cursor_y+1 < size_y)
		{	
			cursor_y++;
			updateCursor(); // TODO
			#if debugterminal trace("LineFeed: y="+cursor_y); #end
		}
		else
		{
			#if debugterminal trace("LineFeed: y=" + cursor_y + " - Scroll Display Up"); #end
			scrollUp();
		}
	}

	// --------------------------------------------------------------------------------
	// ANSI ESC Sequences -------------------------------------------------------------
	// --------------------------------------------------------------------------------
	
	public inline function sgr(params:Array<String>):Void // Select Graphic Rendition
	{
		//trace("SGR:",params);
	}
	public inline function cud(params:Array<String>):Void // Cursor Down
	{
		if (params.length == 0) params.push("1");
		cursor_y += Std.parseInt(params[0]);
		if  (cursor_y >= size_y) cursor_y = size_y - 1;
		#if debugansi trace('cursor down to: y=' + cursor_y); #end
		updateCursor();
	}
	public inline function cuu(params:Array<String>):Void // Cursor Up
	{
		if (params.length == 0) params.push("1");
		cursor_y -= Std.parseInt(params[0]);
		if  (cursor_y < 0) cursor_y = 0;
		#if debugansi trace('cursor up to: y=' + cursor_y); #end
		updateCursor();
	}
	public inline function cuf(params:Array<String>):Void // Cursor Forward
	{
		if (params.length == 0) params.push("1");
		cursor_x += Std.parseInt(params[0]);
		if  (cursor_x >= size_x) cursor_x = size_x - 1;
		#if debugansi trace('cursor forward to: x=' + cursor_x); #end
		updateCursor();
	}
	public inline function cub(params:Array<String>):Void // Cursor Back
	{
		if (params.length == 0) params.push("1");
		cursor_x -= Std.parseInt(params[0]);
		if  (cursor_x < 0) cursor_x = 0;
		#if debugansi trace('cursor back to: x=' + cursor_x); #end
		updateCursor();
	}
	public inline function cup(params:Array<String>):Void // Cursor Position
	{
		cursor_x = 0; cursor_y = 0;
		if (params.length == 1)
		{
			cursor_y =  (params[0] != '') ? Std.parseInt(params[0])-1 : 0;
		}
		else if (params.length == 2)
		{
			cursor_x = (params[1] != '') ? Std.parseInt(params[1])-1 : 0;
			cursor_y = (params[0] != '') ? Std.parseInt(params[0])-1 : 0;
		}
		if  (cursor_y >= size_y) cursor_y = size_y - 1;
		if  (cursor_x >= size_x) cursor_x = size_x - 1;
		#if debugansi trace('cursor to position: x=' + cursor_x + " y=" + cursor_y); #end
		updateCursor();
	}
	public inline function del(params:Array<String>):Void // Delete Char (chars right from cursor float left)
	{
		if (params.length == 0) params.push("1");
		#if debugansi trace('Delete ' + params[0] + ' Char'); #end
		buffer[buffer_pos + cursor_y].splice(cursor_x,1); // TODO ???
		refresh(); // TODO: refresh_line(); only?
	}
	public inline function ed(params:Array<String>):Void // Erase Display
	{
		// Todo: may save all to delete into buffer
		if (params.length == 0) params.push("0");
		if (params[0] == "0")
		{
			#if debugansi trace('Erase Display: clear from cursor to end of screen'); #end
			for (y in cursor_y...size_y)
			{
				buffer[buffer_pos + y] = new Array<Int>();
				for (x in 0...size_x) setChar(x,y,0);
			}
		}
		else if (params[0] == "1")
		{
			#if debugansi trace('Erase Display: clear from cursor to beginning of the screen'); #end
			for (y in 0...cursor_y)
			{
				buffer[buffer_pos + y] = new Array<Int>();
				for (x in 0...size_x) setChar(x,y,0);
			}
		}
		else if (params[0] == "2")
		{
			#if debugansi trace('Erase Display: clear entire screen'); #end
			for (y in 0...size_y)
			{
				buffer[buffer_pos + y] = new Array<Int>();
				for (x in 0...size_x) setChar(x,y,0);
			}
		}
		
	}
	public inline function el(params:Array<String>):Void // Erase in Line
	{
		if (params.length == 0) params.push("0");
		if (params[0] == "0")
		{
			#if debugansi trace('Erase in Line: clear from cursor to end of line'); #end
			for (x in cursor_x...size_x)
			{	setChar(x,cursor_y,0);
				buffer[buffer_pos + cursor_y][x] = 0;
			}
		}
		else if (params[0] == "1")
		{
			#if debugansi trace('Erase in Line: clear from cursor to beginning of line'); #end
			for (x in 0...cursor_x)
			{	setChar(x,cursor_y,0);
				buffer[buffer_pos + cursor_y][x] = 0;
			}
		}
		else if (params[0] == "2")
		{
			#if debugansi trace('Erase in Line: clear entire line'); #end
			for (x in 0...size_x)
			{	setChar(x,cursor_y,0);
				buffer[buffer_pos + cursor_y][x] = 0;
			}
		}
	}	
	public inline function il(params:Array<String>):Void // Insert Line
	{
		if (params.length == 0) params.push("1");
		#if debugansi trace('Insert '+params[0]+' Lines'); #end
		for (n in 0... Std.parseInt(params[0]) ) 
		{
			buffer.insert( buffer_pos + cursor_y, new Array<Int>()  );
			cursor_y++;
			buffer.shift(); buffer_pos--;
		}
		refresh();
	}
	public inline function dl(params:Array<String>):Void // Delete Line
	{
		if (params.length == 0) params.push("1");
		#if debugansi trace('Delete '+params[0]+' Lines'); #end
		buffer.splice(buffer_pos + cursor_y, Std.parseInt(params[0]));
		for (n in 0... Std.parseInt(params[0]) ) buffer.push(new Array<Int>());
		refresh();
	}
	
	// --------------------------------------------------------------------------------
	// Display ------------------------------------------------------------------------
	// --------------------------------------------------------------------------------
	
	public inline function setChar(x:Int, y:Int, char:Int):Void
	{
		peoteView.setElement( { displaylist:0,
			element: (element_offset + x + (y * max_size_x)) % max_elements,
			x: x * font_size_x,
			y: y * font_size_y - displaylist_y_offset,
			w: font_size_x,
			h: font_size_y,
			program:0, image:0, tile:char
		});
		
	}
	public inline function updateCursor():Void
	{
		//trace("Update Cursor - cursor_x=" + cursor_x);
		peoteView.setElement({ element:0, displaylist:1,
			x:cursor_x * font_size_x,
			y:cursor_y * font_size_y + displaylist_y_scroll - displaylist_y_offset,
			w:font_size_x,
			h:font_size_y,
			program:1,tw:200, th:200
		});
	}	
	public inline function scrollUp():Void
	{
		//trace("scroll up");
		if (buffer_pos + cursor_y+1 < max_buffer) buffer_pos++;
		else
		{	//trace("buff-full");
			buffer[0] = new Array<Int>();
			buffer.push( buffer.shift() );
		}
		
		element_offset = (element_offset + max_size_x) % max_elements;
		displaylist_y_offset -= font_size_y;
		displaylist_y_scroll = displaylist_y_offset;
		peoteView.setDisplaylist( { displaylist: 0, yOffset: displaylist_y_offset } );
	}
	public inline function refresh():Void
	{
		//trace(buffer_pos, element_offset, displaylist_y_offset);
		for (y in 0...size_y)
		{	for (x in 0...size_x)
			{	var char:Int = 0;
				if ( buffer[buffer_pos + y][x] != null )
				{
					char = buffer[buffer_pos + y][x];
				}
				setChar(x, y, char);
			}
		}
		
	}
	// --------------------------------------------------------------------------------
	// Events -------------------------------------------------------------------------
	// --------------------------------------------------------------------------------
	// TODO: recode element_offset thing
	public inline function onWindowResize (width:Int, height:Int):Void
	{
		// TODO: buggy!
		size_x = Math.floor(width / font_size_x);
		size_y = Math.floor(height / font_size_y);
		
		peoteTelnet.resize(size_x, size_y);
		trace("onWindoResize",size_x,size_y);
		if (cursor_y >= size_y)
		{
			buffer_pos += cursor_y - size_y + 1;
			cursor_y = size_y - 1;
			element_offset = (element_offset + max_size_x * (cursor_y - size_y + 1)) % max_elements;
			displaylist_y_offset -= font_size_y * (cursor_y - size_y + 1);
			displaylist_y_scroll = displaylist_y_offset;
		}
		else if (cursor_y < size_y-1)
		{
			var offset:Int = Math.floor(Math.min(buffer_pos, size_y - cursor_y - 1));
			buffer_pos -= offset;
			cursor_y += offset;
			element_offset = (element_offset - max_size_x * offset) % max_elements;
			if (element_offset < 0) element_offset = max_elements - element_offset;
			displaylist_y_offset += font_size_y * offset;
			displaylist_y_scroll = displaylist_y_offset;
		}
		
		peoteView.setDisplaylist( { displaylist:0,
			w:size_x * font_size_x,	
			h:size_y * font_size_y,
			yOffset: displaylist_y_offset
		});
		updateCursor();
		refresh();
	}
	
	public inline function onMouseWheel(deltaX:Float, deltaY:Float):Void
	{
		// TODO
		if ( deltaY>0 && displaylist_y_scroll - displaylist_y_offset < (max_size_y-size_y)*font_size_y) displaylist_y_scroll+=font_size_y;
		else if (displaylist_y_scroll > displaylist_y_offset) displaylist_y_scroll -= font_size_y;
		
		peoteView.setDisplaylist( { displaylist: 0, yOffset: displaylist_y_scroll } );
		updateCursor();
	}
		

}