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
	var peoteDisplay:PeoteDisplay;
	var ansiParser:AnsiParser;
		
	var keyboardMap:Map<String, Map<Int, Array<String>> >;
	
	public function new(peoteTelnet:PeoteTelnet, peoteDisplay:PeoteDisplay)
	{
		this.peoteTelnet = peoteTelnet;
		this.peoteDisplay = peoteDisplay;
		
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
				peoteDisplay.printChar(char);
			}
	}
	
	// --------------------------------------------------------------------------------
	// Terminal Commands --------------------------------------------------------------
	// --------------------------------------------------------------------------------

	public inline function backspace():Void {
		#if debugterminal trace("BackSpace"); #end
		peoteDisplay.backspace();
	}
	
	public inline function carriageReturn():Void {
		#if debugterminal trace("Carriage Return"); #end
		peoteDisplay.carriageReturn();
	}
	
	public inline function linefeed():Void {
		#if debugterminal trace("LineFeed"); #end
		peoteDisplay.linefeed();
	}

	// --------------------------------------------------------------------------------
	// ANSI ESC Sequences -------------------------------------------------------------
	// --------------------------------------------------------------------------------
	
	public inline function sgr(params:Array<String>):Void // Select Graphic Rendition
	{
		#if debugansi trace("SGR:" + params); #end
		for (i in 0...params.length)
		{	var p:Int = Std.parseInt(params[i]);
			if (p == 0) peoteDisplay.sgrReset();
			if (p >= 30 && p <= 37) peoteDisplay.sgrFG(p-30);
			if (p >= 40 && p <= 47) peoteDisplay.sgrBG(p-40);
		}
	}
	public inline function cud(params:Array<String>):Void // Cursor Down
	{
		if (params.length == 0) params.push("1");
		peoteDisplay.cursorDown(Std.parseInt(params[0]));
		#if debugansi trace('cursor down to: y=' + peoteDisplay.cursor_y); #end
	}
	public inline function cuu(params:Array<String>):Void // Cursor Up
	{
		if (params.length == 0) params.push("1");
		peoteDisplay.cursorUp(Std.parseInt(params[0]));
		#if debugansi trace('cursor up to: y=' + peoteDisplay.cursor_y); #end
	}
	public inline function cuf(params:Array<String>):Void // Cursor Forward
	{
		if (params.length == 0) params.push("1");
		peoteDisplay.cursorForward(Std.parseInt(params[0]));
		#if debugansi trace('cursor forward to: x=' + peoteDisplay.cursor_x); #end
	}
	public inline function cub(params:Array<String>):Void // Cursor Back
	{
		if (params.length == 0) params.push("1");
		peoteDisplay.cursorBack(Std.parseInt(params[0]));
		#if debugansi trace('cursor back to: x=' + peoteDisplay.cursor_x); #end
	}
	public inline function cup(params:Array<String>):Void // Cursor Position
	{
		var x:Int = 0;
		var y:Int = 0;
		if (params.length == 1)	{
			y =  (params[0] != '') ? Std.parseInt(params[0])-1 : 0;
		}
		else if (params.length == 2) {
			x = (params[1] != '') ? Std.parseInt(params[1])-1 : 0;
			y = (params[0] != '') ? Std.parseInt(params[0])-1 : 0;
		}
		peoteDisplay.cursorPosition(x, y);
		#if debugansi trace('cursor to position: x=' + peoteDisplay.cursor_x + " y=" + peoteDisplay.cursor_y); #end
	}
	public inline function del(params:Array<String>):Void // Delete Char (chars right from cursor float left)
	{
		if (params.length == 0) params.push("1");
		peoteDisplay.deleteChar(Std.parseInt(params[0]));
		#if debugansi trace('Delete ' + params[0] + ' Char'); #end
	}
	public inline function ed(params:Array<String>):Void // Erase Display
	{
		if (params.length == 0) params.push("0");
		if (params[0] == "0")
		{
			#if debugansi trace('Erase Display: clear from cursor to end of screen'); #end
			peoteDisplay.eraseDisplayAfterCursor();
		}
		else if (params[0] == "1")
		{
			#if debugansi trace('Erase Display: clear from cursor to beginning of the screen'); #end
			peoteDisplay.eraseDisplayBeforeCursor();
		}
		else if (params[0] == "2")
		{
			#if debugansi trace('Erase Display: clear entire screen'); #end
			peoteDisplay.eraseDisplay();
		}
	}
	public inline function el(params:Array<String>):Void // Erase in Line
	{
		if (params.length == 0) params.push("0");
		if (params[0] == "0")
		{
			#if debugansi trace('Erase in Line: clear from cursor to end of line'); #end
			peoteDisplay.eraseLineAfterCursor();
		}
		else if (params[0] == "1")
		{
			#if debugansi trace('Erase in Line: clear from cursor to beginning of line'); #end
			peoteDisplay.eraseLineBeforeCursor();
		}
		else if (params[0] == "2")
		{
			#if debugansi trace('Erase in Line: clear entire line'); #end
			peoteDisplay.eraseLine();
		}
	}	
	public inline function il(params:Array<String>):Void // Insert Line
	{
		if (params.length == 0) params.push("1");
		#if debugansi trace('Insert '+params[0]+' Lines'); #end
		peoteDisplay.insertLine(Std.parseInt(params[0]));
	}
	public inline function dl(params:Array<String>):Void // Delete Line
	{
		if (params.length == 0) params.push("1");
		#if debugansi trace('Delete '+params[0]+' Lines'); #end
		peoteDisplay.deleteLine(Std.parseInt(params[0]));
	}
	


}