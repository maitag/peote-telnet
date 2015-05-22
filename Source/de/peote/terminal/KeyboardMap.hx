package de.peote.terminal;

import lime.ui.KeyCode;
import lime.ui.KeyModifier;
/**
 * ...
 * @author Sylvio Sell
 */
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