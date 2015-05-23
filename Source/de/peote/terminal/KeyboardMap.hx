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

import lime.ui.KeyCode;
import lime.ui.KeyModifier;

class KeyboardMap
{

	static var keyboardMap:Map<String, Map<Int, Array<String>>> = [
		"de" =>
		[
			 48 => ["0", "=", "}"],
			 49 => ["1", "!"],
			 50 => ["2", "\""],
			 51 => ["3", "§"],
			 52 => ["4", "$"],
			 53 => ["5", "%"],
			 54 => ["6", "&"],
			 55 => ["7", "/", "{"],
			 56 => ["8", "(", "["],
			 57 => ["9", ")", "]"],
			 
			 60 => ["<", ">", "|"],
			 
			#if js 63 #else 223 #end
				=> ["ß", "?", "\\"],
			
			#if js 160 #else 96 #end
				=> ["^"],
			#if js 163 #else 35 #end
				=> ["#", "'"],
			#if js 171 #else 43 #end
				=> ["+", "*", "~"],
			#if js 188 #else 44 #end
				=> [",", ";"],
			#if js 173 #else 45 #end
				=> ["-", "_"],
			#if js 190 #else 58 #end
				=> [".", ":"],
			#if js 192 #else 180 #end 
				=> ["´", "`"]
		]
	];
	
	public function new() 
	{
		// keyboardMap = haxe.Json.parse(Assets.getText("assets/keyboard.conf"));
		// Todo: load from json file
		/*
		#if js
		var req = js.Browser.createXMLHttpRequest();
		req.open('GET', "assets/keyboard.conf", false);
		req.send();
		keyboardMap = haxe.Json.parse(req.responseText);
		#else
		keyboardMap = haxe.Json.parse(Assets.getBytes("assets/keyboard.conf").asString()); // TODO: problem with getText (.txt ??)
		#end
		*/
	}	
	
	public static inline function toCharCode(keyCode:KeyCode, modifier:KeyModifier):Int
	{
		var char:Int = keyCode;
		#if debugkeyboard trace("char:"+char,"modifier:"+modifier); #end
							
		if (char < 256)
		{	// TODO: Numpad
			switch (modifier)
			{
				case KeyModifier.SHIFT|KeyModifier.LEFT_SHIFT|KeyModifier.RIGHT_SHIFT:	
					if (keyboardMap["de"][char] != null)
					{	
						if (keyboardMap["de"][char][1] != null)
						{
							#if debugkeyboard trace("SHIFT" + keyboardMap["de"][char][1]); #end
							char = keyboardMap["de"][char][1].charCodeAt(0);
						}
					} else if (char > 96 && char < 123) char -= 32; // a-z -> A-Z
					
				case #if js 960 #else 576 #end: // for german keyboard "AltGr" -> KeyModifier.CTRL + KeyModifier.ALT
					if (keyboardMap["de"][char] != null)
					{	
						if (keyboardMap["de"][char][2] != null)
						{
							#if debugkeyboard trace("ALRgr" + keyboardMap["de"][char][2]); #end
							char = keyboardMap["de"][char][2].charCodeAt(0);
						}
					}
					
				default:
					if (keyboardMap["de"][char] != null)
					{
						#if debugkeyboard trace("normal:" + keyboardMap["de"][char][0]); #end
						char = keyboardMap["de"][char][0].charCodeAt(0);
					}
			}
		}
		
		return(char);
	}
	
}