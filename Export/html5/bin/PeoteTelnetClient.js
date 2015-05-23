(function ($hx_exports) { "use strict";
$hx_exports.lime = $hx_exports.lime || {};
var $hxClasses = {};
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = true;
ApplicationMain.create = function() {
	ApplicationMain.app = new PeoteTelnetClient();
	ApplicationMain.app.create(ApplicationMain.config);
	ApplicationMain.preloader = new lime.app.Preloader();
	ApplicationMain.preloader.onComplete = ApplicationMain.start;
	ApplicationMain.preloader.create(ApplicationMain.config);
	var urls = [];
	var types = [];
	urls.push("assets/keyboard.conf");
	types.push("TEXT");
	urls.push("assets/liberation_font_320x512.png");
	types.push("IMAGE");
	urls.push("assets/liberation_font_320x512_green.png");
	types.push("IMAGE");
	urls.push("assets/lyapunov_greencursor.frag");
	types.push("BINARY");
	urls.push("assets/peote_font.png");
	types.push("IMAGE");
	urls.push("assets/peote_font_green.png");
	types.push("IMAGE");
	if(ApplicationMain.config.assetsPrefix != null) {
		var _g1 = 0;
		var _g = urls.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(types[i] != "FONT") urls[i] = ApplicationMain.config.assetsPrefix + urls[i];
		}
	}
	ApplicationMain.preloader.load(urls,types);
};
ApplicationMain.main = function() {
	ApplicationMain.config = { antialiasing : 4, background : 16777215, borderless : false, company : "Sylvio Sell - maitag", depthBuffer : true, file : "PeoteTelnetClient", fps : 0, fullscreen : false, hardware : true, height : 0, orientation : "", packageName : "de.peote.telnet", resizable : true, stencilBuffer : false, title : "PeoteTelnetClient", version : "0.1.0", vsync : true, width : 0};
};
ApplicationMain.start = function() {
	var result = ApplicationMain.app.exec();
};
var lime = {};
lime.AssetLibrary = function() {
};
$hxClasses["lime.AssetLibrary"] = lime.AssetLibrary;
lime.AssetLibrary.__name__ = true;
lime.AssetLibrary.prototype = {
	exists: function(id,type) {
		return false;
	}
	,getAudioBuffer: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getImage: function(id) {
		return null;
	}
	,getPath: function(id) {
		return null;
	}
	,getText: function(id) {
		var bytes = this.getBytes(id);
		if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,list: function(type) {
		return null;
	}
	,load: function(handler) {
		handler(this);
	}
	,loadAudioBuffer: function(id,handler) {
		handler(this.getAudioBuffer(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadImage: function(id,handler) {
		handler(this.getImage(id));
	}
	,loadText: function(id,handler) {
		var callback = function(bytes) {
			if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
		};
		this.loadBytes(id,callback);
	}
	,__class__: lime.AssetLibrary
};
var DefaultAssetLibrary = function() {
	this.type = new haxe.ds.StringMap();
	this.path = new haxe.ds.StringMap();
	this.className = new haxe.ds.StringMap();
	lime.AssetLibrary.call(this);
	var id;
	id = "assets/keyboard.conf";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "assets/liberation_font_320x512.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "assets/liberation_font_320x512_green.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "assets/lyapunov_greencursor.frag";
	this.path.set(id,id);
	this.type.set(id,"BINARY");
	id = "assets/peote_font.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "assets/peote_font_green.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	var assetsPrefix = ApplicationMain.config.assetsPrefix;
	if(assetsPrefix != null) {
		var $it0 = this.path.keys();
		while( $it0.hasNext() ) {
			var k = $it0.next();
			var value = assetsPrefix + this.path.get(k);
			this.path.set(k,value);
		}
	}
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = true;
DefaultAssetLibrary.__super__ = lime.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(lime.AssetLibrary.prototype,{
	exists: function(id,type) {
		var requestedType;
		if(type != null) requestedType = js.Boot.__cast(type , String); else requestedType = null;
		var assetType = this.type.get(id);
		if(assetType != null) {
			if(assetType == requestedType || (requestedType == "SOUND" || requestedType == "MUSIC") && (assetType == "MUSIC" || assetType == "SOUND")) return true;
			if(requestedType == "BINARY" || requestedType == null || assetType == "BINARY" && requestedType == "TEXT") return true;
		}
		return false;
	}
	,getAudioBuffer: function(id) {
		return null;
	}
	,getBytes: function(id) {
		var bytes = null;
		var data = ((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = lime.app.Preloader.loaders.get(key);
			return $r;
		}(this))).data;
		if(typeof(data) == "string") {
			bytes = new lime.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,lime.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(this.className.get(id),[]) , lime.text.Font);
	}
	,getImage: function(id) {
		return lime.graphics.Image.fromImageElement((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = lime.app.Preloader.images.get(key);
			return $r;
		}(this)));
	}
	,getPath: function(id) {
		return this.path.get(id);
	}
	,getText: function(id) {
		var bytes = null;
		var data = ((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = lime.app.Preloader.loaders.get(key);
			return $r;
		}(this))).data;
		if(typeof(data) == "string") return data; else if(js.Boot.__instanceof(data,lime.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes.readUTFBytes(bytes.length);
		} else return null;
	}
	,isLocal: function(id,type) {
		var requestedType;
		if(type != null) requestedType = js.Boot.__cast(type , String); else requestedType = null;
		return true;
	}
	,list: function(type) {
		var requestedType;
		if(type != null) requestedType = js.Boot.__cast(type , String); else requestedType = null;
		var items = [];
		var $it0 = this.type.keys();
		while( $it0.hasNext() ) {
			var id = $it0.next();
			if(requestedType == null || this.exists(id,type)) items.push(id);
		}
		return items;
	}
	,loadAudioBuffer: function(id,handler) {
		handler(this.getAudioBuffer(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadImage: function(id,handler) {
		handler(this.getImage(id));
	}
	,loadText: function(id,handler) {
		var callback = function(bytes) {
			if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
		};
		this.loadBytes(id,callback);
	}
	,__class__: DefaultAssetLibrary
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = true;
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = true;
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,__class__: List
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = true;
IMap.prototype = {
	__class__: IMap
};
Math.__name__ = true;
lime.app = {};
lime.app.IModule = function() { };
$hxClasses["lime.app.IModule"] = lime.app.IModule;
lime.app.IModule.__name__ = true;
lime.app.IModule.prototype = {
	__class__: lime.app.IModule
};
lime.app.Module = function() {
};
$hxClasses["lime.app.Module"] = lime.app.Module;
lime.app.Module.__name__ = true;
lime.app.Module.__interfaces__ = [lime.app.IModule];
lime.app.Module.prototype = {
	init: function(context) {
	}
	,onGamepadAxisMove: function(gamepad,axis,value) {
	}
	,onGamepadButtonDown: function(gamepad,button) {
	}
	,onGamepadButtonUp: function(gamepad,button) {
	}
	,onGamepadConnect: function(gamepad) {
	}
	,onGamepadDisconnect: function(gamepad) {
	}
	,onKeyDown: function(keyCode,modifier) {
	}
	,onKeyUp: function(keyCode,modifier) {
	}
	,onMouseDown: function(x,y,button) {
	}
	,onMouseMove: function(x,y) {
	}
	,onMouseMoveRelative: function(x,y) {
	}
	,onMouseUp: function(x,y,button) {
	}
	,onMouseWheel: function(deltaX,deltaY) {
	}
	,onRenderContextLost: function() {
	}
	,onRenderContextRestored: function(context) {
	}
	,onTextEdit: function(text,start,length) {
	}
	,onTextInput: function(text) {
	}
	,onTouchEnd: function(x,y,id) {
	}
	,onTouchMove: function(x,y,id) {
	}
	,onTouchStart: function(x,y,id) {
	}
	,onWindowActivate: function() {
	}
	,onWindowClose: function() {
	}
	,onWindowDeactivate: function() {
	}
	,onWindowEnter: function() {
	}
	,onWindowFocusIn: function() {
	}
	,onWindowFocusOut: function() {
	}
	,onWindowFullscreen: function() {
	}
	,onWindowLeave: function() {
	}
	,onWindowMinimize: function() {
	}
	,onWindowMove: function(x,y) {
	}
	,onWindowResize: function(width,height) {
	}
	,onWindowRestore: function() {
	}
	,render: function(context) {
	}
	,update: function(deltaTime) {
	}
	,__class__: lime.app.Module
};
lime.app.Application = function() {
	this.onUpdate = new lime.app.Event();
	lime.app.Module.call(this);
	if(lime.app.Application.current == null) lime.app.Application.current = this;
	this.modules = new Array();
	this.renderers = new Array();
	this.windows = new Array();
	this.backend = new lime._backend.html5.HTML5Application(this);
	this.onUpdate.add($bind(this,this.update));
};
$hxClasses["lime.app.Application"] = lime.app.Application;
lime.app.Application.__name__ = true;
lime.app.Application.__super__ = lime.app.Module;
lime.app.Application.prototype = $extend(lime.app.Module.prototype,{
	addModule: function(module) {
		this.modules.push(module);
		if(this.initialized && this.renderers[0] != null) module.init(this.renderers[0].context);
	}
	,addRenderer: function(renderer) {
		renderer.onRender.add($bind(this,this.render));
		renderer.onRenderContextLost.add($bind(this,this.onRenderContextLost));
		renderer.onRenderContextRestored.add($bind(this,this.onRenderContextRestored));
		this.renderers.push(renderer);
	}
	,addWindow: function(window) {
		this.windows.push(window);
		window.onGamepadAxisMove.add($bind(this,this.onGamepadAxisMove));
		window.onGamepadButtonDown.add($bind(this,this.onGamepadButtonDown));
		window.onGamepadButtonUp.add($bind(this,this.onGamepadButtonUp));
		window.onGamepadConnect.add($bind(this,this.onGamepadConnect));
		window.onGamepadDisconnect.add($bind(this,this.onGamepadDisconnect));
		window.onKeyDown.add($bind(this,this.onKeyDown));
		window.onKeyUp.add($bind(this,this.onKeyUp));
		window.onMouseDown.add($bind(this,this.onMouseDown));
		window.onMouseMove.add($bind(this,this.onMouseMove));
		window.onMouseMoveRelative.add($bind(this,this.onMouseMoveRelative));
		window.onMouseUp.add($bind(this,this.onMouseUp));
		window.onMouseWheel.add($bind(this,this.onMouseWheel));
		window.onTextEdit.add($bind(this,this.onTextEdit));
		window.onTextInput.add($bind(this,this.onTextInput));
		window.onTouchStart.add($bind(this,this.onTouchStart));
		window.onTouchMove.add($bind(this,this.onTouchMove));
		window.onTouchEnd.add($bind(this,this.onTouchEnd));
		window.onWindowActivate.add($bind(this,this.onWindowActivate));
		window.onWindowClose.add($bind(this,this.onWindowClose));
		window.onWindowDeactivate.add($bind(this,this.onWindowDeactivate));
		window.onWindowEnter.add($bind(this,this.onWindowEnter));
		window.onWindowFocusIn.add($bind(this,this.onWindowFocusIn));
		window.onWindowFocusOut.add($bind(this,this.onWindowFocusOut));
		window.onWindowFullscreen.add($bind(this,this.onWindowFullscreen));
		window.onWindowLeave.add($bind(this,this.onWindowLeave));
		window.onWindowMinimize.add($bind(this,this.onWindowMinimize));
		window.onWindowMove.add($bind(this,this.onWindowMove));
		window.onWindowResize.add($bind(this,this.onWindowResize));
		window.onWindowRestore.add($bind(this,this.onWindowRestore));
		window.create(this);
	}
	,create: function(config) {
		this.backend.create(config);
	}
	,exec: function() {
		lime.app.Application.current = this;
		return this.backend.exec();
	}
	,init: function(context) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.init(context);
		}
		this.initialized = true;
	}
	,onGamepadAxisMove: function(gamepad,axis,value) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadAxisMove(gamepad,axis,value);
		}
	}
	,onGamepadButtonDown: function(gamepad,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadButtonDown(gamepad,button);
		}
	}
	,onGamepadButtonUp: function(gamepad,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadButtonUp(gamepad,button);
		}
	}
	,onGamepadConnect: function(gamepad) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadConnect(gamepad);
		}
	}
	,onGamepadDisconnect: function(gamepad) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadDisconnect(gamepad);
		}
	}
	,onKeyDown: function(keyCode,modifier) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onKeyDown(keyCode,modifier);
		}
	}
	,onKeyUp: function(keyCode,modifier) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onKeyUp(keyCode,modifier);
		}
	}
	,onMouseDown: function(x,y,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseDown(x,y,button);
		}
	}
	,onMouseMove: function(x,y) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseMove(x,y);
		}
	}
	,onMouseMoveRelative: function(x,y) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseMoveRelative(x,y);
		}
	}
	,onMouseUp: function(x,y,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseUp(x,y,button);
		}
	}
	,onMouseWheel: function(deltaX,deltaY) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseWheel(deltaX,deltaY);
		}
	}
	,onRenderContextLost: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onRenderContextLost();
		}
	}
	,onRenderContextRestored: function(context) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onRenderContextRestored(context);
		}
	}
	,onTextEdit: function(text,start,length) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTextEdit(text,start,length);
		}
	}
	,onTextInput: function(text) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTextInput(text);
		}
	}
	,onTouchEnd: function(x,y,id) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTouchEnd(x,y,id);
		}
	}
	,onTouchMove: function(x,y,id) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTouchMove(x,y,id);
		}
	}
	,onTouchStart: function(x,y,id) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTouchStart(x,y,id);
		}
	}
	,onWindowActivate: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowActivate();
		}
	}
	,onWindowClose: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowClose();
		}
	}
	,onWindowDeactivate: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowDeactivate();
		}
	}
	,onWindowEnter: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowEnter();
		}
	}
	,onWindowFocusIn: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowFocusIn();
		}
	}
	,onWindowFocusOut: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowFocusOut();
		}
	}
	,onWindowFullscreen: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowFullscreen();
		}
	}
	,onWindowLeave: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowLeave();
		}
	}
	,onWindowMinimize: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowMinimize();
		}
	}
	,onWindowMove: function(x,y) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowMove(x,y);
		}
	}
	,onWindowResize: function(width,height) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowResize(width,height);
		}
	}
	,onWindowRestore: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowRestore();
		}
	}
	,removeModule: function(module) {
		HxOverrides.remove(this.modules,module);
	}
	,removeRenderer: function(renderer) {
		if(renderer != null && HxOverrides.indexOf(this.renderers,renderer,0) > -1) HxOverrides.remove(this.renderers,renderer);
	}
	,removeWindow: function(window) {
		if(window != null && HxOverrides.indexOf(this.windows,window,0) > -1) {
			window.close();
			HxOverrides.remove(this.windows,window);
		}
	}
	,render: function(context) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.render(context);
		}
	}
	,update: function(deltaTime) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.update(deltaTime);
		}
	}
	,get_renderer: function() {
		return this.renderers[0];
	}
	,get_window: function() {
		return this.windows[0];
	}
	,__class__: lime.app.Application
});
var PeoteTelnetClient = function() {
	this.is_connected = false;
	this.zoom = 1;
	this.mouse_y = 0;
	this.mouse_x = 0;
	lime.app.Application.call(this);
};
$hxClasses["PeoteTelnetClient"] = PeoteTelnetClient;
PeoteTelnetClient.__name__ = true;
PeoteTelnetClient.__super__ = lime.app.Application;
PeoteTelnetClient.prototype = $extend(lime.app.Application.prototype,{
	init: function(context) {
		var _g = this;
		switch(context[1]) {
		case 0:
			var gl = context[2];
			this.width = this.windows[0].__width;
			this.height = this.windows[0].__height;
			this.startTime = haxe.Timer.stamp();
			this.peoteSocket = new PeoteSocket({ onConnect : function(connected,msg) {
				haxe.Log.trace("onConnect:" + connected + " - " + msg,{ fileName : "PeoteTelnetClient.hx", lineNumber : 79, className : "PeoteTelnetClient", methodName : "init"});
				_g.is_connected = true;
				_g.peoteTerminal = new de.peote.terminal.PeoteTerminal(_g.peoteTelnet,_g.peoteView,_g.width,_g.height,256);
				_g.peoteTerminal.onWindowResize(_g.width,_g.height);
			}, onClose : function(msg1) {
				haxe.Log.trace("onClose:" + msg1,{ fileName : "PeoteTelnetClient.hx", lineNumber : 85, className : "PeoteTelnetClient", methodName : "init"});
				_g.is_connected = false;
			}, onError : function(msg2) {
				haxe.Log.trace("onError:" + msg2,{ fileName : "PeoteTelnetClient.hx", lineNumber : 89, className : "PeoteTelnetClient", methodName : "init"});
			}, onData : $bind(this,this.onData)});
			this.peoteTelnet = new de.peote.telnet.PeoteTelnet(this.peoteSocket);
			this.peoteView = new de.peote.view.PeoteView(3,10);
			this.peoteSocket.connect("192.168.1.50",23);
			break;
		default:
			haxe.Log.trace("only opengl supported",{ fileName : "PeoteTelnetClient.hx", lineNumber : 103, className : "PeoteTelnetClient", methodName : "init"});
		}
	}
	,onData: function(data) {
		var bytes = new lime.utils.ByteArray();
		var _g1 = 0;
		var _g = data.length;
		while(_g1 < _g) {
			var i = _g1++;
			bytes.writeByte(data[i]);
		}
		bytes.position = 0;
		this.peoteTerminal.remoteData(bytes);
	}
	,render: function(context) {
		this.peoteView.render(haxe.Timer.stamp() - this.startTime,this.width,this.height,this.mouse_x,this.mouse_y,this.zoom);
	}
	,onKeyDown: function(keyCode,modifier) {
		if(this.is_connected) this.peoteTerminal.localInput(keyCode,modifier);
	}
	,onWindowResize: function(width,height) {
		this.width = width;
		this.height = height;
		if(this.is_connected) this.peoteTerminal.onWindowResize(width,height);
	}
	,onMouseMove: function(x,y) {
		this.mouse_x = x | 0;
		this.mouse_y = y | 0;
	}
	,onTouchMove: function(x,y,id) {
		this.mouse_x = x | 0;
		this.mouse_y = y | 0;
	}
	,onMouseDown: function(x,y,button) {
	}
	,onMouseUp: function(x,y,button) {
	}
	,onMouseWheel: function(deltaX,deltaY) {
		this.peoteTerminal.onMouseWheel(deltaX,deltaY);
	}
	,__class__: PeoteTelnetClient
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = true;
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
};
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = true;
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = true;
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
var de = {};
de.peote = {};
de.peote.telnet = {};
de.peote.telnet.PeoteTelnet = function(peoteSocket) {
	this.height = 46;
	this.width = 107;
	this.state = 0;
	this.peoteSocket = peoteSocket;
	this.input = new lime.utils.ByteArray();
};
$hxClasses["de.peote.telnet.PeoteTelnet"] = de.peote.telnet.PeoteTelnet;
de.peote.telnet.PeoteTelnet.__name__ = true;
de.peote.telnet.PeoteTelnet.prototype = {
	writeByte: function(b) {
		this.peoteSocket.writeByte(b);
		this.peoteSocket.flush();
	}
	,parseTelnetData: function(myBA,remoteInput) {
		if(this.input.get_bytesAvailable() == 0) this.input.clear();
		var oldpos = this.input.position;
		try {
			this.input.writeBytes(myBA);
		} catch( unknown ) {
			haxe.Log.trace("ERROR: input.writeBytes(myBa) :" + Std.string(unknown),{ fileName : "PeoteTelnet.hx", lineNumber : 60, className : "de.peote.telnet.PeoteTelnet", methodName : "parseTelnetData"});
		}
		this.input.position = oldpos;
		while(this.input.get_bytesAvailable() > 0) {
			var b = this.input.readUnsignedByte();
			var _g = this.state;
			switch(_g) {
			case 0:
				if(b == de.peote.telnet.PeoteTelnet.IAC) this.state = 1; else if(b != de.peote.telnet.PeoteTelnet.NOP) remoteInput(b);
				break;
			case 1:
				if(b == de.peote.telnet.PeoteTelnet.WILL) this.state = 2; else if(b == de.peote.telnet.PeoteTelnet.DO) this.state = 3; else if(b == de.peote.telnet.PeoteTelnet.SB) {
					this.state = 5;
					this.negotiate_data = new Array();
				} else this.state = 0;
				break;
			case 2:
				if(b == de.peote.telnet.PeoteTelnet.ECHO) {
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.WONT);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.ECHO);
					this.peoteSocket.flush();
				} else if(b == de.peote.telnet.PeoteTelnet.EOR) {
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.DO);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.EOR);
					this.peoteSocket.flush();
				} else {
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.WONT);
					this.peoteSocket.writeByte(b);
					this.peoteSocket.flush();
				}
				this.state = 0;
				break;
			case 3:
				if(b == de.peote.telnet.PeoteTelnet.TERMINALTYPE) {
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.WILL);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.TERMINALTYPE);
					this.peoteSocket.flush();
				} else if(b == de.peote.telnet.PeoteTelnet.NAWS) {
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.WILL);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.NAWS);
					this.peoteSocket.flush();
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.SB);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.NAWS);
					this.peoteSocket.writeByte(0);
					this.peoteSocket.writeByte(this.width);
					this.peoteSocket.writeByte(0);
					this.peoteSocket.writeByte(this.height);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.SE);
					this.peoteSocket.flush();
				} else if(b == de.peote.telnet.PeoteTelnet.EOR) {
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.DO);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.EOR);
					this.peoteSocket.flush();
				} else {
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.WONT);
					this.peoteSocket.writeByte(b);
					this.peoteSocket.flush();
				}
				this.state = 0;
				break;
			case 5:
				if(b == de.peote.telnet.PeoteTelnet.IAC) this.state = 6; else this.negotiate_data.push(b);
				break;
			case 6:
				if(b == de.peote.telnet.PeoteTelnet.SE) {
					if(this.negotiate_data[0] == de.peote.telnet.PeoteTelnet.TERMINALTYPE && this.negotiate_data[1] == 1) {
						this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
						this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.SB);
						this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.TERMINALTYPE);
						this.peoteSocket.writeByte(0);
						this.peoteSocket.writeByte(65);
						this.peoteSocket.writeByte(78);
						this.peoteSocket.writeByte(83);
						this.peoteSocket.writeByte(73);
						this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
						this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.SE);
						this.peoteSocket.flush();
					}
				} else {
				}
				this.state = 0;
				break;
			}
		}
	}
	,resize: function(width,height) {
		this.width = width;
		this.height = height;
		this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
		this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.SB);
		this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.NAWS);
		this.peoteSocket.writeByte(0);
		this.peoteSocket.writeByte(this.width);
		this.peoteSocket.writeByte(0);
		this.peoteSocket.writeByte(this.height);
		this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
		this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.SE);
		this.peoteSocket.flush();
	}
	,sendNAWS: function() {
		this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
		this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.SB);
		this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.NAWS);
		this.peoteSocket.writeByte(0);
		this.peoteSocket.writeByte(this.width);
		this.peoteSocket.writeByte(0);
		this.peoteSocket.writeByte(this.height);
		this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.IAC);
		this.peoteSocket.writeByte(de.peote.telnet.PeoteTelnet.SE);
		this.peoteSocket.flush();
	}
	,__class__: de.peote.telnet.PeoteTelnet
};
de.peote.terminal = {};
de.peote.terminal._AnsiParser = {};
de.peote.terminal._AnsiParser.ControlCode_Impl_ = function() { };
$hxClasses["de.peote.terminal._AnsiParser.ControlCode_Impl_"] = de.peote.terminal._AnsiParser.ControlCode_Impl_;
de.peote.terminal._AnsiParser.ControlCode_Impl_.__name__ = true;
de.peote.terminal._AnsiParser.AnsiCode_Impl_ = function() { };
$hxClasses["de.peote.terminal._AnsiParser.AnsiCode_Impl_"] = de.peote.terminal._AnsiParser.AnsiCode_Impl_;
de.peote.terminal._AnsiParser.AnsiCode_Impl_.__name__ = true;
de.peote.terminal.AnsiParser = function(peoteTerminal) {
	this.mode = de.peote.terminal.AnsiParser.Off;
	this.peoteTerminal = peoteTerminal;
	this.params = new Array();
};
$hxClasses["de.peote.terminal.AnsiParser"] = de.peote.terminal.AnsiParser;
de.peote.terminal.AnsiParser.__name__ = true;
de.peote.terminal.AnsiParser.prototype = {
	parsing: function(key) {
		var _g = this.mode;
		switch(_g) {
		case de.peote.terminal.AnsiParser.Start:
			switch(key) {
			case de.peote.terminal._AnsiParser.ControlCode_Impl_.CSI:
				this.p = "";
				this.params = [];
				this.mode = de.peote.terminal.AnsiParser.Sequence;
				break;
			default:
				haxe.Log.trace("AnsiParser - Mode.Start - byte: " + key,{ fileName : "AnsiParser.hx", lineNumber : 96, className : "de.peote.terminal.AnsiParser", methodName : "parsing"});
				this.mode = de.peote.terminal.AnsiParser.Off;
			}
			break;
		case de.peote.terminal.AnsiParser.Sequence:
			switch(key) {
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.SGR:
				this.mode = de.peote.terminal.AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				null;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.CUU:
				this.mode = de.peote.terminal.AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.cuu(this.params);
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.CUD:
				this.mode = de.peote.terminal.AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.cud(this.params);
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.CUF:
				this.mode = de.peote.terminal.AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.cuf(this.params);
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.CUB:
				this.mode = de.peote.terminal.AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.cub(this.params);
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.CNL:
				haxe.Log.trace("CNL",{ fileName : "AnsiParser.hx", lineNumber : 108, className : "de.peote.terminal.AnsiParser", methodName : "parsing", customParams : [this.params,this.p]});
				this.mode = de.peote.terminal.AnsiParser.Off;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.CPL:
				haxe.Log.trace("CPL",{ fileName : "AnsiParser.hx", lineNumber : 109, className : "de.peote.terminal.AnsiParser", methodName : "parsing", customParams : [this.params,this.p]});
				this.mode = de.peote.terminal.AnsiParser.Off;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.CHA:
				haxe.Log.trace("CHA",{ fileName : "AnsiParser.hx", lineNumber : 110, className : "de.peote.terminal.AnsiParser", methodName : "parsing", customParams : [this.params,this.p]});
				this.mode = de.peote.terminal.AnsiParser.Off;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.CUP:
				this.mode = de.peote.terminal.AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.cup(this.params);
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.HVP:
				this.mode = de.peote.terminal.AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.cup(this.params);
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.ED:
				this.mode = de.peote.terminal.AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.ed(this.params);
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.EL:
				this.mode = de.peote.terminal.AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.el(this.params);
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.IL:
				this.mode = de.peote.terminal.AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.il(this.params);
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.DL:
				this.mode = de.peote.terminal.AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.dl(this.params);
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.SU:
				haxe.Log.trace("SU ",{ fileName : "AnsiParser.hx", lineNumber : 117, className : "de.peote.terminal.AnsiParser", methodName : "parsing", customParams : [this.params,this.p]});
				this.mode = de.peote.terminal.AnsiParser.Off;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.SD:
				haxe.Log.trace("SD ",{ fileName : "AnsiParser.hx", lineNumber : 118, className : "de.peote.terminal.AnsiParser", methodName : "parsing", customParams : [this.params,this.p]});
				this.mode = de.peote.terminal.AnsiParser.Off;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.AUX:
				haxe.Log.trace("AUX",{ fileName : "AnsiParser.hx", lineNumber : 119, className : "de.peote.terminal.AnsiParser", methodName : "parsing", customParams : [this.params,this.p]});
				this.mode = de.peote.terminal.AnsiParser.Off;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.DSR:
				haxe.Log.trace("DSR",{ fileName : "AnsiParser.hx", lineNumber : 120, className : "de.peote.terminal.AnsiParser", methodName : "parsing", customParams : [this.params,this.p]});
				this.mode = de.peote.terminal.AnsiParser.Off;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.SCP:
				haxe.Log.trace("SCP",{ fileName : "AnsiParser.hx", lineNumber : 121, className : "de.peote.terminal.AnsiParser", methodName : "parsing", customParams : [this.params,this.p]});
				this.mode = de.peote.terminal.AnsiParser.Off;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.RCP:
				haxe.Log.trace("RCP",{ fileName : "AnsiParser.hx", lineNumber : 122, className : "de.peote.terminal.AnsiParser", methodName : "parsing", customParams : [this.params,this.p]});
				this.mode = de.peote.terminal.AnsiParser.Off;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.CHI:
				haxe.Log.trace("CHI",{ fileName : "AnsiParser.hx", lineNumber : 123, className : "de.peote.terminal.AnsiParser", methodName : "parsing", customParams : [this.params,this.p]});
				this.mode = de.peote.terminal.AnsiParser.Off;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.CSH:
				haxe.Log.trace("CSH",{ fileName : "AnsiParser.hx", lineNumber : 124, className : "de.peote.terminal.AnsiParser", methodName : "parsing", customParams : [this.params,this.p]});
				this.mode = de.peote.terminal.AnsiParser.Off;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.SKS:
				haxe.Log.trace("SKS",{ fileName : "AnsiParser.hx", lineNumber : 125, className : "de.peote.terminal.AnsiParser", methodName : "parsing", customParams : [this.params,this.p]});
				this.mode = de.peote.terminal.AnsiParser.Off;
				break;
			case de.peote.terminal._AnsiParser.AnsiCode_Impl_.DEL:
				this.mode = de.peote.terminal.AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.del(this.params);
				break;
			default:
				if(key == HxOverrides.cca(";",0)) {
					this.params.push(this.p);
					this.p = "";
				} else this.p += String.fromCharCode(key);
			}
			break;
		}
	}
	,modeOff: function() {
		this.mode = de.peote.terminal.AnsiParser.Off;
		if(this.p != "") this.params.push(this.p);
	}
	,__class__: de.peote.terminal.AnsiParser
};
de.peote.terminal.KeyboardMap = function() {
};
$hxClasses["de.peote.terminal.KeyboardMap"] = de.peote.terminal.KeyboardMap;
de.peote.terminal.KeyboardMap.__name__ = true;
de.peote.terminal.KeyboardMap.toCharCode = function(keyCode,modifier) {
	var $char = keyCode;
	if($char < 256) switch(modifier) {
	case 3:case 1:case 2:
		if((function($this) {
			var $r;
			var this1 = de.peote.terminal.KeyboardMap.keyboardMap.get("de");
			$r = this1.get($char);
			return $r;
		}(this)) != null) {
			if(((function($this) {
				var $r;
				var this2 = de.peote.terminal.KeyboardMap.keyboardMap.get("de");
				$r = this2.get($char);
				return $r;
			}(this)))[1] != null) {
				var _this = ((function($this) {
					var $r;
					var this3 = de.peote.terminal.KeyboardMap.keyboardMap.get("de");
					$r = this3.get($char);
					return $r;
				}(this)))[1];
				$char = HxOverrides.cca(_this,0);
			}
		} else if($char > 96 && $char < 123) $char -= 32;
		break;
	case 960:
		if((function($this) {
			var $r;
			var this4 = de.peote.terminal.KeyboardMap.keyboardMap.get("de");
			$r = this4.get($char);
			return $r;
		}(this)) != null) {
			if(((function($this) {
				var $r;
				var this5 = de.peote.terminal.KeyboardMap.keyboardMap.get("de");
				$r = this5.get($char);
				return $r;
			}(this)))[2] != null) {
				var _this1 = ((function($this) {
					var $r;
					var this6 = de.peote.terminal.KeyboardMap.keyboardMap.get("de");
					$r = this6.get($char);
					return $r;
				}(this)))[2];
				$char = HxOverrides.cca(_this1,0);
			}
		}
		break;
	default:
		if((function($this) {
			var $r;
			var this7 = de.peote.terminal.KeyboardMap.keyboardMap.get("de");
			$r = this7.get($char);
			return $r;
		}(this)) != null) {
			var _this2 = ((function($this) {
				var $r;
				var this8 = de.peote.terminal.KeyboardMap.keyboardMap.get("de");
				$r = this8.get($char);
				return $r;
			}(this)))[0];
			$char = HxOverrides.cca(_this2,0);
		}
	}
	return $char;
};
de.peote.terminal.KeyboardMap.prototype = {
	__class__: de.peote.terminal.KeyboardMap
};
de.peote.terminal.PeoteTerminal = function(peoteTelnet,peoteView,width,height,max_buffer,max_size_x,max_size_y) {
	if(max_size_y == null) max_size_y = 256;
	if(max_size_x == null) max_size_x = 256;
	this.displaylist_y_scroll = 0;
	this.displaylist_y_offset = 0;
	this.element_offset = 0;
	this.buffer_pos = 0;
	this.cursor_y = 0;
	this.cursor_x = 0;
	this.font_size_y = 16;
	this.font_size_x = 10;
	this.size_y = 128;
	this.size_x = 256;
	this.peoteTelnet = peoteTelnet;
	this.peoteView = peoteView;
	this.size_x = Math.floor(width / this.font_size_x);
	this.size_y = Math.floor(height / this.font_size_y);
	this.max_buffer = max_buffer;
	this.max_size_x = max_size_x;
	this.max_size_y = max_size_y;
	this.max_elements = max_size_x * max_size_y;
	this.buffer = new Array();
	var _g = 0;
	while(_g < max_buffer) {
		var i = _g++;
		this.buffer[this.buffer_pos + i] = new Array();
	}
	peoteView.programCache.loadShaderSrc(0,"","");
	peoteView.texturecache.setImage(0,"assets/liberation_font_320x512_green.png",320,512);
	peoteView.setDisplaylist({ displaylist : 0, max_elements : this.max_elements, max_programs : 1, buffer_segment_size : this.max_elements, renderBackground : true, r : 0.05, g : 0.07});
	peoteView.programCache.loadShaderSrc(1,"assets/lyapunov_greencursor.frag","");
	peoteView.setDisplaylist({ displaylist : 1, max_elements : 10, max_programs : 1, buffer_segment_size : 10, z : 1});
	this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	this.ansiParser = new de.peote.terminal.AnsiParser(this);
};
$hxClasses["de.peote.terminal.PeoteTerminal"] = de.peote.terminal.PeoteTerminal;
de.peote.terminal.PeoteTerminal.__name__ = true;
de.peote.terminal.PeoteTerminal.prototype = {
	localInput: function(keyCode,modifier) {
		switch(keyCode) {
		case 27:
			this.peoteTelnet.writeByte(27);
			break;
		case 1073741904:
			this.peoteTelnet.writeByte(27);
			this.peoteTelnet.writeByte(91);
			this.peoteTelnet.writeByte(HxOverrides.cca("D",0));
			break;
		case 1073741903:
			this.peoteTelnet.writeByte(27);
			this.peoteTelnet.writeByte(91);
			this.peoteTelnet.writeByte(HxOverrides.cca("C",0));
			break;
		case 1073741906:
			this.peoteTelnet.writeByte(27);
			this.peoteTelnet.writeByte(91);
			this.peoteTelnet.writeByte(HxOverrides.cca("A",0));
			break;
		case 1073741905:
			this.peoteTelnet.writeByte(27);
			this.peoteTelnet.writeByte(91);
			this.peoteTelnet.writeByte(HxOverrides.cca("B",0));
			break;
		case 127:
			this.peoteTelnet.writeByte(27);
			this.peoteTelnet.writeByte(91);
			this.peoteTelnet.writeByte(HxOverrides.cca("C",0));
			this.peoteTelnet.writeByte(de.peote.terminal._TermCode.TermCode_Impl_.BS);
			break;
		default:
			var $char = de.peote.terminal.KeyboardMap.toCharCode(keyCode,modifier);
			if($char < 256) this.peoteTelnet.writeByte($char);
		}
	}
	,remoteData: function(bytes) {
		this.peoteTelnet.parseTelnetData(bytes,$bind(this,this.printChar));
	}
	,printChar: function($char) {
		if(this.ansiParser.mode != de.peote.terminal.AnsiParser.Off) this.ansiParser.parsing($char); else switch($char) {
		case de.peote.terminal._TermCode.TermCode_Impl_.NUL:
			haxe.Log.trace("no operation",{ fileName : "PeoteTerminal.hx", lineNumber : 147, className : "de.peote.terminal.PeoteTerminal", methodName : "printChar"});
			break;
		case de.peote.terminal._TermCode.TermCode_Impl_.BEL:
			haxe.Log.trace("beep beep bedebedebedebedebedebede...",{ fileName : "PeoteTerminal.hx", lineNumber : 148, className : "de.peote.terminal.PeoteTerminal", methodName : "printChar"});
			break;
		case de.peote.terminal._TermCode.TermCode_Impl_.BS:
			this.cursor_x--;
			this.buffer[this.buffer_pos + this.cursor_y][this.cursor_x] = 0;
			this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
			break;
		case de.peote.terminal._TermCode.TermCode_Impl_.HT:
			haxe.Log.trace("Horizontal TAB",{ fileName : "PeoteTerminal.hx", lineNumber : 150, className : "de.peote.terminal.PeoteTerminal", methodName : "printChar"});
			break;
		case de.peote.terminal._TermCode.TermCode_Impl_.LF:
			if(this.cursor_y + 1 < this.size_y) {
				this.cursor_y++;
				this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
			} else {
				if(this.buffer_pos + this.cursor_y + 1 < this.max_buffer) this.buffer_pos++; else {
					this.buffer[0] = new Array();
					this.buffer.push(this.buffer.shift());
				}
				this.element_offset = (this.element_offset + this.max_size_x) % this.max_elements;
				this.displaylist_y_offset -= this.font_size_y;
				this.displaylist_y_scroll = this.displaylist_y_offset;
				this.peoteView.setDisplaylist({ displaylist : 0, yOffset : this.displaylist_y_offset});
			}
			break;
		case de.peote.terminal._TermCode.TermCode_Impl_.VT:
			haxe.Log.trace("Vertical TAB",{ fileName : "PeoteTerminal.hx", lineNumber : 152, className : "de.peote.terminal.PeoteTerminal", methodName : "printChar"});
			break;
		case de.peote.terminal._TermCode.TermCode_Impl_.FF:
			haxe.Log.trace("Formfeed (also: New page NP)",{ fileName : "PeoteTerminal.hx", lineNumber : 153, className : "de.peote.terminal.PeoteTerminal", methodName : "printChar"});
			break;
		case de.peote.terminal._TermCode.TermCode_Impl_.CR:
			this.cursor_x = 0;
			this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
			break;
		case de.peote.terminal._TermCode.TermCode_Impl_.ESC:
			this.ansiParser.mode = de.peote.terminal.AnsiParser.Start;
			break;
		case de.peote.terminal._TermCode.TermCode_Impl_.DEL:
			haxe.Log.trace("Delete character",{ fileName : "PeoteTerminal.hx", lineNumber : 156, className : "de.peote.terminal.PeoteTerminal", methodName : "printChar"});
			break;
		default:
			if($char < 27) haxe.Log.trace("-----> DEBUG :" + $char,{ fileName : "PeoteTerminal.hx", lineNumber : 159, className : "de.peote.terminal.PeoteTerminal", methodName : "printChar"});
			this.setChar(this.cursor_x,this.cursor_y,$char);
			this.buffer[this.buffer_pos + this.cursor_y][this.cursor_x] = $char;
			this.cursor_x++;
			this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
		}
	}
	,backspace: function() {
		this.cursor_x--;
		this.buffer[this.buffer_pos + this.cursor_y][this.cursor_x] = 0;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,carriageReturn: function() {
		this.cursor_x = 0;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,linefeed: function() {
		if(this.cursor_y + 1 < this.size_y) {
			this.cursor_y++;
			this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
		} else {
			if(this.buffer_pos + this.cursor_y + 1 < this.max_buffer) this.buffer_pos++; else {
				this.buffer[0] = new Array();
				this.buffer.push(this.buffer.shift());
			}
			this.element_offset = (this.element_offset + this.max_size_x) % this.max_elements;
			this.displaylist_y_offset -= this.font_size_y;
			this.displaylist_y_scroll = this.displaylist_y_offset;
			this.peoteView.setDisplaylist({ displaylist : 0, yOffset : this.displaylist_y_offset});
		}
	}
	,sgr: function(params) {
	}
	,cud: function(params) {
		if(params.length == 0) params.push("1");
		this.cursor_y += Std.parseInt(params[0]);
		if(this.cursor_y >= this.size_y) this.cursor_y = this.size_y - 1;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,cuu: function(params) {
		if(params.length == 0) params.push("1");
		this.cursor_y -= Std.parseInt(params[0]);
		if(this.cursor_y < 0) this.cursor_y = 0;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,cuf: function(params) {
		if(params.length == 0) params.push("1");
		this.cursor_x += Std.parseInt(params[0]);
		if(this.cursor_x >= this.size_x) this.cursor_x = this.size_x - 1;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,cub: function(params) {
		if(params.length == 0) params.push("1");
		this.cursor_x -= Std.parseInt(params[0]);
		if(this.cursor_x < 0) this.cursor_x = 0;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,cup: function(params) {
		this.cursor_x = 0;
		this.cursor_y = 0;
		if(params.length == 1) if(params[0] != "") this.cursor_y = Std.parseInt(params[0]) - 1; else this.cursor_y = 0; else if(params.length == 2) {
			if(params[1] != "") this.cursor_x = Std.parseInt(params[1]) - 1; else this.cursor_x = 0;
			if(params[0] != "") this.cursor_y = Std.parseInt(params[0]) - 1; else this.cursor_y = 0;
		}
		if(this.cursor_y >= this.size_y) this.cursor_y = this.size_y - 1;
		if(this.cursor_x >= this.size_x) this.cursor_x = this.size_x - 1;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,del: function(params) {
		if(params.length == 0) params.push("1");
		this.buffer[this.buffer_pos + this.cursor_y].splice(this.cursor_x,1);
		this.refresh();
	}
	,ed: function(params) {
		if(params.length == 0) params.push("0");
		if(params[0] == "0") {
			var _g1 = this.cursor_y;
			var _g = this.size_y;
			while(_g1 < _g) {
				var y = _g1++;
				this.buffer[this.buffer_pos + y] = new Array();
				var _g3 = 0;
				var _g2 = this.size_x;
				while(_g3 < _g2) {
					var x = _g3++;
					this.peoteView.setElement({ displaylist : 0, element : (this.element_offset + x + y * this.max_size_x) % this.max_elements, x : x * this.font_size_x, y : y * this.font_size_y - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 0, image : 0, tile : 0});
				}
			}
		} else if(params[0] == "1") {
			var _g11 = 0;
			var _g4 = this.cursor_y;
			while(_g11 < _g4) {
				var y1 = _g11++;
				this.buffer[this.buffer_pos + y1] = new Array();
				var _g31 = 0;
				var _g21 = this.size_x;
				while(_g31 < _g21) {
					var x1 = _g31++;
					this.peoteView.setElement({ displaylist : 0, element : (this.element_offset + x1 + y1 * this.max_size_x) % this.max_elements, x : x1 * this.font_size_x, y : y1 * this.font_size_y - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 0, image : 0, tile : 0});
				}
			}
		} else if(params[0] == "2") {
			var _g12 = 0;
			var _g5 = this.size_y;
			while(_g12 < _g5) {
				var y2 = _g12++;
				this.buffer[this.buffer_pos + y2] = new Array();
				var _g32 = 0;
				var _g22 = this.size_x;
				while(_g32 < _g22) {
					var x2 = _g32++;
					this.peoteView.setElement({ displaylist : 0, element : (this.element_offset + x2 + y2 * this.max_size_x) % this.max_elements, x : x2 * this.font_size_x, y : y2 * this.font_size_y - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 0, image : 0, tile : 0});
				}
			}
		}
	}
	,el: function(params) {
		if(params.length == 0) params.push("0");
		if(params[0] == "0") {
			var _g1 = this.cursor_x;
			var _g = this.size_x;
			while(_g1 < _g) {
				var x = _g1++;
				this.setChar(x,this.cursor_y,0);
				this.buffer[this.buffer_pos + this.cursor_y][x] = 0;
			}
		} else if(params[0] == "1") {
			var _g11 = 0;
			var _g2 = this.cursor_x;
			while(_g11 < _g2) {
				var x1 = _g11++;
				this.setChar(x1,this.cursor_y,0);
				this.buffer[this.buffer_pos + this.cursor_y][x1] = 0;
			}
		} else if(params[0] == "2") {
			var _g12 = 0;
			var _g3 = this.size_x;
			while(_g12 < _g3) {
				var x2 = _g12++;
				this.setChar(x2,this.cursor_y,0);
				this.buffer[this.buffer_pos + this.cursor_y][x2] = 0;
			}
		}
	}
	,il: function(params) {
		if(params.length == 0) params.push("1");
		var _g1 = 0;
		var _g = Std.parseInt(params[0]);
		while(_g1 < _g) {
			var n = _g1++;
			var x = new Array();
			this.buffer.splice(this.buffer_pos + this.cursor_y,0,x);
			this.cursor_y++;
			this.buffer.shift();
			this.buffer_pos--;
		}
		this.refresh();
	}
	,dl: function(params) {
		if(params.length == 0) params.push("1");
		this.buffer.splice(this.buffer_pos + this.cursor_y,Std.parseInt(params[0]));
		var _g1 = 0;
		var _g = Std.parseInt(params[0]);
		while(_g1 < _g) {
			var n = _g1++;
			this.buffer.push(new Array());
		}
		this.refresh();
	}
	,setChar: function(x,y,$char) {
		this.peoteView.setElement({ displaylist : 0, element : (this.element_offset + x + y * this.max_size_x) % this.max_elements, x : x * this.font_size_x, y : y * this.font_size_y - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 0, image : 0, tile : $char});
	}
	,updateCursor: function() {
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,scrollUp: function() {
		if(this.buffer_pos + this.cursor_y + 1 < this.max_buffer) this.buffer_pos++; else {
			this.buffer[0] = new Array();
			this.buffer.push(this.buffer.shift());
		}
		this.element_offset = (this.element_offset + this.max_size_x) % this.max_elements;
		this.displaylist_y_offset -= this.font_size_y;
		this.displaylist_y_scroll = this.displaylist_y_offset;
		this.peoteView.setDisplaylist({ displaylist : 0, yOffset : this.displaylist_y_offset});
	}
	,refresh: function() {
		var _g1 = 0;
		var _g = this.size_y;
		while(_g1 < _g) {
			var y = _g1++;
			var _g3 = 0;
			var _g2 = this.size_x;
			while(_g3 < _g2) {
				var x = _g3++;
				var $char = 0;
				if(this.buffer[this.buffer_pos + y][x] != null) $char = this.buffer[this.buffer_pos + y][x];
				this.peoteView.setElement({ displaylist : 0, element : (this.element_offset + x + y * this.max_size_x) % this.max_elements, x : x * this.font_size_x, y : y * this.font_size_y - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 0, image : 0, tile : $char});
			}
		}
	}
	,onWindowResize: function(width,height) {
		this.size_x = Math.floor(width / this.font_size_x);
		this.size_y = Math.floor(height / this.font_size_y);
		this.peoteTelnet.resize(this.size_x,this.size_y);
		haxe.Log.trace("onWindoResize",{ fileName : "PeoteTerminal.hx", lineNumber : 411, className : "de.peote.terminal.PeoteTerminal", methodName : "onWindowResize", customParams : [this.size_x,this.size_y]});
		if(this.cursor_y >= this.size_y) {
			this.buffer_pos += this.cursor_y - this.size_y + 1;
			this.cursor_y = this.size_y - 1;
			this.element_offset = (this.element_offset + this.max_size_x * (this.cursor_y - this.size_y + 1)) % this.max_elements;
			this.displaylist_y_offset -= this.font_size_y * (this.cursor_y - this.size_y + 1);
			this.displaylist_y_scroll = this.displaylist_y_offset;
		} else if(this.cursor_y < this.size_y - 1) {
			var offset = Math.floor(Math.min(this.buffer_pos,this.size_y - this.cursor_y - 1));
			this.buffer_pos -= offset;
			this.cursor_y += offset;
			this.element_offset = (this.element_offset - this.max_size_x * offset) % this.max_elements;
			if(this.element_offset < 0) this.element_offset = this.max_elements - this.element_offset;
			this.displaylist_y_offset += this.font_size_y * offset;
			this.displaylist_y_scroll = this.displaylist_y_offset;
		}
		this.peoteView.setDisplaylist({ displaylist : 0, w : this.size_x * this.font_size_x, h : this.size_y * this.font_size_y, yOffset : this.displaylist_y_offset});
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
		this.refresh();
	}
	,onMouseWheel: function(deltaX,deltaY) {
		if(deltaY > 0 && this.displaylist_y_scroll - this.displaylist_y_offset < (this.max_size_y - this.size_y) * this.font_size_y) this.displaylist_y_scroll += this.font_size_y; else if(this.displaylist_y_scroll > this.displaylist_y_offset) this.displaylist_y_scroll -= this.font_size_y;
		this.peoteView.setDisplaylist({ displaylist : 0, yOffset : this.displaylist_y_scroll});
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,__class__: de.peote.terminal.PeoteTerminal
};
de.peote.terminal._TermCode = {};
de.peote.terminal._TermCode.TermCode_Impl_ = function() { };
$hxClasses["de.peote.terminal._TermCode.TermCode_Impl_"] = de.peote.terminal._TermCode.TermCode_Impl_;
de.peote.terminal._TermCode.TermCode_Impl_.__name__ = true;
de.peote.tools = {};
de.peote.tools.Holes = function(size) {
	this.size = size - 1;
	this.hole = new Array();
	this.hole.push(new de.peote.tools.Hole(0));
	this.hole[0].end = this.size;
};
$hxClasses["de.peote.tools.Holes"] = de.peote.tools.Holes;
de.peote.tools.Holes.__name__ = true;
de.peote.tools.Holes.prototype = {
	addHole: function(pos) {
		var _g1 = 0;
		var _g = this.hole.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(pos + 1 == this.hole[i].start) {
				this.hole[i].start--;
				if(i > 0) {
					if(this.hole[i].start == this.hole[i - 1].end + 1) {
						this.hole[i].start = this.hole[i - 1].start;
						this.hole.splice(i - 1,1);
					}
				}
				return;
			} else if(pos == this.hole[i].end + 1) {
				this.hole[i].end++;
				if(i < this.hole.length - 1) {
					if(this.hole[i].end == this.hole[i + 1].start - 1) {
						this.hole[i + 1].start = this.hole[i].start;
						this.hole.splice(i,1);
					}
				}
				return;
			} else if(pos < this.hole[i].start) {
				var x = new de.peote.tools.Hole(pos);
				this.hole.splice(i,0,x);
				return;
			}
		}
		this.hole.push(new de.peote.tools.Hole(pos));
	}
	,getHole: function() {
		var mid = Math.floor(this.hole.length / 2);
		if(this.hole[mid].start == this.hole[mid].end) return this.hole.splice(mid,1)[0].start;
		return this.hole[mid].start++;
	}
	,first: function() {
		if(this.hole.length > 0) {
			if(this.hole[0].start == 0) return this.hole[0].end + 1; else return 0;
		} else return 0;
	}
	,last: function() {
		if(this.hole.length > 0) {
			if(this.hole[this.hole.length - 1].end == this.size) return this.hole[this.hole.length - 1].start - 1; else return this.size;
		} else return this.size;
	}
	,is_full: function() {
		return this.hole.length == 0;
	}
	,is_empty: function() {
		var it_is = false;
		if(this.hole.length == 1) {
			if(this.hole[0].start == 0 && this.hole[0].end == this.size) it_is = true;
		}
		return it_is;
	}
	,__class__: de.peote.tools.Holes
};
de.peote.tools.Hole = function(start) {
	this.start = start;
	this.end = start;
};
$hxClasses["de.peote.tools.Hole"] = de.peote.tools.Hole;
de.peote.tools.Hole.__name__ = true;
de.peote.tools.Hole.prototype = {
	__class__: de.peote.tools.Hole
};
de.peote.view = {};
de.peote.view.ActiveProgram = function(program,program_nr,segment_size,buf_start) {
	this.size = -2;
	this.program = program;
	this.program_nr = program_nr;
	this.buf_start = buf_start * segment_size;
	this.element_holes = new de.peote.tools.Holes(segment_size);
};
$hxClasses["de.peote.view.ActiveProgram"] = de.peote.view.ActiveProgram;
de.peote.view.ActiveProgram.__name__ = true;
de.peote.view.ActiveProgram.prototype = {
	__class__: de.peote.view.ActiveProgram
};
de.peote.view.Buffer = function(segment_size,max_segments) {
	this.segment_size = segment_size;
	this.max_segments = max_segments;
	this.activeProgram = new Array();
	this.segment_holes = new de.peote.tools.Holes(max_segments);
	this.activeProgramSlots = new haxe.ds.IntMap();
};
$hxClasses["de.peote.view.Buffer"] = de.peote.view.Buffer;
de.peote.view.Buffer.__name__ = true;
de.peote.view.Buffer.prototype = {
	'delete': function() {
		this.activeProgram = null;
		this.segment_holes = null;
		this.activeProgramSlots = null;
	}
	,delElement: function(e) {
		e.act_program.element_holes.addHole(Math.floor((e.buf_pos - e.act_program.buf_start) / de.peote.view.Buffer.VERTEX_COUNT));
		e.act_program.start = e.act_program.buf_start + 1 + e.act_program.element_holes.first() * de.peote.view.Buffer.VERTEX_COUNT;
		e.act_program.size = (e.act_program.element_holes.last() + 1 - e.act_program.element_holes.first()) * de.peote.view.Buffer.VERTEX_COUNT - 2;
		if(e.act_program.element_holes.is_empty()) {
			this.segment_holes.addHole(Math.floor(e.act_program.buf_start / this.segment_size / de.peote.view.Buffer.VERTEX_COUNT));
			var _this = this.activeProgramSlots.get(e.act_program.program_nr);
			HxOverrides.remove(_this,e.act_program);
			HxOverrides.remove(this.activeProgram,e.act_program);
		}
	}
	,addElement: function(e,program,program_nr,slot) {
		if(slot == null) slot = 0;
		var buf_pos = 0;
		var act_program = null;
		if(!this.activeProgramSlots.exists(program_nr)) this.activeProgramSlots.set(program_nr,new Array());
		if(slot == this.activeProgramSlots.get(program_nr).length) {
			act_program = new de.peote.view.ActiveProgram(program,program_nr,this.segment_size,this.segment_holes.getHole() * de.peote.view.Buffer.VERTEX_COUNT);
			this.activeProgramSlots.get(program_nr).push(act_program);
			this.activeProgram.push(act_program);
		} else act_program = this.activeProgramSlots.get(program_nr)[slot];
		if(act_program.element_holes.hole.length == 0) this.addElement(e,program,program_nr,slot + 1); else {
			buf_pos = act_program.buf_start + act_program.element_holes.getHole() * de.peote.view.Buffer.VERTEX_COUNT;
			act_program.start = act_program.buf_start + 1 + act_program.element_holes.first() * de.peote.view.Buffer.VERTEX_COUNT;
			act_program.size = (act_program.element_holes.last() + 1 - act_program.element_holes.first()) * de.peote.view.Buffer.VERTEX_COUNT - 2;
			e.bufferUpdate(act_program,buf_pos);
		}
	}
	,__class__: de.peote.view.Buffer
};
de.peote.view.PeoteView = function(max_displaylists,max_programs) {
	if(max_programs == null) max_programs = 100;
	if(max_displaylists == null) max_displaylists = 10;
	this.lastUsedDisplaylist = 0;
	this.startDisplaylist = null;
	haxe.Log.trace("GL.MAX_TEXTURE_IMAGE_UNITS:" + Std.string(lime.graphics.opengl.GL.context.getParameter(34930)),{ fileName : "PeoteView.hx", lineNumber : 61, className : "de.peote.view.PeoteView", methodName : "new"});
	haxe.Log.trace("GL.MAX_VERTEX_TEXTURE_IMAGE_UNITS:" + Std.string(lime.graphics.opengl.GL.context.getParameter(35660)),{ fileName : "PeoteView.hx", lineNumber : 62, className : "de.peote.view.PeoteView", methodName : "new"});
	haxe.Log.trace("GL.MAX_TEXTURE_SIZE:" + Std.string(lime.graphics.opengl.GL.context.getParameter(3379)),{ fileName : "PeoteView.hx", lineNumber : 63, className : "de.peote.view.PeoteView", methodName : "new"});
	haxe.Log.trace("GL.MAX_VERTEX_ATTRIBS:" + Std.string(lime.graphics.opengl.GL.context.getParameter(34921)),{ fileName : "PeoteView.hx", lineNumber : 64, className : "de.peote.view.PeoteView", methodName : "new"});
	haxe.Log.trace("GL.MAX_VERTEX_UNIFORM_VECTORS:" + Std.string(lime.graphics.opengl.GL.context.getParameter(36347)),{ fileName : "PeoteView.hx", lineNumber : 65, className : "de.peote.view.PeoteView", methodName : "new"});
	haxe.Log.trace("GL.MAX_FRAGMENT_UNIFORM_VECTORS:" + Std.string(lime.graphics.opengl.GL.context.getParameter(36349)),{ fileName : "PeoteView.hx", lineNumber : 66, className : "de.peote.view.PeoteView", methodName : "new"});
	this.texturecache = new de.peote.view.texture.TextureCache(512,512,64);
	this.programCache = new de.peote.view.ProgramCache(max_programs,"\tprecision mediump float;\r\n\t\tvarying vec2 vTexCoord;\r\n\t\tuniform sampler2D uImage;\r\n\t\t\r\n\t\tuniform vec2 uMouse, uResolution;\r\n\t\t\r\n\t\tvoid main(void)\r\n\t\t{\r\n\t\t\tvec4 texel = texture2D(uImage, vTexCoord / %MAX_TEXTURE_SIZE%);\r\n\t\t\tif(texel.a < 0.5) discard;\r\n\t\t\tgl_FragColor = texel;\r\n\t\t}\r\n\t","\tprecision mediump float;\r\n\r\n\t\t// always twice if time dependend\r\n\t\tattribute vec4 aPosition;\r\n\t\tattribute vec2 aTime;\r\n\t\t\r\n\t\tattribute float aZindex;\r\n\t\tattribute vec2 aTexCoord;\r\n\t\t\r\n\t\t#if_RGBA\r\n\t\tattribute vec4 aRGBA;\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#end_RGBA\r\n\r\n\t\tvarying vec2 vTexCoord;\r\n\t\t\r\n\t\tuniform float uTime;\r\n\t\tuniform float uZoom;\r\n\t\tuniform vec2 uResolution;\r\n\t\tuniform vec2 uDelta;\r\n\t\t\r\n\t\tvoid main(void) {\r\n\t\t\t#if_RGBA\r\n\t\t\tvRGBA = 255.0/aRGBA;\r\n\t\t\t#end_RGBA\r\n\t\t\t\r\n\t\t\tvTexCoord = aTexCoord;\r\n\t\t\t\r\n\t\t\tvec2 VertexPosStart = vec2( aPosition ); //vec2 (aPosition.x, aPosition.y);\r\n\t\t\tvec2 VertexPosEnd   = vec2 (aPosition.z, aPosition.w);\r\n\t\t\t\r\n\t\t\tfloat zoom = uZoom;\r\n\t\t\tfloat width = uResolution.x;\r\n\t\t\tfloat height = uResolution.y;\r\n\t\t\tfloat deltaX = floor(uDelta.x);\r\n\t\t\tfloat deltaY = floor(uDelta.y);\r\n\t\t\t\r\n\t\t\tfloat right = width-deltaX*zoom;\r\n\t\t\tfloat left = -deltaX*zoom;\r\n\t\t\tfloat bottom = height-deltaY*zoom;\r\n\t\t\tfloat top = -deltaY * zoom;\r\n\t\t\t\r\n\t\t\tgl_Position = mat4 (\r\n\t\t\t\tvec4(2.0 / (right - left)*zoom, 0.0, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 2.0 / (top - bottom)*zoom, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 0.0, -0.001, 0.0),\r\n\t\t\t\tvec4(-(right + left) / (right - left), -(top + bottom) / (top - bottom), 0.0, 1.0)\r\n\t\t\t)\r\n\t\t\t* vec4 (VertexPosStart + floor( \r\n\t\t\t\t\t\t\t\t(VertexPosEnd - VertexPosStart)\r\n\t\t\t\t\t\t\t\t* max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0))\r\n\t\t\t\t\t\t\t\t* zoom) / zoom\r\n\t\t\t\t, aZindex ,1.0);\r\n\t\t}\r\n\t");
	var this1;
	this1 = new Array(max_displaylists);
	this.displaylist = this1;
	this.createBackgroundBuffer();
};
$hxClasses["de.peote.view.PeoteView"] = de.peote.view.PeoteView;
de.peote.view.PeoteView.__name__ = true;
de.peote.view.PeoteView.prototype = {
	setDisplaylist: function(param) {
		var d = this.displaylist[param.displaylist];
		if(d == null) {
			d = new de.peote.view.displaylist.Displaylist(param,this.texturecache,this.programCache);
			this.displaylist[param.displaylist] = d;
			if(param.enable != false) this.insertSortDisplaylist(d); else d.enable = false;
		} else if(param.enable != null && param.enable != d.enable) {
			if(param.z != null && param.z != d.z) d.z = param.z;
			d.enable = param.enable;
			if(param.enable) this.insertSortDisplaylist(d); else {
				if(d == this.startDisplaylist) if(d.next != d) this.startDisplaylist = d.next; else this.startDisplaylist = null;
				d.prev.next = d.next;
				d.next.prev = d.prev;
				d.next = d.prev = d;
			}
		} else if(param.z != null && param.z != d.z) {
			d.z = param.z;
			if(d.enable) {
				if(d == this.startDisplaylist) if(d.next != d) this.startDisplaylist = d.next; else this.startDisplaylist = null;
				d.prev.next = d.next;
				d.next.prev = d.prev;
				d.next = d.prev = d;
				this.insertSortDisplaylist(d);
			}
		}
		if(param.x != null) d.x = param.x;
		if(param.y != null) d.y = param.y;
		if(param.w != null) d.w = param.w;
		if(param.h != null) d.h = param.h;
		if(param.xOffset != null) d.xOffset = param.xOffset;
		if(param.yOffset != null) d.yOffset = param.yOffset;
		if(param.r != null) d.r = param.r;
		if(param.g != null) d.g = param.g;
		if(param.b != null) d.b = param.b;
		if(param.a != null) d.a = param.a;
		if(param.renderBackground != null) d.renderBackground = param.renderBackground;
		this.lastUsedDisplaylist = param.displaylist;
	}
	,unlinkDisplaylist: function(d) {
		if(d == this.startDisplaylist) if(d.next != d) this.startDisplaylist = d.next; else this.startDisplaylist = null;
		d.prev.next = d.next;
		d.next.prev = d.prev;
		d.next = d.prev = d;
	}
	,insertSortDisplaylist: function(d) {
		if(this.startDisplaylist == null) this.startDisplaylist = d; else {
			var i = this.startDisplaylist.prev;
			while(d.z < i.z && i != this.startDisplaylist) i = i.prev;
			d.prev = i.prev;
			d.next = i;
			i.prev.next = d;
			i.prev = d;
			if(d.next == this.startDisplaylist && d.z <= this.startDisplaylist.z) this.startDisplaylist = d;
		}
	}
	,delDisplaylist: function(param) {
		var d = this.displaylist[param.displaylist];
		if(d != null) {
			if(d.enable) {
				if(d == this.startDisplaylist) if(d.next != d) this.startDisplaylist = d.next; else this.startDisplaylist = null;
				d.prev.next = d.next;
				d.next.prev = d.prev;
				d.next = d.prev = d;
			}
			this.displaylist[param.displaylist] = null;
			d.bufferElement["delete"]();
			d.buffer["delete"]();
			d.element = null;
		}
	}
	,setProgram: function(program_nr,type,fragmentShaderUrl,vertexShaderUrl) {
		if(vertexShaderUrl == null) vertexShaderUrl = "";
		if(fragmentShaderUrl == null) fragmentShaderUrl = "";
		if(type == null) type = 0;
		this.programCache.loadShaderSrc(program_nr,fragmentShaderUrl,vertexShaderUrl);
	}
	,setProgramSrc: function(program_nr,fragmentShaderSrc,vertexShaderSrc) {
		if(vertexShaderSrc == null) vertexShaderSrc = "\tprecision mediump float;\r\n\r\n\t\t// always twice if time dependend\r\n\t\tattribute vec4 aPosition;\r\n\t\tattribute vec2 aTime;\r\n\t\t\r\n\t\tattribute float aZindex;\r\n\t\tattribute vec2 aTexCoord;\r\n\t\t\r\n\t\t#if_RGBA\r\n\t\tattribute vec4 aRGBA;\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#end_RGBA\r\n\r\n\t\tvarying vec2 vTexCoord;\r\n\t\t\r\n\t\tuniform float uTime;\r\n\t\tuniform float uZoom;\r\n\t\tuniform vec2 uResolution;\r\n\t\tuniform vec2 uDelta;\r\n\t\t\r\n\t\tvoid main(void) {\r\n\t\t\t#if_RGBA\r\n\t\t\tvRGBA = 255.0/aRGBA;\r\n\t\t\t#end_RGBA\r\n\t\t\t\r\n\t\t\tvTexCoord = aTexCoord;\r\n\t\t\t\r\n\t\t\tvec2 VertexPosStart = vec2( aPosition ); //vec2 (aPosition.x, aPosition.y);\r\n\t\t\tvec2 VertexPosEnd   = vec2 (aPosition.z, aPosition.w);\r\n\t\t\t\r\n\t\t\tfloat zoom = uZoom;\r\n\t\t\tfloat width = uResolution.x;\r\n\t\t\tfloat height = uResolution.y;\r\n\t\t\tfloat deltaX = floor(uDelta.x);\r\n\t\t\tfloat deltaY = floor(uDelta.y);\r\n\t\t\t\r\n\t\t\tfloat right = width-deltaX*zoom;\r\n\t\t\tfloat left = -deltaX*zoom;\r\n\t\t\tfloat bottom = height-deltaY*zoom;\r\n\t\t\tfloat top = -deltaY * zoom;\r\n\t\t\t\r\n\t\t\tgl_Position = mat4 (\r\n\t\t\t\tvec4(2.0 / (right - left)*zoom, 0.0, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 2.0 / (top - bottom)*zoom, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 0.0, -0.001, 0.0),\r\n\t\t\t\tvec4(-(right + left) / (right - left), -(top + bottom) / (top - bottom), 0.0, 1.0)\r\n\t\t\t)\r\n\t\t\t* vec4 (VertexPosStart + floor( \r\n\t\t\t\t\t\t\t\t(VertexPosEnd - VertexPosStart)\r\n\t\t\t\t\t\t\t\t* max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0))\r\n\t\t\t\t\t\t\t\t* zoom) / zoom\r\n\t\t\t\t, aZindex ,1.0);\r\n\t\t}\r\n\t";
		if(fragmentShaderSrc == null) fragmentShaderSrc = "\tprecision mediump float;\r\n\t\tvarying vec2 vTexCoord;\r\n\t\tuniform sampler2D uImage;\r\n\t\t\r\n\t\tuniform vec2 uMouse, uResolution;\r\n\t\t\r\n\t\tvoid main(void)\r\n\t\t{\r\n\t\t\tvec4 texel = texture2D(uImage, vTexCoord / %MAX_TEXTURE_SIZE%);\r\n\t\t\tif(texel.a < 0.5) discard;\r\n\t\t\tgl_FragColor = texel;\r\n\t\t}\r\n\t";
		this.programCache.setShaderSrc(program_nr,fragmentShaderSrc,vertexShaderSrc);
	}
	,setImage: function(image_nr,imageUrl,w,h) {
		this.texturecache.setImage(image_nr,imageUrl,w,h);
	}
	,setElement: function(param) {
		if(param.element != null) this.displaylist[param.displaylist != null?param.displaylist:this.lastUsedDisplaylist].setElement(param); else haxe.Log.trace("ERROR: no element specified",{ fileName : "PeoteView.hx", lineNumber : 209, className : "de.peote.view.PeoteView", methodName : "setElement"});
	}
	,delElement: function(param) {
		if(param.element != null) this.displaylist[param.displaylist != null?param.displaylist:this.lastUsedDisplaylist].delElement(param.element); else haxe.Log.trace("ERROR: no element specified",{ fileName : "PeoteView.hx", lineNumber : 216, className : "de.peote.view.PeoteView", methodName : "delElement"});
	}
	,delAllElement: function(param) {
		this.displaylist[param.displaylist != null?param.displaylist:this.lastUsedDisplaylist].delAllElement();
	}
	,render: function(time,width,height,mouse_x,mouse_y,zoom) {
		lime.graphics.opengl.GL.context.viewport(0,0,width,height);
		lime.graphics.opengl.GL.context.scissor(0,0,width,height);
		lime.graphics.opengl.GL.context.enable(3089);
		lime.graphics.opengl.GL.context.clearColor(0.0,0.0,0.0,1.0);
		lime.graphics.opengl.GL.context.clear(16640);
		this.dl = this.startDisplaylist;
		while(this.dl != null) {
			lime.graphics.opengl.GL.context.scissor(this.dl.x,(this.dl.h != 0?height - this.dl.h:0) - this.dl.y,this.dl.w != 0?this.dl.w:width,this.dl.h != 0?this.dl.h:height);
			lime.graphics.opengl.GL.context.enable(2929);
			lime.graphics.opengl.GL.context.depthFunc(515);
			lime.graphics.opengl.GL.context.enable(3042);
			lime.graphics.opengl.GL.context.blendFunc(770,771);
			lime.graphics.opengl.GL.context.activeTexture(33984);
			lime.graphics.opengl.GL.context.bindTexture(3553,this.texturecache.texture);
			if(this.dl != this.startDisplaylist && this.dl.z != this.dl.prev.z) lime.graphics.opengl.GL.context.clear(256);
			if(this.dl.renderBackground) {
				lime.graphics.opengl.GL.context.bindBuffer(34962,this.background_buffer);
				lime.graphics.opengl.GL.context.enableVertexAttribArray(this.background_aPosition);
				lime.graphics.opengl.GL.context.vertexAttribPointer(this.background_aPosition,2,5126,false,8,0);
				lime.graphics.opengl.GL.context.useProgram(this.background_program);
				lime.graphics.opengl.GL.context.uniform4f(this.background_uRGBA,this.dl.r,this.dl.g,this.dl.b,this.dl.a);
				lime.graphics.opengl.GL.context.drawArrays(5,0,4);
				lime.graphics.opengl.GL.context.disableVertexAttribArray(this.background_aPosition);
			}
			lime.graphics.opengl.GL.context.bindBuffer(34962,this.dl.bufferElement.glBuff);
			this.dl.bufferElement.setVertexAttributes();
			var _g1 = 0;
			var _g = this.dl.buffer.activeProgram.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.ap = this.dl.buffer.activeProgram[i];
				lime.graphics.opengl.GL.context.useProgram(this.ap.program.glProgram);
				lime.graphics.opengl.GL.context.uniform1i(this.ap.program.uniforms[2],0);
				lime.graphics.opengl.GL.context.uniform2f(this.ap.program.uniforms[3],mouse_x / width * 2 - 1,mouse_y / height * 2 - 1);
				lime.graphics.opengl.GL.context.uniform2f(this.ap.program.uniforms[4],width,height);
				lime.graphics.opengl.GL.context.uniform1f(this.ap.program.uniforms[5],time);
				lime.graphics.opengl.GL.context.uniform1f(this.ap.program.uniforms[6],zoom);
				lime.graphics.opengl.GL.context.uniform2f(this.ap.program.uniforms[7],this.dl.x + this.dl.xOffset,this.dl.y + this.dl.yOffset);
				lime.graphics.opengl.GL.context.drawArrays(5,this.ap.start,this.ap.size);
			}
			this.dl.bufferElement.disableVertexAttributes();
			if(this.dl.next != this.startDisplaylist) this.dl = this.dl.next; else this.dl = null;
		}
		lime.graphics.opengl.GL.context.bindBuffer(34962,null);
		lime.graphics.opengl.GL.context.bindTexture(3553,null);
		lime.graphics.opengl.GL.context.useProgram(null);
	}
	,createBackgroundBuffer: function() {
		this.background_program = lime.utils.GLUtils.createProgram("\r\n\t\t\tattribute vec2 aPosition;\r\n\t\t\t\r\n\t\t\tvoid main(void)\r\n\t\t\t{\r\n\t\t\t\tgl_Position = mat4 ( // TODO: mathstar-optimize this ;)=\r\n\t\t\t\t\tvec4(2.0, 0.0, 0.0, 0.0),\r\n\t\t\t\t\tvec4(0.0, -2.0, 0.0, 0.0),\r\n\t\t\t\t\tvec4(0.0, 0.0, 0.0, 0.0),\r\n\t\t\t\t\tvec4(-1.0, 1.0, 0.0, 1.0)\r\n\t\t\t\t)\r\n\t\t\t\t* vec4 (aPosition, -65000.0 ,1.0); // 65000? -> zIndex (todo for <zero)\r\n\t\t\t}\r\n\t\t\t","precision mediump float;" + "\r\n\t\t\tuniform vec4 uRGBA;\r\n\t\t\tvoid main(void)\r\n\t\t\t{\r\n\t\t\t\tgl_FragColor = uRGBA;\r\n\t\t\t}\r\n\t\t\t");
		this.background_aPosition = lime.graphics.opengl.GL.context.getAttribLocation(this.background_program,"aPosition");
		this.background_uRGBA = lime.graphics.opengl.GL.context.getUniformLocation(this.background_program,"uRGBA");
		var data = [1,1,0,1,1,0,0,0];
		this.background_buffer = lime.graphics.opengl.GL.context.createBuffer();
		lime.graphics.opengl.GL.context.bindBuffer(34962,this.background_buffer);
		lime.graphics.opengl.GL.bufferData(34962,new Float32Array(data),35044);
		lime.graphics.opengl.GL.context.bindBuffer(34962,null);
	}
	,renderBackground: function(r,g,b,a) {
		lime.graphics.opengl.GL.context.bindBuffer(34962,this.background_buffer);
		lime.graphics.opengl.GL.context.enableVertexAttribArray(this.background_aPosition);
		lime.graphics.opengl.GL.context.vertexAttribPointer(this.background_aPosition,2,5126,false,8,0);
		lime.graphics.opengl.GL.context.useProgram(this.background_program);
		lime.graphics.opengl.GL.context.uniform4f(this.background_uRGBA,r,g,b,a);
		lime.graphics.opengl.GL.context.drawArrays(5,0,4);
		lime.graphics.opengl.GL.context.disableVertexAttribArray(this.background_aPosition);
	}
	,__class__: de.peote.view.PeoteView
};
de.peote.view.Program = function(defaultProgram) {
	this.glProgram = null;
	if(defaultProgram != null) {
		this.glProgram = defaultProgram.glProgram;
		this.uniforms = defaultProgram.uniforms;
	}
};
$hxClasses["de.peote.view.Program"] = de.peote.view.Program;
de.peote.view.Program.__name__ = true;
de.peote.view.Program.prototype = {
	compile: function(fragmentShaderSrc,vertexShaderSrc,onerror) {
		var r = new EReg("//.*?$","gm");
		vertexShaderSrc = r.replace(vertexShaderSrc,"");
		r = new EReg("\r?\n","g");
		vertexShaderSrc = r.replace(vertexShaderSrc,"");
		r = new EReg("\t\t+","g");
		vertexShaderSrc = r.replace(vertexShaderSrc,"");
		r = new EReg("#if_RGBA(.*?)#else_RGBA(.*?)#end_RGBA","ig");
		vertexShaderSrc = r.replace(vertexShaderSrc,"$2");
		r = new EReg("#if_RGBA(.*?)#end_RGBA","ig");
		vertexShaderSrc = r.replace(vertexShaderSrc,"");
		r = new EReg(";","g");
		vertexShaderSrc = r.replace(vertexShaderSrc,";\n");
		r = new EReg("%MAX_TEXTURE_SIZE%","g");
		vertexShaderSrc = r.replace(vertexShaderSrc,de.peote.view.texture.TextureCache.max_texture_size + ".0");
		fragmentShaderSrc = r.replace(fragmentShaderSrc,de.peote.view.texture.TextureCache.max_texture_size + ".0");
		var fs = lime.graphics.opengl.GL.context.createShader(35632);
		lime.graphics.opengl.GL.context.shaderSource(fs,fragmentShaderSrc);
		lime.graphics.opengl.GL.context.compileShader(fs);
		var vs = lime.graphics.opengl.GL.context.createShader(35633);
		lime.graphics.opengl.GL.context.shaderSource(vs,vertexShaderSrc);
		lime.graphics.opengl.GL.context.compileShader(vs);
		if(lime.graphics.opengl.GL.context.getShaderParameter(fs,35713) == 0) onerror("ERROR fragmentShader: " + lime.graphics.opengl.GL.context.getShaderInfoLog(fs)); else if(lime.graphics.opengl.GL.context.getShaderParameter(vs,35713) == 0) onerror("ERROR vertexShader: " + lime.graphics.opengl.GL.context.getShaderInfoLog(vs)); else {
			this.glProgram = lime.graphics.opengl.GL.context.createProgram();
			lime.graphics.opengl.GL.context.attachShader(this.glProgram,vs);
			lime.graphics.opengl.GL.context.attachShader(this.glProgram,fs);
			lime.graphics.opengl.GL.context.deleteShader(vs);
			lime.graphics.opengl.GL.context.deleteShader(fs);
			lime.graphics.opengl.GL.context.linkProgram(this.glProgram);
			if(lime.graphics.opengl.GL.context.getProgramParameter(this.glProgram,35714) == 0) onerror(lime.graphics.opengl.GL.context.getProgramInfoLog(this.glProgram) + "VALIDATE_STATUS: " + lime.graphics.opengl.GL.context.getProgramParameter(this.glProgram,35715) + "ERROR: " + lime.graphics.opengl.GL.context.getError()); else {
				if(de.peote.view.Program.aPosition == -1) {
					de.peote.view.Program.aPosition = lime.graphics.opengl.GL.context.getAttribLocation(this.glProgram,"aPosition");
					de.peote.view.Program.aTime = lime.graphics.opengl.GL.context.getAttribLocation(this.glProgram,"aTime");
					de.peote.view.Program.aZindex = lime.graphics.opengl.GL.context.getAttribLocation(this.glProgram,"aZindex");
					de.peote.view.Program.aTexCoord = lime.graphics.opengl.GL.context.getAttribLocation(this.glProgram,"aTexCoord");
				}
				var length = lime.graphics.opengl.GL.context.getProgramParameter(this.glProgram,35718);
				var this1;
				this1 = new Array(length);
				this.uniforms = this1;
				var name;
				var _g1 = 0;
				var _g = lime.graphics.opengl.GL.context.getProgramParameter(this.glProgram,35718);
				while(_g1 < _g) {
					var i = _g1++;
					name = lime.graphics.opengl.GL.context.getActiveUniform(this.glProgram,i).name;
					switch(name) {
					case "uModelViewMatrix":
						var val = lime.graphics.opengl.GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[0] = val;
						break;
					case "uProjectionMatrix":
						var val1 = lime.graphics.opengl.GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[1] = val1;
						break;
					case "uImage":
						var val2 = lime.graphics.opengl.GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[2] = val2;
						break;
					case "uMouse":
						var val3 = lime.graphics.opengl.GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[3] = val3;
						break;
					case "uResolution":
						var val4 = lime.graphics.opengl.GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[4] = val4;
						break;
					case "uTime":
						var val5 = lime.graphics.opengl.GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[5] = val5;
						break;
					case "uZoom":
						var val6 = lime.graphics.opengl.GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[6] = val6;
						break;
					case "uDelta":
						var val7 = lime.graphics.opengl.GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[7] = val7;
						break;
					}
				}
			}
		}
	}
	,__class__: de.peote.view.Program
};
de.peote.view.ProgramCache = function(max_programs,defaultFragmentShaderSrc,defaultVertexShaderSrc) {
	var this1;
	this1 = new Array(max_programs);
	this.program = this1;
	this.defaultProgram = new de.peote.view.Program();
	this.defaultProgram.compile(defaultFragmentShaderSrc,defaultVertexShaderSrc,de.peote.view.ProgramCache.onerror);
};
$hxClasses["de.peote.view.ProgramCache"] = de.peote.view.ProgramCache;
de.peote.view.ProgramCache.__name__ = true;
de.peote.view.ProgramCache.onerror = function(msg) {
	haxe.Log.trace(msg,{ fileName : "ProgramCache.hx", lineNumber : 46, className : "de.peote.view.ProgramCache", methodName : "onerror"});
};
de.peote.view.ProgramCache.prototype = {
	get: function(nr) {
		return this.program[nr];
	}
	,loadShaderSrc: function(nr,fragmentShaderUrl,vertexShaderUrl) {
		var fragmentShaderSrc = "\tprecision mediump float;\r\n\t\tvarying vec2 vTexCoord;\r\n\t\tuniform sampler2D uImage;\r\n\t\t\r\n\t\tuniform vec2 uMouse, uResolution;\r\n\t\t\r\n\t\tvoid main(void)\r\n\t\t{\r\n\t\t\tvec4 texel = texture2D(uImage, vTexCoord / %MAX_TEXTURE_SIZE%);\r\n\t\t\tif(texel.a < 0.5) discard;\r\n\t\t\tgl_FragColor = texel;\r\n\t\t}\r\n\t";
		if(fragmentShaderUrl != "") {
			var req = js.Browser.createXMLHttpRequest();
			req.open("GET",fragmentShaderUrl,false);
			req.send();
			fragmentShaderSrc = req.responseText;
		}
		var vertexShaderSrc = "\tprecision mediump float;\r\n\r\n\t\t// always twice if time dependend\r\n\t\tattribute vec4 aPosition;\r\n\t\tattribute vec2 aTime;\r\n\t\t\r\n\t\tattribute float aZindex;\r\n\t\tattribute vec2 aTexCoord;\r\n\t\t\r\n\t\t#if_RGBA\r\n\t\tattribute vec4 aRGBA;\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#end_RGBA\r\n\r\n\t\tvarying vec2 vTexCoord;\r\n\t\t\r\n\t\tuniform float uTime;\r\n\t\tuniform float uZoom;\r\n\t\tuniform vec2 uResolution;\r\n\t\tuniform vec2 uDelta;\r\n\t\t\r\n\t\tvoid main(void) {\r\n\t\t\t#if_RGBA\r\n\t\t\tvRGBA = 255.0/aRGBA;\r\n\t\t\t#end_RGBA\r\n\t\t\t\r\n\t\t\tvTexCoord = aTexCoord;\r\n\t\t\t\r\n\t\t\tvec2 VertexPosStart = vec2( aPosition ); //vec2 (aPosition.x, aPosition.y);\r\n\t\t\tvec2 VertexPosEnd   = vec2 (aPosition.z, aPosition.w);\r\n\t\t\t\r\n\t\t\tfloat zoom = uZoom;\r\n\t\t\tfloat width = uResolution.x;\r\n\t\t\tfloat height = uResolution.y;\r\n\t\t\tfloat deltaX = floor(uDelta.x);\r\n\t\t\tfloat deltaY = floor(uDelta.y);\r\n\t\t\t\r\n\t\t\tfloat right = width-deltaX*zoom;\r\n\t\t\tfloat left = -deltaX*zoom;\r\n\t\t\tfloat bottom = height-deltaY*zoom;\r\n\t\t\tfloat top = -deltaY * zoom;\r\n\t\t\t\r\n\t\t\tgl_Position = mat4 (\r\n\t\t\t\tvec4(2.0 / (right - left)*zoom, 0.0, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 2.0 / (top - bottom)*zoom, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 0.0, -0.001, 0.0),\r\n\t\t\t\tvec4(-(right + left) / (right - left), -(top + bottom) / (top - bottom), 0.0, 1.0)\r\n\t\t\t)\r\n\t\t\t* vec4 (VertexPosStart + floor( \r\n\t\t\t\t\t\t\t\t(VertexPosEnd - VertexPosStart)\r\n\t\t\t\t\t\t\t\t* max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0))\r\n\t\t\t\t\t\t\t\t* zoom) / zoom\r\n\t\t\t\t, aZindex ,1.0);\r\n\t\t}\r\n\t";
		if(vertexShaderUrl != "") {
			var req1 = js.Browser.createXMLHttpRequest();
			req1.open("GET",vertexShaderUrl,false);
			req1.send();
			vertexShaderSrc = req1.responseText;
		}
		this.setShaderSrc(nr,fragmentShaderSrc,vertexShaderSrc);
	}
	,setShaderSrc: function(nr,fragmentShaderSrc,vertexShaderSrc) {
		if(this.program[nr] == null) {
			var val = new de.peote.view.Program(this.defaultProgram);
			this.program[nr] = val;
		}
		this.program[nr].compile(fragmentShaderSrc,vertexShaderSrc,de.peote.view.ProgramCache.onerror);
	}
	,__class__: de.peote.view.ProgramCache
};
de.peote.view.Shader = function(url) {
	this.programs_nr = -1;
	this.programsCache_nr = -1;
	this.src = "";
	this.url = url;
};
$hxClasses["de.peote.view.Shader"] = de.peote.view.Shader;
de.peote.view.Shader.__name__ = true;
de.peote.view.Shader.prototype = {
	__class__: de.peote.view.Shader
};
de.peote.view.displaylist = {};
de.peote.view.displaylist.Displaylist = function(param,texturecache,programCache) {
	this.enable = true;
	this.renderBackground = false;
	this.a = 1.0;
	this.b = 0.0;
	this.g = 0.0;
	this.r = 0.0;
	this.z = 0;
	this.yOffset = 0;
	this.xOffset = 0;
	this.h = 0;
	this.w = 0;
	this.y = 0;
	this.x = 0;
	this.next = this;
	this.prev = this;
	this.type = 0;
	this.texturecache = texturecache;
	this.programCache = programCache;
	if(param.z != null) this.z = param.z; else this.z = 0;
	var this1;
	this1 = new Array(param.max_elements);
	this.element = this1;
	haxe.Log.trace("max_segments: " + (Math.floor(param.max_elements / param.buffer_segment_size) + param.max_programs),{ fileName : "Displaylist.hx", lineNumber : 102, className : "de.peote.view.displaylist.Displaylist", methodName : "new"});
	this.buffer = new de.peote.view.Buffer(param.buffer_segment_size,Math.floor(param.max_elements / param.buffer_segment_size) + param.max_programs);
	this.bufferElement = new de.peote.view.element.BufferElementSimple(this.buffer);
};
$hxClasses["de.peote.view.displaylist.Displaylist"] = de.peote.view.displaylist.Displaylist;
de.peote.view.displaylist.Displaylist.__name__ = true;
de.peote.view.displaylist.Displaylist.prototype = {
	'delete': function() {
		this.bufferElement["delete"]();
		this.buffer["delete"]();
		this.element = null;
	}
	,set: function(param) {
		if(param.x != null) this.x = param.x;
		if(param.y != null) this.y = param.y;
		if(param.w != null) this.w = param.w;
		if(param.h != null) this.h = param.h;
		if(param.xOffset != null) this.xOffset = param.xOffset;
		if(param.yOffset != null) this.yOffset = param.yOffset;
		if(param.r != null) this.r = param.r;
		if(param.g != null) this.g = param.g;
		if(param.b != null) this.b = param.b;
		if(param.a != null) this.a = param.a;
		if(param.renderBackground != null) this.renderBackground = param.renderBackground;
	}
	,setElement: function(param) {
		var e = this.element[param.element];
		if(e == null) {
			e = new de.peote.view.element.ElementSimple(param);
			if(this.programCache.program[param.program] != null) {
				this.buffer.addElement(e,this.programCache.program[param.program],param.program);
				this.element[param.element] = e;
			} else haxe.Log.trace(" ERROR: no program specified for new element",{ fileName : "Displaylist.hx", lineNumber : 147, className : "de.peote.view.displaylist.Displaylist", methodName : "setElement"});
		}
		e.set(this.bufferElement,param,this.texturecache);
	}
	,delElement: function(element_nr) {
		var e = this.element[element_nr];
		if(e != null) {
			this.element[element_nr] = null;
			this.buffer.delElement(e);
			e.del(this.bufferElement,this.texturecache);
		}
	}
	,delAllElement: function() {
		var _g1 = 0;
		var _g = this.element.length;
		while(_g1 < _g) {
			var element_nr = _g1++;
			this.delElement(element_nr);
		}
	}
	,__class__: de.peote.view.displaylist.Displaylist
};
de.peote.view.element = {};
de.peote.view.element.BufferData = function(length) {
	this.dataView = new DataView(new ArrayBuffer(length),0);
};
$hxClasses["de.peote.view.element.BufferData"] = de.peote.view.element.BufferData;
de.peote.view.element.BufferData.__name__ = true;
de.peote.view.element.BufferData.prototype = {
	setByteOffset: function(b) {
		this.byteOffset = b;
	}
	,write_3_Short: function(a1,a2,a3) {
		this.dataView.setInt16(this.byteOffset,a1,true);
		this.dataView.setInt16(this.byteOffset + 2,a2,true);
		this.dataView.setInt16(this.byteOffset + 4,a3,true);
		this.byteOffset += 6;
	}
	,write_2_Short: function(a1,a2) {
		this.dataView.setInt16(this.byteOffset,a1,true);
		this.dataView.setInt16(this.byteOffset + 2,a2,true);
		this.byteOffset += 4;
	}
	,write_1_Float: function(a1) {
		this.dataView.setFloat32(this.byteOffset,a1,true);
		this.byteOffset += 4;
	}
	,write_2_Float: function(a1,a2) {
		this.dataView.setFloat32(this.byteOffset,a1,true);
		this.dataView.setFloat32(this.byteOffset + 4,a2,true);
		this.byteOffset += 8;
	}
	,__class__: de.peote.view.element.BufferData
};
de.peote.view.element.I_BufferElement = function() { };
$hxClasses["de.peote.view.element.I_BufferElement"] = de.peote.view.element.I_BufferElement;
de.peote.view.element.I_BufferElement.__name__ = true;
de.peote.view.element.I_BufferElement.prototype = {
	__class__: de.peote.view.element.I_BufferElement
};
de.peote.view.element.BufferElementSimple = function(b) {
	var full = new de.peote.view.element.BufferData(b.max_segments * b.segment_size * de.peote.view.element.BufferElementSimple.VERTEX_COUNT * de.peote.view.element.BufferElementSimple.VERTEX_STRIDE);
	this.glBuff = lime.graphics.opengl.GL.context.createBuffer();
	lime.graphics.opengl.GL.context.bindBuffer(34962,this.glBuff);
	lime.graphics.opengl.GL.context.bufferData(34962,full.dataView,35044);
	lime.graphics.opengl.GL.context.bindBuffer(34962,null);
	this.buffFull = new de.peote.view.element.BufferData(de.peote.view.element.BufferElementSimple.VERTEX_COUNT * de.peote.view.element.BufferElementSimple.VERTEX_STRIDE);
	this.emptyBuffFull = new de.peote.view.element.BufferData(de.peote.view.element.BufferElementSimple.VERTEX_COUNT * de.peote.view.element.BufferElementSimple.VERTEX_STRIDE);
	this.buffTex_0 = new de.peote.view.element.BufferData(4);
	this.buffTex_1 = new de.peote.view.element.BufferData(4);
	this.buffTex_2 = new de.peote.view.element.BufferData(4);
	this.buffTex_3 = new de.peote.view.element.BufferData(4);
};
$hxClasses["de.peote.view.element.BufferElementSimple"] = de.peote.view.element.BufferElementSimple;
de.peote.view.element.BufferElementSimple.__name__ = true;
de.peote.view.element.BufferElementSimple.__interfaces__ = [de.peote.view.element.I_BufferElement];
de.peote.view.element.BufferElementSimple.prototype = {
	'delete': function() {
		lime.graphics.opengl.GL.context.deleteBuffer(this.glBuff);
	}
	,disableVertexAttributes: function() {
		lime.graphics.opengl.GL.context.disableVertexAttribArray(de.peote.view.Program.aPosition);
		lime.graphics.opengl.GL.context.disableVertexAttribArray(de.peote.view.Program.aTime);
		lime.graphics.opengl.GL.context.disableVertexAttribArray(de.peote.view.Program.aZindex);
		lime.graphics.opengl.GL.context.disableVertexAttribArray(de.peote.view.Program.aTexCoord);
	}
	,setVertexAttributes: function() {
		lime.graphics.opengl.GL.context.enableVertexAttribArray(de.peote.view.Program.aPosition);
		lime.graphics.opengl.GL.context.enableVertexAttribArray(de.peote.view.Program.aTime);
		lime.graphics.opengl.GL.context.enableVertexAttribArray(de.peote.view.Program.aZindex);
		lime.graphics.opengl.GL.context.enableVertexAttribArray(de.peote.view.Program.aTexCoord);
		lime.graphics.opengl.GL.context.vertexAttribPointer(de.peote.view.Program.aPosition,4,5122,false,de.peote.view.element.BufferElementSimple.VERTEX_STRIDE,0);
		lime.graphics.opengl.GL.context.vertexAttribPointer(de.peote.view.Program.aTime,2,5126,false,de.peote.view.element.BufferElementSimple.VERTEX_STRIDE,de.peote.view.element.BufferElementSimple.TIME_OFFSET);
		lime.graphics.opengl.GL.context.vertexAttribPointer(de.peote.view.Program.aZindex,1,5126,false,de.peote.view.element.BufferElementSimple.VERTEX_STRIDE,de.peote.view.element.BufferElementSimple.PARAM_OFFSET);
		lime.graphics.opengl.GL.context.vertexAttribPointer(de.peote.view.Program.aTexCoord,2,5122,false,de.peote.view.element.BufferElementSimple.VERTEX_STRIDE,de.peote.view.element.BufferElementSimple.TEX_OFFSET);
	}
	,bufferDataFull: function(x_start,y_start,x_end,y_end,t_start,t_end,z,tx,ty) {
		this.buffFull.write_2_Short(x_start,y_start);
		this.buffFull.write_2_Short(x_end,y_end);
		this.buffFull.write_2_Float(t_start,t_end);
		this.buffFull.write_1_Float(z);
		this.buffFull.write_2_Short(tx,ty);
	}
	,bufferDataTex: function(b,tx,ty) {
		b.byteOffset = 0;
		b.dataView.setInt16(b.byteOffset,tx,true);
		b.dataView.setInt16(b.byteOffset + 2,ty,true);
		b.byteOffset += 4;
		b.byteOffset = 0;
	}
	,del: function(e) {
		lime.graphics.opengl.GL.context.bindBuffer(34962,this.glBuff);
		lime.graphics.opengl.GL.context.bufferSubData(34962,e.buf_pos * de.peote.view.element.BufferElementSimple.VERTEX_STRIDE,this.emptyBuffFull.dataView);
		lime.graphics.opengl.GL.context.bindBuffer(34962,null);
	}
	,set: function(e,param) {
		var buf_pos = e.buf_pos;
		var x1 = param.start.x;
		var y1 = param.start.y;
		var x2 = param.end.x;
		var y2 = param.end.y;
		var xw1 = x1 + param.start.w;
		var yh1 = y1 + param.start.h;
		var xw2 = x2 + param.end.w;
		var yh2 = y2 + param.end.h;
		var t1 = param.start.time;
		var t2 = param.end.time;
		var z = param.z;
		var tx = param.tx;
		var ty = param.ty;
		var txw = tx + param.tw;
		var tyh = ty + param.th;
		this.buffFull.byteOffset = 0;
		this.buffFull.write_2_Short(xw1,yh1);
		this.buffFull.write_2_Short(xw2,yh2);
		this.buffFull.write_2_Float(t1,t2);
		this.buffFull.write_1_Float(z);
		this.buffFull.write_2_Short(txw,tyh);
		this.buffFull.write_2_Short(xw1,yh1);
		this.buffFull.write_2_Short(xw2,yh2);
		this.buffFull.write_2_Float(t1,t2);
		this.buffFull.write_1_Float(z);
		this.buffFull.write_2_Short(txw,tyh);
		this.buffFull.write_2_Short(x1,yh1);
		this.buffFull.write_2_Short(x2,yh2);
		this.buffFull.write_2_Float(t1,t2);
		this.buffFull.write_1_Float(z);
		this.buffFull.write_2_Short(tx,tyh);
		this.buffFull.write_2_Short(xw1,y1);
		this.buffFull.write_2_Short(xw2,y2);
		this.buffFull.write_2_Float(t1,t2);
		this.buffFull.write_1_Float(z);
		this.buffFull.write_2_Short(txw,ty);
		this.buffFull.write_2_Short(x1,y1);
		this.buffFull.write_2_Short(x2,y2);
		this.buffFull.write_2_Float(t1,t2);
		this.buffFull.write_1_Float(z);
		this.buffFull.write_2_Short(tx,ty);
		this.buffFull.write_2_Short(x1,y1);
		this.buffFull.write_2_Short(x2,y2);
		this.buffFull.write_2_Float(t1,t2);
		this.buffFull.write_1_Float(z);
		this.buffFull.write_2_Short(tx,ty);
		this.buffFull.byteOffset = 0;
		lime.graphics.opengl.GL.context.bindBuffer(34962,this.glBuff);
		lime.graphics.opengl.GL.context.bufferSubData(34962,buf_pos * de.peote.view.element.BufferElementSimple.VERTEX_STRIDE,this.buffFull.dataView);
		lime.graphics.opengl.GL.context.bindBuffer(34962,null);
	}
	,__class__: de.peote.view.element.BufferElementSimple
};
de.peote.view.element.I_Element = function() { };
$hxClasses["de.peote.view.element.I_Element"] = de.peote.view.element.I_Element;
de.peote.view.element.I_Element.__name__ = true;
de.peote.view.element.I_Element.prototype = {
	__class__: de.peote.view.element.I_Element
};
de.peote.view.element.ElementSimple = function(param) {
	this.z = 0;
	this.time = 0.0;
	this.h = 100;
	this.w = 100;
	this.y = 0;
	this.x = 0;
	this.tile = -1;
	this.image = -1;
};
$hxClasses["de.peote.view.element.ElementSimple"] = de.peote.view.element.ElementSimple;
de.peote.view.element.ElementSimple.__name__ = true;
de.peote.view.element.ElementSimple.__interfaces__ = [de.peote.view.element.I_Element];
de.peote.view.element.ElementSimple.prototype = {
	set: function(bufferElement,param,texturecache) {
		if(param.x == null) param.x = this.x;
		if(param.y == null) param.y = this.y;
		if(param.w == null) param.w = this.w;
		if(param.h == null) param.h = this.h;
		if(param.time == null) param.time = this.time;
		if(param.start == null) param.start = { };
		if(param.start.x == null) param.start.x = param.x;
		if(param.start.y == null) param.start.y = param.y;
		if(param.start.w == null) param.start.w = param.w;
		if(param.start.h == null) param.start.h = param.h;
		if(param.start.time == null) param.start.time = param.time;
		if(param.end == null) param.end = { };
		if(param.end.x == null) param.end.x = param.x;
		if(param.end.y == null) param.end.y = param.y;
		if(param.end.w == null) param.end.w = param.w;
		if(param.end.h == null) param.end.h = param.h;
		if(param.end.time == null) param.end.time = param.time;
		if(param.z == null) param.z = this.z;
		if(param.image != null && param.image != this.image) {
			if(this.image != -1) texturecache.unUseImage(this.image);
			if(texturecache.useImage(param.image) != null) this.image = param.image;
		}
		if(this.image != -1) {
			var img = texturecache.image[this.image];
			if(param.tx == null) param.tx = img.tx;
			if(param.ty == null) param.ty = img.ty;
			if(param.tw == null) param.tw = img.tw;
			if(param.th == null) param.th = img.th;
		} else {
			if(param.tx == null) param.tx = 0;
			if(param.ty == null) param.ty = 0;
			if(param.tw == null) param.tw = param.w;
			if(param.th == null) param.th = param.h;
		}
		if(param.tile != null) this.tile = param.tile;
		if(this.tile != -1) {
			param.tx += Math.floor(this.tile % 16 * param.tw / 16);
			param.ty += Math.floor(Math.floor(this.tile / 16) * param.th / 16);
			param.tw = Math.floor(param.tw / 16);
			param.th = Math.floor(param.th / 16);
		}
		bufferElement.set(this,param);
		this.x = param.end.x;
		this.y = param.end.y;
		this.z = param.z;
		this.w = param.end.w;
		this.h = param.end.h;
		this.time = param.end.time;
	}
	,bufferUpdate: function(a,b) {
		this.act_program = a;
		this.buf_pos = b;
	}
	,del: function(bufferElement,texturecache) {
		bufferElement.del(this);
		if(this.image != -1) texturecache.unUseImage(this.image);
	}
	,__class__: de.peote.view.element.ElementSimple
};
de.peote.view.texture = {};
de.peote.view.texture.Image = function(image_url,w,h) {
	this.used = 0;
	this.holePos = -1;
	this.url = image_url;
	this.tw = w;
	this.th = h;
};
$hxClasses["de.peote.view.texture.Image"] = de.peote.view.texture.Image;
de.peote.view.texture.Image.__name__ = true;
de.peote.view.texture.Image.prototype = {
	load: function(onload,onerror) {
		var _g = this;
		var image;
		var _this = window.document;
		image = _this.createElement("img");
		image.onload = function(a) {
			try {
				var tmp_canvas;
				var _this1 = window.document;
				tmp_canvas = _this1.createElement("canvas");
				tmp_canvas.width = image.width;
				tmp_canvas.height = image.height;
				var tmp_context = tmp_canvas.getContext("2d");
				tmp_context.clearRect(0,0,tmp_canvas.width,tmp_canvas.height);
				tmp_context.drawImage(image,0,0,image.width,image.height);
				var image_bytes = tmp_context.getImageData(0,0,tmp_canvas.width,tmp_canvas.height);
				var imageData = new Uint8Array(image_bytes.data);
				tmp_canvas = null;
				tmp_context = null;
				image_bytes = null;
				onload(_g,image.width,image.height,imageData);
			} catch( e ) {
				onerror(e);
			}
		};
		image.src = this.url;
	}
	,__class__: de.peote.view.texture.Image
};
de.peote.view.texture.Texture = function() {
};
$hxClasses["de.peote.view.texture.Texture"] = de.peote.view.texture.Texture;
de.peote.view.texture.Texture.__name__ = true;
de.peote.view.texture.Texture.createEmptyTexture = function(width,height) {
	var texture = lime.graphics.opengl.GL.context.createTexture();
	lime.graphics.opengl.GL.context.bindTexture(3553,texture);
	lime.graphics.opengl.GL.context.texImage2D(3553,0,6408,width,height,0,6408,5121,null);
	lime.graphics.opengl.GL.context.texParameteri(3553,10240,9729);
	lime.graphics.opengl.GL.context.texParameteri(3553,10241,9729);
	lime.graphics.opengl.GL.context.bindTexture(3553,null);
	return texture;
};
de.peote.view.texture.Texture.createSubTexture = function(t,x,y,w,h,data) {
	lime.graphics.opengl.GL.context.bindTexture(3553,t);
	lime.graphics.opengl.GL.context.texSubImage2D(3553,0,x,y,w,h,6408,5121,data);
	lime.graphics.opengl.GL.context.bindTexture(3553,null);
};
de.peote.view.texture.Texture.prototype = {
	__class__: de.peote.view.texture.Texture
};
de.peote.view.texture.TextureCache = function(img_width,img_height,max_images) {
	this.isLoading = 0;
	this.texture = null;
	this.segment_width = img_width;
	this.segment_height = img_height;
	de.peote.view.texture.TextureCache.max_texture_size = Math.floor(lime.graphics.opengl.GL.context.getParameter(3379) / 2);
	var this1;
	this1 = new Array(max_images);
	this.image = this1;
	this.unusedImages = new haxe.ds.IntMap();
	this.imgLoadQueue = new Array();
	this.max_h_segments = Math.floor(de.peote.view.texture.TextureCache.max_texture_size / this.segment_width);
	this.max_v_segments = Math.floor(de.peote.view.texture.TextureCache.max_texture_size / this.segment_height);
	this.segment_holes = new de.peote.tools.Holes(this.max_h_segments * this.max_v_segments);
	haxe.Log.trace("TextureCache: max_h_segments=" + this.max_h_segments + " segment_width=" + this.segment_width + " max_v_segments=" + this.max_v_segments + " segment_height=" + this.segment_height,{ fileName : "TextureCache.hx", lineNumber : 78, className : "de.peote.view.texture.TextureCache", methodName : "new"});
	this.texture = de.peote.view.texture.Texture.createEmptyTexture(this.max_h_segments * this.segment_width,this.max_v_segments * this.segment_height);
};
$hxClasses["de.peote.view.texture.TextureCache"] = de.peote.view.texture.TextureCache;
de.peote.view.texture.TextureCache.__name__ = true;
de.peote.view.texture.TextureCache.prototype = {
	onerror: function(msg) {
		haxe.Log.trace(msg,{ fileName : "TextureCache.hx", lineNumber : 84, className : "de.peote.view.texture.TextureCache", methodName : "onerror"});
	}
	,setImage: function(image_nr,imageUrl,w,h) {
		var val = new de.peote.view.texture.Image(imageUrl,w,h);
		this.image[image_nr] = val;
	}
	,getImage: function(image_nr) {
		return this.image[image_nr];
	}
	,useImage: function(image_nr) {
		var img = this.image[image_nr];
		if(img.used++ == 0) {
			if(img.holePos == -1) {
				if(this.segment_holes.hole.length == 0) {
					haxe.Log.trace("TextureCache is FULL -> clear() ",{ fileName : "TextureCache.hx", lineNumber : 111, className : "de.peote.view.texture.TextureCache", methodName : "useImage"});
					if(this.clear() == 0) {
						haxe.Log.trace(" ============ ERROR: TextureCache cant cleaned ==========",{ fileName : "TextureCache.hx", lineNumber : 114, className : "de.peote.view.texture.TextureCache", methodName : "useImage"});
						img = null;
					}
				}
				if(img != null) {
					img.holePos = this.segment_holes.getHole();
					img.tx = img.holePos % this.max_h_segments * this.segment_width;
					img.ty = Math.floor(img.holePos / this.max_h_segments) * this.segment_height;
					this.imgLoadQueue.push(img);
					if(this.isLoading++ == 0) this.imgLoadQueue.shift().load($bind(this,this.onImageLoad),$bind(this,this.onerror));
				}
			}
		}
		return img;
	}
	,unUseImage: function(image_nr) {
		var img = this.image[image_nr];
		if(--img.used == 0) this.unusedImages.set(image_nr,true);
	}
	,startLoadQueue: function() {
		if(this.isLoading++ == 0) this.imgLoadQueue.shift().load($bind(this,this.onImageLoad),$bind(this,this.onerror));
	}
	,loadNextImage: function() {
		if(this.imgLoadQueue.length == 0) this.isLoading = 0; else this.imgLoadQueue.shift().load($bind(this,this.onImageLoad),$bind(this,this.onerror));
	}
	,onImageLoad: function(img,w,h,data) {
		if(img.holePos > -1) de.peote.view.texture.Texture.createSubTexture(this.texture,img.holePos % this.max_h_segments * this.segment_width,Math.floor(img.holePos / this.max_h_segments) * this.segment_height,w,h,data);
		if(this.imgLoadQueue.length == 0) this.isLoading = 0; else this.imgLoadQueue.shift().load($bind(this,this.onImageLoad),$bind(this,this.onerror));
	}
	,clear: function() {
		var numCleaned = 0;
		var unusedImg;
		var $it0 = this.unusedImages.keys();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			this.unusedImages.remove(i);
			unusedImg = this.image[i];
			if(unusedImg.used == 0) {
				this.segment_holes.addHole(unusedImg.holePos);
				unusedImg.holePos = -1;
				numCleaned++;
			}
		}
		return numCleaned;
	}
	,__class__: de.peote.view.texture.TextureCache
};
var format = {};
format.png = {};
format.png.Color = $hxClasses["format.png.Color"] = { __ename__ : true, __constructs__ : ["ColGrey","ColTrue","ColIndexed"] };
format.png.Color.ColGrey = function(alpha) { var $x = ["ColGrey",0,alpha]; $x.__enum__ = format.png.Color; return $x; };
format.png.Color.ColTrue = function(alpha) { var $x = ["ColTrue",1,alpha]; $x.__enum__ = format.png.Color; return $x; };
format.png.Color.ColIndexed = ["ColIndexed",2];
format.png.Color.ColIndexed.__enum__ = format.png.Color;
format.png.Chunk = $hxClasses["format.png.Chunk"] = { __ename__ : true, __constructs__ : ["CEnd","CHeader","CData","CPalette","CUnknown"] };
format.png.Chunk.CEnd = ["CEnd",0];
format.png.Chunk.CEnd.__enum__ = format.png.Chunk;
format.png.Chunk.CHeader = function(h) { var $x = ["CHeader",1,h]; $x.__enum__ = format.png.Chunk; return $x; };
format.png.Chunk.CData = function(b) { var $x = ["CData",2,b]; $x.__enum__ = format.png.Chunk; return $x; };
format.png.Chunk.CPalette = function(b) { var $x = ["CPalette",3,b]; $x.__enum__ = format.png.Chunk; return $x; };
format.png.Chunk.CUnknown = function(id,data) { var $x = ["CUnknown",4,id,data]; $x.__enum__ = format.png.Chunk; return $x; };
format.png.Reader = function(i) {
	this.i = i;
	i.set_bigEndian(true);
	this.checkCRC = true;
};
$hxClasses["format.png.Reader"] = format.png.Reader;
format.png.Reader.__name__ = true;
format.png.Reader.prototype = {
	read: function() {
		var _g = 0;
		var _g1 = [137,80,78,71,13,10,26,10];
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			if(this.i.readByte() != b) throw "Invalid header";
		}
		var l = new List();
		while(true) {
			var c = this.readChunk();
			l.add(c);
			if(c == format.png.Chunk.CEnd) break;
		}
		return l;
	}
	,readHeader: function(i) {
		i.set_bigEndian(true);
		var width = i.readInt32();
		var height = i.readInt32();
		var colbits = i.readByte();
		var color = i.readByte();
		var color1;
		switch(color) {
		case 0:
			color1 = format.png.Color.ColGrey(false);
			break;
		case 2:
			color1 = format.png.Color.ColTrue(false);
			break;
		case 3:
			color1 = format.png.Color.ColIndexed;
			break;
		case 4:
			color1 = format.png.Color.ColGrey(true);
			break;
		case 6:
			color1 = format.png.Color.ColTrue(true);
			break;
		default:
			throw "Unknown color model " + color + ":" + colbits;
		}
		var compress = i.readByte();
		var filter = i.readByte();
		if(compress != 0 || filter != 0) throw "Invalid header";
		var interlace = i.readByte();
		if(interlace != 0 && interlace != 1) throw "Invalid header";
		return { width : width, height : height, colbits : colbits, color : color1, interlaced : interlace == 1};
	}
	,readChunk: function() {
		var dataLen = this.i.readInt32();
		var id = this.i.readString(4);
		var data = this.i.read(dataLen);
		var crc = this.i.readInt32();
		if(this.checkCRC) {
			var c = new haxe.crypto.Crc32();
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				c["byte"](HxOverrides.cca(id,i));
			}
			c.update(data,0,data.length);
			if(c.get() != crc) throw "CRC check failure";
		}
		switch(id) {
		case "IEND":
			return format.png.Chunk.CEnd;
		case "IHDR":
			return format.png.Chunk.CHeader(this.readHeader(new haxe.io.BytesInput(data)));
		case "IDAT":
			return format.png.Chunk.CData(data);
		case "PLTE":
			return format.png.Chunk.CPalette(data);
		default:
			return format.png.Chunk.CUnknown(id,data);
		}
	}
	,__class__: format.png.Reader
};
format.png.Tools = function() { };
$hxClasses["format.png.Tools"] = format.png.Tools;
format.png.Tools.__name__ = true;
format.png.Tools.getHeader = function(d) {
	var $it0 = d.iterator();
	while( $it0.hasNext() ) {
		var c = $it0.next();
		switch(c[1]) {
		case 1:
			var h = c[2];
			return h;
		default:
		}
	}
	throw "Header not found";
};
format.png.Tools.getPalette = function(d) {
	var $it0 = d.iterator();
	while( $it0.hasNext() ) {
		var c = $it0.next();
		switch(c[1]) {
		case 3:
			var b = c[2];
			return b;
		default:
		}
	}
	return null;
};
format.png.Tools.filter = function(data,x,y,stride,prev,p,numChannels) {
	if(numChannels == null) numChannels = 4;
	var b;
	if(y == 0) b = 0; else b = data.b[p - stride];
	var c;
	if(x == 0 || y == 0) c = 0; else c = data.b[p - stride - numChannels];
	var k = prev + b - c;
	var pa = k - prev;
	if(pa < 0) pa = -pa;
	var pb = k - b;
	if(pb < 0) pb = -pb;
	var pc = k - c;
	if(pc < 0) pc = -pc;
	if(pa <= pb && pa <= pc) return prev; else if(pb <= pc) return b; else return c;
};
format.png.Tools.reverseBytes = function(b) {
	var p = 0;
	var _g1 = 0;
	var _g = b.length >> 2;
	while(_g1 < _g) {
		var i = _g1++;
		var b1 = b.b[p];
		var g = b.b[p + 1];
		var r = b.b[p + 2];
		var a = b.b[p + 3];
		var p1 = p++;
		b.b[p1] = a & 255;
		var p2 = p++;
		b.b[p2] = r & 255;
		var p3 = p++;
		b.b[p3] = g & 255;
		var p4 = p++;
		b.b[p4] = b1 & 255;
	}
};
format.png.Tools.extractGrey = function(d) {
	var h = format.png.Tools.getHeader(d);
	var grey = haxe.io.Bytes.alloc(h.width * h.height);
	var data = null;
	var fullData = null;
	var $it0 = d.iterator();
	while( $it0.hasNext() ) {
		var c = $it0.next();
		switch(c[1]) {
		case 2:
			var b = c[2];
			if(fullData != null) fullData.add(b); else if(data == null) data = b; else {
				fullData = new haxe.io.BytesBuffer();
				fullData.add(data);
				fullData.add(b);
				data = null;
			}
			break;
		default:
		}
	}
	if(fullData != null) data = fullData.getBytes();
	if(data == null) throw "Data not found";
	data = format.tools.Inflate.run(data);
	var r = 0;
	var w = 0;
	{
		var _g = h.color;
		switch(_g[1]) {
		case 0:
			var alpha = _g[2];
			if(h.colbits != 8) throw "Unsupported color mode";
			var width = h.width;
			var stride;
			stride = (alpha?2:1) * width + 1;
			if(data.length < h.height * stride) throw "Not enough data";
			var rinc;
			if(alpha) rinc = 2; else rinc = 1;
			var _g2 = 0;
			var _g1 = h.height;
			while(_g2 < _g1) {
				var y = _g2++;
				var f = data.get(r++);
				switch(f) {
				case 0:
					var _g3 = 0;
					while(_g3 < width) {
						var x = _g3++;
						var v = data.b[r];
						r += rinc;
						grey.set(w++,v);
					}
					break;
				case 1:
					var cv = 0;
					var _g31 = 0;
					while(_g31 < width) {
						var x1 = _g31++;
						cv += data.b[r];
						r += rinc;
						grey.set(w++,cv);
					}
					break;
				case 2:
					var stride1;
					if(y == 0) stride1 = 0; else stride1 = width;
					var _g32 = 0;
					while(_g32 < width) {
						var x2 = _g32++;
						var v1 = data.b[r] + grey.b[w - stride1];
						r += rinc;
						grey.set(w++,v1);
					}
					break;
				case 3:
					var cv1 = 0;
					var stride2;
					if(y == 0) stride2 = 0; else stride2 = width;
					var _g33 = 0;
					while(_g33 < width) {
						var x3 = _g33++;
						cv1 = data.b[r] + (cv1 + grey.b[w - stride2] >> 1) & 255;
						r += rinc;
						grey.set(w++,cv1);
					}
					break;
				case 4:
					var stride3 = width;
					var cv2 = 0;
					var _g34 = 0;
					while(_g34 < width) {
						var x4 = _g34++;
						cv2 = format.png.Tools.filter(grey,x4,y,stride3,cv2,w,1) + data.b[r] & 255;
						r += rinc;
						grey.set(w++,cv2);
					}
					break;
				default:
					throw "Invalid filter " + f;
				}
			}
			break;
		default:
			throw "Unsupported color mode";
		}
	}
	return grey;
};
format.png.Tools.extract32 = function(d,bytes) {
	var h = format.png.Tools.getHeader(d);
	var bgra;
	if(bytes == null) bgra = haxe.io.Bytes.alloc(h.width * h.height * 4); else bgra = bytes;
	var data = null;
	var fullData = null;
	var $it0 = d.iterator();
	while( $it0.hasNext() ) {
		var c = $it0.next();
		switch(c[1]) {
		case 2:
			var b = c[2];
			if(fullData != null) fullData.add(b); else if(data == null) data = b; else {
				fullData = new haxe.io.BytesBuffer();
				fullData.add(data);
				fullData.add(b);
				data = null;
			}
			break;
		default:
		}
	}
	if(fullData != null) data = fullData.getBytes();
	if(data == null) throw "Data not found";
	data = format.tools.Inflate.run(data);
	var r = 0;
	var w = 0;
	{
		var _g = h.color;
		switch(_g[1]) {
		case 2:
			var pal = format.png.Tools.getPalette(d);
			if(pal == null) throw "PNG Palette is missing";
			var alpha = null;
			try {
				var $it1 = d.iterator();
				while( $it1.hasNext() ) {
					var t = $it1.next();
					switch(t[1]) {
					case 4:
						switch(t[2]) {
						case "tRNS":
							var data1 = t[3];
							alpha = data1;
							throw "__break__";
							break;
						default:
						}
						break;
					default:
					}
				}
			} catch( e ) { if( e != "__break__" ) throw e; }
			if(alpha != null && alpha.length < 1 << h.colbits) {
				var alpha2 = haxe.io.Bytes.alloc(1 << h.colbits);
				alpha2.blit(0,alpha,0,alpha.length);
				alpha2.fill(alpha.length,alpha2.length - alpha.length,255);
				alpha = alpha2;
			}
			var width = h.width;
			var stride = Math.ceil(width * h.colbits / 8) + 1;
			if(data.length < h.height * stride) throw "Not enough data";
			var vr;
			var vg;
			var vb;
			var va = 255;
			if(h.colbits == 8) {
				var _g2 = 0;
				var _g1 = h.height;
				while(_g2 < _g1) {
					var y = _g2++;
					var f = data.get(r++);
					switch(f) {
					case 0:
						var _g11 = 0;
						while(_g11 < width) {
							var x = _g11++;
							var c1 = data.get(r++);
							vr = pal.b[c1 * 3];
							vg = pal.b[c1 * 3 + 1];
							vb = pal.b[c1 * 3 + 2];
							if(alpha != null) va = alpha.b[c1];
							bgra.set(w++,vb);
							bgra.set(w++,vg);
							bgra.set(w++,vr);
							bgra.set(w++,va);
						}
						break;
					case 1:
						var cr = 0;
						var cg = 0;
						var cb = 0;
						var ca = 0;
						var _g12 = 0;
						while(_g12 < width) {
							var x1 = _g12++;
							var c2 = data.get(r++);
							vr = pal.b[c2 * 3];
							vg = pal.b[c2 * 3 + 1];
							vb = pal.b[c2 * 3 + 2];
							if(alpha != null) va = alpha.b[c2];
							cb += vb;
							bgra.set(w++,cb);
							cg += vg;
							bgra.set(w++,cg);
							cr += vr;
							bgra.set(w++,cr);
							ca += va;
							bgra.set(w++,ca);
							bgra.set(w++,va);
						}
						break;
					case 2:
						var stride1;
						if(y == 0) stride1 = 0; else stride1 = width * 4;
						var _g13 = 0;
						while(_g13 < width) {
							var x2 = _g13++;
							var c3 = data.get(r++);
							vr = pal.b[c3 * 3];
							vg = pal.b[c3 * 3 + 1];
							vb = pal.b[c3 * 3 + 2];
							if(alpha != null) va = alpha.b[c3];
							bgra.b[w] = vb + bgra.b[w - stride1] & 255;
							w++;
							bgra.b[w] = vg + bgra.b[w - stride1] & 255;
							w++;
							bgra.b[w] = vr + bgra.b[w - stride1] & 255;
							w++;
							bgra.b[w] = va + bgra.b[w - stride1] & 255;
							w++;
						}
						break;
					case 3:
						var cr1 = 0;
						var cg1 = 0;
						var cb1 = 0;
						var ca1 = 0;
						var stride2;
						if(y == 0) stride2 = 0; else stride2 = width * 4;
						var _g14 = 0;
						while(_g14 < width) {
							var x3 = _g14++;
							var c4 = data.get(r++);
							vr = pal.b[c4 * 3];
							vg = pal.b[c4 * 3 + 1];
							vb = pal.b[c4 * 3 + 2];
							if(alpha != null) va = alpha.b[c4];
							cb1 = vb + (cb1 + bgra.b[w - stride2] >> 1) & 255;
							bgra.set(w++,cb1);
							cg1 = vg + (cg1 + bgra.b[w - stride2] >> 1) & 255;
							bgra.set(w++,cg1);
							cr1 = vr + (cr1 + bgra.b[w - stride2] >> 1) & 255;
							bgra.set(w++,cr1);
							cr1 = va + (ca1 + bgra.b[w - stride2] >> 1) & 255;
							bgra.set(w++,ca1);
						}
						break;
					case 4:
						var stride3 = width * 4;
						var cr2 = 0;
						var cg2 = 0;
						var cb2 = 0;
						var ca2 = 0;
						var _g15 = 0;
						while(_g15 < width) {
							var x4 = _g15++;
							var c5 = data.get(r++);
							vr = pal.b[c5 * 3];
							vg = pal.b[c5 * 3 + 1];
							vb = pal.b[c5 * 3 + 2];
							if(alpha != null) va = alpha.b[c5];
							cb2 = format.png.Tools.filter(bgra,x4,y,stride3,cb2,w,null) + vb & 255;
							bgra.set(w++,cb2);
							cg2 = format.png.Tools.filter(bgra,x4,y,stride3,cg2,w,null) + vg & 255;
							bgra.set(w++,cg2);
							cr2 = format.png.Tools.filter(bgra,x4,y,stride3,cr2,w,null) + vr & 255;
							bgra.set(w++,cr2);
							ca2 = format.png.Tools.filter(bgra,x4,y,stride3,ca2,w,null) + va & 255;
							bgra.set(w++,ca2);
						}
						break;
					default:
						throw "Invalid filter " + f;
					}
				}
			} else if(h.colbits < 8) {
				var req = h.colbits;
				var mask = (1 << req) - 1;
				var _g21 = 0;
				var _g16 = h.height;
				while(_g21 < _g16) {
					var y1 = _g21++;
					var f1 = data.get(r++);
					var bits = 0;
					var nbits = 0;
					var v;
					switch(f1) {
					case 0:
						var _g17 = 0;
						while(_g17 < width) {
							var x5 = _g17++;
							var c6;
							if(nbits < req) {
								bits = bits << 8 | data.get(r++);
								nbits += 8;
							}
							v = bits >>> nbits - req & mask;
							nbits -= req;
							c6 = v;
							vr = pal.b[c6 * 3];
							vg = pal.b[c6 * 3 + 1];
							vb = pal.b[c6 * 3 + 2];
							if(alpha != null) va = alpha.b[c6];
							bgra.set(w++,vb);
							bgra.set(w++,vg);
							bgra.set(w++,vr);
							bgra.set(w++,va);
						}
						break;
					case 1:
						var cr3 = 0;
						var cg3 = 0;
						var cb3 = 0;
						var ca3 = 0;
						var _g18 = 0;
						while(_g18 < width) {
							var x6 = _g18++;
							var c7;
							if(nbits < req) {
								bits = bits << 8 | data.get(r++);
								nbits += 8;
							}
							v = bits >>> nbits - req & mask;
							nbits -= req;
							c7 = v;
							vr = pal.b[c7 * 3];
							vg = pal.b[c7 * 3 + 1];
							vb = pal.b[c7 * 3 + 2];
							if(alpha != null) va = alpha.b[c7];
							cb3 += vb;
							bgra.set(w++,cb3);
							cg3 += vg;
							bgra.set(w++,cg3);
							cr3 += vr;
							bgra.set(w++,cr3);
							ca3 += va;
							bgra.set(w++,ca3);
							bgra.set(w++,va);
						}
						break;
					case 2:
						var stride4;
						if(y1 == 0) stride4 = 0; else stride4 = width * 4;
						var _g19 = 0;
						while(_g19 < width) {
							var x7 = _g19++;
							var c8;
							if(nbits < req) {
								bits = bits << 8 | data.get(r++);
								nbits += 8;
							}
							v = bits >>> nbits - req & mask;
							nbits -= req;
							c8 = v;
							vr = pal.b[c8 * 3];
							vg = pal.b[c8 * 3 + 1];
							vb = pal.b[c8 * 3 + 2];
							if(alpha != null) va = alpha.b[c8];
							bgra.b[w] = vb + bgra.b[w - stride4] & 255;
							w++;
							bgra.b[w] = vg + bgra.b[w - stride4] & 255;
							w++;
							bgra.b[w] = vr + bgra.b[w - stride4] & 255;
							w++;
							bgra.b[w] = va + bgra.b[w - stride4] & 255;
							w++;
						}
						break;
					case 3:
						var cr4 = 0;
						var cg4 = 0;
						var cb4 = 0;
						var ca4 = 0;
						var stride5;
						if(y1 == 0) stride5 = 0; else stride5 = width * 4;
						var _g110 = 0;
						while(_g110 < width) {
							var x8 = _g110++;
							var c9;
							if(nbits < req) {
								bits = bits << 8 | data.get(r++);
								nbits += 8;
							}
							v = bits >>> nbits - req & mask;
							nbits -= req;
							c9 = v;
							vr = pal.b[c9 * 3];
							vg = pal.b[c9 * 3 + 1];
							vb = pal.b[c9 * 3 + 2];
							if(alpha != null) va = alpha.b[c9];
							cb4 = vb + (cb4 + bgra.b[w - stride5] >> 1) & 255;
							bgra.set(w++,cb4);
							cg4 = vg + (cg4 + bgra.b[w - stride5] >> 1) & 255;
							bgra.set(w++,cg4);
							cr4 = vr + (cr4 + bgra.b[w - stride5] >> 1) & 255;
							bgra.set(w++,cr4);
							cr4 = va + (ca4 + bgra.b[w - stride5] >> 1) & 255;
							bgra.set(w++,ca4);
						}
						break;
					case 4:
						var stride6 = width * 4;
						var cr5 = 0;
						var cg5 = 0;
						var cb5 = 0;
						var ca5 = 0;
						var _g111 = 0;
						while(_g111 < width) {
							var x9 = _g111++;
							var c10;
							if(nbits < req) {
								bits = bits << 8 | data.get(r++);
								nbits += 8;
							}
							v = bits >>> nbits - req & mask;
							nbits -= req;
							c10 = v;
							vr = pal.b[c10 * 3];
							vg = pal.b[c10 * 3 + 1];
							vb = pal.b[c10 * 3 + 2];
							if(alpha != null) va = alpha.b[c10];
							cb5 = format.png.Tools.filter(bgra,x9,y1,stride6,cb5,w,null) + vb & 255;
							bgra.set(w++,cb5);
							cg5 = format.png.Tools.filter(bgra,x9,y1,stride6,cg5,w,null) + vg & 255;
							bgra.set(w++,cg5);
							cr5 = format.png.Tools.filter(bgra,x9,y1,stride6,cr5,w,null) + vr & 255;
							bgra.set(w++,cr5);
							ca5 = format.png.Tools.filter(bgra,x9,y1,stride6,ca5,w,null) + va & 255;
							bgra.set(w++,ca5);
						}
						break;
					default:
						throw "Invalid filter " + f1;
					}
				}
			} else throw h.colbits + " indexed bits per pixel not supported";
			break;
		case 0:
			var alpha1 = _g[2];
			if(h.colbits != 8) throw "Unsupported color mode";
			var width1 = h.width;
			var stride7;
			stride7 = (alpha1?2:1) * width1 + 1;
			if(data.length < h.height * stride7) throw "Not enough data";
			var _g22 = 0;
			var _g112 = h.height;
			while(_g22 < _g112) {
				var y2 = _g22++;
				var f2 = data.get(r++);
				switch(f2) {
				case 0:
					if(alpha1) {
						var _g3 = 0;
						while(_g3 < width1) {
							var x10 = _g3++;
							var v1 = data.get(r++);
							bgra.set(w++,v1);
							bgra.set(w++,v1);
							bgra.set(w++,v1);
							bgra.set(w++,data.get(r++));
						}
					} else {
						var _g31 = 0;
						while(_g31 < width1) {
							var x11 = _g31++;
							var v2 = data.get(r++);
							bgra.set(w++,v2);
							bgra.set(w++,v2);
							bgra.set(w++,v2);
							bgra.set(w++,255);
						}
					}
					break;
				case 1:
					var cv = 0;
					var ca6 = 0;
					if(alpha1) {
						var _g32 = 0;
						while(_g32 < width1) {
							var x12 = _g32++;
							cv += data.get(r++);
							bgra.set(w++,cv);
							bgra.set(w++,cv);
							bgra.set(w++,cv);
							ca6 += data.get(r++);
							bgra.set(w++,ca6);
						}
					} else {
						var _g33 = 0;
						while(_g33 < width1) {
							var x13 = _g33++;
							cv += data.get(r++);
							bgra.set(w++,cv);
							bgra.set(w++,cv);
							bgra.set(w++,cv);
							bgra.set(w++,255);
						}
					}
					break;
				case 2:
					var stride8;
					if(y2 == 0) stride8 = 0; else stride8 = width1 * 4;
					if(alpha1) {
						var _g34 = 0;
						while(_g34 < width1) {
							var x14 = _g34++;
							var v3 = data.get(r++) + bgra.b[w - stride8];
							bgra.set(w++,v3);
							bgra.set(w++,v3);
							bgra.set(w++,v3);
							bgra.set(w++,data.get(r++) + bgra.b[w - stride8]);
						}
					} else {
						var _g35 = 0;
						while(_g35 < width1) {
							var x15 = _g35++;
							var v4 = data.get(r++) + bgra.b[w - stride8];
							bgra.set(w++,v4);
							bgra.set(w++,v4);
							bgra.set(w++,v4);
							bgra.set(w++,255);
						}
					}
					break;
				case 3:
					var cv1 = 0;
					var ca7 = 0;
					var stride9;
					if(y2 == 0) stride9 = 0; else stride9 = width1 * 4;
					if(alpha1) {
						var _g36 = 0;
						while(_g36 < width1) {
							var x16 = _g36++;
							cv1 = data.get(r++) + (cv1 + bgra.b[w - stride9] >> 1) & 255;
							bgra.set(w++,cv1);
							bgra.set(w++,cv1);
							bgra.set(w++,cv1);
							ca7 = data.get(r++) + (ca7 + bgra.b[w - stride9] >> 1) & 255;
							bgra.set(w++,ca7);
						}
					} else {
						var _g37 = 0;
						while(_g37 < width1) {
							var x17 = _g37++;
							cv1 = data.get(r++) + (cv1 + bgra.b[w - stride9] >> 1) & 255;
							bgra.set(w++,cv1);
							bgra.set(w++,cv1);
							bgra.set(w++,cv1);
							bgra.set(w++,255);
						}
					}
					break;
				case 4:
					var stride10 = width1 * 4;
					var cv2 = 0;
					var ca8 = 0;
					if(alpha1) {
						var _g38 = 0;
						while(_g38 < width1) {
							var x18 = _g38++;
							cv2 = format.png.Tools.filter(bgra,x18,y2,stride10,cv2,w,null) + data.get(r++) & 255;
							bgra.set(w++,cv2);
							bgra.set(w++,cv2);
							bgra.set(w++,cv2);
							ca8 = format.png.Tools.filter(bgra,x18,y2,stride10,ca8,w,null) + data.get(r++) & 255;
							bgra.set(w++,ca8);
						}
					} else {
						var _g39 = 0;
						while(_g39 < width1) {
							var x19 = _g39++;
							cv2 = format.png.Tools.filter(bgra,x19,y2,stride10,cv2,w,null) + data.get(r++) & 255;
							bgra.set(w++,cv2);
							bgra.set(w++,cv2);
							bgra.set(w++,cv2);
							bgra.set(w++,255);
						}
					}
					break;
				default:
					throw "Invalid filter " + f2;
				}
			}
			break;
		case 1:
			var alpha3 = _g[2];
			if(h.colbits != 8) throw "Unsupported color mode";
			var width2 = h.width;
			var stride11;
			stride11 = (alpha3?4:3) * width2 + 1;
			if(data.length < h.height * stride11) throw "Not enough data";
			var _g23 = 0;
			var _g113 = h.height;
			while(_g23 < _g113) {
				var y3 = _g23++;
				var f3 = data.get(r++);
				switch(f3) {
				case 0:
					if(alpha3) {
						var _g310 = 0;
						while(_g310 < width2) {
							var x20 = _g310++;
							bgra.set(w++,data.b[r + 2]);
							bgra.set(w++,data.b[r + 1]);
							bgra.set(w++,data.b[r]);
							bgra.set(w++,data.b[r + 3]);
							r += 4;
						}
					} else {
						var _g311 = 0;
						while(_g311 < width2) {
							var x21 = _g311++;
							bgra.set(w++,data.b[r + 2]);
							bgra.set(w++,data.b[r + 1]);
							bgra.set(w++,data.b[r]);
							bgra.set(w++,255);
							r += 3;
						}
					}
					break;
				case 1:
					var cr6 = 0;
					var cg6 = 0;
					var cb6 = 0;
					var ca9 = 0;
					if(alpha3) {
						var _g312 = 0;
						while(_g312 < width2) {
							var x22 = _g312++;
							cb6 += data.b[r + 2];
							bgra.set(w++,cb6);
							cg6 += data.b[r + 1];
							bgra.set(w++,cg6);
							cr6 += data.b[r];
							bgra.set(w++,cr6);
							ca9 += data.b[r + 3];
							bgra.set(w++,ca9);
							r += 4;
						}
					} else {
						var _g313 = 0;
						while(_g313 < width2) {
							var x23 = _g313++;
							cb6 += data.b[r + 2];
							bgra.set(w++,cb6);
							cg6 += data.b[r + 1];
							bgra.set(w++,cg6);
							cr6 += data.b[r];
							bgra.set(w++,cr6);
							bgra.set(w++,255);
							r += 3;
						}
					}
					break;
				case 2:
					var stride12;
					if(y3 == 0) stride12 = 0; else stride12 = width2 * 4;
					if(alpha3) {
						var _g314 = 0;
						while(_g314 < width2) {
							var x24 = _g314++;
							bgra.b[w] = data.b[r + 2] + bgra.b[w - stride12] & 255;
							w++;
							bgra.b[w] = data.b[r + 1] + bgra.b[w - stride12] & 255;
							w++;
							bgra.b[w] = data.b[r] + bgra.b[w - stride12] & 255;
							w++;
							bgra.b[w] = data.b[r + 3] + bgra.b[w - stride12] & 255;
							w++;
							r += 4;
						}
					} else {
						var _g315 = 0;
						while(_g315 < width2) {
							var x25 = _g315++;
							bgra.b[w] = data.b[r + 2] + bgra.b[w - stride12] & 255;
							w++;
							bgra.b[w] = data.b[r + 1] + bgra.b[w - stride12] & 255;
							w++;
							bgra.b[w] = data.b[r] + bgra.b[w - stride12] & 255;
							w++;
							bgra.set(w++,255);
							r += 3;
						}
					}
					break;
				case 3:
					var cr7 = 0;
					var cg7 = 0;
					var cb7 = 0;
					var ca10 = 0;
					var stride13;
					if(y3 == 0) stride13 = 0; else stride13 = width2 * 4;
					if(alpha3) {
						var _g316 = 0;
						while(_g316 < width2) {
							var x26 = _g316++;
							cb7 = data.b[r + 2] + (cb7 + bgra.b[w - stride13] >> 1) & 255;
							bgra.set(w++,cb7);
							cg7 = data.b[r + 1] + (cg7 + bgra.b[w - stride13] >> 1) & 255;
							bgra.set(w++,cg7);
							cr7 = data.b[r] + (cr7 + bgra.b[w - stride13] >> 1) & 255;
							bgra.set(w++,cr7);
							ca10 = data.b[r + 3] + (ca10 + bgra.b[w - stride13] >> 1) & 255;
							bgra.set(w++,ca10);
							r += 4;
						}
					} else {
						var _g317 = 0;
						while(_g317 < width2) {
							var x27 = _g317++;
							cb7 = data.b[r + 2] + (cb7 + bgra.b[w - stride13] >> 1) & 255;
							bgra.set(w++,cb7);
							cg7 = data.b[r + 1] + (cg7 + bgra.b[w - stride13] >> 1) & 255;
							bgra.set(w++,cg7);
							cr7 = data.b[r] + (cr7 + bgra.b[w - stride13] >> 1) & 255;
							bgra.set(w++,cr7);
							bgra.set(w++,255);
							r += 3;
						}
					}
					break;
				case 4:
					var stride14 = width2 * 4;
					var cr8 = 0;
					var cg8 = 0;
					var cb8 = 0;
					var ca11 = 0;
					if(alpha3) {
						var _g318 = 0;
						while(_g318 < width2) {
							var x28 = _g318++;
							cb8 = format.png.Tools.filter(bgra,x28,y3,stride14,cb8,w,null) + data.b[r + 2] & 255;
							bgra.set(w++,cb8);
							cg8 = format.png.Tools.filter(bgra,x28,y3,stride14,cg8,w,null) + data.b[r + 1] & 255;
							bgra.set(w++,cg8);
							cr8 = format.png.Tools.filter(bgra,x28,y3,stride14,cr8,w,null) + data.b[r] & 255;
							bgra.set(w++,cr8);
							ca11 = format.png.Tools.filter(bgra,x28,y3,stride14,ca11,w,null) + data.b[r + 3] & 255;
							bgra.set(w++,ca11);
							r += 4;
						}
					} else {
						var _g319 = 0;
						while(_g319 < width2) {
							var x29 = _g319++;
							cb8 = format.png.Tools.filter(bgra,x29,y3,stride14,cb8,w,null) + data.b[r + 2] & 255;
							bgra.set(w++,cb8);
							cg8 = format.png.Tools.filter(bgra,x29,y3,stride14,cg8,w,null) + data.b[r + 1] & 255;
							bgra.set(w++,cg8);
							cr8 = format.png.Tools.filter(bgra,x29,y3,stride14,cr8,w,null) + data.b[r] & 255;
							bgra.set(w++,cr8);
							bgra.set(w++,255);
							r += 3;
						}
					}
					break;
				default:
					throw "Invalid filter " + f3;
				}
			}
			break;
		}
	}
	return bgra;
};
format.png.Tools.buildGrey = function(width,height,data) {
	var rgb = haxe.io.Bytes.alloc(width * height + height);
	var w = 0;
	var r = 0;
	var _g = 0;
	while(_g < height) {
		var y = _g++;
		rgb.set(w++,0);
		var _g1 = 0;
		while(_g1 < width) {
			var x = _g1++;
			rgb.set(w++,data.get(r++));
		}
	}
	var l = new List();
	l.add(format.png.Chunk.CHeader({ width : width, height : height, colbits : 8, color : format.png.Color.ColGrey(false), interlaced : false}));
	l.add(format.png.Chunk.CData(format.tools.Deflate.run(rgb)));
	l.add(format.png.Chunk.CEnd);
	return l;
};
format.png.Tools.buildRGB = function(width,height,data) {
	var rgb = haxe.io.Bytes.alloc(width * height * 3 + height);
	var w = 0;
	var r = 0;
	var _g = 0;
	while(_g < height) {
		var y = _g++;
		rgb.set(w++,0);
		var _g1 = 0;
		while(_g1 < width) {
			var x = _g1++;
			rgb.set(w++,data.b[r + 2]);
			rgb.set(w++,data.b[r + 1]);
			rgb.set(w++,data.b[r]);
			r += 3;
		}
	}
	var l = new List();
	l.add(format.png.Chunk.CHeader({ width : width, height : height, colbits : 8, color : format.png.Color.ColTrue(false), interlaced : false}));
	l.add(format.png.Chunk.CData(format.tools.Deflate.run(rgb)));
	l.add(format.png.Chunk.CEnd);
	return l;
};
format.png.Tools.build32ARGB = function(width,height,data) {
	var rgba = haxe.io.Bytes.alloc(width * height * 4 + height);
	var w = 0;
	var r = 0;
	var _g = 0;
	while(_g < height) {
		var y = _g++;
		rgba.set(w++,0);
		var _g1 = 0;
		while(_g1 < width) {
			var x = _g1++;
			rgba.set(w++,data.b[r + 1]);
			rgba.set(w++,data.b[r + 2]);
			rgba.set(w++,data.b[r + 3]);
			rgba.set(w++,data.b[r]);
			r += 4;
		}
	}
	var l = new List();
	l.add(format.png.Chunk.CHeader({ width : width, height : height, colbits : 8, color : format.png.Color.ColTrue(true), interlaced : false}));
	l.add(format.png.Chunk.CData(format.tools.Deflate.run(rgba)));
	l.add(format.png.Chunk.CEnd);
	return l;
};
format.png.Tools.build32BGRA = function(width,height,data) {
	var rgba = haxe.io.Bytes.alloc(width * height * 4 + height);
	var w = 0;
	var r = 0;
	var _g = 0;
	while(_g < height) {
		var y = _g++;
		rgba.set(w++,0);
		var _g1 = 0;
		while(_g1 < width) {
			var x = _g1++;
			rgba.set(w++,data.b[r + 2]);
			rgba.set(w++,data.b[r + 1]);
			rgba.set(w++,data.b[r]);
			rgba.set(w++,data.b[r + 3]);
			r += 4;
		}
	}
	var l = new List();
	l.add(format.png.Chunk.CHeader({ width : width, height : height, colbits : 8, color : format.png.Color.ColTrue(true), interlaced : false}));
	l.add(format.png.Chunk.CData(format.tools.Deflate.run(rgba)));
	l.add(format.png.Chunk.CEnd);
	return l;
};
format.png.Writer = function(o) {
	this.o = o;
	o.set_bigEndian(true);
};
$hxClasses["format.png.Writer"] = format.png.Writer;
format.png.Writer.__name__ = true;
format.png.Writer.prototype = {
	write: function(png) {
		var _g = 0;
		var _g1 = [137,80,78,71,13,10,26,10];
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			this.o.writeByte(b);
		}
		var $it0 = png.iterator();
		while( $it0.hasNext() ) {
			var c = $it0.next();
			switch(c[1]) {
			case 1:
				var h = c[2];
				var b1 = new haxe.io.BytesOutput();
				b1.set_bigEndian(true);
				b1.writeInt32(h.width);
				b1.writeInt32(h.height);
				b1.writeByte(h.colbits);
				b1.writeByte((function($this) {
					var $r;
					var _g2 = h.color;
					$r = (function($this) {
						var $r;
						switch(_g2[1]) {
						case 0:
							$r = (function($this) {
								var $r;
								var alpha = _g2[2];
								$r = alpha?4:0;
								return $r;
							}($this));
							break;
						case 1:
							$r = (function($this) {
								var $r;
								var alpha1 = _g2[2];
								$r = alpha1?6:2;
								return $r;
							}($this));
							break;
						case 2:
							$r = 3;
							break;
						}
						return $r;
					}($this));
					return $r;
				}(this)));
				b1.writeByte(0);
				b1.writeByte(0);
				b1.writeByte(h.interlaced?1:0);
				this.writeChunk("IHDR",b1.getBytes());
				break;
			case 0:
				this.writeChunk("IEND",haxe.io.Bytes.alloc(0));
				break;
			case 2:
				var d = c[2];
				this.writeChunk("IDAT",d);
				break;
			case 3:
				var b2 = c[2];
				this.writeChunk("PLTE",b2);
				break;
			case 4:
				var data = c[3];
				var id = c[2];
				this.writeChunk(id,data);
				break;
			}
		}
	}
	,writeChunk: function(id,data) {
		this.o.writeInt32(data.length);
		this.o.writeString(id);
		this.o.write(data);
		var crc = new haxe.crypto.Crc32();
		var _g = 0;
		while(_g < 4) {
			var i = _g++;
			crc["byte"](HxOverrides.cca(id,i));
		}
		crc.update(data,0,data.length);
		this.o.writeInt32(crc.get());
	}
	,__class__: format.png.Writer
};
format.tools = {};
format.tools.Adler32 = function() {
	this.a1 = 1;
	this.a2 = 0;
};
$hxClasses["format.tools.Adler32"] = format.tools.Adler32;
format.tools.Adler32.__name__ = true;
format.tools.Adler32.read = function(i) {
	var a = new format.tools.Adler32();
	var a2a = i.readByte();
	var a2b = i.readByte();
	var a1a = i.readByte();
	var a1b = i.readByte();
	a.a1 = a1a << 8 | a1b;
	a.a2 = a2a << 8 | a2b;
	return a;
};
format.tools.Adler32.prototype = {
	update: function(b,pos,len) {
		var a1 = this.a1;
		var a2 = this.a2;
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var p = _g1++;
			var c = b.b[p];
			a1 = (a1 + c) % 65521;
			a2 = (a2 + a1) % 65521;
		}
		this.a1 = a1;
		this.a2 = a2;
	}
	,equals: function(a) {
		return a.a1 == this.a1 && a.a2 == this.a2;
	}
	,__class__: format.tools.Adler32
};
format.tools.Deflate = function() { };
$hxClasses["format.tools.Deflate"] = format.tools.Deflate;
format.tools.Deflate.__name__ = true;
format.tools.Deflate.run = function(b) {
	throw "Deflate is not supported on this platform";
	return null;
};
format.tools.Huffman = $hxClasses["format.tools.Huffman"] = { __ename__ : true, __constructs__ : ["Found","NeedBit","NeedBits"] };
format.tools.Huffman.Found = function(i) { var $x = ["Found",0,i]; $x.__enum__ = format.tools.Huffman; return $x; };
format.tools.Huffman.NeedBit = function(left,right) { var $x = ["NeedBit",1,left,right]; $x.__enum__ = format.tools.Huffman; return $x; };
format.tools.Huffman.NeedBits = function(n,table) { var $x = ["NeedBits",2,n,table]; $x.__enum__ = format.tools.Huffman; return $x; };
format.tools.HuffTools = function() {
};
$hxClasses["format.tools.HuffTools"] = format.tools.HuffTools;
format.tools.HuffTools.__name__ = true;
format.tools.HuffTools.prototype = {
	treeDepth: function(t) {
		switch(t[1]) {
		case 0:
			return 0;
		case 2:
			throw "assert";
			break;
		case 1:
			var b = t[3];
			var a = t[2];
			var da = this.treeDepth(a);
			var db = this.treeDepth(b);
			return 1 + (da < db?da:db);
		}
	}
	,treeCompress: function(t) {
		var d = this.treeDepth(t);
		if(d == 0) return t;
		if(d == 1) switch(t[1]) {
		case 1:
			var b = t[3];
			var a = t[2];
			return format.tools.Huffman.NeedBit(this.treeCompress(a),this.treeCompress(b));
		default:
			throw "assert";
		}
		var size = 1 << d;
		var table = new Array();
		var _g = 0;
		while(_g < size) {
			var i = _g++;
			table.push(format.tools.Huffman.Found(-1));
		}
		this.treeWalk(table,0,0,d,t);
		return format.tools.Huffman.NeedBits(d,table);
	}
	,treeWalk: function(table,p,cd,d,t) {
		switch(t[1]) {
		case 1:
			var b = t[3];
			var a = t[2];
			if(d > 0) {
				this.treeWalk(table,p,cd + 1,d - 1,a);
				this.treeWalk(table,p | 1 << cd,cd + 1,d - 1,b);
			} else table[p] = this.treeCompress(t);
			break;
		default:
			table[p] = this.treeCompress(t);
		}
	}
	,treeMake: function(bits,maxbits,v,len) {
		if(len > maxbits) throw "Invalid huffman";
		var idx = v << 5 | len;
		if(bits.exists(idx)) return format.tools.Huffman.Found(bits.get(idx));
		v <<= 1;
		len += 1;
		return format.tools.Huffman.NeedBit(this.treeMake(bits,maxbits,v,len),this.treeMake(bits,maxbits,v | 1,len));
	}
	,make: function(lengths,pos,nlengths,maxbits) {
		var counts = new Array();
		var tmp = new Array();
		if(maxbits > 32) throw "Invalid huffman";
		var _g = 0;
		while(_g < maxbits) {
			var i = _g++;
			counts.push(0);
			tmp.push(0);
		}
		var _g1 = 0;
		while(_g1 < nlengths) {
			var i1 = _g1++;
			var p = lengths[i1 + pos];
			if(p >= maxbits) throw "Invalid huffman";
			counts[p]++;
		}
		var code = 0;
		var _g11 = 1;
		var _g2 = maxbits - 1;
		while(_g11 < _g2) {
			var i2 = _g11++;
			code = code + counts[i2] << 1;
			tmp[i2] = code;
		}
		var bits = new haxe.ds.IntMap();
		var _g3 = 0;
		while(_g3 < nlengths) {
			var i3 = _g3++;
			var l = lengths[i3 + pos];
			if(l != 0) {
				var n = tmp[l - 1];
				tmp[l - 1] = n + 1;
				bits.set(n << 5 | l,i3);
			}
		}
		return this.treeCompress(format.tools.Huffman.NeedBit(this.treeMake(bits,maxbits,0,1),this.treeMake(bits,maxbits,1,1)));
	}
	,__class__: format.tools.HuffTools
};
format.tools.Inflate = function() { };
$hxClasses["format.tools.Inflate"] = format.tools.Inflate;
format.tools.Inflate.__name__ = true;
format.tools.Inflate.run = function(bytes) {
	return format.tools.InflateImpl.run(new haxe.io.BytesInput(bytes));
};
format.tools._InflateImpl = {};
format.tools._InflateImpl.Window = function(hasCrc) {
	this.buffer = haxe.io.Bytes.alloc(65536);
	this.pos = 0;
	if(hasCrc) this.crc = new format.tools.Adler32();
};
$hxClasses["format.tools._InflateImpl.Window"] = format.tools._InflateImpl.Window;
format.tools._InflateImpl.Window.__name__ = true;
format.tools._InflateImpl.Window.prototype = {
	slide: function() {
		if(this.crc != null) this.crc.update(this.buffer,0,32768);
		var b = haxe.io.Bytes.alloc(65536);
		this.pos -= 32768;
		b.blit(0,this.buffer,32768,this.pos);
		this.buffer = b;
	}
	,addBytes: function(b,p,len) {
		if(this.pos + len > 65536) this.slide();
		this.buffer.blit(this.pos,b,p,len);
		this.pos += len;
	}
	,addByte: function(c) {
		if(this.pos == 65536) this.slide();
		this.buffer.b[this.pos] = c & 255;
		this.pos++;
	}
	,getLastChar: function() {
		return this.buffer.b[this.pos - 1];
	}
	,available: function() {
		return this.pos;
	}
	,checksum: function() {
		if(this.crc != null) this.crc.update(this.buffer,0,this.pos);
		return this.crc;
	}
	,__class__: format.tools._InflateImpl.Window
};
format.tools._InflateImpl.State = $hxClasses["format.tools._InflateImpl.State"] = { __ename__ : true, __constructs__ : ["Head","Block","CData","Flat","Crc","Dist","DistOne","Done"] };
format.tools._InflateImpl.State.Head = ["Head",0];
format.tools._InflateImpl.State.Head.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.Block = ["Block",1];
format.tools._InflateImpl.State.Block.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.CData = ["CData",2];
format.tools._InflateImpl.State.CData.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.Flat = ["Flat",3];
format.tools._InflateImpl.State.Flat.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.Crc = ["Crc",4];
format.tools._InflateImpl.State.Crc.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.Dist = ["Dist",5];
format.tools._InflateImpl.State.Dist.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.DistOne = ["DistOne",6];
format.tools._InflateImpl.State.DistOne.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.Done = ["Done",7];
format.tools._InflateImpl.State.Done.__enum__ = format.tools._InflateImpl.State;
format.tools.InflateImpl = function(i,header,crc) {
	if(crc == null) crc = true;
	if(header == null) header = true;
	this["final"] = false;
	this.htools = new format.tools.HuffTools();
	this.huffman = this.buildFixedHuffman();
	this.huffdist = null;
	this.len = 0;
	this.dist = 0;
	if(header) this.state = format.tools._InflateImpl.State.Head; else this.state = format.tools._InflateImpl.State.Block;
	this.input = i;
	this.bits = 0;
	this.nbits = 0;
	this.needed = 0;
	this.output = null;
	this.outpos = 0;
	this.lengths = new Array();
	var _g = 0;
	while(_g < 19) {
		var i1 = _g++;
		this.lengths.push(-1);
	}
	this.window = new format.tools._InflateImpl.Window(crc);
};
$hxClasses["format.tools.InflateImpl"] = format.tools.InflateImpl;
format.tools.InflateImpl.__name__ = true;
format.tools.InflateImpl.run = function(i,bufsize) {
	if(bufsize == null) bufsize = 65536;
	var buf = haxe.io.Bytes.alloc(bufsize);
	var output = new haxe.io.BytesBuffer();
	var inflate = new format.tools.InflateImpl(i);
	while(true) {
		var len = inflate.readBytes(buf,0,bufsize);
		output.addBytes(buf,0,len);
		if(len < bufsize) break;
	}
	return output.getBytes();
};
format.tools.InflateImpl.prototype = {
	buildFixedHuffman: function() {
		if(format.tools.InflateImpl.FIXED_HUFFMAN != null) return format.tools.InflateImpl.FIXED_HUFFMAN;
		var a = new Array();
		var _g = 0;
		while(_g < 288) {
			var n = _g++;
			a.push(n <= 143?8:n <= 255?9:n <= 279?7:8);
		}
		format.tools.InflateImpl.FIXED_HUFFMAN = this.htools.make(a,0,288,10);
		return format.tools.InflateImpl.FIXED_HUFFMAN;
	}
	,readBytes: function(b,pos,len) {
		this.needed = len;
		this.outpos = pos;
		this.output = b;
		if(len > 0) while(this.inflateLoop()) {
		}
		return len - this.needed;
	}
	,getBits: function(n) {
		while(this.nbits < n) {
			this.bits |= this.input.readByte() << this.nbits;
			this.nbits += 8;
		}
		var b = this.bits & (1 << n) - 1;
		this.nbits -= n;
		this.bits >>= n;
		return b;
	}
	,getBit: function() {
		if(this.nbits == 0) {
			this.nbits = 8;
			this.bits = this.input.readByte();
		}
		var b = (this.bits & 1) == 1;
		this.nbits--;
		this.bits >>= 1;
		return b;
	}
	,getRevBits: function(n) {
		if(n == 0) return 0; else if(this.getBit()) return 1 << n - 1 | this.getRevBits(n - 1); else return this.getRevBits(n - 1);
	}
	,resetBits: function() {
		this.bits = 0;
		this.nbits = 0;
	}
	,addBytes: function(b,p,len) {
		this.window.addBytes(b,p,len);
		this.output.blit(this.outpos,b,p,len);
		this.needed -= len;
		this.outpos += len;
	}
	,addByte: function(b) {
		this.window.addByte(b);
		this.output.b[this.outpos] = b & 255;
		this.needed--;
		this.outpos++;
	}
	,addDistOne: function(n) {
		var c = this.window.getLastChar();
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			this.addByte(c);
		}
	}
	,addDist: function(d,len) {
		this.addBytes(this.window.buffer,this.window.pos - d,len);
	}
	,applyHuffman: function(h) {
		switch(h[1]) {
		case 0:
			var n = h[2];
			return n;
		case 1:
			var b = h[3];
			var a = h[2];
			return this.applyHuffman(this.getBit()?b:a);
		case 2:
			var tbl = h[3];
			var n1 = h[2];
			return this.applyHuffman(tbl[this.getBits(n1)]);
		}
	}
	,inflateLengths: function(a,max) {
		var i = 0;
		var prev = 0;
		while(i < max) {
			var n = this.applyHuffman(this.huffman);
			switch(n) {
			case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:
				prev = n;
				a[i] = n;
				i++;
				break;
			case 16:
				var end = i + 3 + this.getBits(2);
				if(end > max) throw "Invalid data";
				while(i < end) {
					a[i] = prev;
					i++;
				}
				break;
			case 17:
				i += 3 + this.getBits(3);
				if(i > max) throw "Invalid data";
				break;
			case 18:
				i += 11 + this.getBits(7);
				if(i > max) throw "Invalid data";
				break;
			default:
				throw "Invalid data";
			}
		}
	}
	,inflateLoop: function() {
		var _g = this.state;
		switch(_g[1]) {
		case 0:
			var cmf = this.input.readByte();
			var cm = cmf & 15;
			var cinfo = cmf >> 4;
			if(cm != 8) throw "Invalid data";
			var flg = this.input.readByte();
			var fdict = (flg & 32) != 0;
			if(((cmf << 8) + flg) % 31 != 0) throw "Invalid data";
			if(fdict) throw "Unsupported dictionary";
			this.state = format.tools._InflateImpl.State.Block;
			return true;
		case 4:
			var calc = this.window.checksum();
			if(calc == null) {
				this.state = format.tools._InflateImpl.State.Done;
				return true;
			}
			var crc = format.tools.Adler32.read(this.input);
			if(!calc.equals(crc)) throw "Invalid CRC";
			this.state = format.tools._InflateImpl.State.Done;
			return true;
		case 7:
			return false;
		case 1:
			this["final"] = this.getBit();
			var _g1 = this.getBits(2);
			switch(_g1) {
			case 0:
				this.len = this.input.readUInt16();
				var nlen = this.input.readUInt16();
				if(nlen != 65535 - this.len) throw "Invalid data";
				this.state = format.tools._InflateImpl.State.Flat;
				var r = this.inflateLoop();
				this.resetBits();
				return r;
			case 1:
				this.huffman = this.buildFixedHuffman();
				this.huffdist = null;
				this.state = format.tools._InflateImpl.State.CData;
				return true;
			case 2:
				var hlit = this.getBits(5) + 257;
				var hdist = this.getBits(5) + 1;
				var hclen = this.getBits(4) + 4;
				var _g2 = 0;
				while(_g2 < hclen) {
					var i = _g2++;
					this.lengths[format.tools.InflateImpl.CODE_LENGTHS_POS[i]] = this.getBits(3);
				}
				var _g21 = hclen;
				while(_g21 < 19) {
					var i1 = _g21++;
					this.lengths[format.tools.InflateImpl.CODE_LENGTHS_POS[i1]] = 0;
				}
				this.huffman = this.htools.make(this.lengths,0,19,8);
				var lengths = new Array();
				var _g3 = 0;
				var _g22 = hlit + hdist;
				while(_g3 < _g22) {
					var i2 = _g3++;
					lengths.push(0);
				}
				this.inflateLengths(lengths,hlit + hdist);
				this.huffdist = this.htools.make(lengths,hlit,hdist,16);
				this.huffman = this.htools.make(lengths,0,hlit,16);
				this.state = format.tools._InflateImpl.State.CData;
				return true;
			default:
				throw "Invalid data";
			}
			break;
		case 3:
			var rlen;
			if(this.len < this.needed) rlen = this.len; else rlen = this.needed;
			var bytes = this.input.read(rlen);
			this.len -= rlen;
			this.addBytes(bytes,0,rlen);
			if(this.len == 0) if(this["final"]) this.state = format.tools._InflateImpl.State.Crc; else this.state = format.tools._InflateImpl.State.Block;
			return this.needed > 0;
		case 6:
			var rlen1;
			if(this.len < this.needed) rlen1 = this.len; else rlen1 = this.needed;
			this.addDistOne(rlen1);
			this.len -= rlen1;
			if(this.len == 0) this.state = format.tools._InflateImpl.State.CData;
			return this.needed > 0;
		case 5:
			while(this.len > 0 && this.needed > 0) {
				var rdist;
				if(this.len < this.dist) rdist = this.len; else rdist = this.dist;
				var rlen2;
				if(this.needed < rdist) rlen2 = this.needed; else rlen2 = rdist;
				this.addDist(this.dist,rlen2);
				this.len -= rlen2;
			}
			if(this.len == 0) this.state = format.tools._InflateImpl.State.CData;
			return this.needed > 0;
		case 2:
			var n = this.applyHuffman(this.huffman);
			if(n < 256) {
				this.addByte(n);
				return this.needed > 0;
			} else if(n == 256) {
				if(this["final"]) this.state = format.tools._InflateImpl.State.Crc; else this.state = format.tools._InflateImpl.State.Block;
				return true;
			} else {
				n -= 257;
				var extra_bits = format.tools.InflateImpl.LEN_EXTRA_BITS_TBL[n];
				if(extra_bits == -1) throw "Invalid data";
				this.len = format.tools.InflateImpl.LEN_BASE_VAL_TBL[n] + this.getBits(extra_bits);
				var dist_code;
				if(this.huffdist == null) dist_code = this.getRevBits(5); else dist_code = this.applyHuffman(this.huffdist);
				extra_bits = format.tools.InflateImpl.DIST_EXTRA_BITS_TBL[dist_code];
				if(extra_bits == -1) throw "Invalid data";
				this.dist = format.tools.InflateImpl.DIST_BASE_VAL_TBL[dist_code] + this.getBits(extra_bits);
				if(this.dist > this.window.available()) throw "Invalid data";
				if(this.dist == 1) this.state = format.tools._InflateImpl.State.DistOne; else this.state = format.tools._InflateImpl.State.Dist;
				return true;
			}
			break;
		}
	}
	,__class__: format.tools.InflateImpl
};
var haxe = {};
haxe.Log = function() { };
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = true;
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = true;
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
};
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
};
haxe.crypto = {};
haxe.crypto.BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "BaseCode : base length must be a power of two.";
	this.base = base;
	this.nbits = nbits;
};
$hxClasses["haxe.crypto.BaseCode"] = haxe.crypto.BaseCode;
haxe.crypto.BaseCode.__name__ = true;
haxe.crypto.BaseCode.prototype = {
	encodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		var size = b.length * 8 / nbits | 0;
		var out = haxe.io.Bytes.alloc(size + (b.length * 8 % nbits == 0?0:1));
		var buf = 0;
		var curbits = 0;
		var mask = (1 << nbits) - 1;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < nbits) {
				curbits += 8;
				buf <<= 8;
				buf |= b.get(pin++);
			}
			curbits -= nbits;
			out.set(pout++,base.b[buf >> curbits & mask]);
		}
		if(curbits > 0) out.set(pout++,base.b[buf << nbits - curbits & mask]);
		return out;
	}
	,__class__: haxe.crypto.BaseCode
};
haxe.crypto.Crc32 = function() {
	this.crc = -1;
};
$hxClasses["haxe.crypto.Crc32"] = haxe.crypto.Crc32;
haxe.crypto.Crc32.__name__ = true;
haxe.crypto.Crc32.prototype = {
	'byte': function(b) {
		var tmp = (this.crc ^ b) & 255;
		var _g = 0;
		while(_g < 8) {
			var j = _g++;
			if((tmp & 1) == 1) tmp = tmp >>> 1 ^ -306674912; else tmp >>>= 1;
		}
		this.crc = this.crc >>> 8 ^ tmp;
	}
	,update: function(b,pos,len) {
		var b1 = b.b;
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var tmp = (this.crc ^ b1[i]) & 255;
			var _g2 = 0;
			while(_g2 < 8) {
				var j = _g2++;
				if((tmp & 1) == 1) tmp = tmp >>> 1 ^ -306674912; else tmp >>>= 1;
			}
			this.crc = this.crc >>> 8 ^ tmp;
		}
	}
	,get: function() {
		return this.crc ^ -1;
	}
	,__class__: haxe.crypto.Crc32
};
haxe.ds = {};
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = true;
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.IntMap
};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = true;
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,__class__: haxe.ds.StringMap
};
haxe.io = {};
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = true;
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
};
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var i = 0;
	while(i < s.length) {
		var c = StringTools.fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) c = c - 55232 << 10 | StringTools.fastCodeAt(s,i++) & 1023;
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
};
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
};
haxe.io.Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
		var b1 = this.b;
		var b2 = src.b;
		if(b1 == b2 && pos > srcpos) {
			var i = len;
			while(i > 0) {
				i--;
				b1[i + pos] = b2[i + srcpos];
			}
			return;
		}
		var _g = 0;
		while(_g < len) {
			var i1 = _g++;
			b1[i1 + pos] = b2[i1 + srcpos];
		}
	}
	,fill: function(pos,len,value) {
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.set(pos++,value);
		}
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,getData: function() {
		return this.b;
	}
	,__class__: haxe.io.Bytes
};
haxe.io.BytesBuffer = function() {
	this.b = new Array();
};
$hxClasses["haxe.io.BytesBuffer"] = haxe.io.BytesBuffer;
haxe.io.BytesBuffer.__name__ = true;
haxe.io.BytesBuffer.prototype = {
	add: function(src) {
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = 0;
		var _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,getBytes: function() {
		var bytes = new haxe.io.Bytes(this.b.length,this.b);
		this.b = null;
		return bytes;
	}
	,__class__: haxe.io.BytesBuffer
};
haxe.io.Input = function() { };
$hxClasses["haxe.io.Input"] = haxe.io.Input;
haxe.io.Input.__name__ = true;
haxe.io.Input.prototype = {
	readByte: function() {
		throw "Not implemented";
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
		while(k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		}
		return len;
	}
	,set_bigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,read: function(nbytes) {
		var s = haxe.io.Bytes.alloc(nbytes);
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) throw haxe.io.Error.Blocked;
			p += k;
			nbytes -= k;
		}
		return s;
	}
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		if(this.bigEndian) return ch2 | ch1 << 8; else return ch1 | ch2 << 8;
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if(this.bigEndian) return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24; else return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readString: function(len) {
		var b = haxe.io.Bytes.alloc(len);
		this.readFullBytes(b,0,len);
		return b.toString();
	}
	,__class__: haxe.io.Input
};
haxe.io.BytesInput = function(b,pos,len) {
	if(pos == null) pos = 0;
	if(len == null) len = b.length - pos;
	if(pos < 0 || len < 0 || pos + len > b.length) throw haxe.io.Error.OutsideBounds;
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
$hxClasses["haxe.io.BytesInput"] = haxe.io.BytesInput;
haxe.io.BytesInput.__name__ = true;
haxe.io.BytesInput.__super__ = haxe.io.Input;
haxe.io.BytesInput.prototype = $extend(haxe.io.Input.prototype,{
	readByte: function() {
		if(this.len == 0) throw new haxe.io.Eof();
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) throw haxe.io.Error.OutsideBounds;
		if(this.len == 0 && len > 0) throw new haxe.io.Eof();
		if(this.len < len) len = this.len;
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__class__: haxe.io.BytesInput
});
haxe.io.Output = function() { };
$hxClasses["haxe.io.Output"] = haxe.io.Output;
haxe.io.Output.__name__ = true;
haxe.io.Output.prototype = {
	writeByte: function(c) {
		throw "Not implemented";
	}
	,writeBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
		while(k > 0) {
			this.writeByte(b[pos]);
			pos++;
			k--;
		}
		return len;
	}
	,set_bigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,write: function(s) {
		var l = s.length;
		var p = 0;
		while(l > 0) {
			var k = this.writeBytes(s,p,l);
			if(k == 0) throw haxe.io.Error.Blocked;
			p += k;
			l -= k;
		}
	}
	,writeFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.writeBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,writeInt32: function(x) {
		if(this.bigEndian) {
			this.writeByte(x >>> 24);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >>> 24);
		}
	}
	,writeString: function(s) {
		var b = haxe.io.Bytes.ofString(s);
		this.writeFullBytes(b,0,b.length);
	}
	,__class__: haxe.io.Output
};
haxe.io.BytesOutput = function() {
	this.b = new haxe.io.BytesBuffer();
};
$hxClasses["haxe.io.BytesOutput"] = haxe.io.BytesOutput;
haxe.io.BytesOutput.__name__ = true;
haxe.io.BytesOutput.__super__ = haxe.io.Output;
haxe.io.BytesOutput.prototype = $extend(haxe.io.Output.prototype,{
	writeByte: function(c) {
		this.b.b.push(c);
	}
	,writeBytes: function(buf,pos,len) {
		this.b.addBytes(buf,pos,len);
		return len;
	}
	,getBytes: function() {
		return this.b.getBytes();
	}
	,__class__: haxe.io.BytesOutput
});
haxe.io.Eof = function() {
};
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = true;
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; return $x; };
var js = {};
js._Boot = {};
js._Boot.HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	if(Object.prototype.hasOwnProperty.call(val,"name")) this.name = Reflect.field(val,"name"); else this.name = "Error";
	if(Object.prototype.hasOwnProperty.call(val,"message")) this.message = Reflect.field(val,"message"); else this.message = Std.string(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js._Boot.HaxeError);
};
$hxClasses["js._Boot.HaxeError"] = js._Boot.HaxeError;
js._Boot.HaxeError.__name__ = true;
js._Boot.HaxeError.__super__ = Error;
js._Boot.HaxeError.prototype = $extend(Error.prototype,{
	__class__: js._Boot.HaxeError
});
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = true;
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js.Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
};
js.Boot.isClass = function(o) {
	return o.__name__;
};
js.Boot.isEnum = function(e) {
	return e.__ename__;
};
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js.Boot.__nativeClassName(o);
		if(name != null) return js.Boot.__resolveNativeClass(name);
		return null;
	}
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js.Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
js.Boot.__nativeClassName = function(o) {
	var name = js.Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js.Boot.__isNativeObj = function(o) {
	return js.Boot.__nativeClassName(o) != null;
};
js.Boot.__resolveNativeClass = function(name) {
	return (Function("return typeof " + name + " != \"undefined\" ? " + name + " : null"))();
};
js.Browser = function() { };
$hxClasses["js.Browser"] = js.Browser;
js.Browser.__name__ = true;
js.Browser.createXMLHttpRequest = function() {
	if(typeof XMLHttpRequest != "undefined") return new XMLHttpRequest();
	if(typeof ActiveXObject != "undefined") return new ActiveXObject("Microsoft.XMLHTTP");
	throw "Unable to create XMLHttpRequest object.";
};
js.html = {};
js.html._CanvasElement = {};
js.html._CanvasElement.CanvasUtil = function() { };
$hxClasses["js.html._CanvasElement.CanvasUtil"] = js.html._CanvasElement.CanvasUtil;
js.html._CanvasElement.CanvasUtil.__name__ = true;
js.html._CanvasElement.CanvasUtil.getContextWebGL = function(canvas,attribs) {
	var _g = 0;
	var _g1 = ["webgl","experimental-webgl"];
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		var ctx = canvas.getContext(name,attribs);
		if(ctx != null) return ctx;
	}
	return null;
};
lime.AssetCache = function() {
	this.enabled = true;
	this.audio = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.image = new haxe.ds.StringMap();
};
$hxClasses["lime.AssetCache"] = lime.AssetCache;
lime.AssetCache.__name__ = true;
lime.AssetCache.prototype = {
	clear: function(prefix) {
		if(prefix == null) {
			this.audio = new haxe.ds.StringMap();
			this.font = new haxe.ds.StringMap();
			this.image = new haxe.ds.StringMap();
		} else {
			var keys = this.audio.keys();
			while( keys.hasNext() ) {
				var key = keys.next();
				if(StringTools.startsWith(key,prefix)) this.audio.remove(key);
			}
			var keys1 = this.font.keys();
			while( keys1.hasNext() ) {
				var key1 = keys1.next();
				if(StringTools.startsWith(key1,prefix)) this.font.remove(key1);
			}
			var keys2 = this.image.keys();
			while( keys2.hasNext() ) {
				var key2 = keys2.next();
				if(StringTools.startsWith(key2,prefix)) this.image.remove(key2);
			}
		}
	}
	,__class__: lime.AssetCache
};
lime.Assets = function() { };
$hxClasses["lime.Assets"] = lime.Assets;
lime.Assets.__name__ = true;
lime.Assets.exists = function(id,type) {
	lime.Assets.initialize();
	if(type == null) type = "BINARY";
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
};
lime.Assets.getAudioBuffer = function(id,useCache) {
	if(useCache == null) useCache = true;
	lime.Assets.initialize();
	if(useCache && lime.Assets.cache.enabled && lime.Assets.cache.audio.exists(id)) {
		var audio = lime.Assets.cache.audio.get(id);
		if(lime.Assets.isValidAudio(audio)) return audio;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"SOUND")) {
			if(library.isLocal(symbolName,"SOUND")) {
				var audio1 = library.getAudioBuffer(symbolName);
				if(useCache && lime.Assets.cache.enabled) lime.Assets.cache.audio.set(id,audio1);
				return audio1;
			} else haxe.Log.trace("[Assets] Audio asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 115, className : "lime.Assets", methodName : "getAudioBuffer"});
		} else haxe.Log.trace("[Assets] There is no audio asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 121, className : "lime.Assets", methodName : "getAudioBuffer"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 127, className : "lime.Assets", methodName : "getAudioBuffer"});
	return null;
};
lime.Assets.getBytes = function(id) {
	lime.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"BINARY")) {
			if(library.isLocal(symbolName,"BINARY")) return library.getBytes(symbolName); else haxe.Log.trace("[Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 164, className : "lime.Assets", methodName : "getBytes"});
		} else haxe.Log.trace("[Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 170, className : "lime.Assets", methodName : "getBytes"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 176, className : "lime.Assets", methodName : "getBytes"});
	return null;
};
lime.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	lime.Assets.initialize();
	if(useCache && lime.Assets.cache.enabled && lime.Assets.cache.font.exists(id)) return lime.Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"FONT")) {
			if(library.isLocal(symbolName,"FONT")) {
				var font = library.getFont(symbolName);
				if(useCache && lime.Assets.cache.enabled) lime.Assets.cache.font.set(id,font);
				return font;
			} else haxe.Log.trace("[Assets] Font asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 227, className : "lime.Assets", methodName : "getFont"});
		} else haxe.Log.trace("[Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 233, className : "lime.Assets", methodName : "getFont"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 239, className : "lime.Assets", methodName : "getFont"});
	return null;
};
lime.Assets.getImage = function(id,useCache) {
	if(useCache == null) useCache = true;
	lime.Assets.initialize();
	if(useCache && lime.Assets.cache.enabled && lime.Assets.cache.image.exists(id)) {
		var image = lime.Assets.cache.image.get(id);
		if(lime.Assets.isValidImage(image)) return image;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"IMAGE")) {
			if(library.isLocal(symbolName,"IMAGE")) {
				var image1 = library.getImage(symbolName);
				if(useCache && lime.Assets.cache.enabled) lime.Assets.cache.image.set(id,image1);
				return image1;
			} else haxe.Log.trace("[Assets] Image asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 297, className : "lime.Assets", methodName : "getImage"});
		} else haxe.Log.trace("[Assets] There is no Image asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 303, className : "lime.Assets", methodName : "getImage"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 309, className : "lime.Assets", methodName : "getImage"});
	return null;
};
lime.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return lime.Assets.libraries.get(name);
};
lime.Assets.getPath = function(id) {
	lime.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else haxe.Log.trace("[Assets] There is no asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 426, className : "lime.Assets", methodName : "getPath"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 432, className : "lime.Assets", methodName : "getPath"});
	return null;
};
lime.Assets.getText = function(id) {
	lime.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"TEXT")) {
			if(library.isLocal(symbolName,"TEXT")) return library.getText(symbolName); else haxe.Log.trace("[Assets] String asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 469, className : "lime.Assets", methodName : "getText"});
		} else haxe.Log.trace("[Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 475, className : "lime.Assets", methodName : "getText"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 481, className : "lime.Assets", methodName : "getText"});
	return null;
};
lime.Assets.initialize = function() {
	if(!lime.Assets.initialized) {
		lime.Assets.registerLibrary("default",new DefaultAssetLibrary());
		lime.Assets.initialized = true;
	}
};
lime.Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	lime.Assets.initialize();
	if(useCache && lime.Assets.cache.enabled) {
		if(type == "IMAGE" || type == null) {
			if(lime.Assets.cache.image.exists(id)) return true;
		}
		if(type == "FONT" || type == null) {
			if(lime.Assets.cache.font.exists(id)) return true;
		}
		if(type == "SOUND" || type == "MUSIC" || type == null) {
			if(lime.Assets.cache.audio.exists(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
};
lime.Assets.isValidAudio = function(buffer) {
	return buffer != null;
	return true;
};
lime.Assets.isValidImage = function(buffer) {
	return true;
};
lime.Assets.list = function(type) {
	lime.Assets.initialize();
	var items = [];
	var $it0 = lime.Assets.libraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var libraryItems = library.list(type);
		if(libraryItems != null) items = items.concat(libraryItems);
	}
	return items;
};
lime.Assets.loadAudioBuffer = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	lime.Assets.initialize();
	if(useCache && lime.Assets.cache.enabled && lime.Assets.cache.audio.exists(id)) {
		var audio = lime.Assets.cache.audio.get(id);
		if(lime.Assets.isValidAudio(audio)) {
			handler(audio);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"SOUND")) {
			if(useCache && lime.Assets.cache.enabled) library.loadAudioBuffer(symbolName,function(audio1) {
				var value = audio1;
				lime.Assets.cache.audio.set(id,value);
				handler(audio1);
			}); else library.loadAudioBuffer(symbolName,handler);
			return;
		} else haxe.Log.trace("[Assets] There is no audio asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 666, className : "lime.Assets", methodName : "loadAudioBuffer"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 672, className : "lime.Assets", methodName : "loadAudioBuffer"});
	handler(null);
};
lime.Assets.loadBytes = function(id,handler) {
	lime.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"BINARY")) {
			library.loadBytes(symbolName,handler);
			return;
		} else haxe.Log.trace("[Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 702, className : "lime.Assets", methodName : "loadBytes"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 708, className : "lime.Assets", methodName : "loadBytes"});
	handler(null);
};
lime.Assets.loadImage = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	lime.Assets.initialize();
	if(useCache && lime.Assets.cache.enabled && lime.Assets.cache.image.exists(id)) {
		var image = lime.Assets.cache.image.get(id);
		if(lime.Assets.isValidImage(image)) {
			handler(image);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"IMAGE")) {
			if(useCache && lime.Assets.cache.enabled) library.loadImage(symbolName,function(image1) {
				lime.Assets.cache.image.set(id,image1);
				handler(image1);
			}); else library.loadImage(symbolName,handler);
			return;
		} else haxe.Log.trace("[Assets] There is no Image asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 765, className : "lime.Assets", methodName : "loadImage"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 771, className : "lime.Assets", methodName : "loadImage"});
	handler(null);
};
lime.Assets.loadLibrary = function(name,handler) {
	lime.Assets.initialize();
	var data = lime.Assets.getText("libraries/" + name + ".json");
	if(data != null && data != "") {
		var info = JSON.parse(data);
		var library = Type.createInstance(Type.resolveClass(info.type),info.args);
		lime.Assets.libraries.set(name,library);
		library.eventCallback = lime.Assets.library_onEvent;
		library.load(handler);
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + name + "\"",{ fileName : "Assets.hx", lineNumber : 800, className : "lime.Assets", methodName : "loadLibrary"});
};
lime.Assets.loadText = function(id,handler) {
	lime.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"TEXT")) {
			library.loadText(symbolName,handler);
			return;
		} else haxe.Log.trace("[Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 891, className : "lime.Assets", methodName : "loadText"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 897, className : "lime.Assets", methodName : "loadText"});
	handler(null);
};
lime.Assets.registerLibrary = function(name,library) {
	if(lime.Assets.libraries.exists(name)) lime.Assets.unloadLibrary(name);
	if(library != null) library.eventCallback = lime.Assets.library_onEvent;
	lime.Assets.libraries.set(name,library);
};
lime.Assets.unloadLibrary = function(name) {
	lime.Assets.initialize();
	var library = lime.Assets.libraries.get(name);
	if(library != null) {
		lime.Assets.cache.clear(name + ":");
		library.eventCallback = null;
	}
	lime.Assets.libraries.remove(name);
};
lime.Assets.library_onEvent = function(library,type) {
	if(type == "change") lime.Assets.cache.clear();
};
lime._Assets = {};
lime._Assets.AssetType_Impl_ = function() { };
$hxClasses["lime._Assets.AssetType_Impl_"] = lime._Assets.AssetType_Impl_;
lime._Assets.AssetType_Impl_.__name__ = true;
lime._backend = {};
lime._backend.html5 = {};
lime._backend.html5.HTML5Application = function(parent) {
	this.parent = parent;
	lime.audio.AudioManager.init();
};
$hxClasses["lime._backend.html5.HTML5Application"] = lime._backend.html5.HTML5Application;
lime._backend.html5.HTML5Application.__name__ = true;
lime._backend.html5.HTML5Application.prototype = {
	convertKeyCode: function(keyCode) {
		if(keyCode >= 65 && keyCode <= 90) return keyCode + 32;
		switch(keyCode) {
		case 16:
			return 1073742049;
		case 17:
			return 1073742048;
		case 18:
			return 1073742050;
		case 20:
			return 1073741881;
		case 144:
			return 1073741907;
		case 37:
			return 1073741904;
		case 38:
			return 1073741906;
		case 39:
			return 1073741903;
		case 40:
			return 1073741905;
		case 45:
			return 1073741897;
		case 46:
			return 127;
		case 36:
			return 1073741898;
		case 35:
			return 1073741901;
		case 33:
			return 1073741899;
		case 34:
			return 1073741902;
		case 112:
			return 1073741882;
		case 113:
			return 1073741883;
		case 114:
			return 1073741884;
		case 115:
			return 1073741885;
		case 116:
			return 1073741886;
		case 117:
			return 1073741887;
		case 118:
			return 1073741888;
		case 119:
			return 1073741889;
		case 120:
			return 1073741890;
		case 121:
			return 1073741891;
		case 122:
			return 1073741892;
		case 123:
			return 1073741893;
		}
		return keyCode;
	}
	,create: function(config) {
		this.parent.config = config;
		if(config != null) {
			var $window = new lime.ui.Window(config);
			var renderer = new lime.graphics.Renderer($window);
			this.parent.addWindow($window);
			this.parent.addRenderer(renderer);
			this.parent.init(renderer.context);
		}
	}
	,exec: function() {
		window.addEventListener("keydown",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("keyup",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("focus",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("blur",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("resize",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("beforeunload",$bind(this,this.handleWindowEvent),false);
		
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
										   || window[vendors[x]+'CancelRequestAnimationFrame'];
			}
			
			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
					  timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			
			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
			
			window.requestAnimFrame = window.requestAnimationFrame;
		;
		this.cacheTime = new Date().getTime();
		this.handleUpdateEvent();
		return 0;
	}
	,handleKeyEvent: function(event) {
		if(this.parent.windows[0] != null) {
			var keyCode = this.convertKeyCode(event.keyCode != null?event.keyCode:event.which);
			var modifier;
			modifier = (event.shiftKey?3:0) | (event.ctrlKey?192:0) | (event.altKey?768:0) | (event.metaKey?3072:0);
			if(event.type == "keydown") {
				var listeners = this.parent.windows[0].onKeyDown.listeners;
				var repeat = this.parent.windows[0].onKeyDown.repeat;
				var length = listeners.length;
				var i = 0;
				while(i < length) {
					listeners[i](keyCode,modifier);
					if(!repeat[i]) {
						this.parent.windows[0].onKeyDown.remove(listeners[i]);
						length--;
					} else i++;
				}
				if(this.parent.windows[0].backend.getEnableTextEvents()) {
					var listeners1 = this.parent.windows[0].onTextInput.listeners;
					var repeat1 = this.parent.windows[0].onTextInput.repeat;
					var length1 = listeners1.length;
					var i1 = 0;
					while(i1 < length1) {
						listeners1[i1](String.fromCharCode(event.keyCode));
						if(!repeat1[i1]) {
							this.parent.windows[0].onTextInput.remove(listeners1[i1]);
							length1--;
						} else i1++;
					}
				}
			} else {
				var listeners2 = this.parent.windows[0].onKeyUp.listeners;
				var repeat2 = this.parent.windows[0].onKeyUp.repeat;
				var length2 = listeners2.length;
				var i2 = 0;
				while(i2 < length2) {
					listeners2[i2](keyCode,modifier);
					if(!repeat2[i2]) {
						this.parent.windows[0].onKeyUp.remove(listeners2[i2]);
						length2--;
					} else i2++;
				}
			}
		}
	}
	,handleUpdateEvent: function(__) {
		var currentTime = new Date().getTime();
		var deltaTime = currentTime - this.cacheTime;
		this.cacheTime = currentTime;
		var listeners = this.parent.onUpdate.listeners;
		var repeat = this.parent.onUpdate.repeat;
		var length = listeners.length;
		var i = 0;
		while(i < length) {
			listeners[i](deltaTime | 0);
			if(!repeat[i]) {
				this.parent.onUpdate.remove(listeners[i]);
				length--;
			} else i++;
		}
		if(this.parent.renderers[0] != null) {
			var listeners1 = this.parent.renderers[0].onRender.listeners;
			var repeat1 = this.parent.renderers[0].onRender.repeat;
			var length1 = listeners1.length;
			var i1 = 0;
			while(i1 < length1) {
				listeners1[i1](this.parent.renderers[0].context);
				if(!repeat1[i1]) {
					this.parent.renderers[0].onRender.remove(listeners1[i1]);
					length1--;
				} else i1++;
			}
			this.parent.renderers[0].flip();
		}
		window.requestAnimationFrame($bind(this,this.handleUpdateEvent));
	}
	,handleWindowEvent: function(event) {
		if(this.parent.windows[0] != null) {
			var _g = event.type;
			switch(_g) {
			case "focus":
				var listeners = this.parent.windows[0].onWindowFocusIn.listeners;
				var repeat = this.parent.windows[0].onWindowFocusIn.repeat;
				var length = listeners.length;
				var i = 0;
				while(i < length) {
					listeners[i]();
					if(!repeat[i]) {
						this.parent.windows[0].onWindowFocusIn.remove(listeners[i]);
						length--;
					} else i++;
				}
				var listeners1 = this.parent.windows[0].onWindowActivate.listeners;
				var repeat1 = this.parent.windows[0].onWindowActivate.repeat;
				var length1 = listeners1.length;
				var i1 = 0;
				while(i1 < length1) {
					listeners1[i1]();
					if(!repeat1[i1]) {
						this.parent.windows[0].onWindowActivate.remove(listeners1[i1]);
						length1--;
					} else i1++;
				}
				break;
			case "blur":
				var listeners2 = this.parent.windows[0].onWindowFocusOut.listeners;
				var repeat2 = this.parent.windows[0].onWindowFocusOut.repeat;
				var length2 = listeners2.length;
				var i2 = 0;
				while(i2 < length2) {
					listeners2[i2]();
					if(!repeat2[i2]) {
						this.parent.windows[0].onWindowFocusOut.remove(listeners2[i2]);
						length2--;
					} else i2++;
				}
				var listeners3 = this.parent.windows[0].onWindowDeactivate.listeners;
				var repeat3 = this.parent.windows[0].onWindowDeactivate.repeat;
				var length3 = listeners3.length;
				var i3 = 0;
				while(i3 < length3) {
					listeners3[i3]();
					if(!repeat3[i3]) {
						this.parent.windows[0].onWindowDeactivate.remove(listeners3[i3]);
						length3--;
					} else i3++;
				}
				break;
			case "resize":
				var cacheWidth = this.parent.windows[0].__width;
				var cacheHeight = this.parent.windows[0].__height;
				this.parent.windows[0].backend.handleResize();
				if(this.parent.windows[0].__width != cacheWidth || this.parent.windows[0].__height != cacheHeight) {
					var listeners4 = this.parent.windows[0].onWindowResize.listeners;
					var repeat4 = this.parent.windows[0].onWindowResize.repeat;
					var length4 = listeners4.length;
					var i4 = 0;
					while(i4 < length4) {
						listeners4[i4](this.parent.windows[0].__width,this.parent.windows[0].__height);
						if(!repeat4[i4]) {
							this.parent.windows[0].onWindowResize.remove(listeners4[i4]);
							length4--;
						} else i4++;
					}
				}
				break;
			case "beforeunload":
				var listeners5 = this.parent.windows[0].onWindowClose.listeners;
				var repeat5 = this.parent.windows[0].onWindowClose.repeat;
				var length5 = listeners5.length;
				var i5 = 0;
				while(i5 < length5) {
					listeners5[i5]();
					if(!repeat5[i5]) {
						this.parent.windows[0].onWindowClose.remove(listeners5[i5]);
						length5--;
					} else i5++;
				}
				break;
			}
		}
	}
	,__class__: lime._backend.html5.HTML5Application
};
lime._backend.html5.HTML5Renderer = function(parent) {
	this.parent = parent;
};
$hxClasses["lime._backend.html5.HTML5Renderer"] = lime._backend.html5.HTML5Renderer;
lime._backend.html5.HTML5Renderer.__name__ = true;
lime._backend.html5.HTML5Renderer.prototype = {
	create: function() {
		this.createContext();
		{
			var _g = this.parent.context;
			switch(_g[1]) {
			case 0:
				this.parent.window.backend.canvas.addEventListener("webglcontextlost",$bind(this,this.handleEvent),false);
				this.parent.window.backend.canvas.addEventListener("webglcontextrestored",$bind(this,this.handleEvent),false);
				break;
			default:
			}
		}
	}
	,createContext: function() {
		if(this.parent.window.backend.div != null) this.parent.context = lime.graphics.RenderContext.DOM(this.parent.window.backend.div); else if(this.parent.window.backend.canvas != null) {
			var options = { alpha : true, antialias : Object.prototype.hasOwnProperty.call(this.parent.window.config,"antialiasing")?this.parent.window.config.antialiasing > 0:false, depth : Object.prototype.hasOwnProperty.call(this.parent.window.config,"depthBuffer")?this.parent.window.config.depthBuffer:true, premultipliedAlpha : true, stencil : Object.prototype.hasOwnProperty.call(this.parent.window.config,"stencilBuffer")?this.parent.window.config.stencilBuffer:true, preserveDrawingBuffer : false};
			var webgl = js.html._CanvasElement.CanvasUtil.getContextWebGL(this.parent.window.backend.canvas,options);
			if(webgl == null) this.parent.context = lime.graphics.RenderContext.CANVAS(this.parent.window.backend.canvas.getContext("2d")); else {
				lime.graphics.opengl.GL.context = webgl;
				this.parent.context = lime.graphics.RenderContext.OPENGL(lime.graphics.opengl.GL.context);
			}
		}
	}
	,flip: function() {
	}
	,handleEvent: function(event) {
		var _g = event.type;
		switch(_g) {
		case "webglcontextlost":
			event.preventDefault();
			this.parent.context = null;
			var listeners = this.parent.onRenderContextLost.listeners;
			var repeat = this.parent.onRenderContextLost.repeat;
			var length = listeners.length;
			var i = 0;
			while(i < length) {
				listeners[i]();
				if(!repeat[i]) {
					this.parent.onRenderContextLost.remove(listeners[i]);
					length--;
				} else i++;
			}
			break;
		case "webglcontextrestored":
			this.createContext();
			var listeners1 = this.parent.onRenderContextRestored.listeners;
			var repeat1 = this.parent.onRenderContextRestored.repeat;
			var length1 = listeners1.length;
			var i1 = 0;
			while(i1 < length1) {
				listeners1[i1](this.parent.context);
				if(!repeat1[i1]) {
					this.parent.onRenderContextRestored.remove(listeners1[i1]);
					length1--;
				} else i1++;
			}
			break;
		default:
		}
	}
	,render: function() {
	}
	,__class__: lime._backend.html5.HTML5Renderer
};
lime._backend.html5.HTML5Window = function(parent) {
	this.parent = parent;
	if(parent.config != null && Object.prototype.hasOwnProperty.call(parent.config,"element")) this.element = parent.config.element;
};
$hxClasses["lime._backend.html5.HTML5Window"] = lime._backend.html5.HTML5Window;
lime._backend.html5.HTML5Window.__name__ = true;
lime._backend.html5.HTML5Window.prototype = {
	close: function() {
	}
	,create: function(application) {
		this.setWidth = this.parent.__width;
		this.setHeight = this.parent.__height;
		if(js.Boot.__instanceof(this.element,HTMLCanvasElement)) this.canvas = this.element; else this.canvas = window.document.createElement("canvas");
		if(this.canvas != null) {
			var style = this.canvas.style;
			style.setProperty("-webkit-transform","translateZ(0)",null);
			style.setProperty("transform","translateZ(0)",null);
		} else if(this.div != null) {
			var style1 = this.div.style;
			style1.setProperty("-webkit-transform","translate3D(0,0,0)",null);
			style1.setProperty("transform","translate3D(0,0,0)",null);
			style1.position = "relative";
			style1.overflow = "hidden";
			style1.setProperty("-webkit-user-select","none",null);
			style1.setProperty("-moz-user-select","none",null);
			style1.setProperty("-ms-user-select","none",null);
			style1.setProperty("-o-user-select","none",null);
		}
		if(this.parent.__width == 0 && this.parent.__height == 0) {
			if(this.element != null) {
				this.parent.set_width(this.element.clientWidth);
				this.parent.set_height(this.element.clientHeight);
			} else {
				this.parent.set_width(window.innerWidth);
				this.parent.set_height(window.innerHeight);
			}
			this.parent.set_fullscreen(true);
		}
		if(this.canvas != null) {
			this.canvas.width = this.parent.__width;
			this.canvas.height = this.parent.__height;
		} else {
			this.div.style.width = this.parent.__width + "px";
			this.div.style.height = this.parent.__height + "px";
		}
		this.handleResize();
		if(this.element != null) {
			if(this.canvas != null) {
				if(this.element != this.canvas) this.element.appendChild(this.canvas);
			} else this.element.appendChild(this.div);
			var events = ["mousedown","mouseenter","mouseleave","mousemove","mouseup","wheel"];
			var _g = 0;
			while(_g < events.length) {
				var event = events[_g];
				++_g;
				this.element.addEventListener(event,$bind(this,this.handleMouseEvent),true);
			}
			window.document.addEventListener("dragstart",function(e) {
				if(e.target.nodeName.toLowerCase() == "img") {
					e.preventDefault();
					return false;
				}
				return true;
			},false);
			this.element.addEventListener("touchstart",$bind(this,this.handleTouchEvent),true);
			this.element.addEventListener("touchmove",$bind(this,this.handleTouchEvent),true);
			this.element.addEventListener("touchend",$bind(this,this.handleTouchEvent),true);
		}
	}
	,getEnableTextEvents: function() {
		return this.enableTextEvents;
	}
	,handleMouseEvent: function(event) {
		var x = 0.0;
		var y = 0.0;
		if(event.type != "wheel") {
			if(this.element != null) {
				if(this.canvas != null) {
					var rect = this.canvas.getBoundingClientRect();
					x = (event.clientX - rect.left) * (this.parent.__width / rect.width);
					y = (event.clientY - rect.top) * (this.parent.__height / rect.height);
				} else if(this.div != null) {
					var rect1 = this.div.getBoundingClientRect();
					x = event.clientX - rect1.left;
					y = event.clientY - rect1.top;
				} else {
					var rect2 = this.element.getBoundingClientRect();
					x = (event.clientX - rect2.left) * (this.parent.__width / rect2.width);
					y = (event.clientY - rect2.top) * (this.parent.__height / rect2.height);
				}
			} else {
				x = event.clientX;
				y = event.clientY;
			}
			var _g = event.type;
			switch(_g) {
			case "mousedown":
				var listeners = this.parent.onMouseDown.listeners;
				var repeat = this.parent.onMouseDown.repeat;
				var length = listeners.length;
				var i = 0;
				while(i < length) {
					listeners[i](x,y,event.button);
					if(!repeat[i]) {
						this.parent.onMouseDown.remove(listeners[i]);
						length--;
					} else i++;
				}
				break;
			case "mouseenter":
				var listeners1 = this.parent.onWindowEnter.listeners;
				var repeat1 = this.parent.onWindowEnter.repeat;
				var length1 = listeners1.length;
				var i1 = 0;
				while(i1 < length1) {
					listeners1[i1]();
					if(!repeat1[i1]) {
						this.parent.onWindowEnter.remove(listeners1[i1]);
						length1--;
					} else i1++;
				}
				break;
			case "mouseleave":
				var listeners2 = this.parent.onWindowLeave.listeners;
				var repeat2 = this.parent.onWindowLeave.repeat;
				var length2 = listeners2.length;
				var i2 = 0;
				while(i2 < length2) {
					listeners2[i2]();
					if(!repeat2[i2]) {
						this.parent.onWindowLeave.remove(listeners2[i2]);
						length2--;
					} else i2++;
				}
				break;
			case "mouseup":
				var listeners3 = this.parent.onMouseUp.listeners;
				var repeat3 = this.parent.onMouseUp.repeat;
				var length3 = listeners3.length;
				var i3 = 0;
				while(i3 < length3) {
					listeners3[i3](x,y,event.button);
					if(!repeat3[i3]) {
						this.parent.onMouseUp.remove(listeners3[i3]);
						length3--;
					} else i3++;
				}
				break;
			case "mousemove":
				var listeners4 = this.parent.onMouseMove.listeners;
				var repeat4 = this.parent.onMouseMove.repeat;
				var length4 = listeners4.length;
				var i4 = 0;
				while(i4 < length4) {
					listeners4[i4](x,y);
					if(!repeat4[i4]) {
						this.parent.onMouseMove.remove(listeners4[i4]);
						length4--;
					} else i4++;
				}
				break;
			default:
			}
		} else {
			var listeners5 = this.parent.onMouseWheel.listeners;
			var repeat5 = this.parent.onMouseWheel.repeat;
			var length5 = listeners5.length;
			var i5 = 0;
			while(i5 < length5) {
				listeners5[i5](event.deltaX,-event.deltaY);
				if(!repeat5[i5]) {
					this.parent.onMouseWheel.remove(listeners5[i5]);
					length5--;
				} else i5++;
			}
		}
	}
	,handleResize: function() {
		var stretch = this.parent.__fullscreen || this.setWidth == 0 && this.setHeight == 0;
		if(this.element != null && (this.div == null || this.div != null && stretch)) {
			if(stretch) {
				if(this.parent.__width != this.element.clientWidth || this.parent.__height != this.element.clientHeight) {
					this.parent.set_width(this.element.clientWidth);
					this.parent.set_height(this.element.clientHeight);
					if(this.canvas != null) {
						if(this.element != this.canvas) {
							this.canvas.width = this.element.clientWidth;
							this.canvas.height = this.element.clientHeight;
						}
					} else {
						this.div.style.width = this.element.clientWidth + "px";
						this.div.style.height = this.element.clientHeight + "px";
					}
				}
			} else {
				var scaleX = this.element.clientWidth / this.setWidth;
				var scaleY = this.element.clientHeight / this.setHeight;
				var currentRatio = scaleX / scaleY;
				var targetRatio = Math.min(scaleX,scaleY);
				if(this.canvas != null) {
					if(this.element != this.canvas) {
						this.canvas.style.width = this.setWidth * targetRatio + "px";
						this.canvas.style.height = this.setHeight * targetRatio + "px";
						this.canvas.style.marginLeft = (this.element.clientWidth - this.setWidth * targetRatio) / 2 + "px";
						this.canvas.style.marginTop = (this.element.clientHeight - this.setHeight * targetRatio) / 2 + "px";
					}
				} else {
					this.div.style.width = this.setWidth * targetRatio + "px";
					this.div.style.height = this.setHeight * targetRatio + "px";
					this.div.style.marginLeft = (this.element.clientWidth - this.setWidth * targetRatio) / 2 + "px";
					this.div.style.marginTop = (this.element.clientHeight - this.setHeight * targetRatio) / 2 + "px";
				}
			}
		}
	}
	,handleTouchEvent: function(event) {
		event.preventDefault();
		var touch = event.changedTouches[0];
		var id = touch.identifier;
		var x = 0.0;
		var y = 0.0;
		if(this.element != null) {
			if(this.canvas != null) {
				var rect = this.canvas.getBoundingClientRect();
				x = (touch.clientX - rect.left) * (this.parent.__width / rect.width);
				y = (touch.clientY - rect.top) * (this.parent.__height / rect.height);
			} else if(this.div != null) {
				var rect1 = this.div.getBoundingClientRect();
				x = touch.clientX - rect1.left;
				y = touch.clientY - rect1.top;
			} else {
				var rect2 = this.element.getBoundingClientRect();
				x = (touch.clientX - rect2.left) * (this.parent.__width / rect2.width);
				y = (touch.clientY - rect2.top) * (this.parent.__height / rect2.height);
			}
		} else {
			x = touch.clientX;
			y = touch.clientY;
		}
		var _g = event.type;
		switch(_g) {
		case "touchstart":
			var listeners = this.parent.onTouchStart.listeners;
			var repeat = this.parent.onTouchStart.repeat;
			var length = listeners.length;
			var i = 0;
			while(i < length) {
				listeners[i](x,y,id);
				if(!repeat[i]) {
					this.parent.onTouchStart.remove(listeners[i]);
					length--;
				} else i++;
			}
			break;
		case "touchmove":
			var listeners1 = this.parent.onTouchMove.listeners;
			var repeat1 = this.parent.onTouchMove.repeat;
			var length1 = listeners1.length;
			var i1 = 0;
			while(i1 < length1) {
				listeners1[i1](x,y,id);
				if(!repeat1[i1]) {
					this.parent.onTouchMove.remove(listeners1[i1]);
					length1--;
				} else i1++;
			}
			break;
		case "touchend":
			var listeners2 = this.parent.onTouchEnd.listeners;
			var repeat2 = this.parent.onTouchEnd.repeat;
			var length2 = listeners2.length;
			var i2 = 0;
			while(i2 < length2) {
				listeners2[i2](x,y,id);
				if(!repeat2[i2]) {
					this.parent.onTouchEnd.remove(listeners2[i2]);
					length2--;
				} else i2++;
			}
			break;
		default:
		}
	}
	,move: function(x,y) {
	}
	,resize: function(width,height) {
	}
	,setEnableTextEvents: function(value) {
		return this.enableTextEvents = value;
	}
	,setFullscreen: function(value) {
		return false;
	}
	,setIcon: function(image) {
	}
	,setMinimized: function(value) {
		return false;
	}
	,__class__: lime._backend.html5.HTML5Window
};
lime.app.Event = function() {
	this.listeners = new Array();
	this.priorities = new Array();
	this.repeat = new Array();
};
$hxClasses["lime.app.Event"] = lime.app.Event;
lime.app.Event.__name__ = true;
lime.app.Event.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.priorities[i]) {
				this.listeners.splice(i,0,listener);
				this.priorities.splice(i,0,priority);
				this.repeat.splice(i,0,!once);
				return;
			}
		}
		this.listeners.push(listener);
		this.priorities.push(priority);
		this.repeat.push(!once);
	}
	,remove: function(listener) {
		var index = HxOverrides.indexOf(this.listeners,listener,0);
		if(index > -1) {
			this.listeners.splice(index,1);
			this.priorities.splice(index,1);
			this.repeat.splice(index,1);
		}
	}
	,__class__: lime.app.Event
};
lime.app.Preloader = function() {
	this.total = 0;
	this.loaded = 0;
};
$hxClasses["lime.app.Preloader"] = lime.app.Preloader;
lime.app.Preloader.__name__ = true;
lime.app.Preloader.prototype = {
	create: function(config) {
	}
	,load: function(urls,types) {
		var url = null;
		var _g1 = 0;
		var _g = urls.length;
		while(_g1 < _g) {
			var i = _g1++;
			url = urls[i];
			var _g2 = types[i];
			switch(_g2) {
			case "IMAGE":
				var image = new Image();
				lime.app.Preloader.images.set(url,image);
				image.onload = $bind(this,this.image_onLoad);
				image.src = url;
				this.total++;
				break;
			case "BINARY":
				var loader = new lime.net.URLLoader();
				loader.set_dataFormat(lime.net.URLLoaderDataFormat.BINARY);
				lime.app.Preloader.loaders.set(url,loader);
				this.total++;
				break;
			case "TEXT":
				var loader1 = new lime.net.URLLoader();
				lime.app.Preloader.loaders.set(url,loader1);
				this.total++;
				break;
			case "FONT":
				this.total++;
				this.loadFont(url);
				break;
			default:
			}
		}
		var $it0 = lime.app.Preloader.loaders.keys();
		while( $it0.hasNext() ) {
			var url1 = $it0.next();
			var loader2 = lime.app.Preloader.loaders.get(url1);
			loader2.onComplete.add($bind(this,this.loader_onComplete));
			loader2.load(new lime.net.URLRequest(url1));
		}
		if(this.total == 0) this.start();
	}
	,loadFont: function(font) {
		var _g = this;
		if(window.document.fonts && window.document.fonts.load) window.document.fonts.load("1em '" + font + "'").then(function(_) {
			_g.loaded++;
			_g.update(_g.loaded,_g.total);
			if(_g.loaded == _g.total) _g.start();
		}); else {
			var node = window.document.createElement("span");
			node.innerHTML = "giItT1WQy@!-/#";
			var style = node.style;
			style.position = "absolute";
			style.left = "-10000px";
			style.top = "-10000px";
			style.fontSize = "300px";
			style.fontFamily = "sans-serif";
			style.fontVariant = "normal";
			style.fontStyle = "normal";
			style.fontWeight = "normal";
			style.letterSpacing = "0";
			window.document.body.appendChild(node);
			var width = node.offsetWidth;
			style.fontFamily = "'" + font + "', sans-serif";
			var interval = null;
			var found = false;
			var checkFont = function() {
				if(node.offsetWidth != width) {
					if(!found) {
						found = true;
						return false;
					}
					_g.loaded++;
					if(interval != null) window.clearInterval(interval);
					node.parentNode.removeChild(node);
					node = null;
					_g.update(_g.loaded,_g.total);
					if(_g.loaded == _g.total) _g.start();
					return true;
				}
				return false;
			};
			if(!checkFont()) interval = window.setInterval(checkFont,50);
		}
	}
	,start: function() {
		if(this.onComplete != null) this.onComplete();
	}
	,update: function(loaded,total) {
	}
	,image_onLoad: function(_) {
		this.loaded++;
		this.update(this.loaded,this.total);
		if(this.loaded == this.total) this.start();
	}
	,loader_onComplete: function(loader) {
		this.loaded++;
		this.update(this.loaded,this.total);
		if(this.loaded == this.total) this.start();
	}
	,__class__: lime.app.Preloader
};
lime.audio = {};
lime.audio.ALAudioContext = function() {
	this.EXPONENT_DISTANCE_CLAMPED = 53254;
	this.EXPONENT_DISTANCE = 53253;
	this.LINEAR_DISTANCE_CLAMPED = 53252;
	this.LINEAR_DISTANCE = 53251;
	this.INVERSE_DISTANCE_CLAMPED = 53250;
	this.INVERSE_DISTANCE = 53249;
	this.DISTANCE_MODEL = 53248;
	this.DOPPLER_VELOCITY = 49153;
	this.SPEED_OF_SOUND = 49155;
	this.DOPPLER_FACTOR = 49152;
	this.EXTENSIONS = 45060;
	this.RENDERER = 45059;
	this.VERSION = 45058;
	this.VENDOR = 45057;
	this.OUT_OF_MEMORY = 40965;
	this.INVALID_OPERATION = 40964;
	this.INVALID_VALUE = 40963;
	this.INVALID_ENUM = 40962;
	this.INVALID_NAME = 40961;
	this.NO_ERROR = 0;
	this.SIZE = 8196;
	this.CHANNELS = 8195;
	this.BITS = 8194;
	this.FREQUENCY = 8193;
	this.FORMAT_STEREO16 = 4355;
	this.FORMAT_STEREO8 = 4354;
	this.FORMAT_MONO16 = 4353;
	this.FORMAT_MONO8 = 4352;
	this.UNDETERMINED = 4144;
	this.STREAMING = 4137;
	this.STATIC = 4136;
	this.SOURCE_TYPE = 4135;
	this.BYTE_OFFSET = 4134;
	this.SAMPLE_OFFSET = 4133;
	this.SEC_OFFSET = 4132;
	this.MAX_DISTANCE = 4131;
	this.CONE_OUTER_GAIN = 4130;
	this.ROLLOFF_FACTOR = 4129;
	this.REFERENCE_DISTANCE = 4128;
	this.BUFFERS_PROCESSED = 4118;
	this.BUFFERS_QUEUED = 4117;
	this.STOPPED = 4116;
	this.PAUSED = 4115;
	this.PLAYING = 4114;
	this.INITIAL = 4113;
	this.SOURCE_STATE = 4112;
	this.ORIENTATION = 4111;
	this.MAX_GAIN = 4110;
	this.MIN_GAIN = 4109;
	this.GAIN = 4106;
	this.BUFFER = 4105;
	this.LOOPING = 4103;
	this.VELOCITY = 4102;
	this.DIRECTION = 4101;
	this.POSITION = 4100;
	this.PITCH = 4099;
	this.CONE_OUTER_ANGLE = 4098;
	this.CONE_INNER_ANGLE = 4097;
	this.SOURCE_RELATIVE = 514;
	this.TRUE = 1;
	this.FALSE = 0;
	this.NONE = 0;
};
$hxClasses["lime.audio.ALAudioContext"] = lime.audio.ALAudioContext;
lime.audio.ALAudioContext.__name__ = true;
lime.audio.ALAudioContext.prototype = {
	bufferData: function(buffer,format,data,size,freq) {
		lime.audio.openal.AL.bufferData(buffer,format,data,size,freq);
	}
	,buffer3f: function(buffer,param,value1,value2,value3) {
		lime.audio.openal.AL.buffer3f(buffer,param,value1,value2,value3);
	}
	,buffer3i: function(buffer,param,value1,value2,value3) {
		lime.audio.openal.AL.buffer3i(buffer,param,value1,value2,value3);
	}
	,bufferf: function(buffer,param,value) {
		lime.audio.openal.AL.bufferf(buffer,param,value);
	}
	,bufferfv: function(buffer,param,values) {
		lime.audio.openal.AL.bufferfv(buffer,param,values);
	}
	,bufferi: function(buffer,param,value) {
		lime.audio.openal.AL.bufferi(buffer,param,value);
	}
	,bufferiv: function(buffer,param,values) {
		lime.audio.openal.AL.bufferiv(buffer,param,values);
	}
	,deleteBuffer: function(buffer) {
		lime.audio.openal.AL.deleteBuffer(buffer);
	}
	,deleteBuffers: function(buffers) {
		lime.audio.openal.AL.deleteBuffers(buffers);
	}
	,deleteSource: function(source) {
		lime.audio.openal.AL.deleteSource(source);
	}
	,deleteSources: function(sources) {
		lime.audio.openal.AL.deleteSources(sources);
	}
	,disable: function(capability) {
		lime.audio.openal.AL.disable(capability);
	}
	,distanceModel: function(distanceModel) {
		lime.audio.openal.AL.distanceModel(distanceModel);
	}
	,dopplerFactor: function(value) {
		lime.audio.openal.AL.dopplerFactor(value);
	}
	,dopplerVelocity: function(value) {
		lime.audio.openal.AL.dopplerVelocity(value);
	}
	,enable: function(capability) {
		lime.audio.openal.AL.enable(capability);
	}
	,genSource: function() {
		return lime.audio.openal.AL.genSource();
	}
	,genSources: function(n) {
		return lime.audio.openal.AL.genSources(n);
	}
	,genBuffer: function() {
		return lime.audio.openal.AL.genBuffer();
	}
	,genBuffers: function(n) {
		return lime.audio.openal.AL.genBuffers(n);
	}
	,getBoolean: function(param) {
		return lime.audio.openal.AL.getBoolean(param);
	}
	,getBooleanv: function(param,count) {
		if(count == null) count = 1;
		return lime.audio.openal.AL.getBooleanv(param,count);
	}
	,getBuffer3f: function(buffer,param) {
		return lime.audio.openal.AL.getBuffer3f(buffer,param);
	}
	,getBuffer3i: function(buffer,param) {
		return lime.audio.openal.AL.getBuffer3i(buffer,param);
	}
	,getBufferf: function(buffer,param) {
		return lime.audio.openal.AL.getBufferf(buffer,param);
	}
	,getBufferfv: function(buffer,param,count) {
		if(count == null) count = 1;
		return lime.audio.openal.AL.getBufferfv(buffer,param,count);
	}
	,getBufferi: function(buffer,param) {
		return lime.audio.openal.AL.getBufferi(buffer,param);
	}
	,getBufferiv: function(buffer,param,count) {
		if(count == null) count = 1;
		return lime.audio.openal.AL.getBufferiv(buffer,param,count);
	}
	,getDouble: function(param) {
		return lime.audio.openal.AL.getDouble(param);
	}
	,getDoublev: function(param,count) {
		if(count == null) count = 1;
		return lime.audio.openal.AL.getDoublev(param,count);
	}
	,getEnumValue: function(ename) {
		return lime.audio.openal.AL.getEnumValue(ename);
	}
	,getError: function() {
		return lime.audio.openal.AL.getError();
	}
	,getErrorString: function() {
		return lime.audio.openal.AL.getErrorString();
	}
	,getFloat: function(param) {
		return lime.audio.openal.AL.getFloat(param);
	}
	,getFloatv: function(param,count) {
		if(count == null) count = 1;
		return lime.audio.openal.AL.getFloatv(param,count);
	}
	,getInteger: function(param) {
		return lime.audio.openal.AL.getInteger(param);
	}
	,getIntegerv: function(param,count) {
		if(count == null) count = 1;
		return lime.audio.openal.AL.getIntegerv(param,count);
	}
	,getListener3f: function(param) {
		return lime.audio.openal.AL.getListener3f(param);
	}
	,getListener3i: function(param) {
		return lime.audio.openal.AL.getListener3i(param);
	}
	,getListenerf: function(param) {
		return lime.audio.openal.AL.getListenerf(param);
	}
	,getListenerfv: function(param,count) {
		if(count == null) count = 1;
		return lime.audio.openal.AL.getListenerfv(param,count);
	}
	,getListeneri: function(param) {
		return lime.audio.openal.AL.getListeneri(param);
	}
	,getListeneriv: function(param,count) {
		if(count == null) count = 1;
		return lime.audio.openal.AL.getListeneriv(param,count);
	}
	,getProcAddress: function(fname) {
		return lime.audio.openal.AL.getProcAddress(fname);
	}
	,getSource3f: function(source,param) {
		return lime.audio.openal.AL.getSource3f(source,param);
	}
	,getSourcef: function(source,param) {
		return lime.audio.openal.AL.getSourcef(source,param);
	}
	,getSource3i: function(source,param) {
		return lime.audio.openal.AL.getSource3i(source,param);
	}
	,getSourcefv: function(source,param) {
		return lime.audio.openal.AL.getSourcefv(source,param);
	}
	,getSourcei: function(source,param) {
		return lime.audio.openal.AL.getSourcei(source,param);
	}
	,getSourceiv: function(source,param,count) {
		if(count == null) count = 1;
		return lime.audio.openal.AL.getSourceiv(source,param,count);
	}
	,getString: function(param) {
		return lime.audio.openal.AL.getString(param);
	}
	,isBuffer: function(buffer) {
		return lime.audio.openal.AL.isBuffer(buffer);
	}
	,isEnabled: function(capability) {
		return lime.audio.openal.AL.isEnabled(capability);
	}
	,isExtensionPresent: function(extname) {
		return lime.audio.openal.AL.isExtensionPresent(extname);
	}
	,isSource: function(source) {
		return lime.audio.openal.AL.isSource(source);
	}
	,listener3f: function(param,value1,value2,value3) {
		lime.audio.openal.AL.listener3f(param,value1,value2,value3);
	}
	,listener3i: function(param,value1,value2,value3) {
		lime.audio.openal.AL.listener3i(param,value1,value2,value3);
	}
	,listenerf: function(param,value) {
		lime.audio.openal.AL.listenerf(param,value);
	}
	,listenerfv: function(param,values) {
		lime.audio.openal.AL.listenerfv(param,values);
	}
	,listeneri: function(param,value) {
		lime.audio.openal.AL.listeneri(param,value);
	}
	,listeneriv: function(param,values) {
		lime.audio.openal.AL.listeneriv(param,values);
	}
	,source3f: function(source,param,value1,value2,value3) {
		lime.audio.openal.AL.source3f(source,param,value1,value2,value3);
	}
	,source3i: function(source,param,value1,value2,value3) {
		lime.audio.openal.AL.source3i(source,param,value1,value2,value3);
	}
	,sourcef: function(source,param,value) {
		lime.audio.openal.AL.sourcef(source,param,value);
	}
	,sourcefv: function(source,param,values) {
		lime.audio.openal.AL.sourcefv(source,param,values);
	}
	,sourcei: function(source,param,value) {
		lime.audio.openal.AL.sourcei(source,param,value);
	}
	,sourceiv: function(source,param,values) {
		lime.audio.openal.AL.sourceiv(source,param,values);
	}
	,sourcePlay: function(source) {
		lime.audio.openal.AL.sourcePlay(source);
	}
	,sourcePlayv: function(sources) {
		lime.audio.openal.AL.sourcePlayv(sources);
	}
	,sourceStop: function(source) {
		lime.audio.openal.AL.sourceStop(source);
	}
	,sourceStopv: function(sources) {
		lime.audio.openal.AL.sourceStopv(sources);
	}
	,sourceRewind: function(source) {
		lime.audio.openal.AL.sourceRewind(source);
	}
	,sourceRewindv: function(sources) {
		lime.audio.openal.AL.sourceRewindv(sources);
	}
	,sourcePause: function(source) {
		lime.audio.openal.AL.sourcePause(source);
	}
	,sourcePausev: function(sources) {
		lime.audio.openal.AL.sourcePausev(sources);
	}
	,sourceQueueBuffer: function(source,buffer) {
		lime.audio.openal.AL.sourceQueueBuffer(source,buffer);
	}
	,sourceQueueBuffers: function(source,nb,buffers) {
		lime.audio.openal.AL.sourceQueueBuffers(source,nb,buffers);
	}
	,sourceUnqueueBuffer: function(source) {
		return lime.audio.openal.AL.sourceUnqueueBuffer(source);
	}
	,sourceUnqueueBuffers: function(source,nb) {
		return lime.audio.openal.AL.sourceUnqueueBuffers(source,nb);
	}
	,speedOfSound: function(value) {
		lime.audio.openal.AL.speedOfSound(value);
	}
	,__class__: lime.audio.ALAudioContext
};
lime.audio.ALCAudioContext = function() {
	this.ALL_DEVICES_SPECIFIER = 4115;
	this.DEFAULT_ALL_DEVICES_SPECIFIER = 4114;
	this.ENUMERATE_ALL_EXT = 1;
	this.EXTENSIONS = 4102;
	this.DEVICE_SPECIFIER = 4101;
	this.DEFAULT_DEVICE_SPECIFIER = 4100;
	this.ALL_ATTRIBUTES = 4099;
	this.ATTRIBUTES_SIZE = 4098;
	this.OUT_OF_MEMORY = 40965;
	this.INVALID_VALUE = 40964;
	this.INVALID_ENUM = 40963;
	this.INVALID_CONTEXT = 40962;
	this.INVALID_DEVICE = 40961;
	this.NO_ERROR = 0;
	this.STEREO_SOURCES = 4113;
	this.MONO_SOURCES = 4112;
	this.SYNC = 4105;
	this.REFRESH = 4104;
	this.FREQUENCY = 4103;
	this.TRUE = 1;
	this.FALSE = 0;
};
$hxClasses["lime.audio.ALCAudioContext"] = lime.audio.ALCAudioContext;
lime.audio.ALCAudioContext.__name__ = true;
lime.audio.ALCAudioContext.prototype = {
	closeDevice: function(device) {
		return lime.audio.openal.ALC.closeDevice(device);
	}
	,createContext: function(device,attrlist) {
		return lime.audio.openal.ALC.createContext(device,attrlist);
	}
	,destroyContext: function(context) {
		lime.audio.openal.ALC.destroyContext(context);
	}
	,getContextsDevice: function(context) {
		return lime.audio.openal.ALC.getContextsDevice(context);
	}
	,getCurrentContext: function() {
		return lime.audio.openal.ALC.getCurrentContext();
	}
	,getError: function(device) {
		return lime.audio.openal.ALC.getError(device);
	}
	,getErrorString: function(device) {
		return lime.audio.openal.ALC.getErrorString(device);
	}
	,getIntegerv: function(device,param,count) {
		if(count == null) count = 1;
		return lime.audio.openal.ALC.getIntegerv(device,param,count);
	}
	,getString: function(device,param) {
		return lime.audio.openal.ALC.getString(device,param);
	}
	,makeContextCurrent: function(context) {
		return lime.audio.openal.ALC.makeContextCurrent(context);
	}
	,openDevice: function(deviceName) {
		return lime.audio.openal.ALC.openDevice(deviceName);
	}
	,processContext: function(context) {
		lime.audio.openal.ALC.processContext(context);
	}
	,suspendContext: function(context) {
		lime.audio.openal.ALC.suspendContext(context);
	}
	,__class__: lime.audio.ALCAudioContext
};
lime.audio.AudioBuffer = function() {
	this.id = 0;
};
$hxClasses["lime.audio.AudioBuffer"] = lime.audio.AudioBuffer;
lime.audio.AudioBuffer.__name__ = true;
lime.audio.AudioBuffer.fromBytes = function(bytes) {
	return null;
};
lime.audio.AudioBuffer.fromFile = function(path) {
	return null;
};
lime.audio.AudioBuffer.fromURL = function(url,handler) {
};
lime.audio.AudioBuffer.prototype = {
	dispose: function() {
	}
	,__class__: lime.audio.AudioBuffer
};
lime.audio.AudioContext = $hxClasses["lime.audio.AudioContext"] = { __ename__ : true, __constructs__ : ["OPENAL","HTML5","WEB","FLASH","CUSTOM"] };
lime.audio.AudioContext.OPENAL = function(alc,al) { var $x = ["OPENAL",0,alc,al]; $x.__enum__ = lime.audio.AudioContext; return $x; };
lime.audio.AudioContext.HTML5 = function(context) { var $x = ["HTML5",1,context]; $x.__enum__ = lime.audio.AudioContext; return $x; };
lime.audio.AudioContext.WEB = function(context) { var $x = ["WEB",2,context]; $x.__enum__ = lime.audio.AudioContext; return $x; };
lime.audio.AudioContext.FLASH = function(context) { var $x = ["FLASH",3,context]; $x.__enum__ = lime.audio.AudioContext; return $x; };
lime.audio.AudioContext.CUSTOM = function(data) { var $x = ["CUSTOM",4,data]; $x.__enum__ = lime.audio.AudioContext; return $x; };
lime.audio.AudioManager = function() { };
$hxClasses["lime.audio.AudioManager"] = lime.audio.AudioManager;
lime.audio.AudioManager.__name__ = true;
lime.audio.AudioManager.init = function(context) {
	if(lime.audio.AudioManager.context == null) {
		if(context == null) try {
			window.AudioContext = window.AudioContext || window.webkitAudioContext;;
			lime.audio.AudioManager.context = lime.audio.AudioContext.WEB(new AudioContext ());
		} catch( e ) {
			lime.audio.AudioManager.context = lime.audio.AudioContext.HTML5(new lime.audio.HTML5AudioContext());
		} else lime.audio.AudioManager.context = context;
	}
};
lime.audio.AudioManager.resume = function() {
	if(lime.audio.AudioManager.context != null) {
		var _g = lime.audio.AudioManager.context;
		switch(_g[1]) {
		case 0:
			var al = _g[3];
			var alc = _g[2];
			alc.processContext(alc.getCurrentContext());
			break;
		default:
		}
	}
};
lime.audio.AudioManager.shutdown = function() {
	if(lime.audio.AudioManager.context != null) {
		var _g = lime.audio.AudioManager.context;
		switch(_g[1]) {
		case 0:
			var al = _g[3];
			var alc = _g[2];
			var currentContext = alc.getCurrentContext();
			if(currentContext != null) {
				var device = alc.getContextsDevice(currentContext);
				alc.makeContextCurrent(null);
				alc.destroyContext(currentContext);
				alc.closeDevice(device);
			}
			break;
		default:
		}
	}
};
lime.audio.AudioManager.suspend = function() {
	if(lime.audio.AudioManager.context != null) {
		var _g = lime.audio.AudioManager.context;
		switch(_g[1]) {
		case 0:
			var al = _g[3];
			var alc = _g[2];
			alc.suspendContext(alc.getCurrentContext());
			break;
		default:
		}
	}
};
lime.audio.AudioSource = function(buffer,offset,length,loops) {
	if(loops == null) loops = 0;
	if(offset == null) offset = 0;
	this.onComplete = new lime.app.Event();
	this.buffer = buffer;
	this.offset = offset;
	if(length != null && length != 0) this.set_length(length);
	this.loops = loops;
	this.id = 0;
	if(buffer != null) this.init();
};
$hxClasses["lime.audio.AudioSource"] = lime.audio.AudioSource;
lime.audio.AudioSource.__name__ = true;
lime.audio.AudioSource.prototype = {
	dispose: function() {
		{
			var _g = lime.audio.AudioManager.context;
			switch(_g[1]) {
			case 0:
				var al = _g[3];
				var alc = _g[2];
				if((function($this) {
					var $r;
					var $int = $this.id;
					$r = $int < 0?4294967296.0 + $int:$int + 0.0;
					return $r;
				}(this)) != 0) al.deleteSource(this.id);
				break;
			default:
			}
		}
	}
	,init: function() {
		{
			var _g = lime.audio.AudioManager.context;
			switch(_g[1]) {
			case 0:
				var al = _g[3];
				var alc = _g[2];
				if((function($this) {
					var $r;
					var $int = $this.buffer.id;
					$r = $int < 0?4294967296.0 + $int:$int + 0.0;
					return $r;
				}(this)) == 0) {
					this.buffer.id = al.genBuffer();
					var format = 0;
					if(this.buffer.channels == 1) {
						if(this.buffer.bitsPerSample == 8) format = al.FORMAT_MONO8; else if(this.buffer.bitsPerSample == 16) format = al.FORMAT_MONO16;
					} else if(this.buffer.channels == 2) {
						if(this.buffer.bitsPerSample == 8) format = al.FORMAT_STEREO8; else if(this.buffer.bitsPerSample == 16) format = al.FORMAT_STEREO16;
					}
					al.bufferData(this.buffer.id,format,this.buffer.data,this.buffer.data.length,this.buffer.sampleRate);
				}
				this.id = al.genSource();
				al.sourcei(this.id,al.BUFFER,this.buffer.id);
				break;
			default:
			}
		}
	}
	,play: function() {
	}
	,pause: function() {
	}
	,stop: function() {
	}
	,timer_onRun: function() {
	}
	,get_currentTime: function() {
		return 0;
	}
	,set_currentTime: function(value) {
		return this.pauseTime = value;
	}
	,get_gain: function() {
		return 1;
	}
	,set_gain: function(value) {
		return 1;
	}
	,get_length: function() {
		if(this.__length != null) return this.__length;
		return 0;
	}
	,set_length: function(value) {
		return this.__length = value;
	}
	,__class__: lime.audio.AudioSource
};
lime.audio.FlashAudioContext = function() {
};
$hxClasses["lime.audio.FlashAudioContext"] = lime.audio.FlashAudioContext;
lime.audio.FlashAudioContext.__name__ = true;
lime.audio.FlashAudioContext.prototype = {
	createBuffer: function(stream,context) {
		return null;
	}
	,getBytesLoaded: function(buffer) {
		return 0;
	}
	,getBytesTotal: function(buffer) {
		return 0;
	}
	,getID3: function(buffer) {
		return null;
	}
	,getIsBuffering: function(buffer) {
		return false;
	}
	,getIsURLInaccessible: function(buffer) {
		return false;
	}
	,getLength: function(buffer) {
		return 0;
	}
	,getURL: function(buffer) {
		return null;
	}
	,close: function(buffer) {
	}
	,extract: function(buffer,target,length,startPosition) {
		if(startPosition == null) startPosition = -1;
		return 0;
	}
	,load: function(buffer,stream,context) {
	}
	,loadCompressedDataFromByteArray: function(buffer,bytes,bytesLength) {
	}
	,loadPCMFromByteArray: function(buffer,bytes,samples,format,stereo,sampleRate) {
		if(sampleRate == null) sampleRate = 44100;
		if(stereo == null) stereo = true;
	}
	,play: function(buffer,startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0;
		return null;
	}
	,__class__: lime.audio.FlashAudioContext
};
lime.audio.HTML5AudioContext = function() {
	this.NETWORK_NO_SOURCE = 3;
	this.NETWORK_LOADING = 2;
	this.NETWORK_IDLE = 1;
	this.NETWORK_EMPTY = 0;
	this.HAVE_NOTHING = 0;
	this.HAVE_METADATA = 1;
	this.HAVE_FUTURE_DATA = 3;
	this.HAVE_ENOUGH_DATA = 4;
	this.HAVE_CURRENT_DATA = 2;
};
$hxClasses["lime.audio.HTML5AudioContext"] = lime.audio.HTML5AudioContext;
lime.audio.HTML5AudioContext.__name__ = true;
lime.audio.HTML5AudioContext.prototype = {
	canPlayType: function(buffer,type) {
		if(buffer.src != null) return buffer.src.canPlayType(type);
		return null;
	}
	,createBuffer: function(urlString) {
		var buffer = new lime.audio.AudioBuffer();
		buffer.src = new Audio();
		buffer.src.src = urlString;
		return buffer;
	}
	,getAudioDecodedByteCount: function(buffer) {
		if(buffer.src != null) return buffer.src.audioDecodedByteCount;
		return 0;
	}
	,getAutoplay: function(buffer) {
		if(buffer.src != null) return buffer.src.autoplay;
		return false;
	}
	,getBuffered: function(buffer) {
		if(buffer.src != null) return buffer.src.buffered;
		return null;
	}
	,getController: function(buffer) {
		if(buffer.src != null) return buffer.src.controller;
		return null;
	}
	,getCurrentSrc: function(buffer) {
		if(buffer.src != null) return buffer.src.currentSrc;
		return null;
	}
	,getCurrentTime: function(buffer) {
		if(buffer.src != null) return buffer.src.currentTime;
		return 0;
	}
	,getDefaultPlaybackRate: function(buffer) {
		if(buffer.src != null) return buffer.src.defaultPlaybackRate;
		return 1;
	}
	,getDuration: function(buffer) {
		if(buffer.src != null) return buffer.src.duration;
		return 0;
	}
	,getEnded: function(buffer) {
		if(buffer.src != null) return buffer.src.ended;
		return false;
	}
	,getError: function(buffer) {
		if(buffer.src != null) return buffer.src.error;
		return null;
	}
	,getInitialTime: function(buffer) {
		if(buffer.src != null) return buffer.src.initialTime;
		return 0;
	}
	,getLoop: function(buffer) {
		if(buffer.src != null) return buffer.src.loop;
		return false;
	}
	,getMediaGroup: function(buffer) {
		if(buffer.src != null) return buffer.src.mediaGroup;
		return null;
	}
	,getMuted: function(buffer) {
		if(buffer.src != null) return buffer.src.muted;
		return false;
	}
	,getNetworkState: function(buffer) {
		if(buffer.src != null) return buffer.src.networkState;
		return 0;
	}
	,getPaused: function(buffer) {
		if(buffer.src != null) return buffer.src.paused;
		return false;
	}
	,getPlaybackRate: function(buffer) {
		if(buffer.src != null) return buffer.src.playbackRate;
		return 1;
	}
	,getPlayed: function(buffer) {
		if(buffer.src != null) return buffer.src.played;
		return null;
	}
	,getPreload: function(buffer) {
		if(buffer.src != null) return buffer.src.preload;
		return null;
	}
	,getReadyState: function(buffer) {
		if(buffer.src != null) return buffer.src.readyState;
		return 0;
	}
	,getSeekable: function(buffer) {
		if(buffer.src != null) return buffer.src.seekable;
		return null;
	}
	,getSeeking: function(buffer) {
		if(buffer.src != null) return buffer.src.seeking;
		return false;
	}
	,getSrc: function(buffer) {
		if(buffer.src != null) return buffer.src.src;
		return null;
	}
	,getStartTime: function(buffer) {
		if(buffer.src != null) return buffer.src.playbackRate;
		return 0;
	}
	,getVolume: function(buffer) {
		if(buffer.src != null) return buffer.src.volume;
		return 1;
	}
	,load: function(buffer) {
		if(buffer.src != null) return buffer.src.load();
	}
	,pause: function(buffer) {
		if(buffer.src != null) return buffer.src.pause();
	}
	,play: function(buffer) {
		if(buffer.src != null) return buffer.src.play();
	}
	,setAutoplay: function(buffer,value) {
		if(buffer.src != null) buffer.src.autoplay = value;
	}
	,setController: function(buffer,value) {
		if(buffer.src != null) buffer.src.controller = value;
	}
	,setCurrentTime: function(buffer,value) {
		if(buffer.src != null) buffer.src.currentTime = value;
	}
	,setDefaultPlaybackRate: function(buffer,value) {
		if(buffer.src != null) buffer.src.defaultPlaybackRate = value;
	}
	,setLoop: function(buffer,value) {
		if(buffer.src != null) buffer.src.loop = value;
	}
	,setMediaGroup: function(buffer,value) {
		if(buffer.src != null) buffer.src.mediaGroup = value;
	}
	,setMuted: function(buffer,value) {
		if(buffer.src != null) buffer.src.muted = value;
	}
	,setPlaybackRate: function(buffer,value) {
		if(buffer.src != null) buffer.src.playbackRate = value;
	}
	,setPreload: function(buffer,value) {
		if(buffer.src != null) buffer.src.preload = value;
	}
	,setSrc: function(buffer,value) {
		if(buffer.src != null) buffer.src.src = value;
	}
	,setVolume: function(buffer,value) {
		if(buffer.src != null) buffer.src.volume = value;
	}
	,__class__: lime.audio.HTML5AudioContext
};
lime.audio.openal = {};
lime.audio.openal.AL = function() { };
$hxClasses["lime.audio.openal.AL"] = lime.audio.openal.AL;
lime.audio.openal.AL.__name__ = true;
lime.audio.openal.AL.bufferData = function(buffer,format,data,size,freq) {
};
lime.audio.openal.AL.buffer3f = function(buffer,param,value1,value2,value3) {
};
lime.audio.openal.AL.buffer3i = function(buffer,param,value1,value2,value3) {
};
lime.audio.openal.AL.bufferf = function(buffer,param,value) {
};
lime.audio.openal.AL.bufferfv = function(buffer,param,values) {
};
lime.audio.openal.AL.bufferi = function(buffer,param,value) {
};
lime.audio.openal.AL.bufferiv = function(buffer,param,values) {
};
lime.audio.openal.AL.deleteBuffer = function(buffer) {
};
lime.audio.openal.AL.deleteBuffers = function(buffers) {
};
lime.audio.openal.AL.deleteSource = function(source) {
};
lime.audio.openal.AL.deleteSources = function(sources) {
};
lime.audio.openal.AL.disable = function(capability) {
};
lime.audio.openal.AL.distanceModel = function(distanceModel) {
};
lime.audio.openal.AL.dopplerFactor = function(value) {
};
lime.audio.openal.AL.dopplerVelocity = function(value) {
};
lime.audio.openal.AL.enable = function(capability) {
};
lime.audio.openal.AL.genSource = function() {
	return 0;
};
lime.audio.openal.AL.genSources = function(n) {
	return null;
};
lime.audio.openal.AL.genBuffer = function() {
	return 0;
};
lime.audio.openal.AL.genBuffers = function(n) {
	return null;
};
lime.audio.openal.AL.getBoolean = function(param) {
	return false;
};
lime.audio.openal.AL.getBooleanv = function(param,count) {
	if(count == null) count = 1;
	return null;
};
lime.audio.openal.AL.getBuffer3f = function(buffer,param) {
	return null;
};
lime.audio.openal.AL.getBuffer3i = function(buffer,param) {
	return null;
};
lime.audio.openal.AL.getBufferf = function(buffer,param) {
	return 0;
};
lime.audio.openal.AL.getBufferfv = function(buffer,param,count) {
	if(count == null) count = 1;
	return null;
};
lime.audio.openal.AL.getBufferi = function(buffer,param) {
	return 0;
};
lime.audio.openal.AL.getBufferiv = function(buffer,param,count) {
	if(count == null) count = 1;
	return null;
};
lime.audio.openal.AL.getDouble = function(param) {
	return 0;
};
lime.audio.openal.AL.getDoublev = function(param,count) {
	if(count == null) count = 1;
	return null;
};
lime.audio.openal.AL.getEnumValue = function(ename) {
	return 0;
};
lime.audio.openal.AL.getError = function() {
	return 0;
};
lime.audio.openal.AL.getErrorString = function() {
	var _g = lime.audio.openal.AL.getError();
	switch(_g) {
	case 40961:
		return "INVALID_NAME: Invalid parameter name";
	case 40962:
		return "INVALID_ENUM: Invalid enum value";
	case 40963:
		return "INVALID_VALUE: Invalid parameter value";
	case 40964:
		return "INVALID_OPERATION: Illegal operation or call";
	case 40965:
		return "OUT_OF_MEMORY: OpenAL has run out of memory";
	default:
		return "";
	}
};
lime.audio.openal.AL.getFloat = function(param) {
	return 0;
};
lime.audio.openal.AL.getFloatv = function(param,count) {
	if(count == null) count = 1;
	return null;
};
lime.audio.openal.AL.getInteger = function(param) {
	return 0;
};
lime.audio.openal.AL.getIntegerv = function(param,count) {
	if(count == null) count = 1;
	return null;
};
lime.audio.openal.AL.getListener3f = function(param) {
	return null;
};
lime.audio.openal.AL.getListener3i = function(param) {
	return null;
};
lime.audio.openal.AL.getListenerf = function(param) {
	return 0;
};
lime.audio.openal.AL.getListenerfv = function(param,count) {
	if(count == null) count = 1;
	return null;
};
lime.audio.openal.AL.getListeneri = function(param) {
	return 0;
};
lime.audio.openal.AL.getListeneriv = function(param,count) {
	if(count == null) count = 1;
	return null;
};
lime.audio.openal.AL.getProcAddress = function(fname) {
	return null;
};
lime.audio.openal.AL.getSource3f = function(source,param) {
	return null;
};
lime.audio.openal.AL.getSourcef = function(source,param) {
	return 0;
};
lime.audio.openal.AL.getSource3i = function(source,param) {
	return null;
};
lime.audio.openal.AL.getSourcefv = function(source,param) {
	return null;
};
lime.audio.openal.AL.getSourcei = function(source,param) {
	return 0;
};
lime.audio.openal.AL.getSourceiv = function(source,param,count) {
	if(count == null) count = 1;
	return null;
};
lime.audio.openal.AL.getString = function(param) {
	return null;
};
lime.audio.openal.AL.isBuffer = function(buffer) {
	return false;
};
lime.audio.openal.AL.isEnabled = function(capability) {
	return false;
};
lime.audio.openal.AL.isExtensionPresent = function(extname) {
	return false;
};
lime.audio.openal.AL.isSource = function(source) {
	return false;
};
lime.audio.openal.AL.listener3f = function(param,value1,value2,value3) {
};
lime.audio.openal.AL.listener3i = function(param,value1,value2,value3) {
};
lime.audio.openal.AL.listenerf = function(param,value) {
};
lime.audio.openal.AL.listenerfv = function(param,values) {
};
lime.audio.openal.AL.listeneri = function(param,value) {
};
lime.audio.openal.AL.listeneriv = function(param,values) {
};
lime.audio.openal.AL.source3f = function(source,param,value1,value2,value3) {
};
lime.audio.openal.AL.source3i = function(source,param,value1,value2,value3) {
};
lime.audio.openal.AL.sourcef = function(source,param,value) {
};
lime.audio.openal.AL.sourcefv = function(source,param,values) {
};
lime.audio.openal.AL.sourcei = function(source,param,value) {
};
lime.audio.openal.AL.sourceiv = function(source,param,values) {
};
lime.audio.openal.AL.sourcePlay = function(source) {
};
lime.audio.openal.AL.sourcePlayv = function(sources) {
};
lime.audio.openal.AL.sourceStop = function(source) {
};
lime.audio.openal.AL.sourceStopv = function(sources) {
};
lime.audio.openal.AL.sourceRewind = function(source) {
};
lime.audio.openal.AL.sourceRewindv = function(sources) {
};
lime.audio.openal.AL.sourcePause = function(source) {
};
lime.audio.openal.AL.sourcePausev = function(sources) {
};
lime.audio.openal.AL.sourceQueueBuffer = function(source,buffer) {
};
lime.audio.openal.AL.sourceQueueBuffers = function(source,nb,buffers) {
};
lime.audio.openal.AL.sourceUnqueueBuffer = function(source) {
	return 0;
};
lime.audio.openal.AL.sourceUnqueueBuffers = function(source,nb) {
	return null;
};
lime.audio.openal.AL.speedOfSound = function(value) {
};
lime.audio.openal.ALC = function() { };
$hxClasses["lime.audio.openal.ALC"] = lime.audio.openal.ALC;
lime.audio.openal.ALC.__name__ = true;
lime.audio.openal.ALC.closeDevice = function(device) {
	return false;
};
lime.audio.openal.ALC.createContext = function(device,attrlist) {
	return null;
};
lime.audio.openal.ALC.destroyContext = function(context) {
};
lime.audio.openal.ALC.getContextsDevice = function(context) {
	return null;
};
lime.audio.openal.ALC.getCurrentContext = function() {
	return null;
};
lime.audio.openal.ALC.getError = function(device) {
	return 0;
};
lime.audio.openal.ALC.getErrorString = function(device) {
	var _g = lime.audio.openal.ALC.getError(device);
	switch(_g) {
	case 40961:
		return "INVALID_DEVICE: Invalid device (or no device?)";
	case 40962:
		return "INVALID_CONTEXT: Invalid context (or no context?)";
	case 40963:
		return "INVALID_ENUM: Invalid enum value";
	case 40964:
		return "INVALID_VALUE: Invalid param value";
	case 40965:
		return "OUT_OF_MEMORY: OpenAL has run out of memory";
	default:
		return "";
	}
};
lime.audio.openal.ALC.getIntegerv = function(device,param,size) {
	return null;
};
lime.audio.openal.ALC.getString = function(device,param) {
	return null;
};
lime.audio.openal.ALC.makeContextCurrent = function(context) {
	return false;
};
lime.audio.openal.ALC.openDevice = function(deviceName) {
	return null;
};
lime.audio.openal.ALC.processContext = function(context) {
};
lime.audio.openal.ALC.suspendContext = function(context) {
};
lime.audio.openal._ALContext = {};
lime.audio.openal._ALContext.ALContext_Impl_ = function() { };
$hxClasses["lime.audio.openal._ALContext.ALContext_Impl_"] = lime.audio.openal._ALContext.ALContext_Impl_;
lime.audio.openal._ALContext.ALContext_Impl_.__name__ = true;
lime.audio.openal._ALContext.ALContext_Impl_._new = function(handle) {
	return handle;
};
lime.audio.openal._ALDevice = {};
lime.audio.openal._ALDevice.ALDevice_Impl_ = function() { };
$hxClasses["lime.audio.openal._ALDevice.ALDevice_Impl_"] = lime.audio.openal._ALDevice.ALDevice_Impl_;
lime.audio.openal._ALDevice.ALDevice_Impl_.__name__ = true;
lime.audio.openal._ALDevice.ALDevice_Impl_._new = function(handle) {
	return handle;
};
lime.graphics = {};
lime.graphics.ConsoleRenderContext = function() {
};
$hxClasses["lime.graphics.ConsoleRenderContext"] = lime.graphics.ConsoleRenderContext;
lime.graphics.ConsoleRenderContext.__name__ = true;
lime.graphics.ConsoleRenderContext.prototype = {
	clear: function() {
	}
	,clearColor: function(r,g,b,a) {
	}
	,clearDepth: function(depth) {
	}
	,clearStencil: function(stencil) {
	}
	,__class__: lime.graphics.ConsoleRenderContext
};
lime.graphics.FlashRenderContext = function() {
};
$hxClasses["lime.graphics.FlashRenderContext"] = lime.graphics.FlashRenderContext;
lime.graphics.FlashRenderContext.__name__ = true;
lime.graphics.FlashRenderContext.prototype = {
	addChild: function(child) {
		return null;
	}
	,addChildAt: function(child,index) {
		return null;
	}
	,addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
	}
	,areInaccessibleObjectsUnderPoint: function(point) {
		return false;
	}
	,contains: function(child) {
		return false;
	}
	,dispatchEvent: function(event) {
		return false;
	}
	,getBounds: function(targetCoordinateSpace) {
		return null;
	}
	,getChildAt: function(index) {
		return null;
	}
	,getChildByName: function(name) {
		return null;
	}
	,getChildIndex: function(child) {
		return 0;
	}
	,getObjectsUnderPoint: function(point) {
		return null;
	}
	,getRect: function(targetCoordinateSpace) {
		return null;
	}
	,globalToLocal: function(point) {
		return null;
	}
	,globalToLocal3D: function(point) {
		return null;
	}
	,hasEventListener: function(type) {
		return false;
	}
	,hitTestObject: function(obj) {
		return false;
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		return false;
	}
	,local3DToGlobal: function(point3d) {
		return null;
	}
	,localToGlobal: function(point) {
		return null;
	}
	,removeChild: function(child) {
		return null;
	}
	,removeChildAt: function(index) {
		return null;
	}
	,removeChildren: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 2147483647;
		if(beginIndex == null) beginIndex = 0;
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) useCapture = false;
	}
	,requestSoftKeyboard: function() {
		return false;
	}
	,setChildIndex: function(child,index) {
	}
	,startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
	}
	,startTouchDrag: function(touchPointID,lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
	}
	,stopAllMovieClips: function() {
	}
	,stopDrag: function() {
	}
	,stopTouchDrag: function(touchPointID) {
	}
	,swapChildren: function(child1,child2) {
	}
	,swapChildrenAt: function(index1,index2) {
	}
	,toString: function() {
		return null;
	}
	,willTrigger: function(type) {
		return false;
	}
	,__class__: lime.graphics.FlashRenderContext
};
lime.graphics.Image = function(buffer,offsetX,offsetY,width,height,color,type) {
	if(height == null) height = -1;
	if(width == null) width = -1;
	if(offsetY == null) offsetY = 0;
	if(offsetX == null) offsetX = 0;
	this.offsetX = offsetX;
	this.offsetY = offsetY;
	this.width = width;
	this.height = height;
	if(type == null) {
		if(lime.app.Application.current != null && lime.app.Application.current.renderers[0] != null) {
			var _g = lime.app.Application.current.renderers[0].context;
			switch(_g[1]) {
			case 2:case 1:
				this.type = lime.graphics.ImageType.CANVAS;
				break;
			case 3:
				this.type = lime.graphics.ImageType.FLASH;
				break;
			default:
				this.type = lime.graphics.ImageType.DATA;
			}
		} else this.type = lime.graphics.ImageType.DATA;
	} else this.type = type;
	if(buffer == null) {
		if(width > 0 && height > 0) {
			var _g1 = this.type;
			switch(_g1[1]) {
			case 0:
				this.buffer = new lime.graphics.ImageBuffer(null,width,height);
				lime.graphics.utils.ImageCanvasUtil.createCanvas(this,width,height);
				if(color != null) this.fillRect(new lime.math.Rectangle(0,0,width,height),color);
				break;
			case 1:
				this.buffer = new lime.graphics.ImageBuffer(new Uint8Array(width * height * 4),width,height);
				if(color != null) this.fillRect(new lime.math.Rectangle(0,0,width,height),color);
				break;
			case 2:
				break;
			default:
			}
		}
	} else this.__fromImageBuffer(buffer);
};
$hxClasses["lime.graphics.Image"] = lime.graphics.Image;
lime.graphics.Image.__name__ = true;
lime.graphics.Image.fromBase64 = function(base64,type,onload) {
	if(base64 == null) return null;
	var image = new lime.graphics.Image();
	image.__fromBase64(base64,type,onload);
	return image;
};
lime.graphics.Image.fromBitmapData = function(bitmapData) {
	if(bitmapData == null) return null;
	var buffer = new lime.graphics.ImageBuffer(null,bitmapData.width,bitmapData.height);
	buffer.__srcBitmapData = bitmapData;
	return new lime.graphics.Image(buffer);
};
lime.graphics.Image.fromBytes = function(bytes,onload) {
	if(bytes == null) return null;
	var image = new lime.graphics.Image();
	image.__fromBytes(bytes,onload);
	return image;
};
lime.graphics.Image.fromCanvas = function(canvas) {
	if(canvas == null) return null;
	var buffer = new lime.graphics.ImageBuffer(null,canvas.width,canvas.height);
	buffer.set_src(canvas);
	return new lime.graphics.Image(buffer);
};
lime.graphics.Image.fromFile = function(path,onload,onerror) {
	var image = new lime.graphics.Image();
	image.__fromFile(path,onload,onerror);
	return image;
};
lime.graphics.Image.fromImageElement = function(image) {
	if(image == null) return null;
	var buffer = new lime.graphics.ImageBuffer(null,image.width,image.height);
	buffer.set_src(image);
	return new lime.graphics.Image(buffer);
};
lime.graphics.Image.__base64Encode = function(bytes) {
	var extension;
	var _g = bytes.length % 3;
	switch(_g) {
	case 1:
		extension = "==";
		break;
	case 2:
		extension = "=";
		break;
	default:
		extension = "";
	}
	if(lime.graphics.Image.__base64Encoder == null) lime.graphics.Image.__base64Encoder = new haxe.crypto.BaseCode(haxe.io.Bytes.ofString(lime.graphics.Image.__base64Chars));
	return lime.graphics.Image.__base64Encoder.encodeBytes(haxe.io.Bytes.ofData(bytes.byteView)).toString() + extension;
};
lime.graphics.Image.__isJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readUnsignedByte() == 255 && bytes.readUnsignedByte() == 216;
};
lime.graphics.Image.__isPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readUnsignedByte() == 137 && bytes.readUnsignedByte() == 80 && bytes.readUnsignedByte() == 78 && bytes.readUnsignedByte() == 71 && bytes.readUnsignedByte() == 13 && bytes.readUnsignedByte() == 10 && bytes.readUnsignedByte() == 26 && bytes.readUnsignedByte() == 10;
};
lime.graphics.Image.__isGIF = function(bytes) {
	bytes.position = 0;
	if(bytes.readUnsignedByte() == 71 && bytes.readUnsignedByte() == 73 && bytes.readUnsignedByte() == 70 && bytes.readUnsignedByte() == 56) {
		var b = bytes.readUnsignedByte();
		return (b == 55 || b == 57) && bytes.readUnsignedByte() == 97;
	}
	return false;
};
lime.graphics.Image.prototype = {
	clone: function() {
		var image = new lime.graphics.Image(this.buffer.clone(),this.offsetX,this.offsetY,this.width,this.height,null,this.type);
		return image;
	}
	,colorTransform: function(rect,colorMatrix) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) return;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.colorTransform(this,rect,colorMatrix);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.colorTransform(this,rect,colorMatrix);
			break;
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.colorTransform(rect.__toFlashRectangle(),lime.math._ColorMatrix.ColorMatrix_Impl_.__toFlashColorTransform(colorMatrix));
			break;
		default:
		}
	}
	,copyChannel: function(sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
		sourceRect = this.__clipRect(sourceRect);
		if(this.buffer == null || sourceRect == null) return;
		if(destChannel == lime.graphics.ImageChannel.ALPHA && !this.get_transparent()) return;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceImage.width) sourceRect.width = sourceImage.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceImage.height) sourceRect.height = sourceImage.height - sourceRect.y;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.copyChannel(this,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.copyChannel(this,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
			break;
		case 2:
			var srcChannel;
			switch(sourceChannel[1]) {
			case 0:
				srcChannel = 1;
				break;
			case 1:
				srcChannel = 2;
				break;
			case 2:
				srcChannel = 4;
				break;
			case 3:
				srcChannel = 8;
				break;
			}
			var dstChannel;
			switch(destChannel[1]) {
			case 0:
				dstChannel = 1;
				break;
			case 1:
				dstChannel = 2;
				break;
			case 2:
				dstChannel = 4;
				break;
			case 3:
				dstChannel = 8;
				break;
			}
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.copyChannel(sourceImage.buffer.get_src(),sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),srcChannel,dstChannel);
			break;
		default:
		}
	}
	,copyPixels: function(sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(this.buffer == null || sourceImage == null) return;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(this.width <= 0 || this.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceImage.width) sourceRect.width = sourceImage.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceImage.height) sourceRect.height = sourceImage.height - sourceRect.y;
		if(sourceRect.x < 0) {
			sourceRect.width += sourceRect.x;
			sourceRect.x = 0;
		}
		if(sourceRect.y < 0) {
			sourceRect.height += sourceRect.y;
			sourceRect.y = 0;
		}
		if(destPoint.x + sourceRect.width > this.width) sourceRect.width = this.width - destPoint.x;
		if(destPoint.y + sourceRect.height > this.height) sourceRect.height = this.height - destPoint.y;
		if(destPoint.x < 0) {
			sourceRect.width += destPoint.x;
			sourceRect.x = -destPoint.x;
			destPoint.x = 0;
		}
		if(destPoint.y < 0) {
			sourceRect.height += destPoint.y;
			sourceRect.y = -destPoint.y;
			destPoint.y = 0;
		}
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this);
			lime.graphics.utils.ImageCanvasUtil.copyPixels(this,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageCanvasUtil.convertToData(sourceImage);
			lime.graphics.utils.ImageDataUtil.copyPixels(this,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
			break;
		case 2:
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			if(alphaImage != null && alphaPoint != null) alphaPoint.offset(alphaImage.offsetX,alphaImage.offsetY);
			this.buffer.__srcBitmapData.copyPixels(sourceImage.buffer.__srcBitmapData,sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),alphaImage != null?alphaImage.buffer.get_src():null,alphaPoint != null?alphaPoint.__toFlashPoint():null,mergeAlpha);
			break;
		default:
		}
	}
	,encode: function(format,quality) {
		if(quality == null) quality = 90;
		if(format == null) format = "png";
		return null;
	}
	,fillRect: function(rect,color,format) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) return;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.fillRect(this,rect,color,format);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.fillRect(this,rect,color,format);
			break;
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			if(format == null || format == 0) color = (color & 255) << 24 | color >> 8;
			this.buffer.__srcBitmapData.fillRect(rect.__toFlashRectangle(),color);
			break;
		default:
		}
	}
	,floodFill: function(x,y,color,format) {
		if(this.buffer == null) return;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.floodFill(this,x,y,color,format);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.floodFill(this,x,y,color,format);
			break;
		case 2:
			if(format == null || format == 0) color = (color & 255) << 24 | color >> 8;
			this.buffer.__srcBitmapData.floodFill(x + this.offsetX,y + this.offsetY,color);
			break;
		default:
		}
	}
	,getColorBoundsRect: function(mask,color,findColor,format) {
		if(findColor == null) findColor = true;
		if(this.buffer == null) return null;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			return lime.graphics.utils.ImageDataUtil.getColorBoundsRect(this,mask,color,findColor,format);
		case 1:
			return lime.graphics.utils.ImageDataUtil.getColorBoundsRect(this,mask,color,findColor,format);
		case 2:
			var rect = this.buffer.__srcBitmapData.getColorBoundsRect(mask,color,findColor);
			return new lime.math.Rectangle(rect.x,rect.y,rect.width,rect.height);
		default:
			return null;
		}
	}
	,getPixel: function(x,y,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			return lime.graphics.utils.ImageCanvasUtil.getPixel(this,x,y,format);
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			return lime.graphics.utils.ImageDataUtil.getPixel(this,x,y,format);
		case 2:
			var color = this.buffer.__srcBitmapData.getPixel(x + this.offsetX,y + this.offsetY);
			if(format == null || format == 0) return (color & 255) << 24 | color >> 8; else return color;
			break;
		default:
			return 0;
		}
	}
	,getPixel32: function(x,y,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			return lime.graphics.utils.ImageCanvasUtil.getPixel32(this,x,y,format);
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			return lime.graphics.utils.ImageDataUtil.getPixel32(this,x,y,format);
		case 2:
			var color = this.buffer.__srcBitmapData.getPixel32(x + this.offsetX,y + this.offsetY);
			if(format == null || format == 0) return (color & 255) << 24 | color >> 8; else return color;
			break;
		default:
			return 0;
		}
	}
	,getPixels: function(rect,format) {
		if(this.buffer == null) return null;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			return lime.graphics.utils.ImageCanvasUtil.getPixels(this,rect,format);
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			return lime.graphics.utils.ImageDataUtil.getPixels(this,rect,format);
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			var byteArray = this.buffer.__srcBitmapData.getPixels(rect.__toFlashRectangle());
			if(format == null || format == 0) {
				var color;
				var length = byteArray.length / 4 | 0;
				var _g1 = 0;
				while(_g1 < length) {
					var i = _g1++;
					color = byteArray.readUnsignedInt();
					byteArray.position -= 4;
					byteArray.writeUnsignedInt((color & 255) << 24 | color >> 8);
				}
				byteArray.position = 0;
			}
			return byteArray;
		default:
			return null;
		}
	}
	,merge: function(sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier) {
		if(this.buffer == null || sourceImage == null) return;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this);
			lime.graphics.utils.ImageCanvasUtil.merge(this,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageCanvasUtil.convertToData(sourceImage);
			lime.graphics.utils.ImageDataUtil.merge(this,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
			break;
		case 2:
			sourceRect.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.merge(sourceImage.buffer.__srcBitmapData,sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
			break;
		default:
			return null;
		}
	}
	,resize: function(newWidth,newHeight) {
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.resize(this,newWidth,newHeight);
			break;
		case 1:
			lime.graphics.utils.ImageDataUtil.resize(this,newWidth,newHeight);
			break;
		case 2:
			break;
		default:
		}
		this.buffer.width = newWidth;
		this.buffer.height = newHeight;
		this.offsetX = 0;
		this.offsetY = 0;
		this.width = newWidth;
		this.height = newHeight;
	}
	,setPixel: function(x,y,color,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) return;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.setPixel(this,x,y,color,format);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.setPixel(this,x,y,color,format);
			break;
		case 2:
			if(format == null || format == 0) color = (color & 255) << 24 | color >> 8;
			this.buffer.__srcBitmapData.setPixel(x + this.offsetX,y + this.offsetX,color);
			break;
		default:
		}
	}
	,setPixel32: function(x,y,color,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) return;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.setPixel32(this,x,y,color,format);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.setPixel32(this,x,y,color,format);
			break;
		case 2:
			if(format == null || format == 0) color = (color & 255) << 24 | color >> 8;
			this.buffer.__srcBitmapData.setPixel32(x + this.offsetX,y + this.offsetY,color);
			break;
		default:
		}
	}
	,setPixels: function(rect,byteArray,format) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) return;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.setPixels(this,rect,byteArray,format);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.setPixels(this,rect,byteArray,format);
			break;
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			if(format == null || format == 0) {
				var srcData = byteArray;
				byteArray = new lime.utils.ByteArray();
				var color;
				var length = byteArray.length / 4 | 0;
				var _g1 = 0;
				while(_g1 < length) {
					var i = _g1++;
					color = srcData.readUnsignedInt();
					byteArray.writeUnsignedInt((color & 255) << 24 | color >> 8);
				}
				srcData.position = 0;
				byteArray.position = 0;
			}
			this.buffer.__srcBitmapData.setPixels(rect.__toFlashRectangle(),byteArray);
			break;
		default:
		}
	}
	,__clipRect: function(r) {
		if(r == null) return null;
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= this.width) {
			r.width -= r.x + r.width - this.width;
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= this.height) {
			r.height -= r.y + r.height - this.height;
			if(r.height <= 0) return null;
		}
		return r;
	}
	,__fromBase64: function(base64,type,onload) {
		var _g = this;
		var image = new Image();
		var image_onLoaded = function(event) {
			_g.buffer = new lime.graphics.ImageBuffer(null,image.width,image.height);
			_g.buffer.__srcImage = image;
			_g.offsetX = 0;
			_g.offsetY = 0;
			_g.width = _g.buffer.width;
			_g.height = _g.buffer.height;
			if(onload != null) onload(_g);
		};
		image.addEventListener("load",image_onLoaded,false);
		image.src = "data:" + type + ";base64," + base64;
	}
	,__fromBytes: function(bytes,onload) {
		var type = "";
		if(lime.graphics.Image.__isPNG(bytes)) type = "image/png"; else if(lime.graphics.Image.__isJPG(bytes)) type = "image/jpeg"; else if(lime.graphics.Image.__isGIF(bytes)) type = "image/gif"; else throw "Image tried to read a PNG/JPG ByteArray, but found an invalid header.";
		this.__fromBase64(lime.graphics.Image.__base64Encode(bytes),type,onload);
	}
	,__fromFile: function(path,onload,onerror) {
		var _g = this;
		var image = new Image();
		image.onload = function(_) {
			_g.buffer = new lime.graphics.ImageBuffer(null,image.width,image.height);
			_g.buffer.__srcImage = image;
			_g.width = image.width;
			_g.height = image.height;
			if(onload != null) onload(_g);
		};
		image.onerror = function(_1) {
			if(onerror != null) onerror();
		};
		image.src = path;
		if(image.complete) {
		}
	}
	,__fromImageBuffer: function(buffer) {
		this.buffer = buffer;
		if(buffer != null) {
			if(this.width == -1) this.width = buffer.width;
			if(this.height == -1) this.height = buffer.height;
		}
	}
	,get_data: function() {
		if(this.buffer.data == null && this.buffer.width > 0 && this.buffer.height > 0) {
			lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this);
			lime.graphics.utils.ImageCanvasUtil.sync(this);
			lime.graphics.utils.ImageCanvasUtil.createImageData(this);
		}
		return this.buffer.data;
	}
	,set_data: function(value) {
		return this.buffer.data = value;
	}
	,get_format: function() {
		return this.buffer.format;
	}
	,set_format: function(value) {
		if(this.buffer.format != value) {
			var _g = this.type;
			switch(_g[1]) {
			case 1:
				lime.graphics.utils.ImageDataUtil.setFormat(this,value);
				break;
			default:
			}
		}
		return this.buffer.format = value;
	}
	,get_powerOfTwo: function() {
		return this.buffer.width != 0 && (this.buffer.width & ~this.buffer.width + 1) == this.buffer.width && (this.buffer.height != 0 && (this.buffer.height & ~this.buffer.height + 1) == this.buffer.height);
	}
	,set_powerOfTwo: function(value) {
		if(value != this.get_powerOfTwo()) {
			var newWidth = 1;
			var newHeight = 1;
			while(newWidth < this.buffer.width) newWidth <<= 1;
			while(newHeight < this.buffer.height) newHeight <<= 1;
			var _g = this.type;
			switch(_g[1]) {
			case 0:
				break;
			case 1:
				lime.graphics.utils.ImageDataUtil.resizeBuffer(this,newWidth,newHeight);
				break;
			case 2:
				break;
			default:
			}
		}
		return value;
	}
	,get_premultiplied: function() {
		return this.buffer.premultiplied;
	}
	,set_premultiplied: function(value) {
		if(value && !this.buffer.premultiplied) {
			var _g = this.type;
			switch(_g[1]) {
			case 1:
				lime.graphics.utils.ImageCanvasUtil.convertToData(this);
				lime.graphics.utils.ImageDataUtil.multiplyAlpha(this);
				break;
			default:
			}
		} else if(!value && this.buffer.premultiplied) {
			var _g1 = this.type;
			switch(_g1[1]) {
			case 1:
				lime.graphics.utils.ImageCanvasUtil.convertToData(this);
				lime.graphics.utils.ImageDataUtil.unmultiplyAlpha(this);
				break;
			default:
			}
		}
		return value;
	}
	,get_rect: function() {
		return new lime.math.Rectangle(0,0,this.width,this.height);
	}
	,get_src: function() {
		return this.buffer.get_src();
	}
	,set_src: function(value) {
		return this.buffer.set_src(value);
	}
	,get_transparent: function() {
		if(this.buffer == null) return false;
		return this.buffer.transparent;
	}
	,set_transparent: function(value) {
		if(this.buffer == null) return false;
		return this.buffer.transparent = value;
	}
	,__class__: lime.graphics.Image
};
lime.graphics.ImageBuffer = function(data,width,height,bitsPerPixel,format) {
	if(bitsPerPixel == null) bitsPerPixel = 4;
	if(height == null) height = 0;
	if(width == null) width = 0;
	this.data = data;
	this.width = width;
	this.height = height;
	this.bitsPerPixel = bitsPerPixel;
	if(format == null) this.format = 0; else this.format = format;
	this.transparent = true;
};
$hxClasses["lime.graphics.ImageBuffer"] = lime.graphics.ImageBuffer;
lime.graphics.ImageBuffer.__name__ = true;
lime.graphics.ImageBuffer.prototype = {
	clone: function() {
		var buffer = new lime.graphics.ImageBuffer(this.data,this.width,this.height,this.bitsPerPixel);
		if(this.data != null) {
			buffer.data = new Uint8Array(this.data.byteLength);
			var copy = new Uint8Array(this.data);
			buffer.data.set(copy);
		} else if(this.__srcImageData != null) {
			buffer.__srcCanvas = window.document.createElement("canvas");
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
			buffer.__srcCanvas.width = this.__srcImageData.width;
			buffer.__srcCanvas.height = this.__srcImageData.height;
			buffer.__srcImageData = buffer.__srcContext.createImageData(this.__srcImageData.width,this.__srcImageData.height);
			var copy1 = new Uint8ClampedArray(this.__srcImageData.data);
			buffer.__srcImageData.data.set(copy1);
		} else if(this.__srcCanvas != null) {
			buffer.__srcCanvas = window.document.createElement("canvas");
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
			buffer.__srcCanvas.width = this.__srcCanvas.width;
			buffer.__srcCanvas.height = this.__srcCanvas.height;
			buffer.__srcContext.drawImage(this.__srcCanvas,0,0);
		} else buffer.__srcImage = this.__srcImage;
		buffer.premultiplied = this.premultiplied;
		buffer.transparent = this.transparent;
		return buffer;
	}
	,get_src: function() {
		if(this.__srcImage != null) return this.__srcImage;
		return this.__srcCanvas;
	}
	,set_src: function(value) {
		if(js.Boot.__instanceof(value,Image)) this.__srcImage = value; else if(js.Boot.__instanceof(value,HTMLCanvasElement)) {
			this.__srcCanvas = value;
			this.__srcContext = this.__srcCanvas.getContext("2d");
		}
		return value;
	}
	,get_stride: function() {
		return this.width * 4;
	}
	,__class__: lime.graphics.ImageBuffer
};
lime.graphics.ImageChannel = $hxClasses["lime.graphics.ImageChannel"] = { __ename__ : true, __constructs__ : ["RED","GREEN","BLUE","ALPHA"] };
lime.graphics.ImageChannel.RED = ["RED",0];
lime.graphics.ImageChannel.RED.__enum__ = lime.graphics.ImageChannel;
lime.graphics.ImageChannel.GREEN = ["GREEN",1];
lime.graphics.ImageChannel.GREEN.__enum__ = lime.graphics.ImageChannel;
lime.graphics.ImageChannel.BLUE = ["BLUE",2];
lime.graphics.ImageChannel.BLUE.__enum__ = lime.graphics.ImageChannel;
lime.graphics.ImageChannel.ALPHA = ["ALPHA",3];
lime.graphics.ImageChannel.ALPHA.__enum__ = lime.graphics.ImageChannel;
lime.graphics.ImageType = $hxClasses["lime.graphics.ImageType"] = { __ename__ : true, __constructs__ : ["CANVAS","DATA","FLASH","CUSTOM"] };
lime.graphics.ImageType.CANVAS = ["CANVAS",0];
lime.graphics.ImageType.CANVAS.__enum__ = lime.graphics.ImageType;
lime.graphics.ImageType.DATA = ["DATA",1];
lime.graphics.ImageType.DATA.__enum__ = lime.graphics.ImageType;
lime.graphics.ImageType.FLASH = ["FLASH",2];
lime.graphics.ImageType.FLASH.__enum__ = lime.graphics.ImageType;
lime.graphics.ImageType.CUSTOM = ["CUSTOM",3];
lime.graphics.ImageType.CUSTOM.__enum__ = lime.graphics.ImageType;
lime.graphics._PixelFormat = {};
lime.graphics._PixelFormat.PixelFormat_Impl_ = function() { };
$hxClasses["lime.graphics._PixelFormat.PixelFormat_Impl_"] = lime.graphics._PixelFormat.PixelFormat_Impl_;
lime.graphics._PixelFormat.PixelFormat_Impl_.__name__ = true;
lime.graphics.RenderContext = $hxClasses["lime.graphics.RenderContext"] = { __ename__ : true, __constructs__ : ["OPENGL","CANVAS","DOM","FLASH","CAIRO","CONSOLE","CUSTOM","NONE"] };
lime.graphics.RenderContext.OPENGL = function(gl) { var $x = ["OPENGL",0,gl]; $x.__enum__ = lime.graphics.RenderContext; return $x; };
lime.graphics.RenderContext.CANVAS = function(context) { var $x = ["CANVAS",1,context]; $x.__enum__ = lime.graphics.RenderContext; return $x; };
lime.graphics.RenderContext.DOM = function(element) { var $x = ["DOM",2,element]; $x.__enum__ = lime.graphics.RenderContext; return $x; };
lime.graphics.RenderContext.FLASH = function(stage) { var $x = ["FLASH",3,stage]; $x.__enum__ = lime.graphics.RenderContext; return $x; };
lime.graphics.RenderContext.CAIRO = function(cairo) { var $x = ["CAIRO",4,cairo]; $x.__enum__ = lime.graphics.RenderContext; return $x; };
lime.graphics.RenderContext.CONSOLE = function(context) { var $x = ["CONSOLE",5,context]; $x.__enum__ = lime.graphics.RenderContext; return $x; };
lime.graphics.RenderContext.CUSTOM = function(data) { var $x = ["CUSTOM",6,data]; $x.__enum__ = lime.graphics.RenderContext; return $x; };
lime.graphics.RenderContext.NONE = ["NONE",7];
lime.graphics.RenderContext.NONE.__enum__ = lime.graphics.RenderContext;
lime.graphics.Renderer = function(window) {
	this.onRender = new lime.app.Event();
	this.onRenderContextRestored = new lime.app.Event();
	this.onRenderContextLost = new lime.app.Event();
	this.window = window;
	this.backend = new lime._backend.html5.HTML5Renderer(this);
	this.window.currentRenderer = this;
};
$hxClasses["lime.graphics.Renderer"] = lime.graphics.Renderer;
lime.graphics.Renderer.__name__ = true;
lime.graphics.Renderer.prototype = {
	create: function() {
		this.backend.create();
	}
	,flip: function() {
		this.backend.flip();
	}
	,render: function() {
		this.backend.render();
	}
	,__class__: lime.graphics.Renderer
};
lime.graphics.cairo = {};
lime.graphics.cairo.Cairo = function(surface) {
	if(surface != null) {
	}
};
$hxClasses["lime.graphics.cairo.Cairo"] = lime.graphics.cairo.Cairo;
lime.graphics.cairo.Cairo.__name__ = true;
lime.graphics.cairo.Cairo.get_version = function() {
	return 0;
};
lime.graphics.cairo.Cairo.get_versionString = function() {
	return "";
};
lime.graphics.cairo.Cairo.prototype = {
	arc: function(xc,yc,radius,angle1,angle2) {
	}
	,arcNegative: function(xc,yc,radius,angle1,angle2) {
	}
	,clip: function() {
	}
	,clipExtents: function(x1,y1,x2,y2) {
	}
	,clipPreserve: function() {
	}
	,closePath: function() {
	}
	,copyPage: function() {
	}
	,curveTo: function(x1,y1,x2,y2,x3,y3) {
	}
	,destroy: function() {
	}
	,fill: function() {
	}
	,fillExtents: function(x1,y1,x2,y2) {
	}
	,fillPreserve: function() {
	}
	,identityMatrix: function() {
	}
	,inClip: function(x,y) {
		return false;
	}
	,inFill: function(x,y) {
		return false;
	}
	,inStroke: function(x,y) {
		return false;
	}
	,lineTo: function(x,y) {
	}
	,moveTo: function(x,y) {
	}
	,mask: function(pattern) {
	}
	,maskSurface: function(surface,x,y) {
	}
	,newPath: function() {
	}
	,paint: function() {
	}
	,paintWithAlpha: function(alpha) {
	}
	,popGroup: function() {
		return null;
	}
	,popGroupToSource: function() {
	}
	,pushGroup: function() {
	}
	,pushGroupWithContent: function(content) {
	}
	,rectangle: function(x,y,width,height) {
	}
	,reference: function() {
	}
	,relCurveTo: function(dx1,dy1,dx2,dy2,dx3,dy3) {
	}
	,relLineTo: function(dx,dy) {
	}
	,relMoveTo: function(dx,dy) {
	}
	,resetClip: function() {
	}
	,restore: function() {
	}
	,save: function() {
	}
	,setSourceRGB: function(r,g,b) {
	}
	,setSourceRGBA: function(r,g,b,a) {
	}
	,setSourceSurface: function(surface,x,y) {
	}
	,showPage: function() {
	}
	,status: function() {
		return 0;
	}
	,stroke: function() {
	}
	,strokeExtents: function(x1,y1,x2,y2) {
	}
	,strokePreserve: function() {
	}
	,transform: function(matrix) {
	}
	,translate: function(x,y) {
	}
	,get_antialias: function() {
		return 0;
	}
	,set_antialias: function(value) {
		return value;
	}
	,get_currentPoint: function() {
		return null;
	}
	,get_dash: function() {
		return [];
	}
	,set_dash: function(value) {
		return value;
	}
	,get_dashCount: function() {
		return 0;
	}
	,get_fillRule: function() {
		return 0;
	}
	,set_fillRule: function(value) {
		return value;
	}
	,get_groupTarget: function() {
		return 0;
	}
	,get_hasCurrentPoint: function() {
		return false;
	}
	,get_lineCap: function() {
		return 0;
	}
	,set_lineCap: function(value) {
		return value;
	}
	,get_lineJoin: function() {
		return 0;
	}
	,set_lineJoin: function(value) {
		return value;
	}
	,get_lineWidth: function() {
		return 0;
	}
	,set_lineWidth: function(value) {
		return value;
	}
	,get_matrix: function() {
		return null;
	}
	,set_matrix: function(value) {
		return value;
	}
	,get_miterLimit: function() {
		return 0;
	}
	,set_miterLimit: function(value) {
		return value;
	}
	,get_operator: function() {
		return 0;
	}
	,set_operator: function(value) {
		return value;
	}
	,get_referenceCount: function() {
		return 0;
	}
	,get_source: function() {
		return 0;
	}
	,set_source: function(value) {
		return value;
	}
	,get_target: function() {
		return 0;
	}
	,get_tolerance: function() {
		return 0;
	}
	,set_tolerance: function(value) {
		return value;
	}
	,__class__: lime.graphics.cairo.Cairo
};
lime.graphics.cairo._CairoAntialias = {};
lime.graphics.cairo._CairoAntialias.CairoAntialias_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoAntialias.CairoAntialias_Impl_"] = lime.graphics.cairo._CairoAntialias.CairoAntialias_Impl_;
lime.graphics.cairo._CairoAntialias.CairoAntialias_Impl_.__name__ = true;
lime.graphics.cairo._CairoContent = {};
lime.graphics.cairo._CairoContent.CairoContent_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoContent.CairoContent_Impl_"] = lime.graphics.cairo._CairoContent.CairoContent_Impl_;
lime.graphics.cairo._CairoContent.CairoContent_Impl_.__name__ = true;
lime.graphics.cairo._CairoExtend = {};
lime.graphics.cairo._CairoExtend.CairoExtend_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoExtend.CairoExtend_Impl_"] = lime.graphics.cairo._CairoExtend.CairoExtend_Impl_;
lime.graphics.cairo._CairoExtend.CairoExtend_Impl_.__name__ = true;
lime.graphics.cairo._CairoFillRule = {};
lime.graphics.cairo._CairoFillRule.CairoFillRule_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoFillRule.CairoFillRule_Impl_"] = lime.graphics.cairo._CairoFillRule.CairoFillRule_Impl_;
lime.graphics.cairo._CairoFillRule.CairoFillRule_Impl_.__name__ = true;
lime.graphics.cairo._CairoFilter = {};
lime.graphics.cairo._CairoFilter.CairoFilter_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoFilter.CairoFilter_Impl_"] = lime.graphics.cairo._CairoFilter.CairoFilter_Impl_;
lime.graphics.cairo._CairoFilter.CairoFilter_Impl_.__name__ = true;
lime.graphics.cairo._CairoFormat = {};
lime.graphics.cairo._CairoFormat.CairoFormat_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoFormat.CairoFormat_Impl_"] = lime.graphics.cairo._CairoFormat.CairoFormat_Impl_;
lime.graphics.cairo._CairoFormat.CairoFormat_Impl_.__name__ = true;
lime.graphics.cairo._CairoLineCap = {};
lime.graphics.cairo._CairoLineCap.CairoLineCap_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoLineCap.CairoLineCap_Impl_"] = lime.graphics.cairo._CairoLineCap.CairoLineCap_Impl_;
lime.graphics.cairo._CairoLineCap.CairoLineCap_Impl_.__name__ = true;
lime.graphics.cairo._CairoLineJoin = {};
lime.graphics.cairo._CairoLineJoin.CairoLineJoin_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoLineJoin.CairoLineJoin_Impl_"] = lime.graphics.cairo._CairoLineJoin.CairoLineJoin_Impl_;
lime.graphics.cairo._CairoLineJoin.CairoLineJoin_Impl_.__name__ = true;
lime.graphics.cairo._CairoOperator = {};
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoOperator.CairoOperator_Impl_"] = lime.graphics.cairo._CairoOperator.CairoOperator_Impl_;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.__name__ = true;
lime.graphics.cairo._CairoPattern = {};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoPattern.CairoPattern_Impl_"] = lime.graphics.cairo._CairoPattern.CairoPattern_Impl_;
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.__name__ = true;
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_._new = function(handle) {
	return handle;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.addColorStopRGB = function(this1,offset,r,g,b) {
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.addColorStopRGBA = function(this1,offset,r,g,b,a) {
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.createForSurface = function(surface) {
	return 0;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.createLinear = function(x0,y0,x1,y1) {
	return 0;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.createRadial = function(cx0,cy0,radius0,cx1,cy1,radius1) {
	return 0;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.createRGB = function(r,g,b) {
	return 0;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.createRGBA = function(r,g,b,a) {
	return 0;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.destroy = function(this1) {
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.get_colorStopCount = function(this1) {
	return 0;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.get_extend = function(this1) {
	return 0;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.set_extend = function(this1,value) {
	return value;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.get_filter = function(this1) {
	return 0;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.set_filter = function(this1,value) {
	return value;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.get_matrix = function(this1) {
	return null;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.set_matrix = function(this1,value) {
	return value;
};
lime.graphics.cairo._CairoStatus = {};
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoStatus.CairoStatus_Impl_"] = lime.graphics.cairo._CairoStatus.CairoStatus_Impl_;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.__name__ = true;
lime.graphics.cairo._CairoSurface = {};
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoSurface.CairoSurface_Impl_"] = lime.graphics.cairo._CairoSurface.CairoSurface_Impl_;
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.__name__ = true;
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_._new = function(format,width,height) {
	return 0;
};
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.createForData = function(data,format,width,height,stride) {
	return 0;
};
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.destroy = function(this1) {
};
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.flush = function(this1) {
};
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.fromImage = function(image) {
	return null;
};
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.get_height = function(this1) {
	return 0;
};
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.get_width = function(this1) {
	return 0;
};
lime.graphics.format = {};
lime.graphics.format.BMP = function() { };
$hxClasses["lime.graphics.format.BMP"] = lime.graphics.format.BMP;
lime.graphics.format.BMP.__name__ = true;
lime.graphics.format.BMP.encode = function(image,type) {
	if(type == null) type = lime.graphics.format.BMPType.RGB;
	var fileHeaderLength = 14;
	var infoHeaderLength = 40;
	var pixelValuesLength = image.width * image.height * 4;
	switch(type[1]) {
	case 1:
		infoHeaderLength = 108;
		break;
	case 2:
		fileHeaderLength = 0;
		pixelValuesLength += image.width * image.height;
		break;
	case 0:
		pixelValuesLength = image.width * 3 + image.width * 3 % 4 + image.height * 3 + image.height * 3;
		break;
	}
	var data = new lime.utils.ByteArray(fileHeaderLength + infoHeaderLength + pixelValuesLength);
	if(fileHeaderLength > 0) {
		data.writeByte(66);
		data.writeByte(77);
		data.writeInt(data.length);
		data.writeShort(0);
		data.writeShort(0);
		data.writeInt(fileHeaderLength + infoHeaderLength);
	}
	data.writeInt(infoHeaderLength);
	data.writeInt(image.width);
	data.writeInt(type == lime.graphics.format.BMPType.ICO?image.height * 2:image.height);
	data.writeShort(1);
	data.writeShort(type == lime.graphics.format.BMPType.RGB?24:32);
	data.writeInt(type == lime.graphics.format.BMPType.BITFIELD?3:0);
	data.writeInt(pixelValuesLength);
	data.writeInt(11824);
	data.writeInt(11824);
	data.writeInt(0);
	data.writeInt(0);
	if(type == lime.graphics.format.BMPType.BITFIELD) {
		data.writeInt(16711680);
		data.writeInt(65280);
		data.writeInt(255);
		data.writeInt(-16777216);
		data.writeByte(32);
		data.writeByte(110);
		data.writeByte(105);
		data.writeByte(87);
		var _g = 0;
		while(_g < 48) {
			var i = _g++;
			data.writeByte(0);
		}
	}
	var pixels = image.getPixels(new lime.math.Rectangle(0,0,image.width,image.height),1);
	var a;
	var r;
	var g;
	var b;
	switch(type[1]) {
	case 1:
		var _g1 = 0;
		var _g2 = image.height;
		while(_g1 < _g2) {
			var y = _g1++;
			pixels.position = (image.height - 1 - y) * 4 * image.width;
			var _g3 = 0;
			var _g21 = image.width;
			while(_g3 < _g21) {
				var x = _g3++;
				a = pixels.readByte();
				r = pixels.readByte();
				g = pixels.readByte();
				b = pixels.readByte();
				data.writeByte(b);
				data.writeByte(g);
				data.writeByte(r);
				data.writeByte(a);
			}
		}
		break;
	case 2:
		var andMask = new lime.utils.ByteArray(image.width * image.height);
		var _g11 = 0;
		var _g4 = image.height;
		while(_g11 < _g4) {
			var y1 = _g11++;
			pixels.position = (image.height - 1 - y1) * 4 * image.width;
			var _g31 = 0;
			var _g22 = image.width;
			while(_g31 < _g22) {
				var x1 = _g31++;
				a = pixels.readByte();
				r = pixels.readByte();
				g = pixels.readByte();
				b = pixels.readByte();
				data.writeByte(b);
				data.writeByte(g);
				data.writeByte(r);
				data.writeByte(a);
				andMask.writeByte(0);
			}
		}
		data.writeBytes(andMask);
		break;
	case 0:
		var _g12 = 0;
		var _g5 = image.height;
		while(_g12 < _g5) {
			var y2 = _g12++;
			pixels.position = (image.height - 1 - y2) * 4 * image.width;
			var _g32 = 0;
			var _g23 = image.width;
			while(_g32 < _g23) {
				var x2 = _g32++;
				a = pixels.readByte();
				r = pixels.readByte();
				g = pixels.readByte();
				b = pixels.readByte();
				data.writeByte(b);
				data.writeByte(g);
				data.writeByte(r);
			}
			var _g33 = 0;
			var _g24 = image.width * 3 % 4;
			while(_g33 < _g24) {
				var i1 = _g33++;
				data.writeByte(0);
			}
		}
		break;
	}
	return data;
};
lime.graphics.format.BMPType = $hxClasses["lime.graphics.format.BMPType"] = { __ename__ : true, __constructs__ : ["RGB","BITFIELD","ICO"] };
lime.graphics.format.BMPType.RGB = ["RGB",0];
lime.graphics.format.BMPType.RGB.__enum__ = lime.graphics.format.BMPType;
lime.graphics.format.BMPType.BITFIELD = ["BITFIELD",1];
lime.graphics.format.BMPType.BITFIELD.__enum__ = lime.graphics.format.BMPType;
lime.graphics.format.BMPType.ICO = ["ICO",2];
lime.graphics.format.BMPType.ICO.__enum__ = lime.graphics.format.BMPType;
lime.graphics.format.JPEG = function() { };
$hxClasses["lime.graphics.format.JPEG"] = lime.graphics.format.JPEG;
lime.graphics.format.JPEG.__name__ = true;
lime.graphics.format.JPEG.encode = function(image,quality) {
	return null;
};
lime.graphics.format.PNG = function() { };
$hxClasses["lime.graphics.format.PNG"] = lime.graphics.format.PNG;
lime.graphics.format.PNG.__name__ = true;
lime.graphics.format.PNG.encode = function(image) {
	return null;
};
lime.graphics.opengl = {};
lime.graphics.opengl.GL = function() { };
$hxClasses["lime.graphics.opengl.GL"] = lime.graphics.opengl.GL;
lime.graphics.opengl.GL.__name__ = true;
lime.graphics.opengl.GL.activeTexture = function(texture) {
	lime.graphics.opengl.GL.context.activeTexture(texture);
};
lime.graphics.opengl.GL.attachShader = function(program,shader) {
	lime.graphics.opengl.GL.context.attachShader(program,shader);
};
lime.graphics.opengl.GL.bindAttribLocation = function(program,index,name) {
	lime.graphics.opengl.GL.context.bindAttribLocation(program,index,name);
};
lime.graphics.opengl.GL.bindBuffer = function(target,buffer) {
	lime.graphics.opengl.GL.context.bindBuffer(target,buffer);
};
lime.graphics.opengl.GL.bindFramebuffer = function(target,framebuffer) {
	lime.graphics.opengl.GL.context.bindFramebuffer(target,framebuffer);
};
lime.graphics.opengl.GL.bindRenderbuffer = function(target,renderbuffer) {
	lime.graphics.opengl.GL.context.bindRenderbuffer(target,renderbuffer);
};
lime.graphics.opengl.GL.bindTexture = function(target,texture) {
	lime.graphics.opengl.GL.context.bindTexture(target,texture);
};
lime.graphics.opengl.GL.blendColor = function(red,green,blue,alpha) {
	lime.graphics.opengl.GL.context.blendColor(red,green,blue,alpha);
};
lime.graphics.opengl.GL.blendEquation = function(mode) {
	lime.graphics.opengl.GL.context.blendEquation(mode);
};
lime.graphics.opengl.GL.blendEquationSeparate = function(modeRGB,modeAlpha) {
	lime.graphics.opengl.GL.context.blendEquationSeparate(modeRGB,modeAlpha);
};
lime.graphics.opengl.GL.blendFunc = function(sfactor,dfactor) {
	lime.graphics.opengl.GL.context.blendFunc(sfactor,dfactor);
};
lime.graphics.opengl.GL.blendFuncSeparate = function(srcRGB,dstRGB,srcAlpha,dstAlpha) {
	lime.graphics.opengl.GL.context.blendFuncSeparate(srcRGB,dstRGB,srcAlpha,dstAlpha);
};
lime.graphics.opengl.GL.bufferData = function(target,data,usage) {
	lime.graphics.opengl.GL.context.bufferData(target,data,usage);
};
lime.graphics.opengl.GL.bufferSubData = function(target,offset,data) {
	lime.graphics.opengl.GL.context.bufferSubData(target,offset,data);
};
lime.graphics.opengl.GL.checkFramebufferStatus = function(target) {
	return lime.graphics.opengl.GL.context.checkFramebufferStatus(target);
};
lime.graphics.opengl.GL.clear = function(mask) {
	lime.graphics.opengl.GL.context.clear(mask);
};
lime.graphics.opengl.GL.clearColor = function(red,green,blue,alpha) {
	lime.graphics.opengl.GL.context.clearColor(red,green,blue,alpha);
};
lime.graphics.opengl.GL.clearDepth = function(depth) {
	lime.graphics.opengl.GL.context.clearDepth(depth);
};
lime.graphics.opengl.GL.clearStencil = function(s) {
	lime.graphics.opengl.GL.context.clearStencil(s);
};
lime.graphics.opengl.GL.colorMask = function(red,green,blue,alpha) {
	lime.graphics.opengl.GL.context.colorMask(red,green,blue,alpha);
};
lime.graphics.opengl.GL.compileShader = function(shader) {
	lime.graphics.opengl.GL.context.compileShader(shader);
};
lime.graphics.opengl.GL.compressedTexImage2D = function(target,level,internalformat,width,height,border,data) {
	lime.graphics.opengl.GL.context.compressedTexImage2D(target,level,internalformat,width,height,border,data);
};
lime.graphics.opengl.GL.compressedTexSubImage2D = function(target,level,xoffset,yoffset,width,height,format,data) {
	lime.graphics.opengl.GL.context.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,data);
};
lime.graphics.opengl.GL.copyTexImage2D = function(target,level,internalformat,x,y,width,height,border) {
	lime.graphics.opengl.GL.context.copyTexImage2D(target,level,internalformat,x,y,width,height,border);
};
lime.graphics.opengl.GL.copyTexSubImage2D = function(target,level,xoffset,yoffset,x,y,width,height) {
	lime.graphics.opengl.GL.context.copyTexSubImage2D(target,level,xoffset,yoffset,x,y,width,height);
};
lime.graphics.opengl.GL.createBuffer = function() {
	return lime.graphics.opengl.GL.context.createBuffer();
};
lime.graphics.opengl.GL.createFramebuffer = function() {
	return lime.graphics.opengl.GL.context.createFramebuffer();
};
lime.graphics.opengl.GL.createProgram = function() {
	return lime.graphics.opengl.GL.context.createProgram();
};
lime.graphics.opengl.GL.createRenderbuffer = function() {
	return lime.graphics.opengl.GL.context.createRenderbuffer();
};
lime.graphics.opengl.GL.createShader = function(type) {
	return lime.graphics.opengl.GL.context.createShader(type);
};
lime.graphics.opengl.GL.createTexture = function() {
	return lime.graphics.opengl.GL.context.createTexture();
};
lime.graphics.opengl.GL.cullFace = function(mode) {
	lime.graphics.opengl.GL.context.cullFace(mode);
};
lime.graphics.opengl.GL.deleteBuffer = function(buffer) {
	lime.graphics.opengl.GL.context.deleteBuffer(buffer);
};
lime.graphics.opengl.GL.deleteFramebuffer = function(framebuffer) {
	lime.graphics.opengl.GL.context.deleteFramebuffer(framebuffer);
};
lime.graphics.opengl.GL.deleteProgram = function(program) {
	lime.graphics.opengl.GL.context.deleteProgram(program);
};
lime.graphics.opengl.GL.deleteRenderbuffer = function(renderbuffer) {
	lime.graphics.opengl.GL.context.deleteRenderbuffer(renderbuffer);
};
lime.graphics.opengl.GL.deleteShader = function(shader) {
	lime.graphics.opengl.GL.context.deleteShader(shader);
};
lime.graphics.opengl.GL.deleteTexture = function(texture) {
	lime.graphics.opengl.GL.context.deleteTexture(texture);
};
lime.graphics.opengl.GL.depthFunc = function(func) {
	lime.graphics.opengl.GL.context.depthFunc(func);
};
lime.graphics.opengl.GL.depthMask = function(flag) {
	lime.graphics.opengl.GL.context.depthMask(flag);
};
lime.graphics.opengl.GL.depthRange = function(zNear,zFar) {
	lime.graphics.opengl.GL.context.depthRange(zNear,zFar);
};
lime.graphics.opengl.GL.detachShader = function(program,shader) {
	lime.graphics.opengl.GL.context.detachShader(program,shader);
};
lime.graphics.opengl.GL.disable = function(cap) {
	lime.graphics.opengl.GL.context.disable(cap);
};
lime.graphics.opengl.GL.disableVertexAttribArray = function(index) {
	lime.graphics.opengl.GL.context.disableVertexAttribArray(index);
};
lime.graphics.opengl.GL.drawArrays = function(mode,first,count) {
	lime.graphics.opengl.GL.context.drawArrays(mode,first,count);
};
lime.graphics.opengl.GL.drawElements = function(mode,count,type,offset) {
	lime.graphics.opengl.GL.context.drawElements(mode,count,type,offset);
};
lime.graphics.opengl.GL.enable = function(cap) {
	lime.graphics.opengl.GL.context.enable(cap);
};
lime.graphics.opengl.GL.enableVertexAttribArray = function(index) {
	lime.graphics.opengl.GL.context.enableVertexAttribArray(index);
};
lime.graphics.opengl.GL.finish = function() {
	lime.graphics.opengl.GL.context.finish();
};
lime.graphics.opengl.GL.flush = function() {
	lime.graphics.opengl.GL.context.flush();
};
lime.graphics.opengl.GL.framebufferRenderbuffer = function(target,attachment,renderbuffertarget,renderbuffer) {
	lime.graphics.opengl.GL.context.framebufferRenderbuffer(target,attachment,renderbuffertarget,renderbuffer);
};
lime.graphics.opengl.GL.framebufferTexture2D = function(target,attachment,textarget,texture,level) {
	lime.graphics.opengl.GL.context.framebufferTexture2D(target,attachment,textarget,texture,level);
};
lime.graphics.opengl.GL.frontFace = function(mode) {
	lime.graphics.opengl.GL.context.frontFace(mode);
};
lime.graphics.opengl.GL.generateMipmap = function(target) {
	lime.graphics.opengl.GL.context.generateMipmap(target);
};
lime.graphics.opengl.GL.getActiveAttrib = function(program,index) {
	return lime.graphics.opengl.GL.context.getActiveAttrib(program,index);
};
lime.graphics.opengl.GL.getActiveUniform = function(program,index) {
	return lime.graphics.opengl.GL.context.getActiveUniform(program,index);
};
lime.graphics.opengl.GL.getAttachedShaders = function(program) {
	return lime.graphics.opengl.GL.context.getAttachedShaders(program);
};
lime.graphics.opengl.GL.getAttribLocation = function(program,name) {
	return lime.graphics.opengl.GL.context.getAttribLocation(program,name);
};
lime.graphics.opengl.GL.getBufferParameter = function(target,pname) {
	return lime.graphics.opengl.GL.context.getBufferParameter(target,pname);
};
lime.graphics.opengl.GL.getContextAttributes = function() {
	return lime.graphics.opengl.GL.context.getContextAttributes();
};
lime.graphics.opengl.GL.getError = function() {
	return lime.graphics.opengl.GL.context.getError();
};
lime.graphics.opengl.GL.getExtension = function(name) {
	return lime.graphics.opengl.GL.context.getExtension(name);
};
lime.graphics.opengl.GL.getFramebufferAttachmentParameter = function(target,attachment,pname) {
	return lime.graphics.opengl.GL.context.getFramebufferAttachmentParameter(target,attachment,pname);
};
lime.graphics.opengl.GL.getParameter = function(pname) {
	return lime.graphics.opengl.GL.context.getParameter(pname);
};
lime.graphics.opengl.GL.getProgramInfoLog = function(program) {
	return lime.graphics.opengl.GL.context.getProgramInfoLog(program);
};
lime.graphics.opengl.GL.getProgramParameter = function(program,pname) {
	return lime.graphics.opengl.GL.context.getProgramParameter(program,pname);
};
lime.graphics.opengl.GL.getRenderbufferParameter = function(target,pname) {
	return lime.graphics.opengl.GL.context.getRenderbufferParameter(target,pname);
};
lime.graphics.opengl.GL.getShaderInfoLog = function(shader) {
	return lime.graphics.opengl.GL.context.getShaderInfoLog(shader);
};
lime.graphics.opengl.GL.getShaderParameter = function(shader,pname) {
	return lime.graphics.opengl.GL.context.getShaderParameter(shader,pname);
};
lime.graphics.opengl.GL.getShaderPrecisionFormat = function(shadertype,precisiontype) {
	return lime.graphics.opengl.GL.context.getShaderPrecisionFormat(shadertype,precisiontype);
};
lime.graphics.opengl.GL.getShaderSource = function(shader) {
	return lime.graphics.opengl.GL.context.getShaderSource(shader);
};
lime.graphics.opengl.GL.getSupportedExtensions = function() {
	return lime.graphics.opengl.GL.context.getSupportedExtensions();
};
lime.graphics.opengl.GL.getTexParameter = function(target,pname) {
	return lime.graphics.opengl.GL.context.getTexParameter(target,pname);
};
lime.graphics.opengl.GL.getUniform = function(program,location) {
	return lime.graphics.opengl.GL.context.getUniform(program,location);
};
lime.graphics.opengl.GL.getUniformLocation = function(program,name) {
	return lime.graphics.opengl.GL.context.getUniformLocation(program,name);
};
lime.graphics.opengl.GL.getVertexAttrib = function(index,pname) {
	return lime.graphics.opengl.GL.context.getVertexAttrib(index,pname);
};
lime.graphics.opengl.GL.getVertexAttribOffset = function(index,pname) {
	return lime.graphics.opengl.GL.context.getVertexAttribOffset(index,pname);
};
lime.graphics.opengl.GL.hint = function(target,mode) {
	lime.graphics.opengl.GL.context.hint(target,mode);
};
lime.graphics.opengl.GL.isBuffer = function(buffer) {
	return lime.graphics.opengl.GL.context.isBuffer(buffer);
};
lime.graphics.opengl.GL.isContextLost = function() {
	return lime.graphics.opengl.GL.context.isContextLost();
};
lime.graphics.opengl.GL.isEnabled = function(cap) {
	return lime.graphics.opengl.GL.context.isEnabled(cap);
};
lime.graphics.opengl.GL.isFramebuffer = function(framebuffer) {
	return lime.graphics.opengl.GL.context.isFramebuffer(framebuffer);
};
lime.graphics.opengl.GL.isProgram = function(program) {
	return lime.graphics.opengl.GL.context.isProgram(program);
};
lime.graphics.opengl.GL.isRenderbuffer = function(renderbuffer) {
	return lime.graphics.opengl.GL.context.isRenderbuffer(renderbuffer);
};
lime.graphics.opengl.GL.isShader = function(shader) {
	return lime.graphics.opengl.GL.context.isShader(shader);
};
lime.graphics.opengl.GL.isTexture = function(texture) {
	return lime.graphics.opengl.GL.context.isTexture(texture);
};
lime.graphics.opengl.GL.lineWidth = function(width) {
	lime.graphics.opengl.GL.context.lineWidth(width);
};
lime.graphics.opengl.GL.linkProgram = function(program) {
	lime.graphics.opengl.GL.context.linkProgram(program);
};
lime.graphics.opengl.GL.pixelStorei = function(pname,param) {
	lime.graphics.opengl.GL.context.pixelStorei(pname,param);
};
lime.graphics.opengl.GL.polygonOffset = function(factor,units) {
	lime.graphics.opengl.GL.context.polygonOffset(factor,units);
};
lime.graphics.opengl.GL.readPixels = function(x,y,width,height,format,type,pixels) {
	lime.graphics.opengl.GL.context.readPixels(x,y,width,height,format,type,pixels);
};
lime.graphics.opengl.GL.renderbufferStorage = function(target,internalformat,width,height) {
	lime.graphics.opengl.GL.context.renderbufferStorage(target,internalformat,width,height);
};
lime.graphics.opengl.GL.sampleCoverage = function(value,invert) {
	lime.graphics.opengl.GL.context.sampleCoverage(value,invert);
};
lime.graphics.opengl.GL.scissor = function(x,y,width,height) {
	lime.graphics.opengl.GL.context.scissor(x,y,width,height);
};
lime.graphics.opengl.GL.shaderSource = function(shader,source) {
	lime.graphics.opengl.GL.context.shaderSource(shader,source);
};
lime.graphics.opengl.GL.stencilFunc = function(func,ref,mask) {
	lime.graphics.opengl.GL.context.stencilFunc(func,ref,mask);
};
lime.graphics.opengl.GL.stencilFuncSeparate = function(face,func,ref,mask) {
	lime.graphics.opengl.GL.context.stencilFuncSeparate(face,func,ref,mask);
};
lime.graphics.opengl.GL.stencilMask = function(mask) {
	lime.graphics.opengl.GL.context.stencilMask(mask);
};
lime.graphics.opengl.GL.stencilMaskSeparate = function(face,mask) {
	lime.graphics.opengl.GL.context.stencilMaskSeparate(face,mask);
};
lime.graphics.opengl.GL.stencilOp = function(fail,zfail,zpass) {
	lime.graphics.opengl.GL.context.stencilOp(fail,zfail,zpass);
};
lime.graphics.opengl.GL.stencilOpSeparate = function(face,fail,zfail,zpass) {
	lime.graphics.opengl.GL.context.stencilOpSeparate(face,fail,zfail,zpass);
};
lime.graphics.opengl.GL.texImage2D = function(target,level,internalformat,width,height,border,format,type,pixels) {
	lime.graphics.opengl.GL.context.texImage2D(target,level,internalformat,width,height,border,format,type,pixels);
};
lime.graphics.opengl.GL.texParameterf = function(target,pname,param) {
	lime.graphics.opengl.GL.context.texParameterf(target,pname,param);
};
lime.graphics.opengl.GL.texParameteri = function(target,pname,param) {
	lime.graphics.opengl.GL.context.texParameteri(target,pname,param);
};
lime.graphics.opengl.GL.texSubImage2D = function(target,level,xoffset,yoffset,width,height,format,type,pixels) {
	lime.graphics.opengl.GL.context.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,pixels);
};
lime.graphics.opengl.GL.uniform1f = function(location,x) {
	lime.graphics.opengl.GL.context.uniform1f(location,x);
};
lime.graphics.opengl.GL.uniform1fv = function(location,x) {
	lime.graphics.opengl.GL.context.uniform1fv(location,x);
};
lime.graphics.opengl.GL.uniform1i = function(location,x) {
	lime.graphics.opengl.GL.context.uniform1i(location,x);
};
lime.graphics.opengl.GL.uniform1iv = function(location,v) {
	lime.graphics.opengl.GL.context.uniform1iv(location,v);
};
lime.graphics.opengl.GL.uniform2f = function(location,x,y) {
	lime.graphics.opengl.GL.context.uniform2f(location,x,y);
};
lime.graphics.opengl.GL.uniform2fv = function(location,v) {
	lime.graphics.opengl.GL.context.uniform2fv(location,v);
};
lime.graphics.opengl.GL.uniform2i = function(location,x,y) {
	lime.graphics.opengl.GL.context.uniform2i(location,x,y);
};
lime.graphics.opengl.GL.uniform2iv = function(location,v) {
	lime.graphics.opengl.GL.context.uniform2iv(location,v);
};
lime.graphics.opengl.GL.uniform3f = function(location,x,y,z) {
	lime.graphics.opengl.GL.context.uniform3f(location,x,y,z);
};
lime.graphics.opengl.GL.uniform3fv = function(location,v) {
	lime.graphics.opengl.GL.context.uniform3fv(location,v);
};
lime.graphics.opengl.GL.uniform3i = function(location,x,y,z) {
	lime.graphics.opengl.GL.context.uniform3i(location,x,y,z);
};
lime.graphics.opengl.GL.uniform3iv = function(location,v) {
	lime.graphics.opengl.GL.context.uniform3iv(location,v);
};
lime.graphics.opengl.GL.uniform4f = function(location,x,y,z,w) {
	lime.graphics.opengl.GL.context.uniform4f(location,x,y,z,w);
};
lime.graphics.opengl.GL.uniform4fv = function(location,v) {
	lime.graphics.opengl.GL.context.uniform4fv(location,v);
};
lime.graphics.opengl.GL.uniform4i = function(location,x,y,z,w) {
	lime.graphics.opengl.GL.context.uniform4i(location,x,y,z,w);
};
lime.graphics.opengl.GL.uniform4iv = function(location,v) {
	lime.graphics.opengl.GL.context.uniform4iv(location,v);
};
lime.graphics.opengl.GL.uniformMatrix2fv = function(location,transpose,v) {
	lime.graphics.opengl.GL.context.uniformMatrix2fv(location,transpose,v);
};
lime.graphics.opengl.GL.uniformMatrix3fv = function(location,transpose,v) {
	lime.graphics.opengl.GL.context.uniformMatrix3fv(location,transpose,v);
};
lime.graphics.opengl.GL.uniformMatrix4fv = function(location,transpose,v) {
	lime.graphics.opengl.GL.context.uniformMatrix4fv(location,transpose,v);
};
lime.graphics.opengl.GL.useProgram = function(program) {
	lime.graphics.opengl.GL.context.useProgram(program);
};
lime.graphics.opengl.GL.validateProgram = function(program) {
	lime.graphics.opengl.GL.context.validateProgram(program);
};
lime.graphics.opengl.GL.vertexAttrib1f = function(indx,x) {
	lime.graphics.opengl.GL.context.vertexAttrib1f(indx,x);
};
lime.graphics.opengl.GL.vertexAttrib1fv = function(indx,values) {
	lime.graphics.opengl.GL.context.vertexAttrib1fv(indx,values);
};
lime.graphics.opengl.GL.vertexAttrib2f = function(indx,x,y) {
	lime.graphics.opengl.GL.context.vertexAttrib2f(indx,x,y);
};
lime.graphics.opengl.GL.vertexAttrib2fv = function(indx,values) {
	lime.graphics.opengl.GL.context.vertexAttrib2fv(indx,values);
};
lime.graphics.opengl.GL.vertexAttrib3f = function(indx,x,y,z) {
	lime.graphics.opengl.GL.context.vertexAttrib3f(indx,x,y,z);
};
lime.graphics.opengl.GL.vertexAttrib3fv = function(indx,values) {
	lime.graphics.opengl.GL.context.vertexAttrib3fv(indx,values);
};
lime.graphics.opengl.GL.vertexAttrib4f = function(indx,x,y,z,w) {
	lime.graphics.opengl.GL.context.vertexAttrib4f(indx,x,y,z,w);
};
lime.graphics.opengl.GL.vertexAttrib4fv = function(indx,values) {
	lime.graphics.opengl.GL.context.vertexAttrib4fv(indx,values);
};
lime.graphics.opengl.GL.vertexAttribPointer = function(indx,size,type,normalized,stride,offset) {
	lime.graphics.opengl.GL.context.vertexAttribPointer(indx,size,type,normalized,stride,offset);
};
lime.graphics.opengl.GL.viewport = function(x,y,width,height) {
	lime.graphics.opengl.GL.context.viewport(x,y,width,height);
};
lime.graphics.opengl.GL.get_version = function() {
	return 2;
};
lime.graphics.utils = {};
lime.graphics.utils.ImageCanvasUtil = function() { };
$hxClasses["lime.graphics.utils.ImageCanvasUtil"] = lime.graphics.utils.ImageCanvasUtil;
lime.graphics.utils.ImageCanvasUtil.__name__ = true;
lime.graphics.utils.ImageCanvasUtil.colorTransform = function(image,rect,colorMatrix) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	lime.graphics.utils.ImageDataUtil.colorTransform(image,rect,colorMatrix);
};
lime.graphics.utils.ImageCanvasUtil.convertToCanvas = function(image) {
	var buffer = image.buffer;
	if(buffer.__srcImage != null) {
		if(buffer.__srcCanvas == null) {
			lime.graphics.utils.ImageCanvasUtil.createCanvas(image,buffer.__srcImage.width,buffer.__srcImage.height);
			buffer.__srcContext.drawImage(buffer.__srcImage,0,0);
		}
		buffer.__srcImage = null;
	}
};
lime.graphics.utils.ImageCanvasUtil.convertToData = function(image) {
	if(image.buffer.data == null) {
		lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
		lime.graphics.utils.ImageCanvasUtil.sync(image);
		lime.graphics.utils.ImageCanvasUtil.createImageData(image);
		image.buffer.__srcCanvas = null;
		image.buffer.__srcContext = null;
	}
};
lime.graphics.utils.ImageCanvasUtil.copyChannel = function(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(sourceImage);
	lime.graphics.utils.ImageCanvasUtil.createImageData(sourceImage);
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	lime.graphics.utils.ImageDataUtil.copyChannel(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
};
lime.graphics.utils.ImageCanvasUtil.copyPixels = function(image,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) mergeAlpha = false;
	if(alphaImage != null && alphaImage.get_transparent()) {
		if(alphaPoint == null) alphaPoint = new lime.math.Vector2();
		var tempData = image.clone();
		tempData.copyChannel(alphaImage,new lime.math.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new lime.math.Vector2(sourceRect.x,sourceRect.y),lime.graphics.ImageChannel.ALPHA,lime.graphics.ImageChannel.ALPHA);
		sourceImage = tempData;
	}
	lime.graphics.utils.ImageCanvasUtil.sync(image);
	if(!mergeAlpha) {
		if(image.get_transparent() && sourceImage.get_transparent()) image.buffer.__srcContext.clearRect(destPoint.x + image.offsetX,destPoint.y + image.offsetY,sourceRect.width + image.offsetX,sourceRect.height + image.offsetY);
	}
	lime.graphics.utils.ImageCanvasUtil.sync(sourceImage);
	if(sourceImage.buffer.get_src() != null) image.buffer.__srcContext.drawImage(sourceImage.buffer.get_src(),sourceRect.x + sourceImage.offsetX | 0,sourceRect.y + sourceImage.offsetY | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x + image.offsetX | 0,destPoint.y + image.offsetY | 0,sourceRect.width | 0,sourceRect.height | 0);
};
lime.graphics.utils.ImageCanvasUtil.createCanvas = function(image,width,height) {
	var buffer = image.buffer;
	if(buffer.__srcCanvas == null) {
		buffer.__srcCanvas = window.document.createElement("canvas");
		buffer.__srcCanvas.width = width;
		buffer.__srcCanvas.height = height;
		if(!image.get_transparent()) {
			if(!image.get_transparent()) buffer.__srcCanvas.setAttribute("moz-opaque","true");
			buffer.__srcContext = buffer.__srcCanvas.getContext ("2d", { alpha: false });
		} else buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
		buffer.__srcContext.mozImageSmoothingEnabled = false;
		buffer.__srcContext.webkitImageSmoothingEnabled = false;
		buffer.__srcContext.imageSmoothingEnabled = false;
	}
};
lime.graphics.utils.ImageCanvasUtil.createImageData = function(image) {
	var buffer = image.buffer;
	if(buffer.data == null) {
		buffer.__srcImageData = buffer.__srcContext.getImageData(0,0,buffer.width,buffer.height);
		buffer.data = new Uint8Array(buffer.__srcImageData.data.buffer);
	}
};
lime.graphics.utils.ImageCanvasUtil.fillRect = function(image,rect,color,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.sync(image);
	if(rect.x == 0 && rect.y == 0 && rect.width == image.width && rect.height == image.height) {
		if(image.get_transparent() && (color & 255) == 0) {
			image.buffer.__srcCanvas.width = image.buffer.width;
			return;
		}
	}
	var r;
	var g;
	var b;
	var a;
	if(format == 1) {
		r = color >> 16 & 255;
		g = color >> 8 & 255;
		b = color & 255;
		if(image.get_transparent()) a = color >> 24 & 255; else a = 255;
	} else {
		r = color >> 24 & 255;
		g = color >> 16 & 255;
		b = color >> 8 & 255;
		if(image.get_transparent()) a = color & 255; else a = 255;
	}
	image.buffer.__srcContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
	image.buffer.__srcContext.fillRect(rect.x + image.offsetX,rect.y + image.offsetY,rect.width + image.offsetX,rect.height + image.offsetY);
};
lime.graphics.utils.ImageCanvasUtil.floodFill = function(image,x,y,color,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	lime.graphics.utils.ImageDataUtil.floodFill(image,x,y,color,format);
};
lime.graphics.utils.ImageCanvasUtil.getPixel = function(image,x,y,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	return lime.graphics.utils.ImageDataUtil.getPixel(image,x,y,format);
};
lime.graphics.utils.ImageCanvasUtil.getPixel32 = function(image,x,y,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	return lime.graphics.utils.ImageDataUtil.getPixel32(image,x,y,format);
};
lime.graphics.utils.ImageCanvasUtil.getPixels = function(image,rect,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	return lime.graphics.utils.ImageDataUtil.getPixels(image,rect,format);
};
lime.graphics.utils.ImageCanvasUtil.merge = function(image,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(sourceImage);
	lime.graphics.utils.ImageCanvasUtil.createImageData(sourceImage);
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	lime.graphics.utils.ImageDataUtil.merge(image,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
};
lime.graphics.utils.ImageCanvasUtil.resize = function(image,newWidth,newHeight) {
	var buffer = image.buffer;
	if(buffer.__srcCanvas == null) {
		lime.graphics.utils.ImageCanvasUtil.createCanvas(image,newWidth,newHeight);
		buffer.__srcContext.drawImage(buffer.get_src(),0,0,newWidth,newHeight);
	} else {
		lime.graphics.utils.ImageCanvasUtil.sync(image);
		var sourceCanvas = buffer.__srcCanvas;
		buffer.__srcCanvas = null;
		lime.graphics.utils.ImageCanvasUtil.createCanvas(image,newWidth,newHeight);
		buffer.__srcContext.drawImage(sourceCanvas,0,0,newWidth,newHeight);
	}
};
lime.graphics.utils.ImageCanvasUtil.setPixel = function(image,x,y,color,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	lime.graphics.utils.ImageDataUtil.setPixel(image,x,y,color,format);
};
lime.graphics.utils.ImageCanvasUtil.setPixel32 = function(image,x,y,color,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	lime.graphics.utils.ImageDataUtil.setPixel32(image,x,y,color,format);
};
lime.graphics.utils.ImageCanvasUtil.setPixels = function(image,rect,byteArray,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	lime.graphics.utils.ImageDataUtil.setPixels(image,rect,byteArray,format);
};
lime.graphics.utils.ImageCanvasUtil.sync = function(image) {
	if(image.dirty && image.type != lime.graphics.ImageType.DATA) {
		image.buffer.__srcContext.putImageData(image.buffer.__srcImageData,0,0);
		image.buffer.data = null;
		image.dirty = false;
	}
};
lime.graphics.utils.ImageDataUtil = function() { };
$hxClasses["lime.graphics.utils.ImageDataUtil"] = lime.graphics.utils.ImageDataUtil;
lime.graphics.utils.ImageDataUtil.__name__ = true;
lime.graphics.utils.ImageDataUtil.colorTransform = function(image,rect,colorMatrix) {
	var data = image.buffer.data;
	if(data == null) return;
	var stride = image.buffer.width * 4;
	var offset;
	var rowStart = Std["int"](rect.get_top() + image.offsetY);
	var rowEnd = Std["int"](rect.get_bottom() + image.offsetY);
	var columnStart = Std["int"](rect.get_left() + image.offsetX);
	var columnEnd = Std["int"](rect.get_right() + image.offsetX);
	var r;
	var g;
	var b;
	var a;
	var ex = 0;
	var _g = rowStart;
	while(_g < rowEnd) {
		var row = _g++;
		var _g1 = columnStart;
		while(_g1 < columnEnd) {
			var column = _g1++;
			offset = row * stride + column * 4;
			a = data[offset + 3] * colorMatrix[18] + colorMatrix[19] * 255 | 0;
			if(a > 255) ex = a - 255; else ex = 0;
			b = data[offset + 2] * colorMatrix[12] + colorMatrix[14] * 255 + ex | 0;
			if(b > 255) ex = b - 255; else ex = 0;
			g = data[offset + 1] * colorMatrix[6] + colorMatrix[9] * 255 + ex | 0;
			if(g > 255) ex = g - 255; else ex = 0;
			r = data[offset] * colorMatrix[0] + colorMatrix[4] * 255 + ex | 0;
			if(r > 255) data[offset] = 255; else data[offset] = r;
			if(g > 255) data[offset + 1] = 255; else data[offset + 1] = g;
			if(b > 255) data[offset + 2] = 255; else data[offset + 2] = b;
			if(a > 255) data[offset + 3] = 255; else data[offset + 3] = a;
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.copyChannel = function(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
	var destIdx;
	switch(destChannel[1]) {
	case 0:
		destIdx = 0;
		break;
	case 1:
		destIdx = 1;
		break;
	case 2:
		destIdx = 2;
		break;
	case 3:
		destIdx = 3;
		break;
	}
	var srcIdx;
	switch(sourceChannel[1]) {
	case 0:
		srcIdx = 0;
		break;
	case 1:
		srcIdx = 1;
		break;
	case 2:
		srcIdx = 2;
		break;
	case 3:
		srcIdx = 3;
		break;
	}
	var srcData = sourceImage.buffer.data;
	var destData = image.buffer.data;
	if(srcData == null || destData == null) return;
	var srcStride = sourceImage.buffer.width * 4 | 0;
	var srcPosition = (sourceRect.x + sourceImage.offsetX) * 4 + srcStride * (sourceRect.y + sourceImage.offsetY) + srcIdx | 0;
	var srcRowOffset = srcStride - (4 * (sourceRect.width + sourceImage.offsetX) | 0);
	var srcRowEnd = 4 * (sourceRect.x + sourceImage.offsetX + sourceRect.width) | 0;
	var srcData1 = sourceImage.buffer.data;
	var destStride = image.buffer.width * 4 | 0;
	var destPosition = (destPoint.x + image.offsetX) * 4 + destStride * (destPoint.y + image.offsetY) + destIdx | 0;
	var destRowOffset = destStride - (4 * (sourceRect.width + image.offsetX) | 0);
	var destRowEnd = 4 * (destPoint.x + image.offsetX + sourceRect.width) | 0;
	var destData1 = image.buffer.data;
	var length = sourceRect.width * sourceRect.height | 0;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		destData1[destPosition] = srcData1[srcPosition];
		srcPosition += 4;
		destPosition += 4;
		if(srcPosition % srcStride > srcRowEnd) srcPosition += srcRowOffset;
		if(destPosition % destStride > destRowEnd) destPosition += destRowOffset;
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.copyPixels = function(image,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) mergeAlpha = false;
	if(alphaImage != null && alphaImage.get_transparent()) {
		if(alphaPoint == null) alphaPoint = new lime.math.Vector2();
		var tempData = image.clone();
		tempData.copyChannel(alphaImage,new lime.math.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new lime.math.Vector2(sourceRect.x,sourceRect.y),lime.graphics.ImageChannel.ALPHA,lime.graphics.ImageChannel.ALPHA);
		sourceImage = tempData;
	}
	var rowOffset = destPoint.y + image.offsetY - sourceRect.y - sourceImage.offsetY | 0;
	var columnOffset = destPoint.x + image.offsetX - sourceRect.x - sourceImage.offsetY | 0;
	var sourceData = sourceImage.buffer.data;
	var sourceStride = sourceImage.buffer.width * 4;
	var sourceOffset = 0;
	var data = image.buffer.data;
	var stride = image.buffer.width * 4;
	var offset = 0;
	if(!mergeAlpha || !sourceImage.get_transparent()) {
		var _g1 = Std["int"](sourceRect.get_top() + sourceImage.offsetY);
		var _g = Std["int"](sourceRect.get_bottom() + sourceImage.offsetY);
		while(_g1 < _g) {
			var row = _g1++;
			var _g3 = Std["int"](sourceRect.get_left() + sourceImage.offsetX);
			var _g2 = Std["int"](sourceRect.get_right() + sourceImage.offsetX);
			while(_g3 < _g2) {
				var column = _g3++;
				sourceOffset = row * sourceStride + column * 4;
				offset = (row + rowOffset) * stride + (column + columnOffset) * 4;
				data[offset] = sourceData[sourceOffset];
				data[offset + 1] = sourceData[sourceOffset + 1];
				data[offset + 2] = sourceData[sourceOffset + 2];
				data[offset + 3] = sourceData[sourceOffset + 3];
			}
		}
	} else {
		var sourceAlpha;
		var destAlpha;
		var outA;
		var oneMinusSourceAlpha;
		var _g11 = Std["int"](sourceRect.get_top() + sourceImage.offsetY);
		var _g4 = Std["int"](sourceRect.get_bottom() + sourceImage.offsetY);
		while(_g11 < _g4) {
			var row1 = _g11++;
			var _g31 = Std["int"](sourceRect.get_left() + sourceImage.offsetX);
			var _g21 = Std["int"](sourceRect.get_right() + sourceImage.offsetX);
			while(_g31 < _g21) {
				var column1 = _g31++;
				sourceOffset = row1 * sourceStride + column1 * 4;
				offset = (row1 + rowOffset) * stride + (column1 + columnOffset) * 4;
				sourceAlpha = sourceData[sourceOffset + 3] / 255.0;
				destAlpha = data[offset + 3] / 255.0;
				oneMinusSourceAlpha = 1 - sourceAlpha;
				outA = sourceAlpha + destAlpha * oneMinusSourceAlpha;
				var index = Math.round((sourceData[sourceOffset] * sourceAlpha + data[offset] * destAlpha * oneMinusSourceAlpha) / outA);
				data[offset] = lime.graphics.utils.ImageDataUtil.__clamp[index];
				var index1 = Math.round((sourceData[sourceOffset + 1] * sourceAlpha + data[offset + 1] * destAlpha * oneMinusSourceAlpha) / outA);
				data[offset + 1] = lime.graphics.utils.ImageDataUtil.__clamp[index1];
				var index2 = Math.round((sourceData[sourceOffset + 2] * sourceAlpha + data[offset + 2] * destAlpha * oneMinusSourceAlpha) / outA);
				data[offset + 2] = lime.graphics.utils.ImageDataUtil.__clamp[index2];
				var index3 = Math.round(outA * 255.0);
				data[offset + 3] = lime.graphics.utils.ImageDataUtil.__clamp[index3];
			}
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.fillRect = function(image,rect,color,format) {
	var r;
	var g;
	var b;
	var a;
	if(format == 1) {
		if(image.get_transparent()) a = color >> 24 & 255; else a = 255;
		r = color >> 16 & 255;
		g = color >> 8 & 255;
		b = color & 255;
	} else {
		r = color >> 24 & 255;
		g = color >> 16 & 255;
		b = color >> 8 & 255;
		if(image.get_transparent()) a = color & 255; else a = 255;
	}
	var rgba = r | g << 8 | b << 16 | a << 24;
	var data = image.buffer.data;
	if(data == null) return;
	if(rect.width == image.buffer.width && rect.height == image.buffer.height && rect.x == 0 && rect.y == 0 && image.offsetX == 0 && image.offsetY == 0) {
		var length = image.buffer.width * image.buffer.height;
		var j = 0;
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			j = i * 4;
			data[j] = r;
			data[j + 1] = g;
			data[j + 2] = b;
			data[j + 3] = a;
		}
	} else {
		var stride = image.buffer.width * 4;
		var offset;
		var rowStart = rect.y + image.offsetY | 0;
		var rowEnd = Std["int"](rect.get_bottom() + image.offsetY);
		var columnStart = rect.x + image.offsetX | 0;
		var columnEnd = Std["int"](rect.get_right() + image.offsetX);
		var _g1 = rowStart;
		while(_g1 < rowEnd) {
			var row = _g1++;
			var _g11 = columnStart;
			while(_g11 < columnEnd) {
				var column = _g11++;
				offset = row * stride + column * 4;
				data[offset] = r;
				data[offset + 1] = g;
				data[offset + 2] = b;
				data[offset + 3] = a;
			}
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.floodFill = function(image,x,y,color,format) {
	var data = image.buffer.data;
	if(data == null) return;
	if(format == 1) color = (color & 16777215) << 8 | color >> 24 & 255;
	var offset = (y + image.offsetY) * (image.buffer.width * 4) + (x + image.offsetX) * 4;
	var hitColorR = data[offset];
	var hitColorG = data[offset + 1];
	var hitColorB = data[offset + 2];
	var hitColorA;
	if(image.get_transparent()) hitColorA = data[offset + 3]; else hitColorA = 255;
	var r = color >> 24 & 255;
	var g = color >> 16 & 255;
	var b = color >> 8 & 255;
	var a;
	if(image.get_transparent()) a = color & 255; else a = 255;
	if(hitColorR == r && hitColorG == g && hitColorB == b && hitColorA == a) return;
	var dx = [0,-1,1,0];
	var dy = [-1,0,0,1];
	var minX = -image.offsetX;
	var minY = -image.offsetY;
	var maxX = minX + image.width;
	var maxY = minY + image.height;
	var queue = new Array();
	queue.push(x);
	queue.push(y);
	while(queue.length > 0) {
		var curPointY = queue.pop();
		var curPointX = queue.pop();
		var _g = 0;
		while(_g < 4) {
			var i = _g++;
			var nextPointX = curPointX + dx[i];
			var nextPointY = curPointY + dy[i];
			if(nextPointX < minX || nextPointY < minY || nextPointX >= maxX || nextPointY >= maxY) continue;
			var nextPointOffset = (nextPointY * image.width + nextPointX) * 4;
			if(data[nextPointOffset] == hitColorR && data[nextPointOffset + 1] == hitColorG && data[nextPointOffset + 2] == hitColorB && data[nextPointOffset + 3] == hitColorA) {
				data[nextPointOffset] = r;
				data[nextPointOffset + 1] = g;
				data[nextPointOffset + 2] = b;
				data[nextPointOffset + 3] = a;
				queue.push(nextPointX);
				queue.push(nextPointY);
			}
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.getColorBoundsRect = function(image,mask,color,findColor,format) {
	if(findColor == null) findColor = true;
	var left = image.width + 1;
	var right = 0;
	var top = image.height + 1;
	var bottom = 0;
	var r;
	var g;
	var b;
	var a;
	var mr;
	var mg;
	var mb;
	var ma;
	if(format == 1) {
		if(image.get_transparent()) a = color >> 24 & 255; else a = 255;
		r = color >> 16 & 255;
		g = color >> 8 & 255;
		b = color & 255;
		if(image.get_transparent()) ma = mask >> 24 & 255; else ma = 255;
		mr = mask >> 16 & 255;
		mg = mask >> 8 & 255;
		mb = mask & 255;
	} else {
		r = color >> 24 & 255;
		g = color >> 16 & 255;
		b = color >> 8 & 255;
		if(image.get_transparent()) a = color & 255; else a = 255;
		mr = mask >> 24 & 255;
		mg = mask >> 16 & 255;
		mb = mask >> 8 & 255;
		if(image.get_transparent()) ma = mask & 255; else ma = 255;
	}
	color = r | g << 8 | b << 16 | a << 24;
	mask = mr | mg << 8 | mb << 16 | mask << 24;
	var pix;
	var _g1 = 0;
	var _g = image.width;
	while(_g1 < _g) {
		var ix = _g1++;
		var hit = false;
		var _g3 = 0;
		var _g2 = image.height;
		while(_g3 < _g2) {
			var iy = _g3++;
			pix = image.getPixel32(ix,iy);
			if(findColor) hit = (pix & mask) == color; else hit = (pix & mask) != color;
			if(hit) {
				if(ix < left) left = ix;
				break;
			}
		}
		if(hit) break;
	}
	var _g11 = 0;
	var _g4 = image.width;
	while(_g11 < _g4) {
		var _ix = _g11++;
		var ix1 = image.width - 1 - _ix;
		var hit1 = false;
		var _g31 = 0;
		var _g21 = image.height;
		while(_g31 < _g21) {
			var iy1 = _g31++;
			pix = image.getPixel32(ix1,iy1);
			if(findColor) hit1 = (pix & mask) == color; else hit1 = (pix & mask) != color;
			if(hit1) {
				if(ix1 > right) right = ix1;
				break;
			}
		}
		if(hit1) break;
	}
	var _g12 = 0;
	var _g5 = image.height;
	while(_g12 < _g5) {
		var iy2 = _g12++;
		var hit2 = false;
		var _g32 = 0;
		var _g22 = image.width;
		while(_g32 < _g22) {
			var ix2 = _g32++;
			pix = image.getPixel32(ix2,iy2);
			if(findColor) hit2 = (pix & mask) == color; else hit2 = (pix & mask) != color;
			if(hit2) {
				if(iy2 < top) top = iy2;
				break;
			}
		}
		if(hit2) break;
	}
	var _g13 = 0;
	var _g6 = image.height;
	while(_g13 < _g6) {
		var _iy = _g13++;
		var iy3 = image.height - 1 - _iy;
		var hit3 = false;
		var _g33 = 0;
		var _g23 = image.width;
		while(_g33 < _g23) {
			var ix3 = _g33++;
			pix = image.getPixel32(ix3,iy3);
			if(findColor) hit3 = (pix & mask) == color; else hit3 = (pix & mask) != color;
			if(hit3) {
				if(iy3 > bottom) bottom = iy3;
				break;
			}
		}
		if(hit3) break;
	}
	var w = right - left;
	var h = bottom - top;
	if(w > 0) w++;
	if(h > 0) h++;
	if(w < 0) w = 0;
	if(h < 0) h = 0;
	if(left == right) w = 1;
	if(top == bottom) h = 1;
	if(left > image.width) left = 0;
	if(top > image.height) top = 0;
	return new lime.math.Rectangle(left,top,w,h);
};
lime.graphics.utils.ImageDataUtil.getPixel = function(image,x,y,format) {
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var pixel;
	if(image.get_premultiplied()) {
		var unmultiply = 255.0 / data[offset + 3];
		pixel = lime.graphics.utils.ImageDataUtil.__clamp[data[offset] * unmultiply | 0] << 24 | lime.graphics.utils.ImageDataUtil.__clamp[data[offset + 1] * unmultiply | 0] << 16 | lime.graphics.utils.ImageDataUtil.__clamp[data[offset + 2] * unmultiply | 0] << 8;
	} else pixel = data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8;
	if(format == 1) return pixel >> 8 & 16777215; else return pixel;
};
lime.graphics.utils.ImageDataUtil.getPixel32 = function(image,x,y,format) {
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var a;
	if(image.get_transparent()) a = data[offset + 3]; else a = 255;
	var r;
	var g;
	var b;
	if(image.get_premultiplied() && a != 0) {
		var unmultiply = 255.0 / a;
		var index = Math.round(data[offset] * unmultiply);
		r = lime.graphics.utils.ImageDataUtil.__clamp[index];
		var index1 = Math.round(data[offset + 1] * unmultiply);
		g = lime.graphics.utils.ImageDataUtil.__clamp[index1];
		var index2 = Math.round(data[offset + 2] * unmultiply);
		b = lime.graphics.utils.ImageDataUtil.__clamp[index2];
	} else {
		r = data[offset];
		g = data[offset + 1];
		b = data[offset + 2];
	}
	if(format == 1) return a << 24 | r << 16 | g << 8 | b; else return r << 24 | g << 16 | b << 8 | a;
};
lime.graphics.utils.ImageDataUtil.getPixels = function(image,rect,format) {
	if(image.buffer.data == null) return null;
	var length = rect.width * rect.height | 0;
	var byteArray = new lime.utils.ByteArray(length * 4);
	byteArray.position = 0;
	var srcData = image.buffer.data;
	var srcStride = image.buffer.width * 4 | 0;
	var srcPosition = rect.x * 4 + srcStride * rect.y | 0;
	var srcRowOffset = srcStride - (4 * rect.width | 0);
	var srcRowEnd = 4 * (rect.x + rect.width) | 0;
	byteArray.set_length(length * 4);
	if(format == 1) {
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			byteArray.__set(i * 4 + 1,srcData[srcPosition++]);
			byteArray.__set(i * 4 + 2,srcData[srcPosition++]);
			byteArray.__set(i * 4 + 3,srcData[srcPosition++]);
			byteArray.__set(i * 4,srcData[srcPosition++]);
			if(srcPosition % srcStride > srcRowEnd) srcPosition += srcRowOffset;
		}
	} else {
		var _g1 = 0;
		while(_g1 < length) {
			var i1 = _g1++;
			byteArray.__set(i1 * 4,srcData[srcPosition++]);
			byteArray.__set(i1 * 4 + 1,srcData[srcPosition++]);
			byteArray.__set(i1 * 4 + 2,srcData[srcPosition++]);
			byteArray.__set(i1 * 4 + 3,srcData[srcPosition++]);
			if(srcPosition % srcStride > srcRowEnd) srcPosition += srcRowOffset;
		}
	}
	byteArray.position = 0;
	return byteArray;
};
lime.graphics.utils.ImageDataUtil.merge = function(image,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier) {
	if(image.buffer.data == null || sourceImage.buffer.data == null) return;
	var rowOffset = destPoint.y + image.offsetY - sourceRect.y - sourceImage.offsetY | 0;
	var columnOffset = destPoint.x + image.offsetX - sourceRect.x - sourceImage.offsetY | 0;
	var sourceData = sourceImage.buffer.data;
	var sourceStride = sourceImage.buffer.width * 4;
	var sourceOffset = 0;
	var data = image.buffer.data;
	var stride = image.buffer.width * 4;
	var offset = 0;
	var _g1 = Std["int"](sourceRect.get_top() + sourceImage.offsetY);
	var _g = Std["int"](sourceRect.get_bottom() + sourceImage.offsetY);
	while(_g1 < _g) {
		var row = _g1++;
		var _g3 = Std["int"](sourceRect.get_left() + sourceImage.offsetX);
		var _g2 = Std["int"](sourceRect.get_right() + sourceImage.offsetX);
		while(_g3 < _g2) {
			var column = _g3++;
			sourceOffset = row * sourceStride + column * 4;
			offset = (row + rowOffset) * stride + (column + columnOffset) * 4;
			data[offset] = (sourceData[offset] * redMultiplier + data[offset] * (256 - redMultiplier)) / 256 | 0;
			data[offset + 1] = (sourceData[offset + 1] * greenMultiplier + data[offset + 1] * (256 - greenMultiplier)) / 256 | 0;
			data[offset + 2] = (sourceData[offset + 2] * blueMultiplier + data[offset + 2] * (256 - blueMultiplier)) / 256 | 0;
			data[offset + 3] = (sourceData[offset + 3] * alphaMultiplier + data[offset + 3] * (256 - alphaMultiplier)) / 256 | 0;
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.multiplyAlpha = function(image) {
	var data = image.buffer.data;
	if(data == null) return;
	var index;
	var a16;
	var length = data.length / 4 | 0;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		index = i * 4;
		a16 = lime.graphics.utils.ImageDataUtil.__alpha16[data[index + 3]];
		data[index] = data[index] * a16 >> 16;
		data[index + 1] = data[index + 1] * a16 >> 16;
		data[index + 2] = data[index + 2] * a16 >> 16;
	}
	image.buffer.premultiplied = true;
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.resize = function(image,newWidth,newHeight) {
	var buffer = image.buffer;
	if(buffer.width == newWidth && buffer.height == newHeight) return;
	var newBuffer = new lime.graphics.ImageBuffer(new Uint8Array(newWidth * newHeight * 4),newWidth,newHeight);
	var imageWidth = image.width;
	var imageHeight = image.height;
	var data = image.get_data();
	var newData = newBuffer.data;
	var sourceIndex;
	var sourceIndexX;
	var sourceIndexY;
	var sourceIndexXY;
	var index;
	var sourceX;
	var sourceY;
	var u;
	var v;
	var uRatio;
	var vRatio;
	var uOpposite;
	var vOpposite;
	var _g = 0;
	while(_g < newHeight) {
		var y = _g++;
		var _g1 = 0;
		while(_g1 < newWidth) {
			var x = _g1++;
			u = (x + 0.5) / newWidth * imageWidth - 0.5;
			v = (y + 0.5) / newHeight * imageHeight - 0.5;
			sourceX = u | 0;
			sourceY = v | 0;
			sourceIndex = (sourceY * imageWidth + sourceX) * 4;
			if(sourceX < imageWidth - 1) sourceIndexX = sourceIndex + 4; else sourceIndexX = sourceIndex;
			if(sourceY < imageHeight - 1) sourceIndexY = sourceIndex + imageWidth * 4; else sourceIndexY = sourceIndex;
			if(sourceIndexX != sourceIndex) sourceIndexXY = sourceIndexY + 4; else sourceIndexXY = sourceIndexY;
			index = (y * newWidth + x) * 4;
			uRatio = u - sourceX;
			vRatio = v - sourceY;
			uOpposite = 1 - uRatio;
			vOpposite = 1 - vRatio;
			newData[index] = (data[sourceIndex] * uOpposite + data[sourceIndexX] * uRatio) * vOpposite + (data[sourceIndexY] * uOpposite + data[sourceIndexXY] * uRatio) * vRatio | 0;
			newData[index + 1] = (data[sourceIndex + 1] * uOpposite + data[sourceIndexX + 1] * uRatio) * vOpposite + (data[sourceIndexY + 1] * uOpposite + data[sourceIndexXY + 1] * uRatio) * vRatio | 0;
			newData[index + 2] = (data[sourceIndex + 2] * uOpposite + data[sourceIndexX + 2] * uRatio) * vOpposite + (data[sourceIndexY + 2] * uOpposite + data[sourceIndexXY + 2] * uRatio) * vRatio | 0;
			if(data[sourceIndexX + 3] == 0 || data[sourceIndexY + 3] == 0 || data[sourceIndexXY + 3] == 0) newData[index + 3] = 0; else newData[index + 3] = data[sourceIndex + 3];
		}
	}
	buffer.data = newBuffer.data;
	buffer.width = newWidth;
	buffer.height = newHeight;
};
lime.graphics.utils.ImageDataUtil.resizeBuffer = function(image,newWidth,newHeight) {
	var buffer = image.buffer;
	var data = image.get_data();
	var newData = new Uint8Array(newWidth * newHeight * 4);
	var sourceIndex;
	var index;
	var _g1 = 0;
	var _g = buffer.height;
	while(_g1 < _g) {
		var y = _g1++;
		var _g3 = 0;
		var _g2 = buffer.width;
		while(_g3 < _g2) {
			var x = _g3++;
			sourceIndex = (y * buffer.width + x) * 4;
			index = (y * newWidth + x) * 4;
			newData[index] = data[sourceIndex];
			newData[index + 1] = data[sourceIndex + 1];
			newData[index + 2] = data[sourceIndex + 2];
			newData[index + 3] = data[sourceIndex + 3];
		}
	}
	buffer.data = newData;
	buffer.width = newWidth;
	buffer.height = newHeight;
};
lime.graphics.utils.ImageDataUtil.setFormat = function(image,format) {
	var data = image.buffer.data;
	if(data == null) return;
	var index;
	var a16;
	var length = data.length / 4 | 0;
	var r1;
	var g1;
	var b1;
	var a1;
	var r2;
	var g2;
	var b2;
	var a2;
	var r;
	var g;
	var b;
	var a;
	var _g = image.get_format();
	switch(_g) {
	case 0:
		r1 = 0;
		g1 = 1;
		b1 = 2;
		a1 = 3;
		break;
	case 1:
		r1 = 1;
		g1 = 2;
		b1 = 3;
		a1 = 0;
		break;
	case 2:
		r1 = 2;
		g1 = 1;
		b1 = 0;
		a1 = 3;
		break;
	}
	switch(format) {
	case 0:
		r2 = 0;
		g2 = 1;
		b2 = 2;
		a2 = 3;
		break;
	case 1:
		r2 = 1;
		g2 = 2;
		b2 = 3;
		a2 = 0;
		break;
	case 2:
		r2 = 2;
		g2 = 1;
		b2 = 0;
		a2 = 3;
		break;
	}
	var _g1 = 0;
	while(_g1 < length) {
		var i = _g1++;
		index = i * 4;
		r = data[index + r1];
		g = data[index + g1];
		b = data[index + b1];
		a = data[index + a1];
		data[index + r2] = r;
		data[index + g2] = g;
		data[index + b2] = b;
		data[index + a2] = a;
	}
	image.buffer.format = format;
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.setPixel = function(image,x,y,color,format) {
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	if(format == 0) color = color >> 8;
	data[offset] = (color & 16711680) >>> 16;
	data[offset + 1] = (color & 65280) >>> 8;
	data[offset + 2] = color & 255;
	if(image.get_transparent()) data[offset + 3] = 255;
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.setPixel32 = function(image,x,y,color,format) {
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var a;
	var r;
	var g;
	var b;
	if(format == 1) {
		if(image.get_transparent()) a = color >> 24 & 255; else a = 255;
		r = color >> 16 & 255;
		g = color >> 8 & 255;
		b = color & 255;
	} else {
		r = color >> 24 & 255;
		g = color >> 16 & 255;
		b = color >> 8 & 255;
		if(image.get_transparent()) a = color & 255; else a = 255;
	}
	if(image.get_transparent() && image.get_premultiplied()) {
		var a16 = lime.graphics.utils.ImageDataUtil.__alpha16[a];
		data[offset] = r * a16 >> 16;
		data[offset + 1] = g * a16 >> 16;
		data[offset + 2] = b * a16 >> 16;
		data[offset + 3] = a;
	} else {
		data[offset] = r;
		data[offset + 1] = g;
		data[offset + 2] = b;
		data[offset + 3] = a;
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.setPixels = function(image,rect,byteArray,format) {
	if(image.buffer.data == null) return;
	var len = Math.round(rect.width * rect.height);
	var data = image.buffer.data;
	var offset = Math.round(image.buffer.width * (rect.y + image.offsetX) + (rect.x + image.offsetY));
	var pos = offset * 4;
	var boundR = Math.round(rect.x + rect.width + image.offsetX);
	var width = image.buffer.width;
	var color;
	if(format == 1) {
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(pos % (width * 4) >= boundR * 4) pos += (width - boundR) * 4;
			color = byteArray.readUnsignedInt();
			data[pos++] = (color & 16711680) >>> 16;
			data[pos++] = (color & 65280) >>> 8;
			data[pos++] = color & 255;
			data[pos++] = (color & -16777216) >>> 24;
		}
	} else {
		var _g1 = 0;
		while(_g1 < len) {
			var i1 = _g1++;
			if(pos % (width * 4) >= boundR * 4) pos += (width - boundR) * 4;
			color = byteArray.readUnsignedInt();
			data[pos++] = (color & -16777216) >>> 24;
			data[pos++] = (color & 16711680) >>> 16;
			data[pos++] = (color & 65280) >>> 8;
			data[pos++] = color & 255;
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.unmultiplyAlpha = function(image) {
	var data = image.buffer.data;
	if(data == null) return;
	var index;
	var a;
	var unmultiply;
	var length = data.length / 4 | 0;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		index = i * 4;
		a = data[index + 3];
		if(a != 0) {
			unmultiply = 255.0 / a;
			data[index] = lime.graphics.utils.ImageDataUtil.__clamp[data[index] * unmultiply | 0];
			data[index + 1] = lime.graphics.utils.ImageDataUtil.__clamp[data[index + 1] * unmultiply | 0];
			data[index + 2] = lime.graphics.utils.ImageDataUtil.__clamp[data[index + 2] * unmultiply | 0];
		}
	}
	image.buffer.premultiplied = false;
	image.dirty = true;
};
lime.math = {};
lime.math._ColorMatrix = {};
lime.math._ColorMatrix.ColorMatrix_Impl_ = function() { };
$hxClasses["lime.math._ColorMatrix.ColorMatrix_Impl_"] = lime.math._ColorMatrix.ColorMatrix_Impl_;
lime.math._ColorMatrix.ColorMatrix_Impl_.__name__ = true;
lime.math._ColorMatrix.ColorMatrix_Impl_._new = function(data) {
	var this1;
	if(data != null && data.length == 20) this1 = data; else this1 = new Float32Array(lime.math._ColorMatrix.ColorMatrix_Impl_.__identity);
	return this1;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.clone = function(this1) {
	return lime.math._ColorMatrix.ColorMatrix_Impl_._new(new Float32Array(this1));
};
lime.math._ColorMatrix.ColorMatrix_Impl_.concat = function(this1,second) {
	var _g = this1;
	var value = _g[0] + second[0];
	_g[0] = value;
	value;
	var _g1 = this1;
	var value1 = _g1[6] + second[6];
	_g1[6] = value1;
	value1;
	var _g2 = this1;
	var value2 = _g2[12] + second[12];
	_g2[12] = value2;
	value2;
	var _g3 = this1;
	var value3 = _g3[18] + second[18];
	_g3[18] = value3;
	value3;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.copyFrom = function(this1,other) {
	this1.set(other);
};
lime.math._ColorMatrix.ColorMatrix_Impl_.identity = function(this1) {
	this1[0] = 1;
	this1[1] = 0;
	this1[2] = 0;
	this1[3] = 0;
	this1[4] = 0;
	this1[5] = 0;
	this1[6] = 1;
	this1[7] = 0;
	this1[8] = 0;
	this1[9] = 0;
	this1[10] = 0;
	this1[11] = 0;
	this1[12] = 1;
	this1[13] = 0;
	this1[14] = 0;
	this1[15] = 0;
	this1[16] = 0;
	this1[17] = 0;
	this1[18] = 1;
	this1[19] = 0;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.__toFlashColorTransform = function(this1) {
	return null;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.get_alphaMultiplier = function(this1) {
	return this1[18];
};
lime.math._ColorMatrix.ColorMatrix_Impl_.set_alphaMultiplier = function(this1,value) {
	this1[18] = value;
	return value;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.get_alphaOffset = function(this1) {
	return this1[19] * 255;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.set_alphaOffset = function(this1,value) {
	this1[19] = value / 255;
	return value;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.get_blueMultiplier = function(this1) {
	return this1[12];
};
lime.math._ColorMatrix.ColorMatrix_Impl_.set_blueMultiplier = function(this1,value) {
	this1[12] = value;
	return value;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.get_blueOffset = function(this1) {
	return this1[14] * 255;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.set_blueOffset = function(this1,value) {
	this1[14] = value / 255;
	return value;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.get_color = function(this1) {
	return (this1[4] * 255 | 0) << 16 | (this1[9] * 255 | 0) << 8 | (this1[14] * 255 | 0);
};
lime.math._ColorMatrix.ColorMatrix_Impl_.set_color = function(this1,value) {
	var value1 = value >> 16 & 255;
	this1[4] = value1 / 255;
	value1;
	var value2 = value >> 8 & 255;
	this1[9] = value2 / 255;
	value2;
	var value3 = value & 255;
	this1[14] = value3 / 255;
	value3;
	this1[0] = 0;
	0;
	this1[6] = 0;
	0;
	this1[12] = 0;
	0;
	return lime.math._ColorMatrix.ColorMatrix_Impl_.get_color(this1);
};
lime.math._ColorMatrix.ColorMatrix_Impl_.get_greenMultiplier = function(this1) {
	return this1[6];
};
lime.math._ColorMatrix.ColorMatrix_Impl_.set_greenMultiplier = function(this1,value) {
	this1[6] = value;
	return value;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.get_greenOffset = function(this1) {
	return this1[9] * 255;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.set_greenOffset = function(this1,value) {
	this1[9] = value / 255;
	return value;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.get_redMultiplier = function(this1) {
	return this1[0];
};
lime.math._ColorMatrix.ColorMatrix_Impl_.set_redMultiplier = function(this1,value) {
	this1[0] = value;
	return value;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.get_redOffset = function(this1) {
	return this1[4] * 255;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.set_redOffset = function(this1,value) {
	this1[4] = value / 255;
	return value;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.get = function(this1,index) {
	return this1[index];
};
lime.math._ColorMatrix.ColorMatrix_Impl_.set = function(this1,index,value) {
	this1[index] = value;
	return value;
};
lime.math.Matrix3 = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["lime.math.Matrix3"] = lime.math.Matrix3;
lime.math.Matrix3.__name__ = true;
lime.math.Matrix3.prototype = {
	clone: function() {
		return new lime.math.Matrix3(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.ty = this.tx * m.b + this.ty * m.d + m.ty;
		this.tx = tx1;
	}
	,copyColumnFrom: function(column,vector4) {
		if(column > 2) throw "Column " + column + " out of bounds (2)"; else if(column == 0) {
			this.a = vector4.x;
			this.c = vector4.y;
		} else if(column == 1) {
			this.b = vector4.x;
			this.d = vector4.y;
		} else {
			this.tx = vector4.x;
			this.ty = vector4.y;
		}
	}
	,copyColumnTo: function(column,vector4) {
		if(column > 2) throw "Column " + column + " out of bounds (2)"; else if(column == 0) {
			vector4.x = this.a;
			vector4.y = this.c;
			vector4.z = 0;
		} else if(column == 1) {
			vector4.x = this.b;
			vector4.y = this.d;
			vector4.z = 0;
		} else {
			vector4.x = this.tx;
			vector4.y = this.ty;
			vector4.z = 1;
		}
	}
	,copyFrom: function(sourceMatrix3) {
		this.a = sourceMatrix3.a;
		this.b = sourceMatrix3.b;
		this.c = sourceMatrix3.c;
		this.d = sourceMatrix3.d;
		this.tx = sourceMatrix3.tx;
		this.ty = sourceMatrix3.ty;
	}
	,copyRowFrom: function(row,vector4) {
		if(row > 2) throw "Row " + row + " out of bounds (2)"; else if(row == 0) {
			this.a = vector4.x;
			this.c = vector4.y;
		} else if(row == 1) {
			this.b = vector4.x;
			this.d = vector4.y;
		} else {
			this.tx = vector4.x;
			this.ty = vector4.y;
		}
	}
	,copyRowTo: function(row,vector4) {
		if(row > 2) throw "Row " + row + " out of bounds (2)"; else if(row == 0) {
			vector4.x = this.a;
			vector4.y = this.b;
			vector4.z = this.tx;
		} else if(row == 1) {
			vector4.x = this.c;
			vector4.y = this.d;
			vector4.z = this.ty;
		} else {
			vector4.x = 0;
			vector4.y = 0;
			vector4.z = 1;
		}
	}
	,createBox: function(scaleX,scaleY,rotation,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(rotation == null) rotation = 0;
		this.a = scaleX;
		this.d = scaleY;
		this.b = rotation;
		this.tx = tx;
		this.ty = ty;
	}
	,createGradientBox: function(width,height,rotation,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(rotation == null) rotation = 0;
		this.a = width / 1638.4;
		this.d = height / 1638.4;
		if(rotation != 0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.tx = tx + width / 2;
		this.ty = ty + height / 2;
	}
	,equals: function(Matrix3) {
		return Matrix3 != null && this.tx == Matrix3.tx && this.ty == Matrix3.ty && this.a == Matrix3.a && this.b == Matrix3.b && this.c == Matrix3.c && this.d == Matrix3.d;
	}
	,deltaTransformVector2: function(Vector2) {
		return new lime.math.Vector2(Vector2.x * this.a + Vector2.y * this.c,Vector2.x * this.b + Vector2.y * this.d);
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = tx1;
		}
		return this;
	}
	,mult: function(m) {
		var result = new lime.math.Matrix3(this.a,this.b,this.c,this.d,this.tx,this.ty);
		result.concat(m);
		return result;
	}
	,rotate: function(theta) {
		var cos = Math.cos(theta);
		var sin = Math.sin(theta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.ty = this.tx * sin + this.ty * cos;
		this.tx = tx1;
	}
	,scale: function(sx,sy) {
		this.a *= sx;
		this.b *= sy;
		this.c *= sx;
		this.d *= sy;
		this.tx *= sx;
		this.ty *= sy;
	}
	,setRotation: function(theta,scale) {
		if(scale == null) scale = 1;
		this.a = Math.cos(theta) * scale;
		this.c = Math.sin(theta) * scale;
		this.b = -this.c;
		this.d = this.a;
	}
	,setTo: function(a,b,c,d,tx,ty) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}
	,to3DString: function(roundPixels) {
		if(roundPixels == null) roundPixels = false;
		if(roundPixels) return "Matrix33d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + (this.tx | 0) + ", " + (this.ty | 0) + ", 0, 1)"; else return "Matrix33d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
	}
	,toMozString: function() {
		return "Matrix3(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,toString: function() {
		return "Matrix3(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,transformVector2: function(pos) {
		return new lime.math.Vector2(pos.x * this.a + pos.y * this.c + this.tx,pos.x * this.b + pos.y * this.d + this.ty);
	}
	,translate: function(dx,dy) {
		this.tx += dx;
		this.ty += dy;
	}
	,__cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.tx = Math.round(this.tx * 10) / 10;
		this.ty = Math.round(this.ty * 10) / 10;
	}
	,__transformX: function(pos) {
		return pos.x * this.a + pos.y * this.c + this.tx;
	}
	,__transformY: function(pos) {
		return pos.x * this.b + pos.y * this.d + this.ty;
	}
	,__translateTransformed: function(pos) {
		this.tx = pos.x * this.a + pos.y * this.c + this.tx;
		this.ty = pos.x * this.b + pos.y * this.d + this.ty;
	}
	,__class__: lime.math.Matrix3
};
lime.math.Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["lime.math.Rectangle"] = lime.math.Rectangle;
lime.math.Rectangle.__name__ = true;
lime.math.Rectangle.prototype = {
	clone: function() {
		return new lime.math.Rectangle(this.x,this.y,this.width,this.height);
	}
	,contains: function(x,y) {
		return x >= this.x && y >= this.y && x < this.get_right() && y < this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,copyFrom: function(sourceRect) {
		this.x = sourceRect.x;
		this.y = sourceRect.y;
		this.width = sourceRect.width;
		this.height = sourceRect.height;
	}
	,equals: function(toCompare) {
		return toCompare != null && this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,intersection: function(toIntersect) {
		var x0;
		if(this.x < toIntersect.x) x0 = toIntersect.x; else x0 = this.x;
		var x1;
		if(this.get_right() > toIntersect.get_right()) x1 = toIntersect.get_right(); else x1 = this.get_right();
		if(x1 <= x0) return new lime.math.Rectangle();
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		if(y1 <= y0) return new lime.math.Rectangle();
		return new lime.math.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,intersects: function(toIntersect) {
		var x0;
		if(this.x < toIntersect.x) x0 = toIntersect.x; else x0 = this.x;
		var x1;
		if(this.get_right() > toIntersect.get_right()) x1 = toIntersect.get_right(); else x1 = this.get_right();
		if(x1 <= x0) return false;
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		return y1 > y0;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,setTo: function(xa,ya,widtha,heighta) {
		this.x = xa;
		this.y = ya;
		this.width = widtha;
		this.height = heighta;
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new lime.math.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,union: function(toUnion) {
		if(this.width == 0 || this.height == 0) return toUnion.clone(); else if(toUnion.width == 0 || toUnion.height == 0) return this.clone();
		var x0;
		if(this.x > toUnion.x) x0 = toUnion.x; else x0 = this.x;
		var x1;
		if(this.get_right() < toUnion.get_right()) x1 = toUnion.get_right(); else x1 = this.get_right();
		var y0;
		if(this.y > toUnion.y) y0 = toUnion.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() < toUnion.get_bottom()) y1 = toUnion.get_bottom(); else y1 = this.get_bottom();
		return new lime.math.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,__contract: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) return;
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x < x) this.x = x;
		if(this.y < y) this.y = y;
		if(this.get_right() > x + width) this.width = x + width - this.x;
		if(this.get_bottom() > y + height) this.height = y + height - this.y;
	}
	,__expand: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			return;
		}
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x > x) this.x = x;
		if(this.y > y) this.y = y;
		if(cacheRight < x + width) this.width = x + width - this.x;
		if(cacheBottom < y + height) this.height = y + height - this.y;
	}
	,__toFlashRectangle: function() {
		return null;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottomRight: function() {
		return new lime.math.Vector2(this.x + this.width,this.y + this.height);
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_size: function() {
		return new lime.math.Vector2(this.width,this.height);
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_topLeft: function() {
		return new lime.math.Vector2(this.x,this.y);
	}
	,set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,__class__: lime.math.Rectangle
};
lime.math.Vector2 = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["lime.math.Vector2"] = lime.math.Vector2;
lime.math.Vector2.__name__ = true;
lime.math.Vector2.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
};
lime.math.Vector2.interpolate = function(pt1,pt2,f) {
	return new lime.math.Vector2(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
};
lime.math.Vector2.polar = function(len,angle) {
	return new lime.math.Vector2(len * Math.cos(angle),len * Math.sin(angle));
};
lime.math.Vector2.prototype = {
	add: function(v) {
		return new lime.math.Vector2(v.x + this.x,v.y + this.y);
	}
	,clone: function() {
		return new lime.math.Vector2(this.x,this.y);
	}
	,equals: function(toCompare) {
		return toCompare != null && toCompare.x == this.x && toCompare.y == this.y;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,subtract: function(v) {
		return new lime.math.Vector2(this.x - v.x,this.y - v.y);
	}
	,__toFlashPoint: function() {
		return null;
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,__class__: lime.math.Vector2
};
lime.math.Vector4 = function(x,y,z,w) {
	if(w == null) w = 0.;
	if(z == null) z = 0.;
	if(y == null) y = 0.;
	if(x == null) x = 0.;
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
};
$hxClasses["lime.math.Vector4"] = lime.math.Vector4;
lime.math.Vector4.__name__ = true;
lime.math.Vector4.angleBetween = function(a,b) {
	var a0 = new lime.math.Vector4(a.x,a.y,a.z,a.w);
	a0.normalize();
	var b0 = new lime.math.Vector4(b.x,b.y,b.z,b.w);
	b0.normalize();
	return Math.acos(a0.x * b0.x + a0.y * b0.y + a0.z * b0.z);
};
lime.math.Vector4.distance = function(pt1,pt2) {
	var x = pt2.x - pt1.x;
	var y = pt2.y - pt1.y;
	var z = pt2.z - pt1.z;
	return Math.sqrt(x * x + y * y + z * z);
};
lime.math.Vector4.get_X_AXIS = function() {
	return new lime.math.Vector4(1,0,0);
};
lime.math.Vector4.get_Y_AXIS = function() {
	return new lime.math.Vector4(0,1,0);
};
lime.math.Vector4.get_Z_AXIS = function() {
	return new lime.math.Vector4(0,0,1);
};
lime.math.Vector4.prototype = {
	add: function(a) {
		return new lime.math.Vector4(this.x + a.x,this.y + a.y,this.z + a.z);
	}
	,clone: function() {
		return new lime.math.Vector4(this.x,this.y,this.z,this.w);
	}
	,copyFrom: function(sourceVector4) {
		this.x = sourceVector4.x;
		this.y = sourceVector4.y;
		this.z = sourceVector4.z;
	}
	,crossProduct: function(a) {
		return new lime.math.Vector4(this.y * a.z - this.z * a.y,this.z * a.x - this.x * a.z,this.x * a.y - this.y * a.x,1);
	}
	,decrementBy: function(a) {
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
	}
	,dotProduct: function(a) {
		return this.x * a.x + this.y * a.y + this.z * a.z;
	}
	,equals: function(toCompare,allFour) {
		if(allFour == null) allFour = false;
		return this.x == toCompare.x && this.y == toCompare.y && this.z == toCompare.z && (!allFour || this.w == toCompare.w);
	}
	,incrementBy: function(a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
	}
	,nearEquals: function(toCompare,tolerance,allFour) {
		if(allFour == null) allFour = false;
		return Math.abs(this.x - toCompare.x) < tolerance && Math.abs(this.y - toCompare.y) < tolerance && Math.abs(this.z - toCompare.z) < tolerance && (!allFour || Math.abs(this.w - toCompare.w) < tolerance);
	}
	,negate: function() {
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;
	}
	,normalize: function() {
		var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
		if(l != 0) {
			this.x /= l;
			this.y /= l;
			this.z /= l;
		}
		return l;
	}
	,project: function() {
		this.x /= this.w;
		this.y /= this.w;
		this.z /= this.w;
	}
	,scaleBy: function(s) {
		this.x *= s;
		this.y *= s;
		this.z *= s;
	}
	,setTo: function(xa,ya,za) {
		this.x = xa;
		this.y = ya;
		this.z = za;
	}
	,subtract: function(a) {
		return new lime.math.Vector4(this.x - a.x,this.y - a.y,this.z - a.z);
	}
	,toString: function() {
		return "Vector4(" + this.x + ", " + this.y + ", " + this.z + ")";
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	,get_lengthSquared: function() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	,__class__: lime.math.Vector4
};
lime.net = {};
lime.net.URLLoader = function(request) {
	this.onSecurityError = new lime.app.Event();
	this.onProgress = new lime.app.Event();
	this.onOpen = new lime.app.Event();
	this.onIOError = new lime.app.Event();
	this.onHTTPStatus = new lime.app.Event();
	this.onComplete = new lime.app.Event();
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(lime.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["lime.net.URLLoader"] = lime.net.URLLoader;
lime.net.URLLoader.__name__ = true;
lime.net.URLLoader.prototype = {
	close: function() {
	}
	,getData: function() {
		return null;
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,registerEvents: function(subject) {
		var _g = this;
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.__onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s;
			try {
				s = subject.status;
			} catch( e ) {
				s = null;
			}
			if(s == undefined) s = null;
			if(s != null) {
				var listeners = self.onHTTPStatus.listeners;
				var repeat = self.onHTTPStatus.repeat;
				var length = listeners.length;
				var i = 0;
				while(i < length) {
					listeners[i](_g,s);
					if(!repeat[i]) {
						self.onHTTPStatus.remove(listeners[i]);
						length--;
					} else i++;
				}
			}
			if(s != null && s >= 200 && s < 400) self.__onData(subject.response); else if(s == null) {
				var listeners1 = self.onIOError.listeners;
				var repeat1 = self.onIOError.repeat;
				var length1 = listeners1.length;
				var i1 = 0;
				while(i1 < length1) {
					listeners1[i1](_g,"Failed to connect or resolve host");
					if(!repeat1[i1]) {
						self.onIOError.remove(listeners1[i1]);
						length1--;
					} else i1++;
				}
			} else if(s == 12029) {
				var listeners2 = self.onIOError.listeners;
				var repeat2 = self.onIOError.repeat;
				var length2 = listeners2.length;
				var i2 = 0;
				while(i2 < length2) {
					listeners2[i2](_g,"Failed to connect to host");
					if(!repeat2[i2]) {
						self.onIOError.remove(listeners2[i2]);
						length2--;
					} else i2++;
				}
			} else if(s == 12007) {
				var listeners3 = self.onIOError.listeners;
				var repeat3 = self.onIOError.repeat;
				var length3 = listeners3.length;
				var i3 = 0;
				while(i3 < length3) {
					listeners3[i3](_g,"Unknown host");
					if(!repeat3[i3]) {
						self.onIOError.remove(listeners3[i3]);
						length3--;
					} else i3++;
				}
			} else if(s == 0) {
				var listeners4 = self.onIOError.listeners;
				var repeat4 = self.onIOError.repeat;
				var length4 = listeners4.length;
				var i4 = 0;
				while(i4 < length4) {
					listeners4[i4](_g,"Unable to make request (may be blocked due to cross-domain permissions)");
					if(!repeat4[i4]) {
						self.onIOError.remove(listeners4[i4]);
						length4--;
					} else i4++;
				}
				var listeners5 = self.onSecurityError.listeners;
				var repeat5 = self.onSecurityError.repeat;
				var length5 = listeners5.length;
				var i5 = 0;
				while(i5 < length5) {
					listeners5[i5](_g,"Unable to make request (may be blocked due to cross-domain permissions)");
					if(!repeat5[i5]) {
						self.onSecurityError.remove(listeners5[i5]);
						length5--;
					} else i5++;
				}
			} else {
				var listeners6 = self.onIOError.listeners;
				var repeat6 = self.onIOError.repeat;
				var length6 = listeners6.length;
				var i6 = 0;
				while(i6 < length6) {
					listeners6[i6](_g,"Http Error #" + subject.status);
					if(!repeat6[i6]) {
						self.onIOError.remove(listeners6[i6]);
						length6--;
					} else i6++;
				}
			}
		};
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,lime.utils.ByteArray)) {
			var data1 = data;
			var _g = this.dataFormat;
			switch(_g[1]) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,lime.net.URLVariables)) {
			var data2 = data;
			var _g1 = 0;
			var _g11 = Reflect.fields(data2);
			while(_g1 < _g11.length) {
				var p = _g11[_g1];
				++_g1;
				if(uri.length != 0) uri += "&";
				uri += encodeURIComponent(p) + "=" + StringTools.urlEncode(Reflect.field(data2,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open("GET",url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(js.Boot.__cast(method , String),url,true);
		} catch( e ) {
			var listeners = this.onIOError.listeners;
			var repeat = this.onIOError.repeat;
			var length = listeners.length;
			var i = 0;
			while(i < length) {
				listeners[i](this,e.toString());
				if(!repeat[i]) {
					this.onIOError.remove(listeners[i]);
					length--;
				} else i++;
			}
			return;
		}
		var _g2 = this.dataFormat;
		switch(_g2[1]) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g3 = 0;
		while(_g3 < requestHeaders.length) {
			var header = requestHeaders[_g3];
			++_g3;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		var listeners1 = this.onOpen.listeners;
		var repeat1 = this.onOpen.repeat;
		var length1 = listeners1.length;
		var i1 = 0;
		while(i1 < length1) {
			listeners1[i1](this);
			if(!repeat1[i1]) {
				this.onOpen.remove(listeners1[i1]);
				length1--;
			} else i1++;
		}
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,__onData: function(_) {
		var content = this.getData();
		var _g = this.dataFormat;
		switch(_g[1]) {
		case 0:
			this.data = lime.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var listeners = this.onComplete.listeners;
		var repeat = this.onComplete.repeat;
		var length = listeners.length;
		var i = 0;
		while(i < length) {
			listeners[i](this);
			if(!repeat[i]) {
				this.onComplete.remove(listeners[i]);
				length--;
			} else i++;
		}
	}
	,__onProgress: function(event) {
		this.bytesLoaded = event.loaded;
		this.bytesTotal = event.total;
		var listeners = this.onProgress.listeners;
		var repeat = this.onProgress.repeat;
		var length = listeners.length;
		var i = 0;
		while(i < length) {
			listeners[i](this,this.bytesLoaded,this.bytesTotal);
			if(!repeat[i]) {
				this.onProgress.remove(listeners[i]);
				length--;
			} else i++;
		}
	}
	,set_dataFormat: function(inputVal) {
		if(inputVal == lime.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(window,"ArrayBuffer")) this.dataFormat = lime.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,__class__: lime.net.URLLoader
};
lime.net.URLLoaderDataFormat = $hxClasses["lime.net.URLLoaderDataFormat"] = { __ename__ : true, __constructs__ : ["BINARY","TEXT","VARIABLES"] };
lime.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
lime.net.URLLoaderDataFormat.BINARY.__enum__ = lime.net.URLLoaderDataFormat;
lime.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
lime.net.URLLoaderDataFormat.TEXT.__enum__ = lime.net.URLLoaderDataFormat;
lime.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
lime.net.URLLoaderDataFormat.VARIABLES.__enum__ = lime.net.URLLoaderDataFormat;
lime.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = "GET";
	this.contentType = null;
};
$hxClasses["lime.net.URLRequest"] = lime.net.URLRequest;
lime.net.URLRequest.__name__ = true;
lime.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == "GET" || this.data == null) return res;
		if(typeof(this.data) == "string" || js.Boot.__instanceof(this.data,lime.utils.ByteArray)) {
			res = res.slice();
			res.push(new lime.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: lime.net.URLRequest
};
lime.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["lime.net.URLRequestHeader"] = lime.net.URLRequestHeader;
lime.net.URLRequestHeader.__name__ = true;
lime.net.URLRequestHeader.prototype = {
	__class__: lime.net.URLRequestHeader
};
lime.net._URLRequestMethod = {};
lime.net._URLRequestMethod.URLRequestMethod_Impl_ = function() { };
$hxClasses["lime.net._URLRequestMethod.URLRequestMethod_Impl_"] = lime.net._URLRequestMethod.URLRequestMethod_Impl_;
lime.net._URLRequestMethod.URLRequestMethod_Impl_.__name__ = true;
lime.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["lime.net.URLVariables"] = lime.net.URLVariables;
lime.net.URLVariables.__name__ = true;
lime.net.URLVariables.prototype = {
	decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g1 = 0;
		while(_g1 < fields1.length) {
			var f1 = fields1[_g1];
			++_g1;
			var eq = f1.indexOf("=");
			if(eq > 0) Reflect.setField(this,StringTools.urlDecode(HxOverrides.substr(f1,0,eq)),StringTools.urlDecode(HxOverrides.substr(f1,eq + 1,null))); else if(eq != 0) Reflect.setField(this,decodeURIComponent(f1.split("+").join(" ")),"");
		}
	}
	,toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(encodeURIComponent(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,__class__: lime.net.URLVariables
};
lime.system = {};
lime.system.System = function() { };
$hxClasses["lime.system.System"] = lime.system.System;
lime.system.System.__name__ = true;
lime.system.System.embed = $hx_exports.lime.embed = function(element,width,height,background,assetsPrefix) {
	var htmlElement = null;
	if(typeof(element) == "string") htmlElement = window.document.getElementById(js.Boot.__cast(element , String)); else if(element == null) htmlElement = window.document.createElement("div"); else htmlElement = element;
	var color = null;
	if(background != null) {
		background = StringTools.replace(background,"#","");
		if(background.indexOf("0x") > -1) color = Std.parseInt(background); else color = Std.parseInt("0x" + background);
	}
	if(width == null) width = 0;
	if(height == null) height = 0;
	ApplicationMain.config.background = color;
	ApplicationMain.config.element = htmlElement;
	ApplicationMain.config.width = width;
	ApplicationMain.config.height = height;
	ApplicationMain.config.assetsPrefix = assetsPrefix;
	ApplicationMain.create();
};
lime.system.System.exit = function(code) {
};
lime.system.System.findHaxeLib = function(library) {
	return "";
};
lime.system.System.getTimer = function() {
	return Std["int"](new Date().getTime());
};
lime.system.System.load = function(library,method,args,lazy) {
	if(lazy == null) lazy = false;
	if(args == null) args = 0;
	if(lime.system.System.disableCFFI) return Reflect.makeVarArgs(function(__) {
		return { };
	});
	var result = null;
	return result;
};
lime.system.System.sysName = function() {
	return null;
};
lime.system.System.tryLoad = function(name,library,func,args) {
	return null;
};
lime.system.System.loaderTrace = function(message) {
};
lime.system.System.get_applicationDirectory = function() {
	return null;
};
lime.system.System.get_applicationStorageDirectory = function() {
	var company = "MyCompany";
	var file = "MyApplication";
	if(lime.app.Application.current != null && lime.app.Application.current.config != null) {
		if(lime.app.Application.current.config.company != null) company = lime.app.Application.current.config.company;
		if(lime.app.Application.current.config.file != null) file = lime.app.Application.current.config.file;
	}
	return null;
};
lime.system.System.get_desktopDirectory = function() {
	return null;
};
lime.system.System.get_documentsDirectory = function() {
	return null;
};
lime.system.System.get_fontsDirectory = function() {
	return null;
};
lime.system.System.get_userDirectory = function() {
	return null;
};
lime.system._System = {};
lime.system._System.SystemDirectory_Impl_ = function() { };
$hxClasses["lime.system._System.SystemDirectory_Impl_"] = lime.system._System.SystemDirectory_Impl_;
lime.system._System.SystemDirectory_Impl_.__name__ = true;
lime.text = {};
lime.text.Font = function(name) {
	this.name = name;
	if(this.__fontPath != null) this.__fromFile(this.__fontPath);
};
$hxClasses["lime.text.Font"] = lime.text.Font;
lime.text.Font.__name__ = true;
lime.text.Font.fromBytes = function(bytes) {
	var font = new lime.text.Font();
	font.__fromBytes(bytes);
	return font;
};
lime.text.Font.fromFile = function(path) {
	var font = new lime.text.Font();
	font.__fromFile(path);
	return font;
};
lime.text.Font.prototype = {
	decompose: function() {
		return null;
	}
	,getGlyph: function(character) {
		return -1;
	}
	,getGlyphs: function(characters) {
		if(characters == null) characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^`'\"/\\&*()[]{}<>|:;_-+=?,. ";
		return null;
	}
	,getGlyphMetrics: function(glyph) {
		return null;
	}
	,renderGlyph: function(glyph,fontSize) {
		return null;
	}
	,renderGlyphs: function(glyphs,fontSize) {
		return null;
	}
	,__fromBytes: function(bytes) {
		this.__fontPath = null;
	}
	,__fromFile: function(path) {
		this.__fontPath = path;
	}
	,get_ascender: function() {
		return 0;
	}
	,get_descender: function() {
		return 0;
	}
	,get_height: function() {
		return 0;
	}
	,get_numGlyphs: function() {
		return 0;
	}
	,get_underlinePosition: function() {
		return 0;
	}
	,get_underlineThickness: function() {
		return 0;
	}
	,get_unitsPerEM: function() {
		return 0;
	}
	,__class__: lime.text.Font
};
lime.text._Glyph = {};
lime.text._Glyph.Glyph_Impl_ = function() { };
$hxClasses["lime.text._Glyph.Glyph_Impl_"] = lime.text._Glyph.Glyph_Impl_;
lime.text._Glyph.Glyph_Impl_.__name__ = true;
lime.text._Glyph.Glyph_Impl_._new = function(i) {
	return i;
};
lime.text.GlyphMetrics = function() {
};
$hxClasses["lime.text.GlyphMetrics"] = lime.text.GlyphMetrics;
lime.text.GlyphMetrics.__name__ = true;
lime.text.GlyphMetrics.prototype = {
	__class__: lime.text.GlyphMetrics
};
lime.ui = {};
lime.ui.Gamepad = function(id) {
	this.id = id;
	this.connected = true;
};
$hxClasses["lime.ui.Gamepad"] = lime.ui.Gamepad;
lime.ui.Gamepad.__name__ = true;
lime.ui.Gamepad.prototype = {
	get_guid: function() {
		return null;
	}
	,get_name: function() {
		return null;
	}
	,__class__: lime.ui.Gamepad
};
lime.ui._GamepadAxis = {};
lime.ui._GamepadAxis.GamepadAxis_Impl_ = function() { };
$hxClasses["lime.ui._GamepadAxis.GamepadAxis_Impl_"] = lime.ui._GamepadAxis.GamepadAxis_Impl_;
lime.ui._GamepadAxis.GamepadAxis_Impl_.__name__ = true;
lime.ui._GamepadAxis.GamepadAxis_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "LEFT_X";
	case 1:
		return "LEFT_Y";
	case 2:
		return "RIGHT_X";
	case 3:
		return "RIGHT_Y";
	case 4:
		return "TRIGGER_LEFT";
	case 5:
		return "TRIGGER_RIGHT";
	default:
		return "UNKNOWN (" + this1 + ")";
	}
};
lime.ui._GamepadButton = {};
lime.ui._GamepadButton.GamepadButton_Impl_ = function() { };
$hxClasses["lime.ui._GamepadButton.GamepadButton_Impl_"] = lime.ui._GamepadButton.GamepadButton_Impl_;
lime.ui._GamepadButton.GamepadButton_Impl_.__name__ = true;
lime.ui._GamepadButton.GamepadButton_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "A";
	case 1:
		return "B";
	case 2:
		return "X";
	case 3:
		return "Y";
	case 4:
		return "BACK";
	case 5:
		return "GUIDE";
	case 6:
		return "START";
	case 7:
		return "LEFT_STICK";
	case 8:
		return "RIGHT_STICK";
	case 9:
		return "LEFT_SHOULDER";
	case 10:
		return "RIGHT_SHOULDER";
	case 11:
		return "DPAD_UP";
	case 12:
		return "DPAD_DOWN";
	case 13:
		return "DPAD_LEFT";
	case 14:
		return "DPAD_RIGHT";
	default:
		return "UNKNOWN (" + this1 + ")";
	}
};
lime.ui._KeyCode = {};
lime.ui._KeyCode.KeyCode_Impl_ = function() { };
$hxClasses["lime.ui._KeyCode.KeyCode_Impl_"] = lime.ui._KeyCode.KeyCode_Impl_;
lime.ui._KeyCode.KeyCode_Impl_.__name__ = true;
lime.ui._KeyModifier = {};
lime.ui._KeyModifier.KeyModifier_Impl_ = function() { };
$hxClasses["lime.ui._KeyModifier.KeyModifier_Impl_"] = lime.ui._KeyModifier.KeyModifier_Impl_;
lime.ui._KeyModifier.KeyModifier_Impl_.__name__ = true;
lime.ui._KeyModifier.KeyModifier_Impl_.get_altKey = function(this1) {
	return (this1 & 256) > 0 || (this1 & 512) > 0;
};
lime.ui._KeyModifier.KeyModifier_Impl_.set_altKey = function(this1,value) {
	if(value) this1 |= 768; else this1 &= 268435455 - 768;
	return value;
};
lime.ui._KeyModifier.KeyModifier_Impl_.get_capsLock = function(this1) {
	return (this1 & 8192) > 0 || (this1 & 8192) > 0;
};
lime.ui._KeyModifier.KeyModifier_Impl_.set_capsLock = function(this1,value) {
	if(value) this1 |= 8192; else this1 &= 268435455 - 8192;
	return value;
};
lime.ui._KeyModifier.KeyModifier_Impl_.get_ctrlKey = function(this1) {
	return (this1 & 64) > 0 || (this1 & 128) > 0;
};
lime.ui._KeyModifier.KeyModifier_Impl_.set_ctrlKey = function(this1,value) {
	if(value) this1 |= 192; else this1 &= 268435455 - 192;
	return value;
};
lime.ui._KeyModifier.KeyModifier_Impl_.get_metaKey = function(this1) {
	return (this1 & 1024) > 0 || (this1 & 2048) > 0;
};
lime.ui._KeyModifier.KeyModifier_Impl_.set_metaKey = function(this1,value) {
	if(value) this1 |= 3072; else this1 &= 268435455 - 3072;
	return value;
};
lime.ui._KeyModifier.KeyModifier_Impl_.get_numLock = function(this1) {
	return (this1 & 4096) > 0 || (this1 & 4096) > 0;
};
lime.ui._KeyModifier.KeyModifier_Impl_.set_numLock = function(this1,value) {
	if(value) this1 |= 4096; else this1 &= 268435455 - 4096;
	return value;
};
lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey = function(this1) {
	return (this1 & 1) > 0 || (this1 & 2) > 0;
};
lime.ui._KeyModifier.KeyModifier_Impl_.set_shiftKey = function(this1,value) {
	if(value) this1 |= 3; else this1 &= 268435455 - 3;
	return value;
};
lime.ui.Window = function(config) {
	this.onWindowRestore = new lime.app.Event();
	this.onWindowResize = new lime.app.Event();
	this.onWindowMove = new lime.app.Event();
	this.onWindowMinimize = new lime.app.Event();
	this.onWindowLeave = new lime.app.Event();
	this.onWindowFullscreen = new lime.app.Event();
	this.onWindowFocusOut = new lime.app.Event();
	this.onWindowFocusIn = new lime.app.Event();
	this.onWindowEnter = new lime.app.Event();
	this.onWindowDeactivate = new lime.app.Event();
	this.onWindowClose = new lime.app.Event();
	this.onWindowActivate = new lime.app.Event();
	this.onTouchStart = new lime.app.Event();
	this.onTouchMove = new lime.app.Event();
	this.onTouchEnd = new lime.app.Event();
	this.onTextInput = new lime.app.Event();
	this.onTextEdit = new lime.app.Event();
	this.onMouseWheel = new lime.app.Event();
	this.onMouseUp = new lime.app.Event();
	this.onMouseMoveRelative = new lime.app.Event();
	this.onMouseMove = new lime.app.Event();
	this.onMouseDown = new lime.app.Event();
	this.onKeyUp = new lime.app.Event();
	this.onKeyDown = new lime.app.Event();
	this.onGamepadDisconnect = new lime.app.Event();
	this.onGamepadConnect = new lime.app.Event();
	this.onGamepadButtonUp = new lime.app.Event();
	this.onGamepadButtonDown = new lime.app.Event();
	this.onGamepadAxisMove = new lime.app.Event();
	this.config = config;
	this.__width = 0;
	this.__height = 0;
	this.__fullscreen = false;
	this.__x = 0;
	this.__y = 0;
	if(config != null) {
		if(Object.prototype.hasOwnProperty.call(config,"width")) this.__width = config.width;
		if(Object.prototype.hasOwnProperty.call(config,"height")) this.__height = config.height;
		if(Object.prototype.hasOwnProperty.call(config,"fullscreen")) this.__fullscreen = config.fullscreen;
	}
	this.backend = new lime._backend.html5.HTML5Window(this);
};
$hxClasses["lime.ui.Window"] = lime.ui.Window;
lime.ui.Window.__name__ = true;
lime.ui.Window.prototype = {
	close: function() {
		this.backend.close();
	}
	,create: function(application) {
		this.backend.create(application);
		if(this.currentRenderer != null) this.currentRenderer.create();
	}
	,move: function(x,y) {
		this.backend.move(x,y);
		this.__x = x;
		this.__y = y;
	}
	,resize: function(width,height) {
		this.backend.resize(width,height);
		this.__width = width;
		this.__height = height;
	}
	,setIcon: function(image) {
		if(image == null) return;
		this.backend.setIcon(image);
	}
	,get_enableTextEvents: function() {
		return this.backend.getEnableTextEvents();
	}
	,set_enableTextEvents: function(value) {
		return this.backend.setEnableTextEvents(value);
	}
	,get_fullscreen: function() {
		return this.__fullscreen;
	}
	,set_fullscreen: function(value) {
		return this.__fullscreen = this.backend.setFullscreen(value);
	}
	,get_height: function() {
		return this.__height;
	}
	,set_height: function(value) {
		this.resize(this.__width,value);
		return this.__height;
	}
	,get_minimized: function() {
		return this.__minimized;
	}
	,set_minimized: function(value) {
		return this.__minimized = this.backend.setMinimized(value);
	}
	,get_width: function() {
		return this.__width;
	}
	,set_width: function(value) {
		this.resize(value,this.__height);
		return this.__width;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_x: function(value) {
		this.move(value,this.__y);
		return this.__x;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_y: function(value) {
		this.move(this.__x,value);
		return this.__y;
	}
	,__class__: lime.ui.Window
};
lime.utils = {};
lime.utils.ByteArray = function(size) {
	if(size == null) size = 0;
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	if(size > 0) this.allocated = size;
	this.___resizeBuffer(this.allocated);
	this.set_length(this.allocated);
};
$hxClasses["lime.utils.ByteArray"] = lime.utils.ByteArray;
lime.utils.ByteArray.__name__ = true;
lime.utils.ByteArray.fromBytes = function(bytes) {
	var result = new lime.utils.ByteArray();
	result.byteView = new Uint8Array(bytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
};
lime.utils.ByteArray.readFile = function(path) {
	return null;
};
lime.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new lime.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
};
lime.utils.ByteArray.prototype = {
	clear: function() {
		if(this.allocated < 0) this.___resizeBuffer(this.allocated = Std["int"](Math.max(0,this.allocated * 2))); else if(this.allocated > 0) this.___resizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
		this.position = 0;
	}
	,compress: function(algorithm) {
	}
	,deflate: function() {
		this.compress(lime.utils.CompressionAlgorithm.DEFLATE);
	}
	,inflate: function() {
		this.uncompress(lime.utils.CompressionAlgorithm.DEFLATE);
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,readByte: function() {
		var data = this.data;
		return data.getInt8(this.position++);
	}
	,readBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(offset < 0 || length < 0) throw "Read error - Out of bounds";
		if(length == 0) length = this.length - this.position;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = Std["int"](Math.max(lengthToEnsure,bytes.allocated * 2))); else if(bytes.allocated > lengthToEnsure * 2) bytes.___resizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readMultiByte: function(length,charSet) {
		return this.readUTFBytes(length);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c21 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,uncompress: function(algorithm) {
		var bytes = haxe.io.Bytes.ofData(this.byteView);
		var buf = format.tools.Inflate.run(bytes).getData();
		this.byteView = new Uint8Array(buf);
		this.data = new DataView(this.byteView.buffer);
		this.set_length(this.allocated = this.byteView.buffer.byteLength);
	}
	,write_uncheck: function($byte) {
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure * 2) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(bytes.length == 0) return;
		if((function($this) {
			var $r;
			var aNeg = 0 < 0;
			var bNeg = offset < 0;
			$r = aNeg != bNeg?aNeg:0 > offset;
			return $r;
		}(this)) || (function($this) {
			var $r;
			var aNeg1 = 0 < 0;
			var bNeg1 = length < 0;
			$r = aNeg1 != bNeg1?aNeg1:0 > length;
			return $r;
		}(this))) throw "Write error - Out of bounds";
		if((function($this) {
			var $r;
			var $int = length;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) == 0) length = bytes.length;
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure * 2) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position = this.position + length;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure * 2) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeFile: function(path) {
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure * 2) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure * 2) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure * 2) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure * 2) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure * 2) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this.__getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,__fromBytes: function(bytes) {
		this.byteView = new Uint8Array(bytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,__get: function(pos) {
		return this.data.getInt8(pos);
	}
	,__getBuffer: function() {
		return this.data.buffer;
	}
	,__getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,get_endian: function() {
		if(this.littleEndian) return "littleEndian"; else return "bigEndian";
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Std["int"](Math.max(value,this.allocated * 2))); else if(this.allocated > value * 2) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,__class__: lime.utils.ByteArray
};
lime.utils.CompressionAlgorithm = $hxClasses["lime.utils.CompressionAlgorithm"] = { __ename__ : true, __constructs__ : ["DEFLATE","ZLIB","LZMA","GZIP"] };
lime.utils.CompressionAlgorithm.DEFLATE = ["DEFLATE",0];
lime.utils.CompressionAlgorithm.DEFLATE.__enum__ = lime.utils.CompressionAlgorithm;
lime.utils.CompressionAlgorithm.ZLIB = ["ZLIB",1];
lime.utils.CompressionAlgorithm.ZLIB.__enum__ = lime.utils.CompressionAlgorithm;
lime.utils.CompressionAlgorithm.LZMA = ["LZMA",2];
lime.utils.CompressionAlgorithm.LZMA.__enum__ = lime.utils.CompressionAlgorithm;
lime.utils.CompressionAlgorithm.GZIP = ["GZIP",3];
lime.utils.CompressionAlgorithm.GZIP.__enum__ = lime.utils.CompressionAlgorithm;
lime.utils.GLUtils = function() { };
$hxClasses["lime.utils.GLUtils"] = lime.utils.GLUtils;
lime.utils.GLUtils.__name__ = true;
lime.utils.GLUtils.compileShader = function(source,type) {
	var shader = lime.graphics.opengl.GL.context.createShader(type);
	lime.graphics.opengl.GL.context.shaderSource(shader,source);
	lime.graphics.opengl.GL.context.compileShader(shader);
	if(lime.graphics.opengl.GL.context.getShaderParameter(shader,35713) == 0) switch(type) {
	case 35633:
		throw "Error compiling vertex shader";
		break;
	case 35632:
		throw "Error compiling fragment shader";
		break;
	default:
		throw "Error compiling unknown shader type";
	}
	return shader;
};
lime.utils.GLUtils.createProgram = function(vertexSource,fragmentSource) {
	var vertexShader = lime.utils.GLUtils.compileShader(vertexSource,35633);
	var fragmentShader = lime.utils.GLUtils.compileShader(fragmentSource,35632);
	var program = lime.graphics.opengl.GL.context.createProgram();
	lime.graphics.opengl.GL.context.attachShader(program,vertexShader);
	lime.graphics.opengl.GL.context.attachShader(program,fragmentShader);
	lime.graphics.opengl.GL.context.linkProgram(program);
	if(lime.graphics.opengl.GL.context.getProgramParameter(program,35714) == 0) throw "Unable to initialize the shader program.";
	return program;
};
lime.utils.IDataInput = function() { };
$hxClasses["lime.utils.IDataInput"] = lime.utils.IDataInput;
lime.utils.IDataInput.__name__ = true;
lime.utils.IDataInput.prototype = {
	__class__: lime.utils.IDataInput
};
lime.utils.IMemoryRange = function() { };
$hxClasses["lime.utils.IMemoryRange"] = lime.utils.IMemoryRange;
lime.utils.IMemoryRange.__name__ = true;
lime.utils.IMemoryRange.prototype = {
	__class__: lime.utils.IMemoryRange
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = true;
$hxClasses.Array = Array;
Array.__name__ = true;
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var this1;
this1 = new Array(256);
lime.graphics.utils.ImageDataUtil.__alpha16 = this1;
var _g = 0;
while(_g < 256) {
	var i = _g++;
	lime.graphics.utils.ImageDataUtil.__alpha16[i] = i * 65536 / 255 | 0;
}
var this2;
this2 = new Array(510);
lime.graphics.utils.ImageDataUtil.__clamp = this2;
var _g1 = 0;
while(_g1 < 255) {
	var i1 = _g1++;
	lime.graphics.utils.ImageDataUtil.__clamp[i1] = i1;
}
var _g11 = 255;
var _g2 = 511;
while(_g11 < _g2) {
	var i2 = _g11++;
	lime.graphics.utils.ImageDataUtil.__clamp[i2] = 255;
}
de.peote.telnet.PeoteTelnet.WILL = 251;
de.peote.telnet.PeoteTelnet.WONT = 252;
de.peote.telnet.PeoteTelnet.DO = 253;
de.peote.telnet.PeoteTelnet.DONT = 254;
de.peote.telnet.PeoteTelnet.IAC = 255;
de.peote.telnet.PeoteTelnet.SB = 250;
de.peote.telnet.PeoteTelnet.SE = 240;
de.peote.telnet.PeoteTelnet.NOP = 241;
de.peote.telnet.PeoteTelnet.ECHO = 1;
de.peote.telnet.PeoteTelnet.TERMINALTYPE = 24;
de.peote.telnet.PeoteTelnet.EOR = 25;
de.peote.telnet.PeoteTelnet.NAWS = 31;
de.peote.terminal._AnsiParser.ControlCode_Impl_.CSI = 91;
de.peote.terminal._AnsiParser.AnsiCode_Impl_.CUU = HxOverrides.cca("A",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.CUD = HxOverrides.cca("B",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.CUF = HxOverrides.cca("C",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.CUB = HxOverrides.cca("D",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.CNL = HxOverrides.cca("E",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.CPL = HxOverrides.cca("F",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.CHA = HxOverrides.cca("G",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.CUP = HxOverrides.cca("H",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.ED = HxOverrides.cca("J",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.EL = HxOverrides.cca("K",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.IL = HxOverrides.cca("L",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.DL = HxOverrides.cca("M",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.SU = HxOverrides.cca("S",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.SD = HxOverrides.cca("T",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.HVP = HxOverrides.cca("f",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.SGR = HxOverrides.cca("m",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.AUX = HxOverrides.cca("i",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.DSR = HxOverrides.cca("n",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.SCP = HxOverrides.cca("s",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.RCP = HxOverrides.cca("u",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.CHI = HxOverrides.cca("l",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.CSH = HxOverrides.cca("h",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.SKS = HxOverrides.cca("p",0);
de.peote.terminal._AnsiParser.AnsiCode_Impl_.DEL = HxOverrides.cca("P",0);
de.peote.terminal.AnsiParser.Off = 0;
de.peote.terminal.AnsiParser.Start = 1;
de.peote.terminal.AnsiParser.Sequence = 2;
de.peote.terminal.KeyboardMap.keyboardMap = (function($this) {
	var $r;
	var _g = new haxe.ds.StringMap();
	_g.set("de",(function($this) {
		var $r;
		var _g1 = new haxe.ds.IntMap();
		_g1.set(48,["0","=","}"]);
		_g1.set(49,["1","!"]);
		_g1.set(50,["2","\""]);
		_g1.set(51,["3","§"]);
		_g1.set(52,["4","$"]);
		_g1.set(53,["5","%"]);
		_g1.set(54,["6","&"]);
		_g1.set(55,["7","/","{"]);
		_g1.set(56,["8","(","["]);
		_g1.set(57,["9",")","]"]);
		_g1.set(60,["<",">","|"]);
		_g1.set(63,["ß","?","\\"]);
		_g1.set(160,["^"]);
		_g1.set(163,["#","'"]);
		_g1.set(171,["+","*","~"]);
		_g1.set(188,[",",";"]);
		_g1.set(173,["-","_"]);
		_g1.set(190,[".",":"]);
		_g1.set(192,["´","`"]);
		$r = _g1;
		return $r;
	}($this)));
	$r = _g;
	return $r;
}(this));
de.peote.terminal._TermCode.TermCode_Impl_.NUL = 0;
de.peote.terminal._TermCode.TermCode_Impl_.BEL = 7;
de.peote.terminal._TermCode.TermCode_Impl_.BS = 8;
de.peote.terminal._TermCode.TermCode_Impl_.HT = 9;
de.peote.terminal._TermCode.TermCode_Impl_.LF = 10;
de.peote.terminal._TermCode.TermCode_Impl_.VT = 11;
de.peote.terminal._TermCode.TermCode_Impl_.FF = 12;
de.peote.terminal._TermCode.TermCode_Impl_.CR = 13;
de.peote.terminal._TermCode.TermCode_Impl_.ESC = 27;
de.peote.terminal._TermCode.TermCode_Impl_.DEL = 127;
de.peote.view.Buffer.VERTEX_COUNT = 6;
de.peote.view.Program.aPosition = -1;
de.peote.view.Program.uMODELVIEWMATRIX = 0;
de.peote.view.Program.uPROJECTIONMATRIX = 1;
de.peote.view.Program.uIMAGE = 2;
de.peote.view.Program.uMOUSE = 3;
de.peote.view.Program.uRESOLUTION = 4;
de.peote.view.Program.uTIME = 5;
de.peote.view.Program.uZOOM = 6;
de.peote.view.Program.uDELTA = 7;
de.peote.view.Shader.default_vertexShaderSrc = "\tprecision mediump float;\r\n\r\n\t\t// always twice if time dependend\r\n\t\tattribute vec4 aPosition;\r\n\t\tattribute vec2 aTime;\r\n\t\t\r\n\t\tattribute float aZindex;\r\n\t\tattribute vec2 aTexCoord;\r\n\t\t\r\n\t\t#if_RGBA\r\n\t\tattribute vec4 aRGBA;\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#end_RGBA\r\n\r\n\t\tvarying vec2 vTexCoord;\r\n\t\t\r\n\t\tuniform float uTime;\r\n\t\tuniform float uZoom;\r\n\t\tuniform vec2 uResolution;\r\n\t\tuniform vec2 uDelta;\r\n\t\t\r\n\t\tvoid main(void) {\r\n\t\t\t#if_RGBA\r\n\t\t\tvRGBA = 255.0/aRGBA;\r\n\t\t\t#end_RGBA\r\n\t\t\t\r\n\t\t\tvTexCoord = aTexCoord;\r\n\t\t\t\r\n\t\t\tvec2 VertexPosStart = vec2( aPosition ); //vec2 (aPosition.x, aPosition.y);\r\n\t\t\tvec2 VertexPosEnd   = vec2 (aPosition.z, aPosition.w);\r\n\t\t\t\r\n\t\t\tfloat zoom = uZoom;\r\n\t\t\tfloat width = uResolution.x;\r\n\t\t\tfloat height = uResolution.y;\r\n\t\t\tfloat deltaX = floor(uDelta.x);\r\n\t\t\tfloat deltaY = floor(uDelta.y);\r\n\t\t\t\r\n\t\t\tfloat right = width-deltaX*zoom;\r\n\t\t\tfloat left = -deltaX*zoom;\r\n\t\t\tfloat bottom = height-deltaY*zoom;\r\n\t\t\tfloat top = -deltaY * zoom;\r\n\t\t\t\r\n\t\t\tgl_Position = mat4 (\r\n\t\t\t\tvec4(2.0 / (right - left)*zoom, 0.0, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 2.0 / (top - bottom)*zoom, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 0.0, -0.001, 0.0),\r\n\t\t\t\tvec4(-(right + left) / (right - left), -(top + bottom) / (top - bottom), 0.0, 1.0)\r\n\t\t\t)\r\n\t\t\t* vec4 (VertexPosStart + floor( \r\n\t\t\t\t\t\t\t\t(VertexPosEnd - VertexPosStart)\r\n\t\t\t\t\t\t\t\t* max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0))\r\n\t\t\t\t\t\t\t\t* zoom) / zoom\r\n\t\t\t\t, aZindex ,1.0);\r\n\t\t}\r\n\t";
de.peote.view.Shader.default_fragmentShaderSrc = "\tprecision mediump float;\r\n\t\tvarying vec2 vTexCoord;\r\n\t\tuniform sampler2D uImage;\r\n\t\t\r\n\t\tuniform vec2 uMouse, uResolution;\r\n\t\t\r\n\t\tvoid main(void)\r\n\t\t{\r\n\t\t\tvec4 texel = texture2D(uImage, vTexCoord / %MAX_TEXTURE_SIZE%);\r\n\t\t\tif(texel.a < 0.5) discard;\r\n\t\t\tgl_FragColor = texel;\r\n\t\t}\r\n\t";
de.peote.view.displaylist.Displaylist.ANIM = 1;
de.peote.view.displaylist.Displaylist.TREE = 2;
de.peote.view.displaylist.Displaylist.ZINDEX = 4;
de.peote.view.displaylist.Displaylist.RGBA = 8;
de.peote.view.displaylist.Displaylist.ROTATION = 16;
de.peote.view.displaylist.Displaylist.SCALE = 32;
de.peote.view.displaylist.Displaylist.TILE = 64;
de.peote.view.element.BufferElementSimple.VERTEX_COUNT = 6;
de.peote.view.element.BufferElementSimple.ANIM_PARAM_SIZE = 8;
de.peote.view.element.BufferElementSimple.PARAM_SIZE = 4;
de.peote.view.element.BufferElementSimple.TIME_OFFSET = de.peote.view.element.BufferElementSimple.ANIM_PARAM_SIZE;
de.peote.view.element.BufferElementSimple.PARAM_OFFSET = de.peote.view.element.BufferElementSimple.TIME_OFFSET + 8;
de.peote.view.element.BufferElementSimple.TEX_OFFSET = de.peote.view.element.BufferElementSimple.PARAM_OFFSET + de.peote.view.element.BufferElementSimple.PARAM_SIZE;
de.peote.view.element.BufferElementSimple.VERTEX_STRIDE = de.peote.view.element.BufferElementSimple.TEX_OFFSET + 4;
format.tools._InflateImpl.Window.SIZE = 32768;
format.tools._InflateImpl.Window.BUFSIZE = 65536;
format.tools.InflateImpl.LEN_EXTRA_BITS_TBL = [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,-1,-1];
format.tools.InflateImpl.LEN_BASE_VAL_TBL = [3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258];
format.tools.InflateImpl.DIST_EXTRA_BITS_TBL = [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,-1,-1];
format.tools.InflateImpl.DIST_BASE_VAL_TBL = [1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];
format.tools.InflateImpl.CODE_LENGTHS_POS = [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
js.Boot.__toStr = {}.toString;
lime.Assets.cache = new lime.AssetCache();
lime.Assets.libraries = new haxe.ds.StringMap();
lime.Assets.initialized = false;
lime._Assets.AssetType_Impl_.BINARY = "BINARY";
lime._Assets.AssetType_Impl_.FONT = "FONT";
lime._Assets.AssetType_Impl_.IMAGE = "IMAGE";
lime._Assets.AssetType_Impl_.MUSIC = "MUSIC";
lime._Assets.AssetType_Impl_.SOUND = "SOUND";
lime._Assets.AssetType_Impl_.TEMPLATE = "TEMPLATE";
lime._Assets.AssetType_Impl_.TEXT = "TEXT";
lime.app.Preloader.images = new haxe.ds.StringMap();
lime.app.Preloader.loaders = new haxe.ds.StringMap();
lime.audio.openal.AL.NONE = 0;
lime.audio.openal.AL.FALSE = 0;
lime.audio.openal.AL.TRUE = 1;
lime.audio.openal.AL.SOURCE_RELATIVE = 514;
lime.audio.openal.AL.CONE_INNER_ANGLE = 4097;
lime.audio.openal.AL.CONE_OUTER_ANGLE = 4098;
lime.audio.openal.AL.PITCH = 4099;
lime.audio.openal.AL.POSITION = 4100;
lime.audio.openal.AL.DIRECTION = 4101;
lime.audio.openal.AL.VELOCITY = 4102;
lime.audio.openal.AL.LOOPING = 4103;
lime.audio.openal.AL.BUFFER = 4105;
lime.audio.openal.AL.GAIN = 4106;
lime.audio.openal.AL.MIN_GAIN = 4109;
lime.audio.openal.AL.MAX_GAIN = 4110;
lime.audio.openal.AL.ORIENTATION = 4111;
lime.audio.openal.AL.SOURCE_STATE = 4112;
lime.audio.openal.AL.INITIAL = 4113;
lime.audio.openal.AL.PLAYING = 4114;
lime.audio.openal.AL.PAUSED = 4115;
lime.audio.openal.AL.STOPPED = 4116;
lime.audio.openal.AL.BUFFERS_QUEUED = 4117;
lime.audio.openal.AL.BUFFERS_PROCESSED = 4118;
lime.audio.openal.AL.REFERENCE_DISTANCE = 4128;
lime.audio.openal.AL.ROLLOFF_FACTOR = 4129;
lime.audio.openal.AL.CONE_OUTER_GAIN = 4130;
lime.audio.openal.AL.MAX_DISTANCE = 4131;
lime.audio.openal.AL.SEC_OFFSET = 4132;
lime.audio.openal.AL.SAMPLE_OFFSET = 4133;
lime.audio.openal.AL.BYTE_OFFSET = 4134;
lime.audio.openal.AL.SOURCE_TYPE = 4135;
lime.audio.openal.AL.STATIC = 4136;
lime.audio.openal.AL.STREAMING = 4137;
lime.audio.openal.AL.UNDETERMINED = 4144;
lime.audio.openal.AL.FORMAT_MONO8 = 4352;
lime.audio.openal.AL.FORMAT_MONO16 = 4353;
lime.audio.openal.AL.FORMAT_STEREO8 = 4354;
lime.audio.openal.AL.FORMAT_STEREO16 = 4355;
lime.audio.openal.AL.FREQUENCY = 8193;
lime.audio.openal.AL.BITS = 8194;
lime.audio.openal.AL.CHANNELS = 8195;
lime.audio.openal.AL.SIZE = 8196;
lime.audio.openal.AL.NO_ERROR = 0;
lime.audio.openal.AL.INVALID_NAME = 40961;
lime.audio.openal.AL.INVALID_ENUM = 40962;
lime.audio.openal.AL.INVALID_VALUE = 40963;
lime.audio.openal.AL.INVALID_OPERATION = 40964;
lime.audio.openal.AL.OUT_OF_MEMORY = 40965;
lime.audio.openal.AL.VENDOR = 45057;
lime.audio.openal.AL.VERSION = 45058;
lime.audio.openal.AL.RENDERER = 45059;
lime.audio.openal.AL.EXTENSIONS = 45060;
lime.audio.openal.AL.DOPPLER_FACTOR = 49152;
lime.audio.openal.AL.SPEED_OF_SOUND = 49155;
lime.audio.openal.AL.DOPPLER_VELOCITY = 49153;
lime.audio.openal.AL.DISTANCE_MODEL = 53248;
lime.audio.openal.AL.INVERSE_DISTANCE = 53249;
lime.audio.openal.AL.INVERSE_DISTANCE_CLAMPED = 53250;
lime.audio.openal.AL.LINEAR_DISTANCE = 53251;
lime.audio.openal.AL.LINEAR_DISTANCE_CLAMPED = 53252;
lime.audio.openal.AL.EXPONENT_DISTANCE = 53253;
lime.audio.openal.AL.EXPONENT_DISTANCE_CLAMPED = 53254;
lime.audio.openal.ALC.FALSE = 0;
lime.audio.openal.ALC.TRUE = 1;
lime.audio.openal.ALC.FREQUENCY = 4103;
lime.audio.openal.ALC.REFRESH = 4104;
lime.audio.openal.ALC.SYNC = 4105;
lime.audio.openal.ALC.MONO_SOURCES = 4112;
lime.audio.openal.ALC.STEREO_SOURCES = 4113;
lime.audio.openal.ALC.NO_ERROR = 0;
lime.audio.openal.ALC.INVALID_DEVICE = 40961;
lime.audio.openal.ALC.INVALID_CONTEXT = 40962;
lime.audio.openal.ALC.INVALID_ENUM = 40963;
lime.audio.openal.ALC.INVALID_VALUE = 40964;
lime.audio.openal.ALC.OUT_OF_MEMORY = 40965;
lime.audio.openal.ALC.ATTRIBUTES_SIZE = 4098;
lime.audio.openal.ALC.ALL_ATTRIBUTES = 4099;
lime.audio.openal.ALC.DEFAULT_DEVICE_SPECIFIER = 4100;
lime.audio.openal.ALC.DEVICE_SPECIFIER = 4101;
lime.audio.openal.ALC.EXTENSIONS = 4102;
lime.audio.openal.ALC.ENUMERATE_ALL_EXT = 1;
lime.audio.openal.ALC.DEFAULT_ALL_DEVICES_SPECIFIER = 4114;
lime.audio.openal.ALC.ALL_DEVICES_SPECIFIER = 4115;
lime.graphics.Image.__base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
lime.graphics._PixelFormat.PixelFormat_Impl_.RGBA = 0;
lime.graphics._PixelFormat.PixelFormat_Impl_.ARGB = 1;
lime.graphics._PixelFormat.PixelFormat_Impl_.BGRA = 2;
lime.graphics.cairo._CairoAntialias.CairoAntialias_Impl_.DEFAULT = 0;
lime.graphics.cairo._CairoAntialias.CairoAntialias_Impl_.NONE = 1;
lime.graphics.cairo._CairoAntialias.CairoAntialias_Impl_.GRAY = 2;
lime.graphics.cairo._CairoAntialias.CairoAntialias_Impl_.SUBPIXEL = 3;
lime.graphics.cairo._CairoAntialias.CairoAntialias_Impl_.FAST = 4;
lime.graphics.cairo._CairoAntialias.CairoAntialias_Impl_.GOOD = 5;
lime.graphics.cairo._CairoAntialias.CairoAntialias_Impl_.BEST = 6;
lime.graphics.cairo._CairoContent.CairoContent_Impl_.COLOR = 4096;
lime.graphics.cairo._CairoContent.CairoContent_Impl_.ALPHA = 8192;
lime.graphics.cairo._CairoContent.CairoContent_Impl_.COLOR_ALPHA = 12288;
lime.graphics.cairo._CairoExtend.CairoExtend_Impl_.NONE = 0;
lime.graphics.cairo._CairoExtend.CairoExtend_Impl_.REPEAT = 1;
lime.graphics.cairo._CairoExtend.CairoExtend_Impl_.REFLECT = 2;
lime.graphics.cairo._CairoExtend.CairoExtend_Impl_.PAD = 3;
lime.graphics.cairo._CairoFillRule.CairoFillRule_Impl_.WINDING = 0;
lime.graphics.cairo._CairoFillRule.CairoFillRule_Impl_.EVEN_ODD = 1;
lime.graphics.cairo._CairoFilter.CairoFilter_Impl_.FAST = 0;
lime.graphics.cairo._CairoFilter.CairoFilter_Impl_.GOOD = 1;
lime.graphics.cairo._CairoFilter.CairoFilter_Impl_.BEST = 2;
lime.graphics.cairo._CairoFilter.CairoFilter_Impl_.NEAREST = 3;
lime.graphics.cairo._CairoFilter.CairoFilter_Impl_.BILINEAR = 4;
lime.graphics.cairo._CairoFilter.CairoFilter_Impl_.GAUSSIAN = 5;
lime.graphics.cairo._CairoFormat.CairoFormat_Impl_.INVALID = -1;
lime.graphics.cairo._CairoFormat.CairoFormat_Impl_.ARGB32 = 0;
lime.graphics.cairo._CairoFormat.CairoFormat_Impl_.RGB24 = 1;
lime.graphics.cairo._CairoFormat.CairoFormat_Impl_.A8 = 2;
lime.graphics.cairo._CairoFormat.CairoFormat_Impl_.A1 = 3;
lime.graphics.cairo._CairoFormat.CairoFormat_Impl_.RGB16_565 = 4;
lime.graphics.cairo._CairoFormat.CairoFormat_Impl_.RGB30 = 5;
lime.graphics.cairo._CairoLineCap.CairoLineCap_Impl_.BUTT = 0;
lime.graphics.cairo._CairoLineCap.CairoLineCap_Impl_.ROUND = 1;
lime.graphics.cairo._CairoLineCap.CairoLineCap_Impl_.SQUARE = 2;
lime.graphics.cairo._CairoLineJoin.CairoLineJoin_Impl_.MITER = 0;
lime.graphics.cairo._CairoLineJoin.CairoLineJoin_Impl_.ROUND = 1;
lime.graphics.cairo._CairoLineJoin.CairoLineJoin_Impl_.BEVEL = 2;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.CLEAR = 0;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.SOURCE = 1;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.OVER = 2;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.IN = 3;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.OUT = 4;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.ATOP = 5;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.DEST = 6;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.DEST_OVER = 7;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.DEST_IN = 8;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.DEST_OUT = 9;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.DEST_ATOP = 10;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.XOR = 11;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.ADD = 12;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.SATURATE = 13;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.MULTIPLY = 14;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.SCREEN = 15;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.OVERLAY = 16;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.DARKEN = 17;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.LIGHTEN = 18;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.COLOR_DODGE = 19;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.COLOR_BURN = 20;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.HARD_LIGHT = 21;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.SOFT_LIGHT = 22;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.DIFFERENCE = 23;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.EXCLUSION = 24;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.HSL_HUE = 25;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.HSL_SATURATION = 26;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.HSL_COLOR = 27;
lime.graphics.cairo._CairoOperator.CairoOperator_Impl_.HSL_LUMINOSITY = 28;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.SUCCESS = 0;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.NO_MEMORY = 1;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_RESTORE = 2;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_POP_GROUP = 3;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.NO_CURRENT_POINT = 4;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_MATRIX = 5;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_STATUS = 6;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.NULL_POINTER = 7;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_STRING = 8;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_PATH_DATA = 9;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.READ_ERROR = 10;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.WRITE_ERROR = 11;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.SURFACE_FINISHED = 12;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.SURFACE_TYPE_MISMATCH = 13;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.PATTERN_TYPE_MISMATCH = 14;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_CONTENT = 15;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_FORMAT = 16;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_VISUAL = 17;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.FILE_NOT_FOUND = 18;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_DASH = 19;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_DSC_COMMENT = 20;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_INDEX = 21;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.CLIP_NOT_REPRESENTABLE = 22;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.TEMP_FILE_ERROR = 23;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_STRIDE = 24;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.FONT_TYPE_MISMATCH = 25;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.USER_FONT_IMMUTABLE = 26;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.USER_FONT_ERROR = 27;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.NEGATIVE_COUNT = 28;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_CLUSTERS = 29;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_SLANT = 30;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_WEIGHT = 31;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_SIZE = 32;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.USER_FONT_NOT_IMPLEMENTED = 33;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.DEVICE_TYPE_MISMATCH = 34;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.DEVICE_ERROR = 35;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.INVALID_MESH_CONSTRUCTION = 36;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.DEVICE_FINISHED = 37;
lime.graphics.cairo._CairoStatus.CairoStatus_Impl_.JBIG2_GLOBAL_MISSING = 38;
lime.graphics.opengl.GL.DEPTH_BUFFER_BIT = 256;
lime.graphics.opengl.GL.STENCIL_BUFFER_BIT = 1024;
lime.graphics.opengl.GL.COLOR_BUFFER_BIT = 16384;
lime.graphics.opengl.GL.POINTS = 0;
lime.graphics.opengl.GL.LINES = 1;
lime.graphics.opengl.GL.LINE_LOOP = 2;
lime.graphics.opengl.GL.LINE_STRIP = 3;
lime.graphics.opengl.GL.TRIANGLES = 4;
lime.graphics.opengl.GL.TRIANGLE_STRIP = 5;
lime.graphics.opengl.GL.TRIANGLE_FAN = 6;
lime.graphics.opengl.GL.ZERO = 0;
lime.graphics.opengl.GL.ONE = 1;
lime.graphics.opengl.GL.SRC_COLOR = 768;
lime.graphics.opengl.GL.ONE_MINUS_SRC_COLOR = 769;
lime.graphics.opengl.GL.SRC_ALPHA = 770;
lime.graphics.opengl.GL.ONE_MINUS_SRC_ALPHA = 771;
lime.graphics.opengl.GL.DST_ALPHA = 772;
lime.graphics.opengl.GL.ONE_MINUS_DST_ALPHA = 773;
lime.graphics.opengl.GL.DST_COLOR = 774;
lime.graphics.opengl.GL.ONE_MINUS_DST_COLOR = 775;
lime.graphics.opengl.GL.SRC_ALPHA_SATURATE = 776;
lime.graphics.opengl.GL.FUNC_ADD = 32774;
lime.graphics.opengl.GL.BLEND_EQUATION = 32777;
lime.graphics.opengl.GL.BLEND_EQUATION_RGB = 32777;
lime.graphics.opengl.GL.BLEND_EQUATION_ALPHA = 34877;
lime.graphics.opengl.GL.FUNC_SUBTRACT = 32778;
lime.graphics.opengl.GL.FUNC_REVERSE_SUBTRACT = 32779;
lime.graphics.opengl.GL.BLEND_DST_RGB = 32968;
lime.graphics.opengl.GL.BLEND_SRC_RGB = 32969;
lime.graphics.opengl.GL.BLEND_DST_ALPHA = 32970;
lime.graphics.opengl.GL.BLEND_SRC_ALPHA = 32971;
lime.graphics.opengl.GL.CONSTANT_COLOR = 32769;
lime.graphics.opengl.GL.ONE_MINUS_CONSTANT_COLOR = 32770;
lime.graphics.opengl.GL.CONSTANT_ALPHA = 32771;
lime.graphics.opengl.GL.ONE_MINUS_CONSTANT_ALPHA = 32772;
lime.graphics.opengl.GL.BLEND_COLOR = 32773;
lime.graphics.opengl.GL.ARRAY_BUFFER = 34962;
lime.graphics.opengl.GL.ELEMENT_ARRAY_BUFFER = 34963;
lime.graphics.opengl.GL.ARRAY_BUFFER_BINDING = 34964;
lime.graphics.opengl.GL.ELEMENT_ARRAY_BUFFER_BINDING = 34965;
lime.graphics.opengl.GL.STREAM_DRAW = 35040;
lime.graphics.opengl.GL.STATIC_DRAW = 35044;
lime.graphics.opengl.GL.DYNAMIC_DRAW = 35048;
lime.graphics.opengl.GL.BUFFER_SIZE = 34660;
lime.graphics.opengl.GL.BUFFER_USAGE = 34661;
lime.graphics.opengl.GL.CURRENT_VERTEX_ATTRIB = 34342;
lime.graphics.opengl.GL.FRONT = 1028;
lime.graphics.opengl.GL.BACK = 1029;
lime.graphics.opengl.GL.FRONT_AND_BACK = 1032;
lime.graphics.opengl.GL.CULL_FACE = 2884;
lime.graphics.opengl.GL.BLEND = 3042;
lime.graphics.opengl.GL.DITHER = 3024;
lime.graphics.opengl.GL.STENCIL_TEST = 2960;
lime.graphics.opengl.GL.DEPTH_TEST = 2929;
lime.graphics.opengl.GL.SCISSOR_TEST = 3089;
lime.graphics.opengl.GL.POLYGON_OFFSET_FILL = 32823;
lime.graphics.opengl.GL.SAMPLE_ALPHA_TO_COVERAGE = 32926;
lime.graphics.opengl.GL.SAMPLE_COVERAGE = 32928;
lime.graphics.opengl.GL.NO_ERROR = 0;
lime.graphics.opengl.GL.INVALID_ENUM = 1280;
lime.graphics.opengl.GL.INVALID_VALUE = 1281;
lime.graphics.opengl.GL.INVALID_OPERATION = 1282;
lime.graphics.opengl.GL.OUT_OF_MEMORY = 1285;
lime.graphics.opengl.GL.CW = 2304;
lime.graphics.opengl.GL.CCW = 2305;
lime.graphics.opengl.GL.LINE_WIDTH = 2849;
lime.graphics.opengl.GL.ALIASED_POINT_SIZE_RANGE = 33901;
lime.graphics.opengl.GL.ALIASED_LINE_WIDTH_RANGE = 33902;
lime.graphics.opengl.GL.CULL_FACE_MODE = 2885;
lime.graphics.opengl.GL.FRONT_FACE = 2886;
lime.graphics.opengl.GL.DEPTH_RANGE = 2928;
lime.graphics.opengl.GL.DEPTH_WRITEMASK = 2930;
lime.graphics.opengl.GL.DEPTH_CLEAR_VALUE = 2931;
lime.graphics.opengl.GL.DEPTH_FUNC = 2932;
lime.graphics.opengl.GL.STENCIL_CLEAR_VALUE = 2961;
lime.graphics.opengl.GL.STENCIL_FUNC = 2962;
lime.graphics.opengl.GL.STENCIL_FAIL = 2964;
lime.graphics.opengl.GL.STENCIL_PASS_DEPTH_FAIL = 2965;
lime.graphics.opengl.GL.STENCIL_PASS_DEPTH_PASS = 2966;
lime.graphics.opengl.GL.STENCIL_REF = 2967;
lime.graphics.opengl.GL.STENCIL_VALUE_MASK = 2963;
lime.graphics.opengl.GL.STENCIL_WRITEMASK = 2968;
lime.graphics.opengl.GL.STENCIL_BACK_FUNC = 34816;
lime.graphics.opengl.GL.STENCIL_BACK_FAIL = 34817;
lime.graphics.opengl.GL.STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
lime.graphics.opengl.GL.STENCIL_BACK_PASS_DEPTH_PASS = 34819;
lime.graphics.opengl.GL.STENCIL_BACK_REF = 36003;
lime.graphics.opengl.GL.STENCIL_BACK_VALUE_MASK = 36004;
lime.graphics.opengl.GL.STENCIL_BACK_WRITEMASK = 36005;
lime.graphics.opengl.GL.VIEWPORT = 2978;
lime.graphics.opengl.GL.SCISSOR_BOX = 3088;
lime.graphics.opengl.GL.COLOR_CLEAR_VALUE = 3106;
lime.graphics.opengl.GL.COLOR_WRITEMASK = 3107;
lime.graphics.opengl.GL.UNPACK_ALIGNMENT = 3317;
lime.graphics.opengl.GL.PACK_ALIGNMENT = 3333;
lime.graphics.opengl.GL.MAX_TEXTURE_SIZE = 3379;
lime.graphics.opengl.GL.MAX_VIEWPORT_DIMS = 3386;
lime.graphics.opengl.GL.SUBPIXEL_BITS = 3408;
lime.graphics.opengl.GL.RED_BITS = 3410;
lime.graphics.opengl.GL.GREEN_BITS = 3411;
lime.graphics.opengl.GL.BLUE_BITS = 3412;
lime.graphics.opengl.GL.ALPHA_BITS = 3413;
lime.graphics.opengl.GL.DEPTH_BITS = 3414;
lime.graphics.opengl.GL.STENCIL_BITS = 3415;
lime.graphics.opengl.GL.POLYGON_OFFSET_UNITS = 10752;
lime.graphics.opengl.GL.POLYGON_OFFSET_FACTOR = 32824;
lime.graphics.opengl.GL.TEXTURE_BINDING_2D = 32873;
lime.graphics.opengl.GL.SAMPLE_BUFFERS = 32936;
lime.graphics.opengl.GL.SAMPLES = 32937;
lime.graphics.opengl.GL.SAMPLE_COVERAGE_VALUE = 32938;
lime.graphics.opengl.GL.SAMPLE_COVERAGE_INVERT = 32939;
lime.graphics.opengl.GL.COMPRESSED_TEXTURE_FORMATS = 34467;
lime.graphics.opengl.GL.DONT_CARE = 4352;
lime.graphics.opengl.GL.FASTEST = 4353;
lime.graphics.opengl.GL.NICEST = 4354;
lime.graphics.opengl.GL.GENERATE_MIPMAP_HINT = 33170;
lime.graphics.opengl.GL.BYTE = 5120;
lime.graphics.opengl.GL.UNSIGNED_BYTE = 5121;
lime.graphics.opengl.GL.SHORT = 5122;
lime.graphics.opengl.GL.UNSIGNED_SHORT = 5123;
lime.graphics.opengl.GL.INT = 5124;
lime.graphics.opengl.GL.UNSIGNED_INT = 5125;
lime.graphics.opengl.GL.FLOAT = 5126;
lime.graphics.opengl.GL.DEPTH_COMPONENT = 6402;
lime.graphics.opengl.GL.ALPHA = 6406;
lime.graphics.opengl.GL.RGB = 6407;
lime.graphics.opengl.GL.RGBA = 6408;
lime.graphics.opengl.GL.LUMINANCE = 6409;
lime.graphics.opengl.GL.LUMINANCE_ALPHA = 6410;
lime.graphics.opengl.GL.UNSIGNED_SHORT_4_4_4_4 = 32819;
lime.graphics.opengl.GL.UNSIGNED_SHORT_5_5_5_1 = 32820;
lime.graphics.opengl.GL.UNSIGNED_SHORT_5_6_5 = 33635;
lime.graphics.opengl.GL.FRAGMENT_SHADER = 35632;
lime.graphics.opengl.GL.VERTEX_SHADER = 35633;
lime.graphics.opengl.GL.MAX_VERTEX_ATTRIBS = 34921;
lime.graphics.opengl.GL.MAX_VERTEX_UNIFORM_VECTORS = 36347;
lime.graphics.opengl.GL.MAX_VARYING_VECTORS = 36348;
lime.graphics.opengl.GL.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
lime.graphics.opengl.GL.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
lime.graphics.opengl.GL.MAX_TEXTURE_IMAGE_UNITS = 34930;
lime.graphics.opengl.GL.MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
lime.graphics.opengl.GL.SHADER_TYPE = 35663;
lime.graphics.opengl.GL.DELETE_STATUS = 35712;
lime.graphics.opengl.GL.LINK_STATUS = 35714;
lime.graphics.opengl.GL.VALIDATE_STATUS = 35715;
lime.graphics.opengl.GL.ATTACHED_SHADERS = 35717;
lime.graphics.opengl.GL.ACTIVE_UNIFORMS = 35718;
lime.graphics.opengl.GL.ACTIVE_ATTRIBUTES = 35721;
lime.graphics.opengl.GL.SHADING_LANGUAGE_VERSION = 35724;
lime.graphics.opengl.GL.CURRENT_PROGRAM = 35725;
lime.graphics.opengl.GL.NEVER = 512;
lime.graphics.opengl.GL.LESS = 513;
lime.graphics.opengl.GL.EQUAL = 514;
lime.graphics.opengl.GL.LEQUAL = 515;
lime.graphics.opengl.GL.GREATER = 516;
lime.graphics.opengl.GL.NOTEQUAL = 517;
lime.graphics.opengl.GL.GEQUAL = 518;
lime.graphics.opengl.GL.ALWAYS = 519;
lime.graphics.opengl.GL.KEEP = 7680;
lime.graphics.opengl.GL.REPLACE = 7681;
lime.graphics.opengl.GL.INCR = 7682;
lime.graphics.opengl.GL.DECR = 7683;
lime.graphics.opengl.GL.INVERT = 5386;
lime.graphics.opengl.GL.INCR_WRAP = 34055;
lime.graphics.opengl.GL.DECR_WRAP = 34056;
lime.graphics.opengl.GL.VENDOR = 7936;
lime.graphics.opengl.GL.RENDERER = 7937;
lime.graphics.opengl.GL.VERSION = 7938;
lime.graphics.opengl.GL.NEAREST = 9728;
lime.graphics.opengl.GL.LINEAR = 9729;
lime.graphics.opengl.GL.NEAREST_MIPMAP_NEAREST = 9984;
lime.graphics.opengl.GL.LINEAR_MIPMAP_NEAREST = 9985;
lime.graphics.opengl.GL.NEAREST_MIPMAP_LINEAR = 9986;
lime.graphics.opengl.GL.LINEAR_MIPMAP_LINEAR = 9987;
lime.graphics.opengl.GL.TEXTURE_MAG_FILTER = 10240;
lime.graphics.opengl.GL.TEXTURE_MIN_FILTER = 10241;
lime.graphics.opengl.GL.TEXTURE_WRAP_S = 10242;
lime.graphics.opengl.GL.TEXTURE_WRAP_T = 10243;
lime.graphics.opengl.GL.TEXTURE_2D = 3553;
lime.graphics.opengl.GL.TEXTURE = 5890;
lime.graphics.opengl.GL.TEXTURE_CUBE_MAP = 34067;
lime.graphics.opengl.GL.TEXTURE_BINDING_CUBE_MAP = 34068;
lime.graphics.opengl.GL.TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
lime.graphics.opengl.GL.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
lime.graphics.opengl.GL.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
lime.graphics.opengl.GL.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
lime.graphics.opengl.GL.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
lime.graphics.opengl.GL.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
lime.graphics.opengl.GL.MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
lime.graphics.opengl.GL.TEXTURE0 = 33984;
lime.graphics.opengl.GL.TEXTURE1 = 33985;
lime.graphics.opengl.GL.TEXTURE2 = 33986;
lime.graphics.opengl.GL.TEXTURE3 = 33987;
lime.graphics.opengl.GL.TEXTURE4 = 33988;
lime.graphics.opengl.GL.TEXTURE5 = 33989;
lime.graphics.opengl.GL.TEXTURE6 = 33990;
lime.graphics.opengl.GL.TEXTURE7 = 33991;
lime.graphics.opengl.GL.TEXTURE8 = 33992;
lime.graphics.opengl.GL.TEXTURE9 = 33993;
lime.graphics.opengl.GL.TEXTURE10 = 33994;
lime.graphics.opengl.GL.TEXTURE11 = 33995;
lime.graphics.opengl.GL.TEXTURE12 = 33996;
lime.graphics.opengl.GL.TEXTURE13 = 33997;
lime.graphics.opengl.GL.TEXTURE14 = 33998;
lime.graphics.opengl.GL.TEXTURE15 = 33999;
lime.graphics.opengl.GL.TEXTURE16 = 34000;
lime.graphics.opengl.GL.TEXTURE17 = 34001;
lime.graphics.opengl.GL.TEXTURE18 = 34002;
lime.graphics.opengl.GL.TEXTURE19 = 34003;
lime.graphics.opengl.GL.TEXTURE20 = 34004;
lime.graphics.opengl.GL.TEXTURE21 = 34005;
lime.graphics.opengl.GL.TEXTURE22 = 34006;
lime.graphics.opengl.GL.TEXTURE23 = 34007;
lime.graphics.opengl.GL.TEXTURE24 = 34008;
lime.graphics.opengl.GL.TEXTURE25 = 34009;
lime.graphics.opengl.GL.TEXTURE26 = 34010;
lime.graphics.opengl.GL.TEXTURE27 = 34011;
lime.graphics.opengl.GL.TEXTURE28 = 34012;
lime.graphics.opengl.GL.TEXTURE29 = 34013;
lime.graphics.opengl.GL.TEXTURE30 = 34014;
lime.graphics.opengl.GL.TEXTURE31 = 34015;
lime.graphics.opengl.GL.ACTIVE_TEXTURE = 34016;
lime.graphics.opengl.GL.REPEAT = 10497;
lime.graphics.opengl.GL.CLAMP_TO_EDGE = 33071;
lime.graphics.opengl.GL.MIRRORED_REPEAT = 33648;
lime.graphics.opengl.GL.FLOAT_VEC2 = 35664;
lime.graphics.opengl.GL.FLOAT_VEC3 = 35665;
lime.graphics.opengl.GL.FLOAT_VEC4 = 35666;
lime.graphics.opengl.GL.INT_VEC2 = 35667;
lime.graphics.opengl.GL.INT_VEC3 = 35668;
lime.graphics.opengl.GL.INT_VEC4 = 35669;
lime.graphics.opengl.GL.BOOL = 35670;
lime.graphics.opengl.GL.BOOL_VEC2 = 35671;
lime.graphics.opengl.GL.BOOL_VEC3 = 35672;
lime.graphics.opengl.GL.BOOL_VEC4 = 35673;
lime.graphics.opengl.GL.FLOAT_MAT2 = 35674;
lime.graphics.opengl.GL.FLOAT_MAT3 = 35675;
lime.graphics.opengl.GL.FLOAT_MAT4 = 35676;
lime.graphics.opengl.GL.SAMPLER_2D = 35678;
lime.graphics.opengl.GL.SAMPLER_CUBE = 35680;
lime.graphics.opengl.GL.VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
lime.graphics.opengl.GL.VERTEX_ATTRIB_ARRAY_SIZE = 34339;
lime.graphics.opengl.GL.VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
lime.graphics.opengl.GL.VERTEX_ATTRIB_ARRAY_TYPE = 34341;
lime.graphics.opengl.GL.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
lime.graphics.opengl.GL.VERTEX_ATTRIB_ARRAY_POINTER = 34373;
lime.graphics.opengl.GL.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
lime.graphics.opengl.GL.VERTEX_PROGRAM_POINT_SIZE = 34370;
lime.graphics.opengl.GL.POINT_SPRITE = 34913;
lime.graphics.opengl.GL.COMPILE_STATUS = 35713;
lime.graphics.opengl.GL.LOW_FLOAT = 36336;
lime.graphics.opengl.GL.MEDIUM_FLOAT = 36337;
lime.graphics.opengl.GL.HIGH_FLOAT = 36338;
lime.graphics.opengl.GL.LOW_INT = 36339;
lime.graphics.opengl.GL.MEDIUM_INT = 36340;
lime.graphics.opengl.GL.HIGH_INT = 36341;
lime.graphics.opengl.GL.FRAMEBUFFER = 36160;
lime.graphics.opengl.GL.RENDERBUFFER = 36161;
lime.graphics.opengl.GL.RGBA4 = 32854;
lime.graphics.opengl.GL.RGB5_A1 = 32855;
lime.graphics.opengl.GL.RGB565 = 36194;
lime.graphics.opengl.GL.DEPTH_COMPONENT16 = 33189;
lime.graphics.opengl.GL.STENCIL_INDEX = 6401;
lime.graphics.opengl.GL.STENCIL_INDEX8 = 36168;
lime.graphics.opengl.GL.DEPTH_STENCIL = 34041;
lime.graphics.opengl.GL.RENDERBUFFER_WIDTH = 36162;
lime.graphics.opengl.GL.RENDERBUFFER_HEIGHT = 36163;
lime.graphics.opengl.GL.RENDERBUFFER_INTERNAL_FORMAT = 36164;
lime.graphics.opengl.GL.RENDERBUFFER_RED_SIZE = 36176;
lime.graphics.opengl.GL.RENDERBUFFER_GREEN_SIZE = 36177;
lime.graphics.opengl.GL.RENDERBUFFER_BLUE_SIZE = 36178;
lime.graphics.opengl.GL.RENDERBUFFER_ALPHA_SIZE = 36179;
lime.graphics.opengl.GL.RENDERBUFFER_DEPTH_SIZE = 36180;
lime.graphics.opengl.GL.RENDERBUFFER_STENCIL_SIZE = 36181;
lime.graphics.opengl.GL.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
lime.graphics.opengl.GL.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
lime.graphics.opengl.GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
lime.graphics.opengl.GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
lime.graphics.opengl.GL.COLOR_ATTACHMENT0 = 36064;
lime.graphics.opengl.GL.DEPTH_ATTACHMENT = 36096;
lime.graphics.opengl.GL.STENCIL_ATTACHMENT = 36128;
lime.graphics.opengl.GL.DEPTH_STENCIL_ATTACHMENT = 33306;
lime.graphics.opengl.GL.NONE = 0;
lime.graphics.opengl.GL.FRAMEBUFFER_COMPLETE = 36053;
lime.graphics.opengl.GL.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
lime.graphics.opengl.GL.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
lime.graphics.opengl.GL.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
lime.graphics.opengl.GL.FRAMEBUFFER_UNSUPPORTED = 36061;
lime.graphics.opengl.GL.FRAMEBUFFER_BINDING = 36006;
lime.graphics.opengl.GL.RENDERBUFFER_BINDING = 36007;
lime.graphics.opengl.GL.MAX_RENDERBUFFER_SIZE = 34024;
lime.graphics.opengl.GL.INVALID_FRAMEBUFFER_OPERATION = 1286;
lime.graphics.opengl.GL.UNPACK_FLIP_Y_WEBGL = 37440;
lime.graphics.opengl.GL.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
lime.graphics.opengl.GL.CONTEXT_LOST_WEBGL = 37442;
lime.graphics.opengl.GL.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443;
lime.graphics.opengl.GL.BROWSER_DEFAULT_WEBGL = 37444;
lime.math._ColorMatrix.ColorMatrix_Impl_.__identity = [1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0];
lime.math.Matrix3.__identity = new lime.math.Matrix3();
lime.net._URLRequestMethod.URLRequestMethod_Impl_.DELETE = "DELETE";
lime.net._URLRequestMethod.URLRequestMethod_Impl_.GET = "GET";
lime.net._URLRequestMethod.URLRequestMethod_Impl_.HEAD = "HEAD";
lime.net._URLRequestMethod.URLRequestMethod_Impl_.OPTIONS = "OPTIONS";
lime.net._URLRequestMethod.URLRequestMethod_Impl_.POST = "POST";
lime.net._URLRequestMethod.URLRequestMethod_Impl_.PUT = "PUT";
lime.system._System.SystemDirectory_Impl_.APPLICATION = 0;
lime.system._System.SystemDirectory_Impl_.APPLICATION_STORAGE = 1;
lime.system._System.SystemDirectory_Impl_.DESKTOP = 2;
lime.system._System.SystemDirectory_Impl_.DOCUMENTS = 3;
lime.system._System.SystemDirectory_Impl_.FONTS = 4;
lime.system._System.SystemDirectory_Impl_.USER = 5;
lime.ui.Gamepad.devices = new haxe.ds.IntMap();
lime.ui._GamepadAxis.GamepadAxis_Impl_.LEFT_X = 0;
lime.ui._GamepadAxis.GamepadAxis_Impl_.LEFT_Y = 1;
lime.ui._GamepadAxis.GamepadAxis_Impl_.RIGHT_X = 2;
lime.ui._GamepadAxis.GamepadAxis_Impl_.RIGHT_Y = 3;
lime.ui._GamepadAxis.GamepadAxis_Impl_.TRIGGER_LEFT = 4;
lime.ui._GamepadAxis.GamepadAxis_Impl_.TRIGGER_RIGHT = 5;
lime.ui._GamepadButton.GamepadButton_Impl_.A = 0;
lime.ui._GamepadButton.GamepadButton_Impl_.B = 1;
lime.ui._GamepadButton.GamepadButton_Impl_.X = 2;
lime.ui._GamepadButton.GamepadButton_Impl_.Y = 3;
lime.ui._GamepadButton.GamepadButton_Impl_.BACK = 4;
lime.ui._GamepadButton.GamepadButton_Impl_.GUIDE = 5;
lime.ui._GamepadButton.GamepadButton_Impl_.START = 6;
lime.ui._GamepadButton.GamepadButton_Impl_.LEFT_STICK = 7;
lime.ui._GamepadButton.GamepadButton_Impl_.RIGHT_STICK = 8;
lime.ui._GamepadButton.GamepadButton_Impl_.LEFT_SHOULDER = 9;
lime.ui._GamepadButton.GamepadButton_Impl_.RIGHT_SHOULDER = 10;
lime.ui._GamepadButton.GamepadButton_Impl_.DPAD_UP = 11;
lime.ui._GamepadButton.GamepadButton_Impl_.DPAD_DOWN = 12;
lime.ui._GamepadButton.GamepadButton_Impl_.DPAD_LEFT = 13;
lime.ui._GamepadButton.GamepadButton_Impl_.DPAD_RIGHT = 14;
lime.ui._KeyCode.KeyCode_Impl_.UNKNOWN = 0;
lime.ui._KeyCode.KeyCode_Impl_.BACKSPACE = 8;
lime.ui._KeyCode.KeyCode_Impl_.TAB = 9;
lime.ui._KeyCode.KeyCode_Impl_.RETURN = 13;
lime.ui._KeyCode.KeyCode_Impl_.ESCAPE = 27;
lime.ui._KeyCode.KeyCode_Impl_.SPACE = 32;
lime.ui._KeyCode.KeyCode_Impl_.EXCLAMATION = 33;
lime.ui._KeyCode.KeyCode_Impl_.QUOTE = 34;
lime.ui._KeyCode.KeyCode_Impl_.HASH = 35;
lime.ui._KeyCode.KeyCode_Impl_.DOLLAR = 36;
lime.ui._KeyCode.KeyCode_Impl_.PERCENT = 37;
lime.ui._KeyCode.KeyCode_Impl_.AMPERSAND = 38;
lime.ui._KeyCode.KeyCode_Impl_.SINGLE_QUOTE = 39;
lime.ui._KeyCode.KeyCode_Impl_.LEFT_PARENTHESIS = 40;
lime.ui._KeyCode.KeyCode_Impl_.RIGHT_PARENTHESIS = 41;
lime.ui._KeyCode.KeyCode_Impl_.ASTERISK = 42;
lime.ui._KeyCode.KeyCode_Impl_.PLUS = 43;
lime.ui._KeyCode.KeyCode_Impl_.COMMA = 44;
lime.ui._KeyCode.KeyCode_Impl_.MINUS = 45;
lime.ui._KeyCode.KeyCode_Impl_.PERIOD = 46;
lime.ui._KeyCode.KeyCode_Impl_.SLASH = 47;
lime.ui._KeyCode.KeyCode_Impl_.NUMBER_0 = 48;
lime.ui._KeyCode.KeyCode_Impl_.NUMBER_1 = 49;
lime.ui._KeyCode.KeyCode_Impl_.NUMBER_2 = 50;
lime.ui._KeyCode.KeyCode_Impl_.NUMBER_3 = 51;
lime.ui._KeyCode.KeyCode_Impl_.NUMBER_4 = 52;
lime.ui._KeyCode.KeyCode_Impl_.NUMBER_5 = 53;
lime.ui._KeyCode.KeyCode_Impl_.NUMBER_6 = 54;
lime.ui._KeyCode.KeyCode_Impl_.NUMBER_7 = 55;
lime.ui._KeyCode.KeyCode_Impl_.NUMBER_8 = 56;
lime.ui._KeyCode.KeyCode_Impl_.NUMBER_9 = 57;
lime.ui._KeyCode.KeyCode_Impl_.COLON = 58;
lime.ui._KeyCode.KeyCode_Impl_.SEMICOLON = 59;
lime.ui._KeyCode.KeyCode_Impl_.LESS_THAN = 60;
lime.ui._KeyCode.KeyCode_Impl_.EQUALS = 61;
lime.ui._KeyCode.KeyCode_Impl_.GREATER_THAN = 62;
lime.ui._KeyCode.KeyCode_Impl_.QUESTION = 63;
lime.ui._KeyCode.KeyCode_Impl_.AT = 64;
lime.ui._KeyCode.KeyCode_Impl_.LEFT_BRACKET = 91;
lime.ui._KeyCode.KeyCode_Impl_.BACKSLASH = 92;
lime.ui._KeyCode.KeyCode_Impl_.RIGHT_BRACKET = 93;
lime.ui._KeyCode.KeyCode_Impl_.CARET = 94;
lime.ui._KeyCode.KeyCode_Impl_.UNDERSCORE = 95;
lime.ui._KeyCode.KeyCode_Impl_.GRAVE = 96;
lime.ui._KeyCode.KeyCode_Impl_.A = 97;
lime.ui._KeyCode.KeyCode_Impl_.B = 98;
lime.ui._KeyCode.KeyCode_Impl_.C = 99;
lime.ui._KeyCode.KeyCode_Impl_.D = 100;
lime.ui._KeyCode.KeyCode_Impl_.E = 101;
lime.ui._KeyCode.KeyCode_Impl_.F = 102;
lime.ui._KeyCode.KeyCode_Impl_.G = 103;
lime.ui._KeyCode.KeyCode_Impl_.H = 104;
lime.ui._KeyCode.KeyCode_Impl_.I = 105;
lime.ui._KeyCode.KeyCode_Impl_.J = 106;
lime.ui._KeyCode.KeyCode_Impl_.K = 107;
lime.ui._KeyCode.KeyCode_Impl_.L = 108;
lime.ui._KeyCode.KeyCode_Impl_.M = 109;
lime.ui._KeyCode.KeyCode_Impl_.N = 110;
lime.ui._KeyCode.KeyCode_Impl_.O = 111;
lime.ui._KeyCode.KeyCode_Impl_.P = 112;
lime.ui._KeyCode.KeyCode_Impl_.Q = 113;
lime.ui._KeyCode.KeyCode_Impl_.R = 114;
lime.ui._KeyCode.KeyCode_Impl_.S = 115;
lime.ui._KeyCode.KeyCode_Impl_.T = 116;
lime.ui._KeyCode.KeyCode_Impl_.U = 117;
lime.ui._KeyCode.KeyCode_Impl_.V = 118;
lime.ui._KeyCode.KeyCode_Impl_.W = 119;
lime.ui._KeyCode.KeyCode_Impl_.X = 120;
lime.ui._KeyCode.KeyCode_Impl_.Y = 121;
lime.ui._KeyCode.KeyCode_Impl_.Z = 122;
lime.ui._KeyCode.KeyCode_Impl_.DELETE = 127;
lime.ui._KeyCode.KeyCode_Impl_.CAPS_LOCK = 1073741881;
lime.ui._KeyCode.KeyCode_Impl_.F1 = 1073741882;
lime.ui._KeyCode.KeyCode_Impl_.F2 = 1073741883;
lime.ui._KeyCode.KeyCode_Impl_.F3 = 1073741884;
lime.ui._KeyCode.KeyCode_Impl_.F4 = 1073741885;
lime.ui._KeyCode.KeyCode_Impl_.F5 = 1073741886;
lime.ui._KeyCode.KeyCode_Impl_.F6 = 1073741887;
lime.ui._KeyCode.KeyCode_Impl_.F7 = 1073741888;
lime.ui._KeyCode.KeyCode_Impl_.F8 = 1073741889;
lime.ui._KeyCode.KeyCode_Impl_.F9 = 1073741890;
lime.ui._KeyCode.KeyCode_Impl_.F10 = 1073741891;
lime.ui._KeyCode.KeyCode_Impl_.F11 = 1073741892;
lime.ui._KeyCode.KeyCode_Impl_.F12 = 1073741893;
lime.ui._KeyCode.KeyCode_Impl_.PRINT_SCREEN = 1073741894;
lime.ui._KeyCode.KeyCode_Impl_.SCROLL_LOCK = 1073741895;
lime.ui._KeyCode.KeyCode_Impl_.PAUSE = 1073741896;
lime.ui._KeyCode.KeyCode_Impl_.INSERT = 1073741897;
lime.ui._KeyCode.KeyCode_Impl_.HOME = 1073741898;
lime.ui._KeyCode.KeyCode_Impl_.PAGE_UP = 1073741899;
lime.ui._KeyCode.KeyCode_Impl_.END = 1073741901;
lime.ui._KeyCode.KeyCode_Impl_.PAGE_DOWN = 1073741902;
lime.ui._KeyCode.KeyCode_Impl_.RIGHT = 1073741903;
lime.ui._KeyCode.KeyCode_Impl_.LEFT = 1073741904;
lime.ui._KeyCode.KeyCode_Impl_.DOWN = 1073741905;
lime.ui._KeyCode.KeyCode_Impl_.UP = 1073741906;
lime.ui._KeyCode.KeyCode_Impl_.NUM_LOCK = 1073741907;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_DIVIDE = 1073741908;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_MULTIPLY = 1073741909;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_MINUS = 1073741910;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_PLUS = 1073741911;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_ENTER = 1073741912;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_1 = 1073741913;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_2 = 1073741914;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_3 = 1073741915;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_4 = 1073741916;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_5 = 1073741917;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_6 = 1073741918;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_7 = 1073741919;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_8 = 1073741920;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_9 = 1073741921;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_0 = 1073741922;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_PERIOD = 1073741923;
lime.ui._KeyCode.KeyCode_Impl_.APPLICATION = 1073741925;
lime.ui._KeyCode.KeyCode_Impl_.POWER = 1073741926;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_EQUALS = 1073741927;
lime.ui._KeyCode.KeyCode_Impl_.F13 = 1073741928;
lime.ui._KeyCode.KeyCode_Impl_.F14 = 1073741929;
lime.ui._KeyCode.KeyCode_Impl_.F15 = 1073741930;
lime.ui._KeyCode.KeyCode_Impl_.F16 = 1073741931;
lime.ui._KeyCode.KeyCode_Impl_.F17 = 1073741932;
lime.ui._KeyCode.KeyCode_Impl_.F18 = 1073741933;
lime.ui._KeyCode.KeyCode_Impl_.F19 = 1073741934;
lime.ui._KeyCode.KeyCode_Impl_.F20 = 1073741935;
lime.ui._KeyCode.KeyCode_Impl_.F21 = 1073741936;
lime.ui._KeyCode.KeyCode_Impl_.F22 = 1073741937;
lime.ui._KeyCode.KeyCode_Impl_.F23 = 1073741938;
lime.ui._KeyCode.KeyCode_Impl_.F24 = 1073741939;
lime.ui._KeyCode.KeyCode_Impl_.EXECUTE = 1073741940;
lime.ui._KeyCode.KeyCode_Impl_.HELP = 1073741941;
lime.ui._KeyCode.KeyCode_Impl_.MENU = 1073741942;
lime.ui._KeyCode.KeyCode_Impl_.SELECT = 1073741943;
lime.ui._KeyCode.KeyCode_Impl_.STOP = 1073741944;
lime.ui._KeyCode.KeyCode_Impl_.AGAIN = 1073741945;
lime.ui._KeyCode.KeyCode_Impl_.UNDO = 1073741946;
lime.ui._KeyCode.KeyCode_Impl_.CUT = 1073741947;
lime.ui._KeyCode.KeyCode_Impl_.COPY = 1073741948;
lime.ui._KeyCode.KeyCode_Impl_.PASTE = 1073741949;
lime.ui._KeyCode.KeyCode_Impl_.FIND = 1073741950;
lime.ui._KeyCode.KeyCode_Impl_.MUTE = 1073741951;
lime.ui._KeyCode.KeyCode_Impl_.VOLUME_UP = 1073741952;
lime.ui._KeyCode.KeyCode_Impl_.VOLUME_DOWN = 1073741953;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_COMMA = 1073741957;
lime.ui._KeyCode.KeyCode_Impl_.ALT_ERASE = 1073741977;
lime.ui._KeyCode.KeyCode_Impl_.SYSTEM_REQUEST = 1073741978;
lime.ui._KeyCode.KeyCode_Impl_.CANCEL = 1073741979;
lime.ui._KeyCode.KeyCode_Impl_.CLEAR = 1073741980;
lime.ui._KeyCode.KeyCode_Impl_.PRIOR = 1073741981;
lime.ui._KeyCode.KeyCode_Impl_.RETURN2 = 1073741982;
lime.ui._KeyCode.KeyCode_Impl_.SEPARATOR = 1073741983;
lime.ui._KeyCode.KeyCode_Impl_.OUT = 1073741984;
lime.ui._KeyCode.KeyCode_Impl_.OPER = 1073741985;
lime.ui._KeyCode.KeyCode_Impl_.CLEAR_AGAIN = 1073741986;
lime.ui._KeyCode.KeyCode_Impl_.CRSEL = 1073741987;
lime.ui._KeyCode.KeyCode_Impl_.EXSEL = 1073741988;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_00 = 1073742000;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_000 = 1073742001;
lime.ui._KeyCode.KeyCode_Impl_.THOUSAND_SEPARATOR = 1073742002;
lime.ui._KeyCode.KeyCode_Impl_.DECIMAL_SEPARATOR = 1073742003;
lime.ui._KeyCode.KeyCode_Impl_.CURRENCY_UNIT = 1073742004;
lime.ui._KeyCode.KeyCode_Impl_.CURRENCY_SUBUNIT = 1073742005;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_LEFT_PARENTHESIS = 1073742006;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_RIGHT_PARENTHESIS = 1073742007;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_LEFT_BRACE = 1073742008;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_RIGHT_BRACE = 1073742009;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_TAB = 1073742010;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_BACKSPACE = 1073742011;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_A = 1073742012;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_B = 1073742013;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_C = 1073742014;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_D = 1073742015;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_E = 1073742016;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_F = 1073742017;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_XOR = 1073742018;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_POWER = 1073742019;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_PERCENT = 1073742020;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_LESS_THAN = 1073742021;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_GREATER_THAN = 1073742022;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_AMPERSAND = 1073742023;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_DOUBLE_AMPERSAND = 1073742024;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_VERTICAL_BAR = 1073742025;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_DOUBLE_VERTICAL_BAR = 1073742026;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_COLON = 1073742027;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_HASH = 1073742028;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_SPACE = 1073742029;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_AT = 1073742030;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_EXCLAMATION = 1073742031;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_MEM_STORE = 1073742032;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_MEM_RECALL = 1073742033;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_MEM_CLEAR = 1073742034;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_MEM_ADD = 1073742035;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_MEM_SUBTRACT = 1073742036;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_MEM_MULTIPLY = 1073742037;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_MEM_DIVIDE = 1073742038;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_PLUS_MINUS = 1073742039;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_CLEAR = 1073742040;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_CLEAR_ENTRY = 1073742041;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_BINARY = 1073742042;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_OCTAL = 1073742043;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_DECIMAL = 1073742044;
lime.ui._KeyCode.KeyCode_Impl_.NUMPAD_HEXADECIMAL = 1073742045;
lime.ui._KeyCode.KeyCode_Impl_.LEFT_CTRL = 1073742048;
lime.ui._KeyCode.KeyCode_Impl_.LEFT_SHIFT = 1073742049;
lime.ui._KeyCode.KeyCode_Impl_.LEFT_ALT = 1073742050;
lime.ui._KeyCode.KeyCode_Impl_.LEFT_META = 1073742051;
lime.ui._KeyCode.KeyCode_Impl_.RIGHT_CTRL = 1073742052;
lime.ui._KeyCode.KeyCode_Impl_.RIGHT_SHIFT = 1073742053;
lime.ui._KeyCode.KeyCode_Impl_.RIGHT_ALT = 1073742054;
lime.ui._KeyCode.KeyCode_Impl_.RIGHT_META = 1073742055;
lime.ui._KeyCode.KeyCode_Impl_.MODE = 1073742081;
lime.ui._KeyCode.KeyCode_Impl_.AUDIO_NEXT = 1073742082;
lime.ui._KeyCode.KeyCode_Impl_.AUDIO_PREVIOUS = 1073742083;
lime.ui._KeyCode.KeyCode_Impl_.AUDIO_STOP = 1073742084;
lime.ui._KeyCode.KeyCode_Impl_.AUDIO_PLAY = 1073742085;
lime.ui._KeyCode.KeyCode_Impl_.AUDIO_MUTE = 1073742086;
lime.ui._KeyCode.KeyCode_Impl_.MEDIA_SELECT = 1073742087;
lime.ui._KeyCode.KeyCode_Impl_.WWW = 1073742088;
lime.ui._KeyCode.KeyCode_Impl_.MAIL = 1073742089;
lime.ui._KeyCode.KeyCode_Impl_.CALCULATOR = 1073742090;
lime.ui._KeyCode.KeyCode_Impl_.COMPUTER = 1073742091;
lime.ui._KeyCode.KeyCode_Impl_.APP_CONTROL_SEARCH = 1073742092;
lime.ui._KeyCode.KeyCode_Impl_.APP_CONTROL_HOME = 1073742093;
lime.ui._KeyCode.KeyCode_Impl_.APP_CONTROL_BACK = 1073742094;
lime.ui._KeyCode.KeyCode_Impl_.APP_CONTROL_FORWARD = 1073742095;
lime.ui._KeyCode.KeyCode_Impl_.APP_CONTROL_STOP = 1073742096;
lime.ui._KeyCode.KeyCode_Impl_.APP_CONTROL_REFRESH = 1073742097;
lime.ui._KeyCode.KeyCode_Impl_.APP_CONTROL_BOOKMARKS = 1073742098;
lime.ui._KeyCode.KeyCode_Impl_.BRIGHTNESS_DOWN = 1073742099;
lime.ui._KeyCode.KeyCode_Impl_.BRIGHTNESS_UP = 1073742100;
lime.ui._KeyCode.KeyCode_Impl_.DISPLAY_SWITCH = 1073742101;
lime.ui._KeyCode.KeyCode_Impl_.BACKLIGHT_TOGGLE = 1073742102;
lime.ui._KeyCode.KeyCode_Impl_.BACKLIGHT_DOWN = 1073742103;
lime.ui._KeyCode.KeyCode_Impl_.BACKLIGHT_UP = 1073742104;
lime.ui._KeyCode.KeyCode_Impl_.EJECT = 1073742105;
lime.ui._KeyCode.KeyCode_Impl_.SLEEP = 1073742106;
lime.ui._KeyModifier.KeyModifier_Impl_.NONE = 0;
lime.ui._KeyModifier.KeyModifier_Impl_.LEFT_SHIFT = 1;
lime.ui._KeyModifier.KeyModifier_Impl_.RIGHT_SHIFT = 2;
lime.ui._KeyModifier.KeyModifier_Impl_.LEFT_CTRL = 64;
lime.ui._KeyModifier.KeyModifier_Impl_.RIGHT_CTRL = 128;
lime.ui._KeyModifier.KeyModifier_Impl_.LEFT_ALT = 256;
lime.ui._KeyModifier.KeyModifier_Impl_.RIGHT_ALT = 512;
lime.ui._KeyModifier.KeyModifier_Impl_.LEFT_META = 1024;
lime.ui._KeyModifier.KeyModifier_Impl_.RIGHT_META = 2048;
lime.ui._KeyModifier.KeyModifier_Impl_.NUM_LOCK = 4096;
lime.ui._KeyModifier.KeyModifier_Impl_.CAPS_LOCK = 8192;
lime.ui._KeyModifier.KeyModifier_Impl_.MODE = 16384;
lime.ui._KeyModifier.KeyModifier_Impl_.CTRL = 192;
lime.ui._KeyModifier.KeyModifier_Impl_.SHIFT = 3;
lime.ui._KeyModifier.KeyModifier_Impl_.ALT = 768;
lime.ui._KeyModifier.KeyModifier_Impl_.META = 3072;
lime.utils.ByteArray.lime_byte_array_get_native_pointer = lime.system.System.load("lime","lime_byte_array_get_native_pointer",1);
lime.utils.ByteArray.lime_byte_array_overwrite_file = lime.system.System.load("lime","lime_byte_array_overwrite_file",2);
lime.utils.ByteArray.lime_byte_array_read_file = lime.system.System.load("lime","lime_byte_array_read_file",1);
lime.utils.ByteArray.lime_lzma_decode = lime.system.System.load("lime","lime_lzma_decode",1);
lime.utils.ByteArray.lime_lzma_encode = lime.system.System.load("lime","lime_lzma_encode",1);
ApplicationMain.main();
})(typeof window != "undefined" ? window : exports);
