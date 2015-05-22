package de.peote.terminal;

/**
 * ...
 * @author Sylvio Sell
 */
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