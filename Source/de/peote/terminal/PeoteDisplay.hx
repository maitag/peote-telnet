/*
 *        o-o    o-o  o-o-o  o-o     
 *       o   o  o        o      o    
 *      o-o-o  o-o   o    o    o-o   
 *     o      o     (_)    o      o  
 *    o      o-o    / \     o    o-o 
 * 
 * PEOTE DISPLAY - display for haxe terminal emulation and telnet-client
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

import haxe.Timer;
import lime.graphics.Renderer;

import de.peote.view.PeoteView;
import de.peote.view.displaylist.DisplaylistType;

class PeoteDisplay
{
	var peoteView:PeoteView;
	
	public var size_x:Int = 256;
	public var size_y:Int = 128;

	var max_size_x:Int;
	var max_size_y:Int;

	var font_size_x:Int = 10;
	var font_size_y:Int = 16;
	
	var colors:Array<Int>;
	var fg_color:Int;
	var bg_color:Int;
	var fg_color_default:Int = 0x70d800ff;
	var bg_color_default:Int = 0x00000000;
	
	public var cursor_x:Int = 0;
	public var cursor_y:Int = 0;
	
	//var buffer:Array<Array<Int>>;
	var buffer:Array<Array<Null<Int>>>;
	var buffer_pos:Int = 0;
	var max_buffer:Int;
	
	var max_elements:Int;
	var element_offset:Int = 0;
	
	var displaylist_y_offset:Int = 0;
	var displaylist_y_scroll:Int = 0;
	
	var startTime:Float;
    var width: Int;
    var height: Int;
    public var mouse_x: Int = 0;
    public var mouse_y: Int = 0;
    public var zoom: Int = 1;
	
	public function new(width:Int, height:Int, max_buffer:Int=300, max_size_x:Int=256, max_size_y:Int=256) 
	{
		this.width = width;
		this.height = height;
		this.max_buffer = max_buffer;
		this.max_size_x = max_size_x;
		this.max_size_y = max_size_y;
				
		//             black,        red,      green,     yellow,       blue,    magenta,       cyan,      white
		colors = [0x000000ff, 0xff5511ff, 0x55ff11ff, 0xfffa00ff, 0x2286ffff, 0xf0ee11ff, 0x11f0ffff, 0xfafafaff];
		sgrReset();
		
		this.peoteView = new PeoteView({maxDisplaylists:2,maxPrograms:2,maxTextures:0,maxImages:1}); // max_displaylists, max_programs (for all displaylists)
		startTime = Timer.stamp();
				

		this.size_x = Math.floor(width / font_size_x);
		this.size_y = Math.floor(height / font_size_y);

		this.max_elements = max_size_x * max_size_y;
		
		buffer = new Array<Array<Null<Int>>>();
		for (i in 0...max_buffer) {
			buffer[buffer_pos + i] = new Array<Int>();			
		}
		
		peoteView.setTexture( {
			texture:0,
			w:512,
			h:512
		});
		peoteView.setImage( {
			image:0,
			texture:0,
			w:320,h:512,
			filename:"assets/liberation_font_320x512_white.png"
		});
		peoteView.setProgram({program:0,texture:0});

		peoteView.setDisplaylist( {
			displaylist: 0,
			type:DisplaylistType.SIMPLE | DisplaylistType.RGBA,
			maxElements: this.max_elements, // for low-end devices better max_elements < 100 000
			renderBackground:true,
			w:size_x * font_size_x,	
			h:size_y * font_size_y,
			r:0.05,g:0.07
		});
		
		// cursor
		peoteView.setProgram({program:1, fshader:"assets/lyapunov_greencursor.frag"});
		peoteView.setDisplaylist( {
			displaylist: 1,
			type:DisplaylistType.SIMPLE,
			maxElements: 1,
			z:1
		});
		
		updateCursor();
	}
	
	// ----------- Render Loop ------------------------------------
	public inline function render(renderer:Renderer):Void
	{
		peoteView.render(Timer.stamp() - startTime, width, height, mouse_x, mouse_y, zoom);
	}

	public inline function printChar(char:Int):Void 
	{
		setChar(cursor_x, cursor_y, char);
		buffer[buffer_pos + cursor_y][cursor_x] = char;
		cursor_x++;
		updateCursor();
	}
	
	// --------------------------------------------------------------------------------
	// Terminal Commands --------------------------------------------------------------
	// --------------------------------------------------------------------------------

	public inline function backspace():Void {
		cursor_x--;
		buffer[buffer_pos + cursor_y][cursor_x] = 0;
		updateCursor();
	}
	
	public inline function carriageReturn():Void {
		cursor_x=0; updateCursor();
	}
	
	public inline function linefeed():Void {
		if (cursor_y+1 < size_y)
		{	
			cursor_y++;
			updateCursor(); // TODO
		}
		else
		{	
			#if debugterminal trace("Scroll Display Up"); #end
			scrollUp();
		}
	}

	// --------------------------------------------------------------------------------
	// ANSI ESC Sequences -------------------------------------------------------------
	// --------------------------------------------------------------------------------
	
	public inline function cursorDown(n:Int):Void
	{
		cursor_y += n;
		if  (cursor_y >= size_y) cursor_y = size_y - 1;
		updateCursor();
	}
	public inline function cursorUp(n:Int):Void
	{
		cursor_y -= n;
		if  (cursor_y < 0) cursor_y = 0;
		updateCursor();
	}
	public inline function cursorForward(n:Int):Void
	{
		cursor_x += n;
		if  (cursor_x >= size_x) cursor_x = size_x - 1;
		updateCursor();
	}
	public inline function cursorBack(n:Int):Void
	{
		cursor_x -= n;
		if  (cursor_x < 0) cursor_x = 0;
		updateCursor();
	}
	public inline function cursorPosition(x:Int, y:Int):Void 
	{
		cursor_x = x;
		cursor_y = y;
		if  (cursor_y >= size_y) cursor_y = size_y - 1;
		if  (cursor_x >= size_x) cursor_x = size_x - 1;
		updateCursor();
	}
	public inline function deleteChar(n:Int):Void // Delete Char (chars right from cursor float left)
	{
		buffer[buffer_pos + cursor_y].splice(cursor_x,n); // TODO ???
		refresh(); // TODO: refresh_line(); only?
	}

	// Todo: may save all to delete into buffer
	public inline function eraseDisplay():Void
	{
		for (y in 0...size_y)
		{
			buffer[buffer_pos + y] = new Array<Int>();
			for (x in 0...size_x) setChar(x,y,0);
		}
	}
	public inline function eraseDisplayAfterCursor():Void
	{
		for (y in cursor_y...size_y)
		{
			buffer[buffer_pos + y] = new Array<Int>();
			for (x in 0...size_x) setChar(x,y,0);
		}
	}
	public inline function eraseDisplayBeforeCursor():Void
	{
		for (y in 0...cursor_y)
		{
			buffer[buffer_pos + y] = new Array<Int>();
			for (x in 0...size_x) setChar(x,y,0);
		}
	}
	
	public inline function eraseLine():Void 
	{
		for (x in 0...size_x)
		{	setChar(x,cursor_y,0);
			buffer[buffer_pos + cursor_y][x] = 0;
		}
	}
	public inline function eraseLineAfterCursor():Void 
	{
		for (x in cursor_x...size_x)
		{	setChar(x,cursor_y,0);
			buffer[buffer_pos + cursor_y][x] = 0;
		}
	}
	public inline function eraseLineBeforeCursor():Void 
	{
		for (x in 0...cursor_x)
		{	setChar(x,cursor_y,0);
			buffer[buffer_pos + cursor_y][x] = 0;
		}
	}
	
	public inline function insertLine(n:Int):Void
	{
		for ( n in 0...n ) 
		{
			buffer.insert( buffer_pos + cursor_y, new Array<Int>()  );
			cursor_y++;
			buffer.shift(); buffer_pos--;
		}
		refresh();
	}
	public inline function deleteLine(n:Int):Void
	{
		buffer.splice(buffer_pos + cursor_y, n);
		for (n in 0...n ) buffer.push(new Array<Int>());
		refresh();
	}

	// ---------- sgr colors ----------------
	
	public inline function sgrReset():Void
	{
		fg_color = fg_color_default;
		bg_color = bg_color_default;
	}
	public inline function sgrFG(n:Int):Void
	{
		fg_color = colors[n];
	}
	public inline function sgrBG(n:Int):Void
	{
		bg_color = colors[n];
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
			rgba:fg_color,
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
	// resize display------------------------------------------------------------------
	// --------------------------------------------------------------------------------
	// TODO: recode element_offset thing
	public inline function resize (width:Int, height:Int):Void
	{
		this.width = width;
		this.height = height;
		
		eraseDisplay();
		
		size_x = Math.floor(width / font_size_x);
		size_y = Math.floor(height / font_size_y);
		
		trace("onWindoResize", size_x, size_y);
		
		// TODO: debug!
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