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

@:enum abstract TermCode(Int) from Int to Int {

	public static var NUL:Int	= 0;	// no operation
	public static var BEL:Int	= 7;	// \a	^G Bell ;)
	public static var BS:Int	= 8;	// \b	^H Backspace
	public static var HT:Int	= 9;	// \t	^I Horizontal TAB
	public static var LF:Int	= 10;	// \n	^J Linefeed (newline)
	public static var VT:Int	= 11;	// \v	^K Vertical TAB
	public static var FF:Int	= 12;	// \f	^L Formfeed (also: New page NP)
	public static var CR:Int	= 13;	// \r	^M Carriage return
	public static var ESC:Int	= 27;	// ^[	Escape character
	public static var DEL:Int	= 127;  // Delete character
	
}