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

package peote.terminal;

// TODO: optimize with function-pointers &| regexps like: /\e\[(=|\?)?\d{0,3}(;\d{0,3})*(H|f|A|B|C|D|R|s|u|J|K|h|p|m)/g
 
@:enum abstract ControlCode(Int) from Int to Int {

	public inline static var CSI:Int	= 91;	// 155;	// Control Sequence Initiator "["
}

@:enum abstract AnsiCode(Int) from Int to Int {

 	public static var CUU(default, never):Int = 'A'.charCodeAt(0); // Cursor Up
 	public static var CUD(default, never):Int = 'B'.charCodeAt(0); // Cursor Down
 	public static var CUF(default, never):Int = 'C'.charCodeAt(0); // Cursor Forward
 	public static var CUB(default, never):Int = 'D'.charCodeAt(0); // Cursor Back
 	public static var CNL(default, never):Int = 'E'.charCodeAt(0); // Cursor Next Line
 	public static var CPL(default, never):Int = 'F'.charCodeAt(0); // Cursor Previous Line
 	public static var CHA(default, never):Int = 'G'.charCodeAt(0); // Cursor Horizontal Absolute
 	public static var CUP(default, never):Int = 'H'.charCodeAt(0); // Cursor Position
 	public static var ED (default, never):Int = 'J'.charCodeAt(0); // Erase Display
 	public static var EL (default, never):Int = 'K'.charCodeAt(0); // Erase in Line 
 	public static var IL (default, never):Int = 'L'.charCodeAt(0); // Insert Line 
 	public static var DL (default, never):Int = 'M'.charCodeAt(0); // Delete Line 
 	public static var SU (default, never):Int = 'S'.charCodeAt(0); // Scroll Up
 	public static var SD (default, never):Int = 'T'.charCodeAt(0); // Scroll Down
 	public static var HVP(default, never):Int = 'f'.charCodeAt(0); // Horizontal and Vertical Position (same as CUP)
 	public static var SGR(default, never):Int = 'm'.charCodeAt(0); // Select Graphic Rendition
 	public static var AUX(default, never):Int = 'i'.charCodeAt(0); // AUX Port
 	public static var DSR(default, never):Int = 'n'.charCodeAt(0); // Device Status Report
 	public static var SCP(default, never):Int = 's'.charCodeAt(0); // Save Cursor Position
 	public static var RCP(default, never):Int = 'u'.charCodeAt(0); // Restore Cursor Position
 	public static var CHI(default, never):Int = 'l'.charCodeAt(0); // (Hides the cursor)
 	public static var CSH(default, never):Int = 'h'.charCodeAt(0); // (Shows the cursor)
 	public static var SKS(default, never):Int = 'p'.charCodeAt(0); // (set keyboard string)
 	public static var DEL(default, never):Int = 'P'.charCodeAt(0); // delete char
}

class AnsiParser
{

	public var mode:Int = Off;
	
	public static var Off:Int		 = 0; // parser not in work (check for ESC to start)
	public inline static var Start:Int		 = 1; // Start Ansi Parsing
	public inline static var Sequence:Int	 = 2; // is ESC [ Sequence
	
	var peoteTerminal:PeoteTerminal;
	
	var params:Array<String>;
	var p:String;
	
	public function new(peoteTerminal:PeoteTerminal)
	{
		this.peoteTerminal = peoteTerminal;
		params = new Array<String>();
	}
	
	public inline function parsing(key:Int):Void
	{
		switch (mode)
		{	
			// --------------------------------------------------------------------------------
			case AnsiParser.Start:
				switch(key)
				{
					case ControlCode.CSI: p = "";  params = []; mode = AnsiParser.Sequence; //trace("CSI"); 
					
					default: trace("AnsiParser - Mode.Start - byte: "+ key); mode = AnsiParser.Off; 
				}
				// ...
			// --------------------------------------------------------------------------------
			case AnsiParser.Sequence:
				switch(key)
				{
					case AnsiCode.SGR: modeOff(); peoteTerminal.sgr(params);
					case AnsiCode.CUU: modeOff(); peoteTerminal.cuu(params);
					case AnsiCode.CUD: modeOff(); peoteTerminal.cud(params);
					case AnsiCode.CUF: modeOff(); peoteTerminal.cuf(params);
					case AnsiCode.CUB: modeOff(); peoteTerminal.cub(params);
					case AnsiCode.CNL: trace("CNL",params,p); mode = AnsiParser.Off;
					case AnsiCode.CPL: trace("CPL",params,p); mode = AnsiParser.Off;
					case AnsiCode.CHA: trace("CHA",params,p); mode = AnsiParser.Off;
					case AnsiCode.CUP: modeOff(); peoteTerminal.cup(params);
					case AnsiCode.HVP: modeOff(); peoteTerminal.cup(params); // same as cup
					case AnsiCode.ED : modeOff(); peoteTerminal.ed(params);
					case AnsiCode.EL : modeOff(); peoteTerminal.el(params);
					case AnsiCode.IL : modeOff(); peoteTerminal.il(params);
					case AnsiCode.DL : modeOff(); peoteTerminal.dl(params);
					case AnsiCode.SU : trace("SU ",params,p); mode = AnsiParser.Off;
					case AnsiCode.SD : trace("SD ",params,p); mode = AnsiParser.Off;
					case AnsiCode.AUX: trace("AUX",params,p); mode = AnsiParser.Off;
					case AnsiCode.DSR: trace("DSR",params,p); mode = AnsiParser.Off;
					case AnsiCode.SCP: trace("SCP",params,p); mode = AnsiParser.Off;
					case AnsiCode.RCP: trace("RCP",params,p); mode = AnsiParser.Off;
					case AnsiCode.CHI: trace("CHI",params,p); mode = AnsiParser.Off;
					case AnsiCode.CSH: trace("CSH",params,p); mode = AnsiParser.Off;
					case AnsiCode.SKS: trace("SKS",params,p); mode = AnsiParser.Off;
					case AnsiCode.DEL: modeOff(); peoteTerminal.del(params);
					
					default: // trace("key("+key+"):" + String.fromCharCode(key));
					if (key == ';'.charCodeAt(0))
					{
						params.push(p);
						p = "";
					}
					else p += String.fromCharCode(key);
				}
				
				
		}

	}
	private inline function modeOff():Void
	{
		mode = AnsiParser.Off;
		if (p != "") params.push(p);
	}
}