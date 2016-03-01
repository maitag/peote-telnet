(function (console, $hx_exports, $global) { "use strict";
$hx_exports.lime = $hx_exports.lime || {};
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
ApplicationMain.__name__ = true;
ApplicationMain.create = function() {
	ApplicationMain.preloader = new lime_app_Preloader();
	ApplicationMain.app = new PeoteTelnetClient();
	ApplicationMain.app.setPreloader(ApplicationMain.preloader);
	ApplicationMain.app.create(ApplicationMain.config);
	ApplicationMain.preloader.onComplete.add(ApplicationMain.start);
	ApplicationMain.preloader.create(ApplicationMain.config);
	var urls = [];
	var types = [];
	urls.push("assets/config.conf");
	types.push("TEXT");
	urls.push("assets/liberation_font_320x512.png");
	types.push("IMAGE");
	urls.push("assets/liberation_font_320x512_green.png");
	types.push("IMAGE");
	urls.push("assets/liberation_font_320x512_white.png");
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
	ApplicationMain.config = { build : "200", company : "Sylvio Sell - maitag", file : "PeoteTelnetClient", fps : 60, name : "PeoteTelnetClient", orientation : "", packageName : "de.peote.telnet", version : "0.2.0", windows : [{ antialiasing : 0, background : 16777215, borderless : false, depthBuffer : true, display : 0, fullscreen : false, hardware : true, height : 0, parameters : "{}", resizable : true, stencilBuffer : false, title : "PeoteTelnetClient", vsync : true, width : 0, x : null, y : null}]};
};
ApplicationMain.start = function() {
	var result = ApplicationMain.app.exec();
};
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
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
List.__name__ = true;
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,iterator: function() {
		return new _$List_ListIterator(this.h);
	}
	,__class__: List
};
var _$List_ListIterator = function(head) {
	this.head = head;
	this.val = null;
};
_$List_ListIterator.__name__ = true;
_$List_ListIterator.prototype = {
	hasNext: function() {
		return this.head != null;
	}
	,next: function() {
		this.val = this.head[0];
		this.head = this.head[1];
		return this.val;
	}
	,__class__: _$List_ListIterator
};
Math.__name__ = true;
var lime_app_IModule = function() { };
lime_app_IModule.__name__ = true;
lime_app_IModule.prototype = {
	__class__: lime_app_IModule
};
var lime_app_Module = function() {
	this.onExit = new lime_app_Event_$Int_$Void();
};
lime_app_Module.__name__ = true;
lime_app_Module.__interfaces__ = [lime_app_IModule];
lime_app_Module.prototype = {
	onGamepadAxisMove: function(gamepad,axis,value) {
	}
	,onGamepadButtonDown: function(gamepad,button) {
	}
	,onGamepadButtonUp: function(gamepad,button) {
	}
	,onGamepadConnect: function(gamepad) {
		null;
	}
	,onGamepadDisconnect: function(gamepad) {
	}
	,onJoystickAxisMove: function(joystick,axis,value) {
	}
	,onJoystickButtonDown: function(joystick,button) {
	}
	,onJoystickButtonUp: function(joystick,button) {
	}
	,onJoystickConnect: function(joystick) {
	}
	,onJoystickDisconnect: function(joystick) {
	}
	,onJoystickHatMove: function(joystick,hat,position) {
	}
	,onJoystickTrackballMove: function(joystick,trackball,value) {
	}
	,onKeyDown: function(window,keyCode,modifier) {
	}
	,onKeyUp: function(window,keyCode,modifier) {
	}
	,onModuleExit: function(code) {
	}
	,onMouseDown: function(window,x,y,button) {
	}
	,onMouseMove: function(window,x,y) {
	}
	,onMouseMoveRelative: function(window,x,y) {
	}
	,onMouseUp: function(window,x,y,button) {
	}
	,onMouseWheel: function(window,deltaX,deltaY) {
	}
	,onPreloadComplete: function() {
	}
	,onPreloadProgress: function(loaded,total) {
	}
	,onRenderContextLost: function(renderer) {
	}
	,onRenderContextRestored: function(renderer,context) {
	}
	,onTextEdit: function(window,text,start,length) {
	}
	,onTextInput: function(window,text) {
	}
	,onTouchEnd: function(touch) {
	}
	,onTouchMove: function(touch) {
	}
	,onTouchStart: function(touch) {
	}
	,onWindowActivate: function(window) {
	}
	,onWindowClose: function(window) {
	}
	,onWindowCreate: function(window) {
	}
	,onWindowDeactivate: function(window) {
	}
	,onWindowEnter: function(window) {
	}
	,onWindowFocusIn: function(window) {
	}
	,onWindowFocusOut: function(window) {
	}
	,onWindowFullscreen: function(window) {
	}
	,onWindowLeave: function(window) {
	}
	,onWindowMove: function(window,x,y) {
	}
	,onWindowMinimize: function(window) {
	}
	,onWindowResize: function(window,width,height) {
	}
	,onWindowRestore: function(window) {
	}
	,render: function(renderer) {
	}
	,update: function(deltaTime) {
	}
	,__class__: lime_app_Module
};
var lime_app_Application = function() {
	this.onUpdate = new lime_app_Event_$Int_$Void();
	lime_app_Module.call(this);
	if(lime_app_Application.current == null) lime_app_Application.current = this;
	this.modules = [];
	this.renderers = [];
	this.windows = [];
	this.windowByID = new haxe_ds_IntMap();
	this.backend = new lime__$backend_html5_HTML5Application(this);
	this.onExit.add($bind(this,this.onModuleExit));
	this.onUpdate.add($bind(this,this.update));
	lime_ui_Gamepad.onConnect.add($bind(this,this.__onGamepadConnect));
	lime_ui_Joystick.onConnect.add($bind(this,this.__onJoystickConnect));
	lime_ui_Touch.onStart.add($bind(this,this.onTouchStart));
	lime_ui_Touch.onMove.add($bind(this,this.onTouchMove));
	lime_ui_Touch.onEnd.add($bind(this,this.onTouchEnd));
};
lime_app_Application.__name__ = true;
lime_app_Application.__super__ = lime_app_Module;
lime_app_Application.prototype = $extend(lime_app_Module.prototype,{
	addRenderer: function(renderer) {
		renderer.onRender.add((function(f,a1) {
			return function() {
				f(a1);
			};
		})($bind(this,this.render),renderer));
		renderer.onContextLost.add((function(f1,a11) {
			return function() {
				f1(a11);
			};
		})($bind(this,this.onRenderContextLost),renderer));
		renderer.onContextRestored.add((function(f2,a12) {
			return function(a2) {
				f2(a12,a2);
			};
		})($bind(this,this.onRenderContextRestored),renderer));
		this.renderers.push(renderer);
	}
	,create: function(config) {
		this.config = config;
		this.backend.create(config);
		if(config != null) {
			if(Object.prototype.hasOwnProperty.call(config,"fps")) this.backend.setFrameRate(config.fps);
			if(Object.prototype.hasOwnProperty.call(config,"windows")) {
				var _g = 0;
				var _g1 = config.windows;
				while(_g < _g1.length) {
					var windowConfig = _g1[_g];
					++_g;
					var $window = new lime_ui_Window(windowConfig);
					this.createWindow($window);
					break;
				}
			}
			if(this.preloader == null || this.preloader.complete) this.onPreloadComplete();
		}
	}
	,createWindow: function(window) {
		window.onActivate.add((function(f,a1) {
			return function() {
				f(a1);
			};
		})($bind(this,this.onWindowActivate),window));
		window.onClose.add((function(f1,a11) {
			return function() {
				f1(a11);
			};
		})($bind(this,this.onWindowClose),window));
		window.onCreate.add((function(f2,a12) {
			return function() {
				f2(a12);
			};
		})($bind(this,this.onWindowCreate),window));
		window.onDeactivate.add((function(f3,a13) {
			return function() {
				f3(a13);
			};
		})($bind(this,this.onWindowDeactivate),window));
		window.onEnter.add((function(f4,a14) {
			return function() {
				f4(a14);
			};
		})($bind(this,this.onWindowEnter),window));
		window.onFocusIn.add((function(f5,a15) {
			return function() {
				f5(a15);
			};
		})($bind(this,this.onWindowFocusIn),window));
		window.onFocusOut.add((function(f6,a16) {
			return function() {
				f6(a16);
			};
		})($bind(this,this.onWindowFocusOut),window));
		window.onFullscreen.add((function(f7,a17) {
			return function() {
				f7(a17);
			};
		})($bind(this,this.onWindowFullscreen),window));
		window.onKeyDown.add((function(f8,a18) {
			return function(a2,a3) {
				f8(a18,a2,a3);
			};
		})($bind(this,this.onKeyDown),window));
		window.onKeyUp.add((function(f9,a19) {
			return function(a21,a31) {
				f9(a19,a21,a31);
			};
		})($bind(this,this.onKeyUp),window));
		window.onLeave.add((function(f10,a110) {
			return function() {
				f10(a110);
			};
		})($bind(this,this.onWindowLeave),window));
		window.onMinimize.add((function(f11,a111) {
			return function() {
				f11(a111);
			};
		})($bind(this,this.onWindowMinimize),window));
		window.onMouseDown.add((function(f12,a112) {
			return function(x,y,a22) {
				f12(a112,x,y,a22);
			};
		})($bind(this,this.onMouseDown),window));
		window.onMouseMove.add((function(f13,a113) {
			return function(x1,y1) {
				f13(a113,x1,y1);
			};
		})($bind(this,this.onMouseMove),window));
		window.onMouseMoveRelative.add((function(f14,a114) {
			return function(x2,y2) {
				f14(a114,x2,y2);
			};
		})($bind(this,this.onMouseMoveRelative),window));
		window.onMouseUp.add((function(f15,a115) {
			return function(x3,y3,a23) {
				f15(a115,x3,y3,a23);
			};
		})($bind(this,this.onMouseUp),window));
		window.onMouseWheel.add((function(f16,a116) {
			return function(a24,a32) {
				f16(a116,a24,a32);
			};
		})($bind(this,this.onMouseWheel),window));
		window.onMove.add((function(f17,a117) {
			return function(x4,y4) {
				f17(a117,x4,y4);
			};
		})($bind(this,this.onWindowMove),window));
		window.onResize.add((function(f18,a118) {
			return function(a25,a33) {
				f18(a118,a25,a33);
			};
		})($bind(this,this.onWindowResize),window));
		window.onRestore.add((function(f19,a119) {
			return function() {
				f19(a119);
			};
		})($bind(this,this.onWindowRestore),window));
		window.onTextEdit.add((function(f20,a120) {
			return function(a26,a34,a4) {
				f20(a120,a26,a34,a4);
			};
		})($bind(this,this.onTextEdit),window));
		window.onTextInput.add((function(f21,a121) {
			return function(a27) {
				f21(a121,a27);
			};
		})($bind(this,this.onTextInput),window));
		if(window.renderer == null) {
			var renderer = new lime_graphics_Renderer(window);
			this.addRenderer(renderer);
		}
		window.create(this);
		this.windows.push(window);
		this.windowByID.h[window.id] = window;
		window.onCreate.dispatch();
	}
	,exec: function() {
		lime_app_Application.current = this;
		return this.backend.exec();
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
	,onJoystickAxisMove: function(joystick,axis,value) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onJoystickAxisMove(joystick,axis,value);
		}
	}
	,onJoystickButtonDown: function(joystick,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onJoystickButtonDown(joystick,button);
		}
	}
	,onJoystickButtonUp: function(joystick,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onJoystickButtonUp(joystick,button);
		}
	}
	,onJoystickConnect: function(joystick) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onJoystickConnect(joystick);
		}
	}
	,onJoystickDisconnect: function(joystick) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onJoystickDisconnect(joystick);
		}
	}
	,onJoystickHatMove: function(joystick,hat,position) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onJoystickHatMove(joystick,hat,position);
		}
	}
	,onJoystickTrackballMove: function(joystick,trackball,value) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onJoystickTrackballMove(joystick,trackball,value);
		}
	}
	,onKeyDown: function(window,keyCode,modifier) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onKeyDown(window,keyCode,modifier);
		}
	}
	,onKeyUp: function(window,keyCode,modifier) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onKeyUp(window,keyCode,modifier);
		}
	}
	,onModuleExit: function(code) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onModuleExit(code);
		}
		this.backend.exit();
	}
	,onMouseDown: function(window,x,y,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseDown(window,x,y,button);
		}
	}
	,onMouseMove: function(window,x,y) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseMove(window,x,y);
		}
	}
	,onMouseMoveRelative: function(window,x,y) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseMoveRelative(window,x,y);
		}
	}
	,onMouseUp: function(window,x,y,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseUp(window,x,y,button);
		}
	}
	,onMouseWheel: function(window,deltaX,deltaY) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseWheel(window,deltaX,deltaY);
		}
	}
	,onPreloadComplete: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onPreloadComplete();
		}
	}
	,onPreloadProgress: function(loaded,total) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onPreloadProgress(loaded,total);
		}
	}
	,onRenderContextLost: function(renderer) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onRenderContextLost(renderer);
		}
	}
	,onRenderContextRestored: function(renderer,context) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onRenderContextRestored(renderer,context);
		}
	}
	,onTextEdit: function(window,text,start,length) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTextEdit(window,text,start,length);
		}
	}
	,onTextInput: function(window,text) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTextInput(window,text);
		}
	}
	,onTouchEnd: function(touch) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTouchEnd(touch);
		}
	}
	,onTouchMove: function(touch) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTouchMove(touch);
		}
	}
	,onTouchStart: function(touch) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTouchStart(touch);
		}
	}
	,onWindowActivate: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowActivate(window);
		}
	}
	,onWindowClose: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowClose(window);
		}
		this.removeWindow(window);
	}
	,onWindowCreate: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowCreate(window);
		}
	}
	,onWindowDeactivate: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowDeactivate(window);
		}
	}
	,onWindowEnter: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowEnter(window);
		}
	}
	,onWindowFocusIn: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowFocusIn(window);
		}
	}
	,onWindowFocusOut: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowFocusOut(window);
		}
	}
	,onWindowFullscreen: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowFullscreen(window);
		}
	}
	,onWindowLeave: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowLeave(window);
		}
	}
	,onWindowMinimize: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowMinimize(window);
		}
	}
	,onWindowMove: function(window,x,y) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowMove(window,x,y);
		}
	}
	,onWindowResize: function(window,width,height) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowResize(window,width,height);
		}
	}
	,onWindowRestore: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowRestore(window);
		}
	}
	,removeWindow: function(window) {
		if(window != null && this.windowByID.h.hasOwnProperty(window.id)) {
			HxOverrides.remove(this.windows,window);
			this.windowByID.remove(window.id);
			window.close();
			if(this.windows[0] == window) this.window = null;
		}
	}
	,render: function(renderer) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.render(renderer);
		}
	}
	,setPreloader: function(preloader) {
		if(this.preloader != null) {
			this.preloader.onProgress.remove($bind(this,this.onPreloadProgress));
			this.preloader.onComplete.remove($bind(this,this.onPreloadComplete));
		}
		this.preloader = preloader;
		if(preloader.complete) this.onPreloadComplete(); else {
			preloader.onProgress.add($bind(this,this.onPreloadProgress));
			preloader.onComplete.add($bind(this,this.onPreloadComplete));
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
	,__onGamepadConnect: function(gamepad) {
		this.onGamepadConnect(gamepad);
		gamepad.onAxisMove.add((function(f,a1) {
			return function(a2,a3) {
				f(a1,a2,a3);
			};
		})($bind(this,this.onGamepadAxisMove),gamepad));
		gamepad.onButtonDown.add((function(f1,a11) {
			return function(a21) {
				f1(a11,a21);
			};
		})($bind(this,this.onGamepadButtonDown),gamepad));
		gamepad.onButtonUp.add((function(f2,a12) {
			return function(a22) {
				f2(a12,a22);
			};
		})($bind(this,this.onGamepadButtonUp),gamepad));
		gamepad.onDisconnect.add((function(f3,a13) {
			return function() {
				f3(a13);
			};
		})($bind(this,this.onGamepadDisconnect),gamepad));
	}
	,__onJoystickConnect: function(joystick) {
		this.onJoystickConnect(joystick);
		joystick.onAxisMove.add((function(f,a1) {
			return function(a2,a3) {
				f(a1,a2,a3);
			};
		})($bind(this,this.onJoystickAxisMove),joystick));
		joystick.onButtonDown.add((function(f1,a11) {
			return function(a21) {
				f1(a11,a21);
			};
		})($bind(this,this.onJoystickButtonDown),joystick));
		joystick.onButtonUp.add((function(f2,a12) {
			return function(a22) {
				f2(a12,a22);
			};
		})($bind(this,this.onJoystickButtonUp),joystick));
		joystick.onDisconnect.add((function(f3,a13) {
			return function() {
				f3(a13);
			};
		})($bind(this,this.onJoystickDisconnect),joystick));
		joystick.onHatMove.add((function(f4,a14) {
			return function(a23,a31) {
				f4(a14,a23,a31);
			};
		})($bind(this,this.onJoystickHatMove),joystick));
		joystick.onTrackballMove.add((function(f5,a15) {
			return function(a24,a32) {
				f5(a15,a24,a32);
			};
		})($bind(this,this.onJoystickTrackballMove),joystick));
	}
	,__class__: lime_app_Application
});
var PeoteTelnetClient = function() {
	this.is_connected = false;
	lime_app_Application.call(this);
};
PeoteTelnetClient.__name__ = true;
PeoteTelnetClient.__super__ = lime_app_Application;
PeoteTelnetClient.prototype = $extend(lime_app_Application.prototype,{
	onWindowCreate: function(window) {
		var _g1 = this;
		var regex = new EReg("//.*?$","gm");
		var req = js_Browser.createXMLHttpRequest();
		req.open("GET","assets/config.conf",false);
		req.send();
		this.conf = JSON.parse(regex.replace(req.responseText,""));
		{
			var _g = window.renderer.context;
			switch(_g[1]) {
			case 0:
				var gl = _g[2];
				window.backend.setEnableTextEvents(true);
				this.peoteSocket = new PeoteSocket({ onConnect : function(connected,msg) {
					_g1.is_connected = true;
					_g1.peoteTerminal = new de_peote_terminal_PeoteTerminal(_g1.peoteTelnet,_g1.peoteDisplay);
				}, onClose : function(msg1) {
					_g1.is_connected = false;
				}, onError : function(msg2) {
					null;
				}, onData : $bind(this,this.onData)});
				this.peoteDisplay = new de_peote_terminal_PeoteDisplay(window.__width,window.__height);
				this.peoteTelnet = new de_peote_telnet_PeoteTelnet(this.peoteSocket,this.peoteDisplay.size_x,this.peoteDisplay.size_y);
				this.peoteSocket.connect(this.conf.server,this.conf.port);
				break;
			default:
				null;
			}
		}
	}
	,onData: function(peoteBytes) {
		var input = new de_peote_io_js_PeoteBytesInput(peoteBytes);
		this.peoteTerminal.remoteData(input);
	}
	,render: function(renderer) {
		this.peoteDisplay.render(renderer);
	}
	,onTextInput: function(window,text) {
		if(this.is_connected) this.peoteTerminal.peoteTelnet.writeBytes(haxe_io_Bytes.ofString(text));
	}
	,onKeyDown: function(window,keyCode,modifier) {
		if(this.is_connected) this.peoteTerminal.onKeyDown(keyCode,modifier);
	}
	,onWindowResize: function(window,width,height) {
		if(this.is_connected) {
			this.peoteDisplay.resize(window.__width,window.__height);
			this.peoteTelnet.resize(this.peoteDisplay.size_x,this.peoteDisplay.size_y);
		}
	}
	,onMouseMove: function(window,x,y) {
		this.peoteDisplay.mouse_x = x | 0;
		this.peoteDisplay.mouse_y = y | 0;
	}
	,onTouchMove: function(touch) {
		this.peoteDisplay.mouse_x = touch.x | 0;
		this.peoteDisplay.mouse_y = touch.y | 0;
	}
	,onMouseDown: function(window,x,y,button) {
	}
	,onMouseUp: function(window,x,y,button) {
	}
	,onMouseWheel: function(window,deltaX,deltaY) {
		if(this.is_connected) this.peoteDisplay.onMouseWheel(deltaX,deltaY);
	}
	,__class__: PeoteTelnetClient
});
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
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
StringTools.__name__ = true;
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var de_peote_io_js_PeoteBytesInput = $hx_exports.PeoteBytesInput = function(bytes) {
	this.position = 0;
	this.length = 0;
	this.bytes = bytes;
	this.length = bytes.length;
};
de_peote_io_js_PeoteBytesInput.__name__ = true;
de_peote_io_js_PeoteBytesInput.main = function() {
};
de_peote_io_js_PeoteBytesInput.prototype = {
	readByte: function() {
		return this.bytes[this.position++];
	}
	,readInt16: function() {
		this.position += 2;
		return this.bytes[this.position - 1] << 8 | this.bytes[this.position - 2];
	}
	,readInt32: function() {
		this.position += 4;
		return this.bytes[this.position - 1] << 24 | this.bytes[this.position - 2] << 16 | this.bytes[this.position - 3] << 8 | this.bytes[this.position - 4];
	}
	,readFloat: function() {
		var b = haxe_io_Bytes.alloc(4);
		b.setInt32(0,(function($this) {
			var $r;
			$this.position += 4;
			$r = $this.bytes[$this.position - 1] << 24 | $this.bytes[$this.position - 2] << 16 | $this.bytes[$this.position - 3] << 8 | $this.bytes[$this.position - 4];
			return $r;
		}(this)));
		return b.getFloat(0);
	}
	,readDouble: function() {
		var b = haxe_io_Bytes.alloc(8);
		b.setInt32(0,(function($this) {
			var $r;
			$this.position += 4;
			$r = $this.bytes[$this.position - 1] << 24 | $this.bytes[$this.position - 2] << 16 | $this.bytes[$this.position - 3] << 8 | $this.bytes[$this.position - 4];
			return $r;
		}(this)));
		b.setInt32(4,(function($this) {
			var $r;
			$this.position += 4;
			$r = $this.bytes[$this.position - 1] << 24 | $this.bytes[$this.position - 2] << 16 | $this.bytes[$this.position - 3] << 8 | $this.bytes[$this.position - 4];
			return $r;
		}(this)));
		return b.getDouble(0);
	}
	,readString: function() {
		var len;
		this.position += 2;
		len = this.bytes[this.position - 1] << 8 | this.bytes[this.position - 2];
		var b = haxe_io_Bytes.alloc(len * 4);
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b.setInt32(i * 4,(function($this) {
				var $r;
				$this.position += 4;
				$r = $this.bytes[$this.position - 1] << 24 | $this.bytes[$this.position - 2] << 16 | $this.bytes[$this.position - 3] << 8 | $this.bytes[$this.position - 4];
				return $r;
			}(this)));
		}
		return b.getString(0,len);
	}
	,__class__: de_peote_io_js_PeoteBytesInput
};
var de_peote_telnet_PeoteTelnet = function(peoteSocket,width,height) {
	if(height == null) height = 46;
	if(width == null) width = 107;
	this.debug = "";
	this.state = 0;
	this.peoteSocket = peoteSocket;
	this.width = width;
	this.height = height;
};
de_peote_telnet_PeoteTelnet.__name__ = true;
de_peote_telnet_PeoteTelnet.prototype = {
	writeByte: function(b) {
		this.peoteSocket.writeByte(b);
		this.peoteSocket.flush();
	}
	,writeBytes: function(bytes) {
		this.peoteSocket.writeBytes((function($this) {
			var $r;
			var _g = [];
			{
				var _g2 = 0;
				var _g1 = bytes.length;
				while(_g2 < _g1) {
					var i = _g2++;
					_g.push(bytes.b[i]);
				}
			}
			$r = _g;
			return $r;
		}(this)));
		this.peoteSocket.flush();
	}
	,parseTelnetData: function(input,remoteInput) {
		var _g1 = 0;
		var _g = input.length;
		while(_g1 < _g) {
			var i = _g1++;
			var b = input.bytes[input.position++];
			var _g2 = this.state;
			switch(_g2) {
			case 0:
				if(b == de_peote_telnet_PeoteTelnet.IAC) {
					this.state = 1;
					this.debug += "\nRECEIVE: IAC";
				} else if(b != de_peote_telnet_PeoteTelnet.NOP) remoteInput(b);
				break;
			case 1:
				if(b == de_peote_telnet_PeoteTelnet.WILL) {
					this.state = 2;
					this.debug += ", WILL";
				} else if(b == de_peote_telnet_PeoteTelnet.DO) {
					this.state = 3;
					this.debug += ", DO";
				} else if(b == de_peote_telnet_PeoteTelnet.SB) {
					this.state = 5;
					this.negotiate_data = [];
					this.debug += "negotiate start: ";
					this.debug += ", SB";
				} else {
					this.state = 0;
					this.debug += ", " + b;
				}
				break;
			case 2:
				if(b == de_peote_telnet_PeoteTelnet.ECHO) {
					this.debug += ", ECHO";
					this.debug += "\nSEND: IAC,WONT,ECHO";
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.WONT);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.ECHO);
					this.peoteSocket.flush();
				} else if(b == de_peote_telnet_PeoteTelnet.EOR) {
					this.debug += ", EOR";
					this.debug += "\nSEND: IAC,DO,EOR";
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.DO);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.EOR);
					this.peoteSocket.flush();
				} else {
					this.debug += ", " + b;
					this.debug += "\nSEND: IAC,WONT," + b;
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.WONT);
					this.peoteSocket.writeByte(b);
					this.peoteSocket.flush();
				}
				this.state = 0;
				break;
			case 3:
				if(b == de_peote_telnet_PeoteTelnet.TERMINALTYPE) {
					this.debug += ", TERMINALTYPE";
					this.debug += "\nSEND: IAC,WILL,TERMINALTYPE";
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.WILL);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.TERMINALTYPE);
					this.peoteSocket.flush();
				} else if(b == de_peote_telnet_PeoteTelnet.NAWS) {
					this.debug += ", NAWS (window size)";
					this.debug += "\nSEND: IAC,WILL,NAWS (window size is cool ;)";
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.WILL);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.NAWS);
					this.peoteSocket.flush();
					this.debug += "\nSEND: IAC,SB,NAWS,0," + this.width + ",0," + this.height + ",IAC,SE (send terminal size)";
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.SB);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.NAWS);
					this.peoteSocket.writeByte(0);
					this.peoteSocket.writeByte(this.width);
					this.peoteSocket.writeByte(0);
					this.peoteSocket.writeByte(this.height);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.SE);
					this.peoteSocket.flush();
				} else if(b == de_peote_telnet_PeoteTelnet.EOR) {
					this.debug += "\nSEND: IAC,DO,EOR";
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.DO);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.EOR);
					this.peoteSocket.flush();
				} else {
					this.debug += ", " + b;
					this.debug += "\nSEND: IAC,WONT," + b;
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
					this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.WONT);
					this.peoteSocket.writeByte(b);
					this.peoteSocket.flush();
				}
				this.state = 0;
				break;
			case 5:
				if(b == de_peote_telnet_PeoteTelnet.IAC) {
					this.debug += ", IAC";
					this.state = 6;
				} else {
					this.debug += ", " + b;
					this.negotiate_data.push(b);
				}
				break;
			case 6:
				if(b == de_peote_telnet_PeoteTelnet.SE) {
					this.debug += ", SE";
					if(this.negotiate_data[0] == de_peote_telnet_PeoteTelnet.TERMINALTYPE && this.negotiate_data[1] == 1) {
						this.debug += "\nSEND: IAC,SB, TERMINALTYPE,IS, 65,78,83,73 ,IAC,SE (send 'ansi' terminal type)";
						this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
						this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.SB);
						this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.TERMINALTYPE);
						this.peoteSocket.writeByte(0);
						this.peoteSocket.writeByte(65);
						this.peoteSocket.writeByte(78);
						this.peoteSocket.writeByte(83);
						this.peoteSocket.writeByte(73);
						this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
						this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.SE);
						this.peoteSocket.flush();
					}
				} else this.debug += ", " + b;
				this.debug += " negotiate end";
				this.state = 0;
				break;
			}
		}
		if(this.debug != "") this.debug = "";
	}
	,resize: function(width,height) {
		this.width = width;
		this.height = height;
		this.debug += "\nSEND: IAC,SB,NAWS,0," + this.width + ",0," + this.height + ",IAC,SE (send terminal size)";
		this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
		this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.SB);
		this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.NAWS);
		this.peoteSocket.writeByte(0);
		this.peoteSocket.writeByte(this.width);
		this.peoteSocket.writeByte(0);
		this.peoteSocket.writeByte(this.height);
		this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.IAC);
		this.peoteSocket.writeByte(de_peote_telnet_PeoteTelnet.SE);
		this.peoteSocket.flush();
	}
	,__class__: de_peote_telnet_PeoteTelnet
};
var de_peote_terminal_AnsiParser = function(peoteTerminal) {
	this.mode = de_peote_terminal_AnsiParser.Off;
	this.peoteTerminal = peoteTerminal;
	this.params = [];
};
de_peote_terminal_AnsiParser.__name__ = true;
de_peote_terminal_AnsiParser.prototype = {
	parsing: function(key) {
		var _g = this.mode;
		switch(_g) {
		case 1:
			switch(key) {
			case 91:
				this.p = "";
				this.params = [];
				this.mode = de_peote_terminal_AnsiParser.Sequence;
				break;
			default:
				this.mode = de_peote_terminal_AnsiParser.Off;
			}
			break;
		case 2:
			switch(key) {
			case HxOverrides.cca("m",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.sgr(this.params);
				break;
			case HxOverrides.cca("A",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.cuu(this.params);
				break;
			case HxOverrides.cca("B",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.cud(this.params);
				break;
			case HxOverrides.cca("C",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.cuf(this.params);
				break;
			case HxOverrides.cca("D",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.cub(this.params);
				break;
			case HxOverrides.cca("E",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				break;
			case HxOverrides.cca("F",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				break;
			case HxOverrides.cca("G",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				break;
			case HxOverrides.cca("H",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.cup(this.params);
				break;
			case HxOverrides.cca("f",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.cup(this.params);
				break;
			case HxOverrides.cca("J",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.ed(this.params);
				break;
			case HxOverrides.cca("K",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.el(this.params);
				break;
			case HxOverrides.cca("L",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.il(this.params);
				break;
			case HxOverrides.cca("M",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				if(this.p != "") this.params.push(this.p);
				this.peoteTerminal.dl(this.params);
				break;
			case HxOverrides.cca("S",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				break;
			case HxOverrides.cca("T",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				break;
			case HxOverrides.cca("i",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				break;
			case HxOverrides.cca("n",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				break;
			case HxOverrides.cca("s",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				break;
			case HxOverrides.cca("u",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				break;
			case HxOverrides.cca("l",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				break;
			case HxOverrides.cca("h",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				break;
			case HxOverrides.cca("p",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
				break;
			case HxOverrides.cca("P",0):
				this.mode = de_peote_terminal_AnsiParser.Off;
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
	,__class__: de_peote_terminal_AnsiParser
};
var de_peote_terminal_PeoteDisplay = function(width,height,max_buffer,max_size_x,max_size_y) {
	if(max_size_y == null) max_size_y = 256;
	if(max_size_x == null) max_size_x = 256;
	if(max_buffer == null) max_buffer = 300;
	this.zoom = 1;
	this.mouse_y = 0;
	this.mouse_x = 0;
	this.displaylist_y_scroll = 0;
	this.displaylist_y_offset = 0;
	this.element_offset = 0;
	this.buffer_pos = 0;
	this.cursor_y = 0;
	this.cursor_x = 0;
	this.bg_color_default = 0;
	this.fg_color_default = 1893204223;
	this.font_size_y = 16;
	this.font_size_x = 10;
	this.size_y = 128;
	this.size_x = 256;
	this.width = width;
	this.height = height;
	this.max_buffer = max_buffer;
	this.max_size_x = max_size_x;
	this.max_size_y = max_size_y;
	this.colors = [255,-11202049,1442779647,-392961,579272703,-252833281,301006847,-84215041];
	this.fg_color = this.fg_color_default;
	this.bg_color = this.bg_color_default;
	this.peoteView = new de_peote_view_PeoteView(3,10);
	this.startTime = haxe_Timer.stamp();
	this.size_x = Math.floor(width / this.font_size_x);
	this.size_y = Math.floor(height / this.font_size_y);
	this.max_elements = max_size_x * max_size_y;
	this.buffer = [];
	var _g = 0;
	while(_g < max_buffer) {
		var i = _g++;
		this.buffer[this.buffer_pos + i] = [];
	}
	this.peoteView.programCache.loadShaderSrc(0,"","");
	this.peoteView.texturecache.setImage(0,"assets/liberation_font_320x512_white.png",320,512);
	this.peoteView.setDisplaylist({ displaylist : 0, type : 8, elements : this.max_elements, renderBackground : true, w : this.size_x * this.font_size_x, h : this.size_y * this.font_size_y, r : 0.05, g : 0.07});
	this.peoteView.programCache.loadShaderSrc(1,"assets/lyapunov_greencursor.frag","");
	this.peoteView.setDisplaylist({ displaylist : 1, type : 0, elements : 10, z : 1});
	this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
};
de_peote_terminal_PeoteDisplay.__name__ = true;
de_peote_terminal_PeoteDisplay.prototype = {
	render: function(renderer) {
		this.peoteView.render(haxe_Timer.stamp() - this.startTime,this.width,this.height,this.mouse_x,this.mouse_y,this.zoom,null,null);
	}
	,printChar: function($char) {
		this.setChar(this.cursor_x,this.cursor_y,$char);
		this.buffer[this.buffer_pos + this.cursor_y][this.cursor_x] = $char;
		this.cursor_x++;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
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
				this.buffer[0] = [];
				this.buffer.push(this.buffer.shift());
			}
			this.element_offset = (this.element_offset + this.max_size_x) % this.max_elements;
			this.displaylist_y_offset -= this.font_size_y;
			this.displaylist_y_scroll = this.displaylist_y_offset;
			this.peoteView.setDisplaylist({ displaylist : 0, yOffset : this.displaylist_y_offset});
		}
	}
	,cursorDown: function(n) {
		this.cursor_y += n;
		if(this.cursor_y >= this.size_y) this.cursor_y = this.size_y - 1;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,cursorUp: function(n) {
		this.cursor_y -= n;
		if(this.cursor_y < 0) this.cursor_y = 0;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,cursorForward: function(n) {
		this.cursor_x += n;
		if(this.cursor_x >= this.size_x) this.cursor_x = this.size_x - 1;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,cursorBack: function(n) {
		this.cursor_x -= n;
		if(this.cursor_x < 0) this.cursor_x = 0;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,cursorPosition: function(x,y) {
		this.cursor_x = x;
		this.cursor_y = y;
		if(this.cursor_y >= this.size_y) this.cursor_y = this.size_y - 1;
		if(this.cursor_x >= this.size_x) this.cursor_x = this.size_x - 1;
		this.peoteView.setElement({ element : 0, displaylist : 1, x : this.cursor_x * this.font_size_x, y : this.cursor_y * this.font_size_y + this.displaylist_y_scroll - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, program : 1, tw : 200, th : 200});
	}
	,deleteChar: function(n) {
		this.buffer[this.buffer_pos + this.cursor_y].splice(this.cursor_x,n);
		this.refresh();
	}
	,eraseDisplay: function() {
		var _g1 = 0;
		var _g = this.size_y;
		while(_g1 < _g) {
			var y = _g1++;
			this.buffer[this.buffer_pos + y] = [];
			var _g3 = 0;
			var _g2 = this.size_x;
			while(_g3 < _g2) {
				var x = _g3++;
				this.peoteView.setElement({ displaylist : 0, element : (this.element_offset + x + y * this.max_size_x) % this.max_elements, x : x * this.font_size_x, y : y * this.font_size_y - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, rgba : this.fg_color, program : 0, image : 0, tile : 0});
			}
		}
	}
	,eraseDisplayAfterCursor: function() {
		var _g1 = this.cursor_y;
		var _g = this.size_y;
		while(_g1 < _g) {
			var y = _g1++;
			this.buffer[this.buffer_pos + y] = [];
			var _g3 = 0;
			var _g2 = this.size_x;
			while(_g3 < _g2) {
				var x = _g3++;
				this.peoteView.setElement({ displaylist : 0, element : (this.element_offset + x + y * this.max_size_x) % this.max_elements, x : x * this.font_size_x, y : y * this.font_size_y - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, rgba : this.fg_color, program : 0, image : 0, tile : 0});
			}
		}
	}
	,eraseDisplayBeforeCursor: function() {
		var _g1 = 0;
		var _g = this.cursor_y;
		while(_g1 < _g) {
			var y = _g1++;
			this.buffer[this.buffer_pos + y] = [];
			var _g3 = 0;
			var _g2 = this.size_x;
			while(_g3 < _g2) {
				var x = _g3++;
				this.peoteView.setElement({ displaylist : 0, element : (this.element_offset + x + y * this.max_size_x) % this.max_elements, x : x * this.font_size_x, y : y * this.font_size_y - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, rgba : this.fg_color, program : 0, image : 0, tile : 0});
			}
		}
	}
	,eraseLine: function() {
		var _g1 = 0;
		var _g = this.size_x;
		while(_g1 < _g) {
			var x = _g1++;
			this.setChar(x,this.cursor_y,0);
			this.buffer[this.buffer_pos + this.cursor_y][x] = 0;
		}
	}
	,eraseLineAfterCursor: function() {
		var _g1 = this.cursor_x;
		var _g = this.size_x;
		while(_g1 < _g) {
			var x = _g1++;
			this.setChar(x,this.cursor_y,0);
			this.buffer[this.buffer_pos + this.cursor_y][x] = 0;
		}
	}
	,eraseLineBeforeCursor: function() {
		var _g1 = 0;
		var _g = this.cursor_x;
		while(_g1 < _g) {
			var x = _g1++;
			this.setChar(x,this.cursor_y,0);
			this.buffer[this.buffer_pos + this.cursor_y][x] = 0;
		}
	}
	,insertLine: function(n) {
		var _g = 0;
		while(_g < n) {
			var n1 = _g++;
			var x = [];
			this.buffer.splice(this.buffer_pos + this.cursor_y,0,x);
			this.cursor_y++;
			this.buffer.shift();
			this.buffer_pos--;
		}
		this.refresh();
	}
	,deleteLine: function(n) {
		this.buffer.splice(this.buffer_pos + this.cursor_y,n);
		var _g = 0;
		while(_g < n) {
			var n1 = _g++;
			this.buffer.push([]);
		}
		this.refresh();
	}
	,sgrReset: function() {
		this.fg_color = this.fg_color_default;
		this.bg_color = this.bg_color_default;
	}
	,sgrFG: function(n) {
		this.fg_color = this.colors[n];
	}
	,sgrBG: function(n) {
		this.bg_color = this.colors[n];
	}
	,setChar: function(x,y,$char) {
		this.peoteView.setElement({ displaylist : 0, element : (this.element_offset + x + y * this.max_size_x) % this.max_elements, x : x * this.font_size_x, y : y * this.font_size_y - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, rgba : this.fg_color, program : 0, image : 0, tile : $char});
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
				this.peoteView.setElement({ displaylist : 0, element : (this.element_offset + x + y * this.max_size_x) % this.max_elements, x : x * this.font_size_x, y : y * this.font_size_y - this.displaylist_y_offset, w : this.font_size_x, h : this.font_size_y, rgba : this.fg_color, program : 0, image : 0, tile : $char});
			}
		}
	}
	,resize: function(width,height) {
		this.width = width;
		this.height = height;
		this.eraseDisplay();
		this.size_x = Math.floor(width / this.font_size_x);
		this.size_y = Math.floor(height / this.font_size_y);
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
	,__class__: de_peote_terminal_PeoteDisplay
};
var de_peote_terminal_PeoteTerminal = function(peoteTelnet,peoteDisplay) {
	this.peoteTelnet = peoteTelnet;
	this.peoteDisplay = peoteDisplay;
	this.ansiParser = new de_peote_terminal_AnsiParser(this);
};
de_peote_terminal_PeoteTerminal.__name__ = true;
de_peote_terminal_PeoteTerminal.prototype = {
	onKeyDown: function(keyCode,modifier) {
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
		case 8:
			this.peoteTelnet.writeByte(de_peote_terminal__$TermCode_TermCode_$Impl_$.BS);
			break;
		case 127:
			this.peoteTelnet.writeByte(27);
			this.peoteTelnet.writeByte(91);
			this.peoteTelnet.writeByte(HxOverrides.cca("C",0));
			this.peoteTelnet.writeByte(de_peote_terminal__$TermCode_TermCode_$Impl_$.BS);
			break;
		case 13:
			this.peoteTelnet.writeByte(de_peote_terminal__$TermCode_TermCode_$Impl_$.CR);
			break;
		case 1073741912:
			this.peoteTelnet.writeByte(de_peote_terminal__$TermCode_TermCode_$Impl_$.CR);
			break;
		case 9:
			this.peoteTelnet.writeByte(de_peote_terminal__$TermCode_TermCode_$Impl_$.HT);
			break;
		default:
		}
	}
	,remoteData: function(input) {
		this.peoteTelnet.parseTelnetData(input,$bind(this,this.printChar));
	}
	,printChar: function($char) {
		if(this.ansiParser.mode != de_peote_terminal_AnsiParser.Off) this.ansiParser.parsing($char); else switch($char) {
		case 0:
			null;
			break;
		case 7:
			null;
			break;
		case 8:
			this.peoteDisplay.backspace();
			break;
		case 9:
			null;
			break;
		case 10:
			this.peoteDisplay.linefeed();
			break;
		case 11:
			null;
			break;
		case 12:
			null;
			break;
		case 13:
			this.peoteDisplay.carriageReturn();
			break;
		case 27:
			this.ansiParser.mode = de_peote_terminal_AnsiParser.Start;
			break;
		case 127:
			null;
			break;
		default:
			if($char < 27) null;
			this.peoteDisplay.printChar($char);
		}
	}
	,sgr: function(params) {
		var _g1 = 0;
		var _g = params.length;
		while(_g1 < _g) {
			var i = _g1++;
			var p = Std.parseInt(params[i]);
			if(p == 0) this.peoteDisplay.sgrReset();
			if(p >= 30 && p <= 37) this.peoteDisplay.sgrFG(p - 30);
			if(p >= 40 && p <= 47) this.peoteDisplay.sgrBG(p - 40);
		}
	}
	,cud: function(params) {
		if(params.length == 0) params.push("1");
		this.peoteDisplay.cursorDown(Std.parseInt(params[0]));
		null;
	}
	,cuu: function(params) {
		if(params.length == 0) params.push("1");
		this.peoteDisplay.cursorUp(Std.parseInt(params[0]));
		null;
	}
	,cuf: function(params) {
		if(params.length == 0) params.push("1");
		this.peoteDisplay.cursorForward(Std.parseInt(params[0]));
		null;
	}
	,cub: function(params) {
		if(params.length == 0) params.push("1");
		this.peoteDisplay.cursorBack(Std.parseInt(params[0]));
		null;
	}
	,cup: function(params) {
		var x = 0;
		var y = 0;
		if(params.length == 1) if(params[0] != "") y = Std.parseInt(params[0]) - 1; else y = 0; else if(params.length == 2) {
			if(params[1] != "") x = Std.parseInt(params[1]) - 1; else x = 0;
			if(params[0] != "") y = Std.parseInt(params[0]) - 1; else y = 0;
		}
		this.peoteDisplay.cursorPosition(x,y);
		null;
	}
	,del: function(params) {
		if(params.length == 0) params.push("1");
		this.peoteDisplay.deleteChar(Std.parseInt(params[0]));
		null;
	}
	,ed: function(params) {
		if(params.length == 0) params.push("0");
		if(params[0] == "0") this.peoteDisplay.eraseDisplayAfterCursor(); else if(params[0] == "1") this.peoteDisplay.eraseDisplayBeforeCursor(); else if(params[0] == "2") this.peoteDisplay.eraseDisplay();
	}
	,el: function(params) {
		if(params.length == 0) params.push("0");
		if(params[0] == "0") this.peoteDisplay.eraseLineAfterCursor(); else if(params[0] == "1") this.peoteDisplay.eraseLineBeforeCursor(); else if(params[0] == "2") this.peoteDisplay.eraseLine();
	}
	,il: function(params) {
		if(params.length == 0) params.push("1");
		this.peoteDisplay.insertLine(Std.parseInt(params[0]));
	}
	,dl: function(params) {
		if(params.length == 0) params.push("1");
		this.peoteDisplay.deleteLine(Std.parseInt(params[0]));
	}
	,__class__: de_peote_terminal_PeoteTerminal
};
var de_peote_terminal__$TermCode_TermCode_$Impl_$ = {};
de_peote_terminal__$TermCode_TermCode_$Impl_$.__name__ = true;
var de_peote_tools_Holes = function(size) {
	this.size = size - 1;
	this.hole = [];
	this.hole.push(new de_peote_tools_Hole(0));
	this.hole[0].end = this.size;
};
de_peote_tools_Holes.__name__ = true;
de_peote_tools_Holes.prototype = {
	addHole: function(pos) {
		var len = this.hole.length;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
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
				var x = new de_peote_tools_Hole(pos);
				this.hole.splice(i,0,x);
				return;
			}
		}
		this.hole.push(new de_peote_tools_Hole(pos));
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
	,is_empty: function() {
		var it_is = false;
		if(this.hole.length == 1) {
			if(this.hole[0].start == 0 && this.hole[0].end == this.size) it_is = true;
		}
		return it_is;
	}
	,__class__: de_peote_tools_Holes
};
var de_peote_tools_Hole = function(start) {
	this.start = start;
	this.end = start;
};
de_peote_tools_Hole.__name__ = true;
de_peote_tools_Hole.prototype = {
	__class__: de_peote_tools_Hole
};
var de_peote_view_ActiveProgram = function(program,program_nr,segment_size,buf_start) {
	this.size = -2;
	this.program = program;
	this.program_nr = program_nr;
	this.buf_start = buf_start * segment_size;
	this.element_holes = new de_peote_tools_Holes(segment_size);
};
de_peote_view_ActiveProgram.__name__ = true;
de_peote_view_ActiveProgram.prototype = {
	__class__: de_peote_view_ActiveProgram
};
var de_peote_view_Buffer = function(segment_size,max_segments) {
	this.segment_size = segment_size;
	this.max_segments = max_segments;
	this.activeProgram = [];
	this.segment_holes = new de_peote_tools_Holes(max_segments);
	this.activeProgramSlots = new haxe_ds_IntMap();
};
de_peote_view_Buffer.__name__ = true;
de_peote_view_Buffer.prototype = {
	'delete': function() {
		this.activeProgram = null;
		this.segment_holes = null;
		this.activeProgramSlots = null;
	}
	,delElement: function(e) {
		e.act_program.element_holes.addHole(Math.floor((e.buf_pos - e.act_program.buf_start) / de_peote_view_Buffer.VERTEX_COUNT));
		e.act_program.start = e.act_program.buf_start + 1 + e.act_program.element_holes.first() * de_peote_view_Buffer.VERTEX_COUNT;
		e.act_program.size = (e.act_program.element_holes.last() + 1 - e.act_program.element_holes.first()) * de_peote_view_Buffer.VERTEX_COUNT - 2;
		if(e.act_program.element_holes.is_empty()) {
			this.segment_holes.addHole(Math.floor(e.act_program.buf_start / this.segment_size / de_peote_view_Buffer.VERTEX_COUNT));
			HxOverrides.remove(this.activeProgramSlots.h[e.act_program.program_nr],e.act_program);
			HxOverrides.remove(this.activeProgram,e.act_program);
		}
	}
	,addElement: function(e,program,program_nr,slot) {
		if(slot == null) slot = 0;
		var buf_pos = 0;
		var act_program = null;
		if(!this.activeProgramSlots.h.hasOwnProperty(program_nr)) this.activeProgramSlots.set(program_nr,[]);
		if(slot == this.activeProgramSlots.h[program_nr].length) {
			act_program = new de_peote_view_ActiveProgram(program,program_nr,this.segment_size,this.segment_holes.getHole() * de_peote_view_Buffer.VERTEX_COUNT);
			this.activeProgramSlots.h[program_nr].push(act_program);
			this.activeProgram.push(act_program);
		} else act_program = this.activeProgramSlots.h[program_nr][slot];
		if(act_program.element_holes.hole.length == 0) this.addElement(e,program,program_nr,slot + 1); else {
			buf_pos = act_program.buf_start + act_program.element_holes.getHole() * de_peote_view_Buffer.VERTEX_COUNT;
			act_program.start = act_program.buf_start + 1 + act_program.element_holes.first() * de_peote_view_Buffer.VERTEX_COUNT;
			act_program.size = (act_program.element_holes.last() + 1 - act_program.element_holes.first()) * de_peote_view_Buffer.VERTEX_COUNT - 2;
			e.bufferUpdate(act_program,buf_pos);
		}
	}
	,__class__: de_peote_view_Buffer
};
var de_peote_view_PeoteView = function(max_displaylists,max_programs) {
	if(max_programs == null) max_programs = 100;
	if(max_displaylists == null) max_displaylists = 10;
	this.texturecache = new de_peote_view_texture_TextureCache(512,512,64);
	this.programCache = new de_peote_view_ProgramCache(max_programs + 1);
	this.startDisplaylist = null;
	var this1;
	this1 = new Array(max_displaylists);
	this.displaylist = this1;
	this.createBackgroundBuffer();
	var this2;
	this2 = new Uint8Array(4);
	this.picked = this2;
};
de_peote_view_PeoteView.__name__ = true;
de_peote_view_PeoteView.prototype = {
	setDisplaylist: function(param) {
		var d = this.displaylist[param.displaylist];
		if(d == null) {
			if(param.type == null) param.type = 0;
			if((param.type & 1) != 0) d = new de_peote_view_displaylist_Displaylist_$de_$peote_$view_$element_$ElementAnim_$de_$peote_$view_$element_$ElementAnimBuffer(param,this.programCache,this.texturecache); else d = new de_peote_view_displaylist_Displaylist_$de_$peote_$view_$element_$ElementSimple_$de_$peote_$view_$element_$ElementSimpleBuffer(param,this.programCache,this.texturecache);
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
		d.set(param);
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
			d["delete"]();
		}
	}
	,getDisplaylist: function(param) {
		return this.displaylist[param.displaylist != null?param.displaylist:de_peote_view_PeoteView.elementDefaults.displaylist];
	}
	,setProgram: function(program_nr,fsUrl,vsUrl) {
		if(vsUrl == null) vsUrl = "";
		if(fsUrl == null) fsUrl = "";
		this.programCache.loadShaderSrc(program_nr,fsUrl,vsUrl);
	}
	,setProgramSrc: function(program_nr,fsSrc,vsSrc) {
		if(vsSrc == null) vsSrc = "";
		if(fsSrc == null) fsSrc = "";
		this.programCache.setShaderSrc(program_nr,fsSrc,vsSrc);
	}
	,setImage: function(image_nr,imageUrl,w,h) {
		if(h == null) h = 0;
		if(w == null) w = 0;
		if(imageUrl == null) imageUrl = "";
		this.texturecache.setImage(image_nr,imageUrl,w,h);
	}
	,setElement: function(param) {
		if(param.element != null) this.displaylist[param.displaylist != null?param.displaylist:de_peote_view_PeoteView.elementDefaults.displaylist].setElement(param); else null;
	}
	,getElement: function(param) {
		var p = { };
		if(param.element != null) p = this.displaylist[param.displaylist != null?param.displaylist:de_peote_view_PeoteView.elementDefaults.displaylist].getElement(param.element); else null;
		return p;
	}
	,hasElement: function(param) {
		if(param.element == null) return false; else return this.displaylist[param.displaylist != null?param.displaylist:de_peote_view_PeoteView.elementDefaults.displaylist].hasElement(param.element);
	}
	,delElement: function(param) {
		if(param.element != null) this.displaylist[param.displaylist != null?param.displaylist:de_peote_view_PeoteView.elementDefaults.displaylist].delElement(param.element); else null;
	}
	,delAllElement: function(param) {
		this.displaylist[param.displaylist != null?param.displaylist:de_peote_view_PeoteView.elementDefaults.displaylist].delAllElement();
	}
	,setElementDefaults: function(param) {
		if(param.displaylist != null) de_peote_view_PeoteView.elementDefaults.displaylist = param.displaylist;
		if(param.program != null) de_peote_view_PeoteView.elementDefaults.program = param.program;
		if(param.image != null) de_peote_view_PeoteView.elementDefaults.image = param.image;
		if(param.tile != null) de_peote_view_PeoteView.elementDefaults.tile = param.tile;
		if(param.x != null) de_peote_view_PeoteView.elementDefaults.x = param.x;
		if(param.y != null) de_peote_view_PeoteView.elementDefaults.y = param.y;
		if(param.w != null) de_peote_view_PeoteView.elementDefaults.w = param.w;
		if(param.h != null) de_peote_view_PeoteView.elementDefaults.h = param.h;
		if(param.z != null) de_peote_view_PeoteView.elementDefaults.z = param.z;
	}
	,render: function(time,width,height,mouseX,mouseY,zoom,xOffset,yOffset) {
		if(yOffset == null) yOffset = 0;
		if(xOffset == null) xOffset = 0;
		lime_graphics_opengl_GL.context.viewport(0,0,width,height);
		lime_graphics_opengl_GL.context.scissor(0,0,width,height);
		lime_graphics_opengl_GL.context.enable(3089);
		lime_graphics_opengl_GL.context.clearColor(0.0,0.0,0.0,1.0);
		lime_graphics_opengl_GL.context.clear(16640);
		this.dl = this.startDisplaylist;
		while(this.dl != null) {
			var sx = (this.dl.x + xOffset) * zoom;
			var sy = (this.dl.y + yOffset) * zoom;
			var sw;
			if(this.dl.w != 0) sw = this.dl.w * zoom; else sw = width * zoom;
			var sh;
			if(this.dl.h != 0) sh = this.dl.h * zoom; else sh = height * zoom;
			if(sx < 0) sw += sx;
			sx = Std["int"](Math.max(0,Math.min(width,sx)));
			sw = Std["int"](Math.max(0,Math.min(width - sx,sw)));
			if(sy < 0) sh += sy;
			sy = Std["int"](Math.max(0,Math.min(height,sy)));
			sh = Std["int"](Math.max(0,Math.min(height - sy,sh)));
			lime_graphics_opengl_GL.context.scissor(sx,height - sh - sy,sw,sh);
			if(this.dl.blend == 0) {
				lime_graphics_opengl_GL.context.enable(2929);
				lime_graphics_opengl_GL.context.depthFunc(515);
			} else lime_graphics_opengl_GL.context.disable(2929);
			if(this.dl.blend != 0) {
				lime_graphics_opengl_GL.context.enable(3042);
				lime_graphics_opengl_GL.context.blendFunc(770,771);
			} else lime_graphics_opengl_GL.context.disable(3042);
			lime_graphics_opengl_GL.context.activeTexture(33984);
			lime_graphics_opengl_GL.context.bindTexture(3553,this.texturecache.texture);
			if(this.dl != this.startDisplaylist && this.dl.z != this.dl.prev.z) lime_graphics_opengl_GL.context.clear(256);
			if(this.dl.renderBackground) {
				lime_graphics_opengl_GL.context.bindBuffer(34962,this.background_buffer);
				lime_graphics_opengl_GL.context.enableVertexAttribArray(this.background_aPosition);
				lime_graphics_opengl_GL.context.vertexAttribPointer(this.background_aPosition,2,5126,false,8,0);
				lime_graphics_opengl_GL.context.useProgram(this.background_program);
				lime_graphics_opengl_GL.context.uniform4f(this.background_uRGBA,this.dl.r,this.dl.g,this.dl.b,this.dl.a);
				lime_graphics_opengl_GL.context.drawArrays(5,0,4);
				lime_graphics_opengl_GL.context.disableVertexAttribArray(this.background_aPosition);
			}
			lime_graphics_opengl_GL.context.bindBuffer(34962,this.dl.elemBuff.glBuff);
			this.dl.elemBuff.setVertexAttributes();
			var len = this.dl.buffer.activeProgram.length;
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				this.ap = this.dl.buffer.activeProgram[i];
				lime_graphics_opengl_GL.context.useProgram(this.ap.program.glProgram);
				lime_graphics_opengl_GL.context.uniform1i(this.ap.program.uniforms[2],0);
				lime_graphics_opengl_GL.context.uniform2f(this.ap.program.uniforms[3],mouseX / width * 2 - 1,mouseY / height * 2 - 1);
				lime_graphics_opengl_GL.context.uniform2f(this.ap.program.uniforms[4],width,height);
				lime_graphics_opengl_GL.context.uniform1f(this.ap.program.uniforms[5],time);
				lime_graphics_opengl_GL.context.uniform1f(this.ap.program.uniforms[6],this.dl.zoom * zoom);
				lime_graphics_opengl_GL.context.uniform2f(this.ap.program.uniforms[7],this.dl.x + this.dl.xOffset + xOffset,this.dl.y + this.dl.yOffset + yOffset);
				lime_graphics_opengl_GL.context.drawArrays(5,this.ap.start,this.ap.size);
				lime_graphics_opengl_GL.context.useProgram(null);
			}
			this.dl.elemBuff.disableVertexAttributes();
			lime_graphics_opengl_GL.context.bindBuffer(34962,null);
			lime_graphics_opengl_GL.context.bindTexture(3553,null);
			if(this.dl.next != this.startDisplaylist) this.dl = this.dl.next; else this.dl = null;
		}
		lime_graphics_opengl_GL.context.bindBuffer(34962,null);
		lime_graphics_opengl_GL.context.bindTexture(3553,null);
		lime_graphics_opengl_GL.context.useProgram(null);
	}
	,createBackgroundBuffer: function() {
		this.background_program = lime_utils_GLUtils.createProgram("\r\n\t\t\tattribute vec2 aPosition;\r\n\t\t\t\r\n\t\t\tvoid main(void)\r\n\t\t\t{\r\n\t\t\t\tgl_Position = mat4 ( // TODO: mathstar-optimize this ;)=\r\n\t\t\t\t\tvec4(2.0, 0.0, 0.0, 0.0),\r\n\t\t\t\t\tvec4(0.0, -2.0, 0.0, 0.0),\r\n\t\t\t\t\tvec4(0.0, 0.0, 0.0, 0.0),\r\n\t\t\t\t\tvec4(-1.0, 1.0, 0.0, 1.0)\r\n\t\t\t\t)\r\n\t\t\t\t* vec4 (aPosition, -65000.0 ,1.0); // 65000? -> zIndex (todo for <zero)\r\n\t\t\t}\r\n\t\t\t","precision mediump float;" + "\r\n\t\t\tuniform vec4 uRGBA;\r\n\t\t\tvoid main(void)\r\n\t\t\t{\r\n\t\t\t\tgl_FragColor = uRGBA;\r\n\t\t\t}\r\n\t\t\t");
		this.background_aPosition = lime_graphics_opengl_GL.context.getAttribLocation(this.background_program,"aPosition");
		this.background_uRGBA = lime_graphics_opengl_GL.context.getUniformLocation(this.background_program,"uRGBA");
		var data = [1,1,0,1,1,0,0,0];
		this.background_buffer = lime_graphics_opengl_GL.context.createBuffer();
		lime_graphics_opengl_GL.context.bindBuffer(34962,this.background_buffer);
		lime_graphics_opengl_GL.bufferData(34962,(function($this) {
			var $r;
			var this1;
			if(data != null) this1 = new Float32Array(data); else this1 = null;
			$r = this1;
			return $r;
		}(this)),35044);
		lime_graphics_opengl_GL.context.bindBuffer(34962,null);
	}
	,renderBackground: function(r,g,b,a) {
		lime_graphics_opengl_GL.context.bindBuffer(34962,this.background_buffer);
		lime_graphics_opengl_GL.context.enableVertexAttribArray(this.background_aPosition);
		lime_graphics_opengl_GL.context.vertexAttribPointer(this.background_aPosition,2,5126,false,8,0);
		lime_graphics_opengl_GL.context.useProgram(this.background_program);
		lime_graphics_opengl_GL.context.uniform4f(this.background_uRGBA,r,g,b,a);
		lime_graphics_opengl_GL.context.drawArrays(5,0,4);
		lime_graphics_opengl_GL.context.disableVertexAttribArray(this.background_aPosition);
	}
	,createFramebuffer: function() {
		this.fb_texture = de_peote_view_texture_Texture.createEmptyTexture(1,1);
		this.framebuffer = lime_graphics_opengl_GL.context.createFramebuffer();
		lime_graphics_opengl_GL.context.bindFramebuffer(36160,this.framebuffer);
		lime_graphics_opengl_GL.context.framebufferTexture2D(36160,36064,3553,this.fb_texture,0);
		lime_graphics_opengl_GL.context.bindFramebuffer(36160,null);
	}
	,pick: function(displaylist_nr,time,mouseX,mouseY,zoom,xOffset,yOffset) {
		if(yOffset == null) yOffset = 0;
		if(xOffset == null) xOffset = 0;
		var dl = this.displaylist[displaylist_nr];
		var width = 1;
		var height = 1;
		xOffset -= Math.round(mouseX / zoom);
		yOffset -= Math.round(mouseY / zoom);
		lime_graphics_opengl_GL.context.bindFramebuffer(36160,this.framebuffer);
		lime_graphics_opengl_GL.context.viewport(0,0,width,height);
		lime_graphics_opengl_GL.context.scissor(0,0,width,height);
		lime_graphics_opengl_GL.context.enable(3089);
		lime_graphics_opengl_GL.context.clearColor(0.0,0.0,0.0,0.0);
		lime_graphics_opengl_GL.context.clear(16640);
		var sx = (dl.x + xOffset) * zoom;
		var sy = (dl.y + yOffset) * zoom;
		var sw;
		if(dl.w != 0) sw = dl.w * zoom; else sw = width * zoom;
		var sh;
		if(dl.h != 0) sh = dl.h * zoom; else sh = height * zoom;
		if(sx < 0) sw += sx;
		sx = Std["int"](Math.max(0,Math.min(width,sx)));
		sw = Std["int"](Math.max(0,Math.min(width - sx,sw)));
		if(sy < 0) sh += sy;
		sy = Std["int"](Math.max(0,Math.min(height,sy)));
		sh = Std["int"](Math.max(0,Math.min(height - sy,sh)));
		lime_graphics_opengl_GL.context.scissor(sx,height - sh - sy,sw,sh);
		lime_graphics_opengl_GL.context.enable(2929);
		lime_graphics_opengl_GL.context.depthFunc(515);
		lime_graphics_opengl_GL.context.disable(3042);
		lime_graphics_opengl_GL.context.activeTexture(33984);
		lime_graphics_opengl_GL.context.bindTexture(3553,this.texturecache.texture);
		lime_graphics_opengl_GL.context.clear(256);
		lime_graphics_opengl_GL.context.bindBuffer(34962,dl.elemBuff.glBuff);
		dl.elemBuff.setVertexAttributes();
		var len = dl.buffer.activeProgram.length;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.ap = dl.buffer.activeProgram[i];
			lime_graphics_opengl_GL.context.useProgram(this.ap.program.glProgram);
			lime_graphics_opengl_GL.context.uniform1i(this.ap.program.uniforms[2],0);
			lime_graphics_opengl_GL.context.uniform2f(this.ap.program.uniforms[3],mouseX / width * 2 - 1,mouseY / height * 2 - 1);
			lime_graphics_opengl_GL.context.uniform2f(this.ap.program.uniforms[4],width,height);
			lime_graphics_opengl_GL.context.uniform1f(this.ap.program.uniforms[5],time);
			lime_graphics_opengl_GL.context.uniform1f(this.ap.program.uniforms[6],dl.zoom * zoom);
			lime_graphics_opengl_GL.context.uniform2f(this.ap.program.uniforms[7],dl.x + dl.xOffset + xOffset,dl.y + dl.yOffset + yOffset);
			lime_graphics_opengl_GL.context.drawArrays(5,this.ap.start,this.ap.size);
		}
		dl.elemBuff.disableVertexAttributes();
		lime_graphics_opengl_GL.context.bindBuffer(34962,null);
		lime_graphics_opengl_GL.context.bindTexture(3553,null);
		lime_graphics_opengl_GL.context.useProgram(null);
		if(lime_graphics_opengl_GL.context.checkFramebufferStatus(36160) == 36053) lime_graphics_opengl_GL.context.readPixels(0,0,width,height,6408,5121,this.picked); else null;
		lime_graphics_opengl_GL.context.bindFramebuffer(36160,null);
		return this.picked[3] << 24 | this.picked[2] << 16 | this.picked[1] << 8 | this.picked[0] - 1;
	}
	,__class__: de_peote_view_PeoteView
};
var de_peote_view_Program = function(defaultProgram) {
	this.glProgram = null;
	if(defaultProgram != null) {
		this.glProgram = defaultProgram.glProgram;
		this.uniforms = defaultProgram.uniforms;
	}
};
de_peote_view_Program.__name__ = true;
de_peote_view_Program.prototype = {
	parseType: function(type,s) {
		s = de_peote_view_Program.rComment.replace(s,"");
		s = de_peote_view_Program.rNewline.replace(s,"");
		s = de_peote_view_Program.rSpaces.replace(s,"");
		if((type & 4) != 0) {
			s = de_peote_view_Program.rZINDEXstart.replace(s,"#end_ZINDEX");
			s = de_peote_view_Program.rZINDEXend.replace(s,"$1");
		} else {
			s = de_peote_view_Program.rZINDEXstart.replace(s,"#end_ZINDEX$1");
			s = de_peote_view_Program.rZINDEXend.replace(s,"");
		}
		if((type & 8) != 0) {
			s = de_peote_view_Program.rRGBAstart.replace(s,"#end_RGBA");
			s = de_peote_view_Program.rRGBAend.replace(s,"$1");
		} else {
			s = de_peote_view_Program.rRGBAstart.replace(s,"#end_RGBA$1");
			s = de_peote_view_Program.rRGBAend.replace(s,"");
		}
		if((type & 16) != 0) {
			s = de_peote_view_Program.rROTATIONstart.replace(s,"#end_ROTATION");
			s = de_peote_view_Program.rROTATIONend.replace(s,"$1");
		} else {
			s = de_peote_view_Program.rROTATIONstart.replace(s,"#end_ROTATION$1");
			s = de_peote_view_Program.rROTATIONend.replace(s,"");
		}
		if((type & 128) != 0) {
			s = de_peote_view_Program.rPICKINGstart.replace(s,"#end_PICKING");
			s = de_peote_view_Program.rPICKINGend.replace(s,"$1");
		} else {
			s = de_peote_view_Program.rPICKINGstart.replace(s,"#end_PICKING$1");
			s = de_peote_view_Program.rPICKINGend.replace(s,"");
		}
		s = de_peote_view_Program.rMAX_TEXTURE_SIZE.replace(s,de_peote_view_texture_TextureCache.max_texture_size + ".0");
		return s;
	}
	,compile: function(elemBuff,type,fragmentShaderSrc,vertexShaderSrc,onerror) {
		vertexShaderSrc = this.parseType(type,vertexShaderSrc);
		vertexShaderSrc = "precision mediump float;" + vertexShaderSrc;
		fragmentShaderSrc = this.parseType(type,fragmentShaderSrc);
		fragmentShaderSrc = "precision mediump float;" + fragmentShaderSrc;
		var r = new EReg(";","g");
		var fs = lime_graphics_opengl_GL.context.createShader(35632);
		lime_graphics_opengl_GL.context.shaderSource(fs,fragmentShaderSrc);
		lime_graphics_opengl_GL.context.compileShader(fs);
		var vs = lime_graphics_opengl_GL.context.createShader(35633);
		lime_graphics_opengl_GL.context.shaderSource(vs,vertexShaderSrc);
		lime_graphics_opengl_GL.context.compileShader(vs);
		if(lime_graphics_opengl_GL.context.getShaderParameter(fs,35713) == 0) onerror("ERROR fragmentShader: " + lime_graphics_opengl_GL.context.getShaderInfoLog(fs)); else if(lime_graphics_opengl_GL.context.getShaderParameter(vs,35713) == 0) onerror("ERROR vertexShader: " + lime_graphics_opengl_GL.context.getShaderInfoLog(vs)); else {
			this.glProgram = lime_graphics_opengl_GL.context.createProgram();
			lime_graphics_opengl_GL.context.attachShader(this.glProgram,vs);
			lime_graphics_opengl_GL.context.attachShader(this.glProgram,fs);
			lime_graphics_opengl_GL.context.deleteShader(vs);
			lime_graphics_opengl_GL.context.deleteShader(fs);
			lime_graphics_opengl_GL.context.linkProgram(this.glProgram);
			if(lime_graphics_opengl_GL.context.getProgramParameter(this.glProgram,35714) == 0) onerror(lime_graphics_opengl_GL.context.getProgramInfoLog(this.glProgram) + "VALIDATE_STATUS: " + lime_graphics_opengl_GL.context.getProgramParameter(this.glProgram,35715) + "ERROR: " + lime_graphics_opengl_GL.context.getError()); else {
				var name;
				if(elemBuff != null) {
					if(elemBuff.attr == null) {
						var length = lime_graphics_opengl_GL.context.getProgramParameter(this.glProgram,35721);
						var this1;
						this1 = new Array(length);
						elemBuff.attr = this1;
						var _g1 = 0;
						var _g = lime_graphics_opengl_GL.context.getProgramParameter(this.glProgram,35721);
						while(_g1 < _g) {
							var i = _g1++;
							name = lime_graphics_opengl_GL.context.getActiveAttrib(this.glProgram,i).name;
							switch(name) {
							case "aPosition":
								var val = lime_graphics_opengl_GL.context.getAttribLocation(this.glProgram,name);
								elemBuff.attr[0] = val;
								break;
							case "aTexCoord":
								var val1 = lime_graphics_opengl_GL.context.getAttribLocation(this.glProgram,name);
								elemBuff.attr[1] = val1;
								break;
							case "aZindex":
								var val2 = lime_graphics_opengl_GL.context.getAttribLocation(this.glProgram,name);
								elemBuff.attr[2] = val2;
								break;
							case "aRGBA":
								var val3 = lime_graphics_opengl_GL.context.getAttribLocation(this.glProgram,name);
								elemBuff.attr[3] = val3;
								break;
							case "aRGBA_END":
								var val4 = lime_graphics_opengl_GL.context.getAttribLocation(this.glProgram,name);
								elemBuff.attr[4] = val4;
								break;
							case "aRotation":
								var val5 = lime_graphics_opengl_GL.context.getAttribLocation(this.glProgram,name);
								elemBuff.attr[5] = val5;
								break;
							case "aPivot":
								var val6 = lime_graphics_opengl_GL.context.getAttribLocation(this.glProgram,name);
								elemBuff.attr[6] = val6;
								break;
							case "aTime":
								var val7 = lime_graphics_opengl_GL.context.getAttribLocation(this.glProgram,name);
								elemBuff.attr[7] = val7;
								break;
							case "aElement":
								var val8 = lime_graphics_opengl_GL.context.getAttribLocation(this.glProgram,name);
								elemBuff.attr[8] = val8;
								break;
							}
						}
					}
				}
				var length1 = lime_graphics_opengl_GL.context.getProgramParameter(this.glProgram,35718);
				var this2;
				this2 = new Array(length1);
				this.uniforms = this2;
				var _g11 = 0;
				var _g2 = lime_graphics_opengl_GL.context.getProgramParameter(this.glProgram,35718);
				while(_g11 < _g2) {
					var i1 = _g11++;
					name = lime_graphics_opengl_GL.context.getActiveUniform(this.glProgram,i1).name;
					switch(name) {
					case "uModelViewMatrix":
						var val9 = lime_graphics_opengl_GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[0] = val9;
						break;
					case "uProjectionMatrix":
						var val10 = lime_graphics_opengl_GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[1] = val10;
						break;
					case "uImage":
						var val11 = lime_graphics_opengl_GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[2] = val11;
						break;
					case "uMouse":
						var val12 = lime_graphics_opengl_GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[3] = val12;
						break;
					case "uResolution":
						var val13 = lime_graphics_opengl_GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[4] = val13;
						break;
					case "uTime":
						var val14 = lime_graphics_opengl_GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[5] = val14;
						break;
					case "uZoom":
						var val15 = lime_graphics_opengl_GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[6] = val15;
						break;
					case "uDelta":
						var val16 = lime_graphics_opengl_GL.context.getUniformLocation(this.glProgram,name);
						this.uniforms[7] = val16;
						break;
					}
				}
			}
		}
	}
	,__class__: de_peote_view_Program
};
var de_peote_view_ProgramCache = function(max_programs) {
	this.attr = null;
	var this1;
	this1 = new Array(max_programs);
	this.fragmentShaderSrc = this1;
	var this2;
	this2 = new Array(max_programs);
	this.vertexShaderSrc = this2;
	var this3;
	this3 = new Array(max_programs);
	this.program = this3;
	var _g = 0;
	while(_g < max_programs) {
		var i = _g++;
		var val = new haxe_ds_IntMap();
		this.program[i] = val;
	}
	this.defaultProgram = new haxe_ds_IntMap();
	this.attr = new haxe_ds_IntMap();
};
de_peote_view_ProgramCache.__name__ = true;
de_peote_view_ProgramCache.prototype = {
	onerror: function(msg) {
		null;
	}
	,addDisplaylist: function(type,elemBuff) {
		if(!this.defaultProgram.h.hasOwnProperty(type)) {
			var p = new de_peote_view_Program();
			p.compile(elemBuff,type,elemBuff.getDefaultFragmentShaderSrc(),elemBuff.getDefaultVertexShaderSrc(),$bind(this,this.onerror));
			this.defaultProgram.h[type] = p;
			this.attr.h[type] = elemBuff.attr;
		} else elemBuff.attr = this.attr.h[type];
	}
	,getProgram: function(nr,type,elemBuff) {
		var p = this.program[nr].h[type];
		if(p == null) {
			var fs = this.fragmentShaderSrc[nr];
			var vs = this.vertexShaderSrc[nr];
			if(fs != null || vs != null) {
				p = new de_peote_view_Program();
				if(fs == null) fs = elemBuff.getDefaultFragmentShaderSrc();
				if(vs == null) vs = elemBuff.getDefaultVertexShaderSrc();
				p.compile(elemBuff,type,fs,vs,$bind(this,this.onerror));
			} else p = new de_peote_view_Program(this.defaultProgram.h[type]);
			this.program[nr].h[type] = p;
		}
		return p;
	}
	,setShaderSrc: function(nr,fs,vs) {
		if(fs != "" || vs != "") {
			var pmap = this.program[nr];
			var default_fs;
			var default_vs;
			var $it0 = pmap.keys();
			while( $it0.hasNext() ) {
				var type = $it0.next();
				if((type & 1) != 0) {
					default_fs = "\tvarying vec2 vTexCoord;\r\n\t\t#if_RGBA\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#else_RGBA\r\n\t\t\t#if_PICKING\r\n\t\t\tvarying vec4 vRGBA;\r\n\t\t\t#end_PICKING\r\n\t\t#end_RGBA\r\n\t\t\r\n\t\tuniform sampler2D uImage;\r\n\t\t\r\n\t\t#if_PICKING\r\n\t\tuniform vec2 uResolution;\r\n\t\t#end_PICKING\r\n\t\t\r\n\t\tvoid main(void)\r\n\t\t{\r\n\t\t\tvec4 texel = texture2D(uImage, vTexCoord / #MAX_TEXTURE_SIZE);\r\n\t\t\tif(texel.a < 0.5) discard; // TODO (z-order/blend mode!!!)\r\n\t\t\t#if_PICKING\r\n\t\t\tif (uResolution.x == 1.0) { \r\n\t\t\t\tgl_FragColor = vRGBA; //vec4(1.0, 1.0, 1.0, 1.0);\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\t#if_RGBA\r\n\t\t\t\tgl_FragColor = texel * vRGBA;\r\n\t\t\t\t#else_RGBA\r\n\t\t\t\tgl_FragColor = texel;\r\n\t\t\t\t#end_RGBA\t\t\t\t\r\n\t\t\t}\r\n\t\t\t#else_PICKING\r\n\t\t\t\t#if_RGBA\r\n\t\t\t\tgl_FragColor = texel * vRGBA;\r\n\t\t\t\t#else_RGBA\r\n\t\t\t\tgl_FragColor = texel;\r\n\t\t\t\t#end_RGBA\r\n\t\t\t#end_PICKING\r\n\t\t}\r\n\t";
					default_vs = "\tattribute vec4 aPosition;\r\n\t\t\r\n\t\t#if_ZINDEX\r\n\t\tattribute float aZindex;\r\n\t\t#end_ZINDEX\r\n\t\t\r\n\t\t#if_RGBA\r\n\t\tattribute vec4 aRGBA;\r\n\t\tattribute vec4 aRGBA_END;\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#end_RGBA\r\n\t\t\r\n\t\t#if_ROTATION\r\n\t\tattribute vec2 aRotation;\r\n\t\tattribute vec4 aPivot;\r\n\t\t#end_ROTATION\r\n\t\t\r\n\t\t#if_PICKING\r\n\t\tattribute vec4 aElement;\r\n\t\t\t#if_RGBA\r\n\t\t\t#else_RGBA\r\n\t\t\tvarying vec4 vRGBA;\r\n\t\t\t#end_RGBA\r\n\t\t#end_PICKING\r\n\t\t\t\r\n\t\tattribute vec2 aTime;\r\n\t\t\r\n\t\tattribute vec2 aTexCoord;\r\n\t\t\r\n\t\tvarying vec2 vTexCoord;\r\n\t\t\r\n\t\tuniform float uTime;\r\n\t\tuniform float uZoom;\r\n\t\tuniform vec2 uResolution;\r\n\t\tuniform vec2 uDelta;\r\n\t\t\r\n\t\tvoid main(void) {\r\n\t\t\t#if_RGBA\r\n\t\t\tvRGBA = aRGBA.wzyx + (aRGBA_END.wzyx - aRGBA.wzyx) * max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0));\t\r\n\t\t\t#end_RGBA\r\n\t\t\t\r\n\t\t\t#if_PICKING\r\n\t\t\tif (uResolution.x == 1.0) {\r\n\t\t\t\tvRGBA = aElement;\r\n\t\t\t}\r\n\t\t\t#end_PICKING\r\n\t\t\t\r\n\t\t\tvTexCoord = aTexCoord;\r\n\t\t\t\r\n\t\t\tvec2 VertexPosStart = vec2 ( aPosition ); //vec2 (aPosition.x, aPosition.y);\r\n\t\t\tvec2 VertexPosEnd   = vec2 ( aPosition.z, aPosition.w);\r\n\t\t\t\r\n\t\t\t#if_ROTATION\r\n\t\t\tfloat alpha = aRotation.x + (aRotation.y - aRotation.x)\t* max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0));\r\n\t\t\t\t\t\t\t\t\r\n\t\t\tVertexPosStart = (VertexPosStart - vec2(aPivot))\r\n\t\t\t\t\t\t\t* mat2 (\r\n\t\t\t\t\t\t\t\tvec2(cos(alpha), -sin(alpha)),\r\n\t\t\t\t\t\t\t\tvec2(sin(alpha),  cos(alpha))\r\n\t\t\t\t\t\t\t) + vec2(aPivot);\r\n\t\t\t\r\n\t\t\tVertexPosEnd = (VertexPosEnd -  vec2(aPivot.z, aPivot.w))\r\n\t\t\t\t\t\t\t* mat2 (\r\n\t\t\t\t\t\t\t\tvec2(cos(alpha), -sin(alpha)),\r\n\t\t\t\t\t\t\t\tvec2(sin(alpha),  cos(alpha))\r\n\t\t\t\t\t\t\t) + vec2(aPivot.z, aPivot.w);\r\n\t\t\t#end_ROTATION\r\n\t\t\t\t\r\n\t\t\tfloat zoom = uZoom;\r\n\t\t\tfloat width = uResolution.x;\r\n\t\t\tfloat height = uResolution.y;\r\n\t\t\tfloat deltaX = floor(uDelta.x);\r\n\t\t\tfloat deltaY = floor(uDelta.y);\r\n\t\t\t\r\n\t\t\tfloat right = width-deltaX*zoom;\r\n\t\t\tfloat left = -deltaX*zoom;\r\n\t\t\tfloat bottom = height-deltaY*zoom;\r\n\t\t\tfloat top = -deltaY * zoom;\r\n\t\t\t\t\t\t\r\n\t\t\tgl_Position = mat4 (\r\n\t\t\t\tvec4(2.0 / (right - left)*zoom, 0.0, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 2.0 / (top - bottom)*zoom, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 0.0, -0.001, 0.0),\r\n\t\t\t\tvec4(-(right + left) / (right - left), -(top + bottom) / (top - bottom), 0.0, 1.0)\r\n\t\t\t)\r\n\t\t\t* vec4( VertexPosStart + floor( \r\n\t\t\t\t\t\t\t\t(VertexPosEnd - VertexPosStart)\r\n\t\t\t\t\t\t\t\t* max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0))\r\n\t\t\t\t\t\t\t\t* zoom) / zoom ,\r\n\t\t\t\t#if_ZINDEX\r\n\t\t\t\taZindex\r\n\t\t\t\t#else_ZINDEX\r\n\t\t\t\t0.0\r\n\t\t\t\t#end_ZINDEX\r\n\t\t\t\t, 1.0\r\n\t\t\t)\r\n\t\t\t// rotate displaylist\r\n\t\t\t/** mat4 (\r\n\t\t\t\tvec4(cos(winkel), -sin(winkel), 0.0, 0.0),\r\n\t\t\t\tvec4(sin(winkel),  cos(winkel), 0.0, 0.0),\r\n\t\t\t\tvec4(        0.0,          1.0, 0.0, 0.0),\r\n\t\t\t\tvec4(        0.0,          0.0, 0.0, 1.0)\r\n\t\t\t)*/\r\n\t\t\t;\r\n\t\t}\r\n\t";
				} else {
					default_fs = "\tvarying vec2 vTexCoord;\r\n\t\t#if_RGBA\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#else_RGBA\r\n\t\t\t#if_PICKING\r\n\t\t\tvarying vec4 vRGBA;\r\n\t\t\t#end_PICKING\r\n\t\t#end_RGBA\r\n\t\t\r\n\t\tuniform sampler2D uImage;\r\n\t\t\r\n\t\t#if_PICKING\r\n\t\tuniform vec2 uResolution;\r\n\t\t#end_PICKING\r\n\t\t\r\n\t\tvoid main(void)\r\n\t\t{\r\n\t\t\tvec4 texel = texture2D(uImage, vTexCoord / #MAX_TEXTURE_SIZE);\r\n\t\t\tif(texel.a < 0.5) discard; // TODO (z-order/blend mode!!!)\r\n\t\t\t#if_PICKING\r\n\t\t\tif (uResolution.x == 1.0) { \r\n\t\t\t\tgl_FragColor = vRGBA; //vec4(1.0, 1.0, 1.0, 1.0);\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\t#if_RGBA\r\n\t\t\t\tgl_FragColor = texel * vRGBA;\r\n\t\t\t\t#else_RGBA\r\n\t\t\t\tgl_FragColor = texel;\r\n\t\t\t\t#end_RGBA\t\t\t\t\r\n\t\t\t}\r\n\t\t\t#else_PICKING\r\n\t\t\t\t#if_RGBA\r\n\t\t\t\tgl_FragColor = texel * vRGBA;\r\n\t\t\t\t#else_RGBA\r\n\t\t\t\tgl_FragColor = texel;\r\n\t\t\t\t#end_RGBA\r\n\t\t\t#end_PICKING\r\n\t\t}\r\n\t";
					default_vs = "\tattribute vec2 aPosition;\r\n\t\t\r\n\t\t#if_ZINDEX\r\n\t\tattribute float aZindex;\r\n\t\t#end_ZINDEX\r\n\t\t\r\n\t\t#if_RGBA\r\n\t\tattribute vec4 aRGBA;\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#end_RGBA\r\n\r\n\t\t#if_PICKING\r\n\t\tattribute vec4 aElement;\r\n\t\t\t#if_RGBA\r\n\t\t\t#else_RGBA\r\n\t\t\tvarying vec4 vRGBA;\r\n\t\t\t#end_RGBA\r\n\t\t#end_PICKING\r\n\t\t\t\r\n\t\tattribute vec2 aTexCoord;\r\n\t\t\r\n\t\tvarying vec2 vTexCoord;\r\n\t\t\r\n\t\tuniform float uTime;\r\n\t\tuniform float uZoom;\r\n\t\tuniform vec2 uResolution;\r\n\t\tuniform vec2 uDelta;\r\n\t\t\r\n\t\tvoid main(void) {\r\n\t\t\t#if_RGBA\r\n\t\t\tvRGBA = aRGBA.wzyx;\r\n\t\t\t#end_RGBA\r\n\t\t\t\r\n\t\t\t#if_PICKING\r\n\t\t\tif (uResolution.x == 1.0) {\r\n\t\t\t\tvRGBA = aElement;\r\n\t\t\t}\r\n\t\t\t#end_PICKING\r\n\t\t\t\r\n\t\t\tvTexCoord = aTexCoord;\r\n\t\t\t\t\t\t\r\n\t\t\tfloat zoom = uZoom;\r\n\t\t\tfloat width = uResolution.x;\r\n\t\t\tfloat height = uResolution.y;\r\n\t\t\tfloat deltaX = floor(uDelta.x);\r\n\t\t\tfloat deltaY = floor(uDelta.y);\r\n\t\t\t\r\n\t\t\tfloat right = width-deltaX*zoom;\r\n\t\t\tfloat left = -deltaX*zoom;\r\n\t\t\tfloat bottom = height-deltaY*zoom;\r\n\t\t\tfloat top = -deltaY * zoom;\r\n\t\t\t\r\n\t\t\tgl_Position = mat4 (\r\n\t\t\t\tvec4(2.0 / (right - left)*zoom, 0.0, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 2.0 / (top - bottom)*zoom, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 0.0, -0.001, 0.0),\r\n\t\t\t\tvec4(-(right + left) / (right - left), -(top + bottom) / (top - bottom), 0.0, 1.0)\r\n\t\t\t)\r\n\t\t\t* vec4 (aPosition ,\r\n\t\t\t\t#if_ZINDEX\r\n\t\t\t\taZindex\r\n\t\t\t\t#else_ZINDEX\r\n\t\t\t\t0.0\r\n\t\t\t\t#end_ZINDEX\r\n\t\t\t\t, 1.0\r\n\t\t\t\t);\r\n\t\t}\r\n\t";
				}
				if(fs == "") pmap.h[type].compile(null,type,default_fs,vs,$bind(this,this.onerror)); else if(vs == "") pmap.h[type].compile(null,type,fs,default_vs,$bind(this,this.onerror)); else pmap.h[type].compile(null,type,fs,vs,$bind(this,this.onerror));
			}
			if(fs != "") this.fragmentShaderSrc[nr] = fs;
			if(vs != "") this.vertexShaderSrc[nr] = vs;
		}
	}
	,loadShaderSrc: function(nr,fsUrl,vsUrl) {
		var fsSrc = "";
		if(fsUrl != "") {
			var req = js_Browser.createXMLHttpRequest();
			req.open("GET",fsUrl,false);
			req.send();
			fsSrc = req.responseText;
		}
		var vsSrc = "";
		if(vsUrl != "") {
			var req1 = js_Browser.createXMLHttpRequest();
			req1.open("GET",vsUrl,false);
			req1.send();
			vsSrc = req1.responseText;
		}
		this.setShaderSrc(nr,fsSrc,vsSrc);
	}
	,__class__: de_peote_view_ProgramCache
};
var de_peote_view_displaylist_I_$Displaylist = function() { };
de_peote_view_displaylist_I_$Displaylist.__name__ = true;
de_peote_view_displaylist_I_$Displaylist.prototype = {
	__class__: de_peote_view_displaylist_I_$Displaylist
};
var de_peote_view_displaylist_Displaylist_$de_$peote_$view_$element_$ElementAnim_$de_$peote_$view_$element_$ElementAnimBuffer = function(param,programCache,texturecache) {
	this.enable = true;
	this.renderBackground = false;
	this.a = 1.0;
	this.b = 0.0;
	this.g = 0.0;
	this.r = 0.0;
	this.blend = 1;
	this.zoom = 1;
	this.yOffset = 0;
	this.xOffset = 0;
	this.z = 0;
	this.h = 0;
	this.w = 0;
	this.y = 0;
	this.x = 0;
	this.next = this;
	this.prev = this;
	this.type = 0;
	this.texturecache = texturecache;
	this.programCache = programCache;
	this.type = param.type;
	if(param.elements != null) this.elements = param.elements; else this.elements = 1;
	if(param.programs != null) this.programs = param.programs; else this.programs = 1;
	this.segments = Math.floor(Math.max(param.segments != null?param.segments:1,this.programs));
	if(param.z != null) this.z = param.z; else this.z = 0;
	var this1;
	this1 = new Array(this.elements);
	this.element = this1;
	this.buffer = new de_peote_view_Buffer(Math.floor(this.elements / this.segments),this.segments);
	this.elemBuff = js_Boot.__cast(new de_peote_view_element_ElementAnimBuffer(this.type,this.buffer) , de_peote_view_element_I_$ElementBuffer);
	programCache.addDisplaylist(this.type,this.elemBuff);
};
de_peote_view_displaylist_Displaylist_$de_$peote_$view_$element_$ElementAnim_$de_$peote_$view_$element_$ElementAnimBuffer.__name__ = true;
de_peote_view_displaylist_Displaylist_$de_$peote_$view_$element_$ElementAnim_$de_$peote_$view_$element_$ElementAnimBuffer.__interfaces__ = [de_peote_view_displaylist_I_$Displaylist];
de_peote_view_displaylist_Displaylist_$de_$peote_$view_$element_$ElementAnim_$de_$peote_$view_$element_$ElementAnimBuffer.prototype = {
	'delete': function() {
		this.elemBuff["delete"]();
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
		if(param.zoom != null) this.zoom = param.zoom;
		if(param.blend != null) this.blend = param.blend;
		if(param.r != null) this.r = param.r;
		if(param.g != null) this.g = param.g;
		if(param.b != null) this.b = param.b;
		if(param.a != null) this.a = param.a;
		if(param.renderBackground != null) this.renderBackground = param.renderBackground;
	}
	,setElement: function(param) {
		var e = this.element[param.element];
		if(e == null) {
			e = js_Boot.__cast(new de_peote_view_element_ElementAnim() , de_peote_view_element_I_$Element);
			if(param.program == null) param.program = this.programCache.program.length - 1;
			this.buffer.addElement(e,this.programCache.getProgram(param.program,this.type,this.elemBuff),param.program);
			this.element[param.element] = e;
		} else if(param.program != null && param.program != e.act_program.program_nr) {
			this.elemBuff.del(e);
			this.buffer.delElement(e);
			this.buffer.addElement(e,this.programCache.getProgram(param.program,this.type,this.elemBuff),param.program);
		}
		e.set(this.elemBuff,param,this.texturecache);
	}
	,getElement: function(element_nr) {
		var e = this.element[element_nr];
		if(e == null) return null; else return e.get();
	}
	,hasElement: function(element_nr) {
		return this.element[element_nr] != null;
	}
	,delElement: function(element_nr) {
		var e = this.element[element_nr];
		if(e != null) {
			this.element[element_nr] = null;
			this.buffer.delElement(e);
			e.del(this.elemBuff,this.texturecache);
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
	,__class__: de_peote_view_displaylist_Displaylist_$de_$peote_$view_$element_$ElementAnim_$de_$peote_$view_$element_$ElementAnimBuffer
};
var de_peote_view_displaylist_Displaylist_$de_$peote_$view_$element_$ElementSimple_$de_$peote_$view_$element_$ElementSimpleBuffer = function(param,programCache,texturecache) {
	this.enable = true;
	this.renderBackground = false;
	this.a = 1.0;
	this.b = 0.0;
	this.g = 0.0;
	this.r = 0.0;
	this.blend = 1;
	this.zoom = 1;
	this.yOffset = 0;
	this.xOffset = 0;
	this.z = 0;
	this.h = 0;
	this.w = 0;
	this.y = 0;
	this.x = 0;
	this.next = this;
	this.prev = this;
	this.type = 0;
	this.texturecache = texturecache;
	this.programCache = programCache;
	this.type = param.type;
	if(param.elements != null) this.elements = param.elements; else this.elements = 1;
	if(param.programs != null) this.programs = param.programs; else this.programs = 1;
	this.segments = Math.floor(Math.max(param.segments != null?param.segments:1,this.programs));
	if(param.z != null) this.z = param.z; else this.z = 0;
	var this1;
	this1 = new Array(this.elements);
	this.element = this1;
	this.buffer = new de_peote_view_Buffer(Math.floor(this.elements / this.segments),this.segments);
	this.elemBuff = js_Boot.__cast(new de_peote_view_element_ElementSimpleBuffer(this.type,this.buffer) , de_peote_view_element_I_$ElementBuffer);
	programCache.addDisplaylist(this.type,this.elemBuff);
};
de_peote_view_displaylist_Displaylist_$de_$peote_$view_$element_$ElementSimple_$de_$peote_$view_$element_$ElementSimpleBuffer.__name__ = true;
de_peote_view_displaylist_Displaylist_$de_$peote_$view_$element_$ElementSimple_$de_$peote_$view_$element_$ElementSimpleBuffer.__interfaces__ = [de_peote_view_displaylist_I_$Displaylist];
de_peote_view_displaylist_Displaylist_$de_$peote_$view_$element_$ElementSimple_$de_$peote_$view_$element_$ElementSimpleBuffer.prototype = {
	'delete': function() {
		this.elemBuff["delete"]();
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
		if(param.zoom != null) this.zoom = param.zoom;
		if(param.blend != null) this.blend = param.blend;
		if(param.r != null) this.r = param.r;
		if(param.g != null) this.g = param.g;
		if(param.b != null) this.b = param.b;
		if(param.a != null) this.a = param.a;
		if(param.renderBackground != null) this.renderBackground = param.renderBackground;
	}
	,setElement: function(param) {
		var e = this.element[param.element];
		if(e == null) {
			e = js_Boot.__cast(new de_peote_view_element_ElementSimple() , de_peote_view_element_I_$Element);
			if(param.program == null) param.program = this.programCache.program.length - 1;
			this.buffer.addElement(e,this.programCache.getProgram(param.program,this.type,this.elemBuff),param.program);
			this.element[param.element] = e;
		} else if(param.program != null && param.program != e.act_program.program_nr) {
			this.elemBuff.del(e);
			this.buffer.delElement(e);
			this.buffer.addElement(e,this.programCache.getProgram(param.program,this.type,this.elemBuff),param.program);
		}
		e.set(this.elemBuff,param,this.texturecache);
	}
	,getElement: function(element_nr) {
		var e = this.element[element_nr];
		if(e == null) return null; else return e.get();
	}
	,hasElement: function(element_nr) {
		return this.element[element_nr] != null;
	}
	,delElement: function(element_nr) {
		var e = this.element[element_nr];
		if(e != null) {
			this.element[element_nr] = null;
			this.buffer.delElement(e);
			e.del(this.elemBuff,this.texturecache);
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
	,__class__: de_peote_view_displaylist_Displaylist_$de_$peote_$view_$element_$ElementSimple_$de_$peote_$view_$element_$ElementSimpleBuffer
};
var de_peote_view_element_BufferData = function(length) {
	this.dataView = new DataView(new ArrayBuffer(length),0);
};
de_peote_view_element_BufferData.__name__ = true;
de_peote_view_element_BufferData.prototype = {
	write_2_Short: function(a1,a2) {
		this.dataView.setInt16(this.byteOffset,a1,true);
		this.dataView.setInt16(this.byteOffset + 2,a2,true);
		this.byteOffset += 4;
	}
	,write_1_UInt: function(a1) {
		this.dataView.setUint32(this.byteOffset,a1,true);
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
	,__class__: de_peote_view_element_BufferData
};
var de_peote_view_element_I_$Element = function() { };
de_peote_view_element_I_$Element.__name__ = true;
de_peote_view_element_I_$Element.prototype = {
	__class__: de_peote_view_element_I_$Element
};
var de_peote_view_element_ElementAnim = function() {
	this.time = 0.0;
	this.tile = -1;
	this.image = -1;
	this.x = de_peote_view_PeoteView.elementDefaults.x;
	this.y = de_peote_view_PeoteView.elementDefaults.y;
	this.w = de_peote_view_PeoteView.elementDefaults.w;
	this.h = de_peote_view_PeoteView.elementDefaults.h;
	this.z = de_peote_view_PeoteView.elementDefaults.z;
	this.rgba = de_peote_view_PeoteView.elementDefaults.rgba;
	this.rotation = de_peote_view_PeoteView.elementDefaults.rotation;
	this.pivotX = de_peote_view_PeoteView.elementDefaults.pivotX;
	this.pivotY = de_peote_view_PeoteView.elementDefaults.pivotY;
};
de_peote_view_element_ElementAnim.__name__ = true;
de_peote_view_element_ElementAnim.__interfaces__ = [de_peote_view_element_I_$Element];
de_peote_view_element_ElementAnim.prototype = {
	set: function(elemBuff,param,texturecache) {
		if(param.x == null) param.x = this.x;
		if(param.y == null) param.y = this.y;
		if(param.w == null) param.w = this.w;
		if(param.h == null) param.h = this.h;
		if(param.rgba == null) param.rgba = this.rgba;
		if(param.rotation == null) param.rotation = this.rotation;
		if(param.pivotX == null) param.pivotX = this.pivotX;
		if(param.pivotY == null) param.pivotY = this.pivotY;
		if(param.time == null) param.time = this.time;
		if(param.start == null) param.start = { };
		if(param.start.x == null) param.start.x = param.x;
		if(param.start.y == null) param.start.y = param.y;
		if(param.start.w == null) param.start.w = param.w;
		if(param.start.h == null) param.start.h = param.h;
		if(param.start.rgba == null) param.start.rgba = param.rgba;
		if(param.start.rotation == null) param.start.rotation = param.rotation;
		if(param.start.pivotX == null) param.start.pivotX = param.pivotX;
		if(param.start.pivotY == null) param.start.pivotY = param.pivotY;
		if(param.start.time == null) param.start.time = param.time;
		if(param.end == null) param.end = { };
		if(param.end.x == null) param.end.x = param.x;
		if(param.end.y == null) param.end.y = param.y;
		if(param.end.w == null) param.end.w = param.w;
		if(param.end.h == null) param.end.h = param.h;
		if(param.end.rgba == null) param.end.rgba = param.rgba;
		if(param.end.rotation == null) param.end.rotation = param.rotation;
		if(param.end.pivotX == null) param.end.pivotX = param.pivotX;
		if(param.end.pivotY == null) param.end.pivotY = param.pivotY;
		if(param.end.time == null) param.end.time = param.time;
		if(param.z == null) param.z = this.z;
		if(param.image == null && de_peote_view_PeoteView.elementDefaults.image != null) param.image = de_peote_view_PeoteView.elementDefaults.image;
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
		if(param.tile != null) this.tile = param.tile; else if(de_peote_view_PeoteView.elementDefaults.tile != null) this.tile = de_peote_view_PeoteView.elementDefaults.tile;
		if(this.tile != -1) {
			param.tx += Math.floor(this.tile % 16 * param.tw / 16);
			param.ty += Math.floor(Math.floor(this.tile / 16) * param.th / 16);
			param.tw = Math.floor(param.tw / 16);
			param.th = Math.floor(param.th / 16);
		}
		elemBuff.set(this,param);
		this.x = param.end.x;
		this.y = param.end.y;
		this.w = param.end.w;
		this.h = param.end.h;
		this.rgba = param.end.rgba;
		this.rotation = param.end.rotation;
		this.pivotX = param.end.pivotX;
		this.pivotY = param.end.pivotY;
		this.time = param.end.time;
		this.z = param.z;
	}
	,get: function() {
		return { x : this.x, y : this.y, z : this.z, w : this.w, h : this.h, rgba : this.rgba, tile : this.tile, image : this.image};
	}
	,bufferUpdate: function(a,b) {
		this.act_program = a;
		this.buf_pos = b;
	}
	,del: function(elemBuff,texturecache) {
		elemBuff.del(this);
		if(this.image != -1) texturecache.unUseImage(this.image);
	}
	,__class__: de_peote_view_element_ElementAnim
};
var de_peote_view_element_I_$ElementBuffer = function() { };
de_peote_view_element_I_$ElementBuffer.__name__ = true;
de_peote_view_element_I_$ElementBuffer.prototype = {
	__class__: de_peote_view_element_I_$ElementBuffer
};
var de_peote_view_element_ElementAnimBuffer = function(t,b) {
	this.fill_bytes = false;
	this.attr = null;
	this.type = t;
	var offset = 8;
	if((this.type & 4) != 0) {
		this.ZINDEX_OFFSET = offset;
		offset += 4;
	}
	if((this.type & 8) != 0) {
		this.RGBA_OFFSET = offset;
		offset += 4;
		this.RGBA_END_OFFSET = offset;
		offset += 4;
	}
	if((this.type & 16) != 0) {
		this.ROTATION_OFFSET = offset;
		offset += 8;
		this.PIVOT_OFFSET = offset;
		offset += 8;
	}
	if((this.type & 128) != 0) {
		this.PICKING_OFFSET = offset;
		offset += 4;
	}
	this.TIME_OFFSET = offset;
	offset += 8;
	this.TEX_OFFSET = offset;
	offset += 4;
	this.VERTEX_STRIDE = offset;
	if(this.VERTEX_STRIDE % 8 != 0) {
		this.VERTEX_STRIDE += 4;
		this.fill_bytes = true;
	}
	var full = new de_peote_view_element_BufferData(b.max_segments * b.segment_size * de_peote_view_element_ElementAnimBuffer.VERTEX_COUNT * this.VERTEX_STRIDE);
	this.glBuff = lime_graphics_opengl_GL.context.createBuffer();
	lime_graphics_opengl_GL.context.bindBuffer(34962,this.glBuff);
	lime_graphics_opengl_GL.context.bufferData(34962,full.dataView,35044);
	lime_graphics_opengl_GL.context.bindBuffer(34962,null);
	this.buffFull = new de_peote_view_element_BufferData(de_peote_view_element_ElementAnimBuffer.VERTEX_COUNT * this.VERTEX_STRIDE);
	this.emptyBuffFull = new de_peote_view_element_BufferData(de_peote_view_element_ElementAnimBuffer.VERTEX_COUNT * this.VERTEX_STRIDE);
};
de_peote_view_element_ElementAnimBuffer.__name__ = true;
de_peote_view_element_ElementAnimBuffer.__interfaces__ = [de_peote_view_element_I_$ElementBuffer];
de_peote_view_element_ElementAnimBuffer.prototype = {
	'delete': function() {
		lime_graphics_opengl_GL.context.deleteBuffer(this.glBuff);
	}
	,disableVertexAttributes: function() {
		lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[0]);
		if((this.type & 4) != 0) lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[2]);
		if((this.type & 8) != 0) {
			lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[3]);
			lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[4]);
		}
		if((this.type & 16) != 0) {
			lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[5]);
			lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[6]);
		}
		if((this.type & 128) != 0) lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[8]);
		lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[7]);
		lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[1]);
	}
	,setVertexAttributes: function() {
		lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[0]);
		if((this.type & 4) != 0) lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[2]);
		if((this.type & 8) != 0) {
			lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[3]);
			lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[4]);
		}
		if((this.type & 16) != 0) {
			lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[5]);
			lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[6]);
		}
		if((this.type & 128) != 0) lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[8]);
		lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[7]);
		lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[1]);
		lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[0],4,5122,false,this.VERTEX_STRIDE,0);
		if((this.type & 4) != 0) lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[2],1,5126,false,this.VERTEX_STRIDE,this.ZINDEX_OFFSET);
		if((this.type & 8) != 0) {
			lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[3],4,5121,true,this.VERTEX_STRIDE,this.RGBA_OFFSET);
			lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[4],4,5121,true,this.VERTEX_STRIDE,this.RGBA_END_OFFSET);
		}
		if((this.type & 16) != 0) {
			lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[5],2,5126,false,this.VERTEX_STRIDE,this.ROTATION_OFFSET);
			lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[6],4,5122,false,this.VERTEX_STRIDE,this.PIVOT_OFFSET);
		}
		if((this.type & 128) != 0) lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[8],4,5121,true,this.VERTEX_STRIDE,this.PICKING_OFFSET);
		lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[7],2,5126,false,this.VERTEX_STRIDE,this.TIME_OFFSET);
		lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[1],2,5122,false,this.VERTEX_STRIDE,this.TEX_OFFSET);
	}
	,del: function(e) {
		lime_graphics_opengl_GL.context.bindBuffer(34962,this.glBuff);
		lime_graphics_opengl_GL.context.bufferSubData(34962,e.buf_pos * this.VERTEX_STRIDE,this.emptyBuffFull.dataView);
		lime_graphics_opengl_GL.context.bindBuffer(34962,null);
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
		var rgba1 = param.start.rgba;
		var rgba2 = param.end.rgba;
		var t1 = param.start.time;
		var t2 = param.end.time;
		var z = param.z;
		var tx = param.tx;
		var ty = param.ty;
		var txw = tx + param.tw;
		var tyh = ty + param.th;
		var rotation1 = param.start.rotation / 180 * Math.PI;
		var rotation2 = param.end.rotation / 180 * Math.PI;
		var pivot_x1 = x1 + param.start.pivotX;
		var pivot_y1 = y1 + param.start.pivotY;
		var pivot_x2 = x2 + param.end.pivotX;
		var pivot_y2 = y2 + param.end.pivotY;
		param.element += 1;
		this.buffFull.byteOffset = 0;
		this.buffFull.write_2_Short(xw1,yh1);
		this.buffFull.write_2_Short(xw2,yh2);
		if((this.type & 4) != 0) this.buffFull.write_1_Float(z);
		if((this.type & 8) != 0) {
			this.buffFull.write_1_UInt(rgba1);
			this.buffFull.write_1_UInt(rgba2);
		}
		if((this.type & 16) != 0) {
			this.buffFull.write_2_Float(rotation1,rotation2);
			this.buffFull.write_2_Short(pivot_x1,pivot_y1);
			this.buffFull.write_2_Short(pivot_x2,pivot_y2);
		}
		if((this.type & 128) != 0) this.buffFull.write_1_UInt(param.element);
		this.buffFull.write_2_Float(t1,t2);
		this.buffFull.write_2_Short(txw,tyh);
		if(this.fill_bytes) this.buffFull.write_1_Float(0.0);
		this.buffFull.write_2_Short(xw1,yh1);
		this.buffFull.write_2_Short(xw2,yh2);
		if((this.type & 4) != 0) this.buffFull.write_1_Float(z);
		if((this.type & 8) != 0) {
			this.buffFull.write_1_UInt(rgba1);
			this.buffFull.write_1_UInt(rgba2);
		}
		if((this.type & 16) != 0) {
			this.buffFull.write_2_Float(rotation1,rotation2);
			this.buffFull.write_2_Short(pivot_x1,pivot_y1);
			this.buffFull.write_2_Short(pivot_x2,pivot_y2);
		}
		if((this.type & 128) != 0) this.buffFull.write_1_UInt(param.element);
		this.buffFull.write_2_Float(t1,t2);
		this.buffFull.write_2_Short(txw,tyh);
		if(this.fill_bytes) this.buffFull.write_1_Float(0.0);
		this.buffFull.write_2_Short(x1,yh1);
		this.buffFull.write_2_Short(x2,yh2);
		if((this.type & 4) != 0) this.buffFull.write_1_Float(z);
		if((this.type & 8) != 0) {
			this.buffFull.write_1_UInt(rgba1);
			this.buffFull.write_1_UInt(rgba2);
		}
		if((this.type & 16) != 0) {
			this.buffFull.write_2_Float(rotation1,rotation2);
			this.buffFull.write_2_Short(pivot_x1,pivot_y1);
			this.buffFull.write_2_Short(pivot_x2,pivot_y2);
		}
		if((this.type & 128) != 0) this.buffFull.write_1_UInt(param.element);
		this.buffFull.write_2_Float(t1,t2);
		this.buffFull.write_2_Short(tx,tyh);
		if(this.fill_bytes) this.buffFull.write_1_Float(0.0);
		this.buffFull.write_2_Short(xw1,y1);
		this.buffFull.write_2_Short(xw2,y2);
		if((this.type & 4) != 0) this.buffFull.write_1_Float(z);
		if((this.type & 8) != 0) {
			this.buffFull.write_1_UInt(rgba1);
			this.buffFull.write_1_UInt(rgba2);
		}
		if((this.type & 16) != 0) {
			this.buffFull.write_2_Float(rotation1,rotation2);
			this.buffFull.write_2_Short(pivot_x1,pivot_y1);
			this.buffFull.write_2_Short(pivot_x2,pivot_y2);
		}
		if((this.type & 128) != 0) this.buffFull.write_1_UInt(param.element);
		this.buffFull.write_2_Float(t1,t2);
		this.buffFull.write_2_Short(txw,ty);
		if(this.fill_bytes) this.buffFull.write_1_Float(0.0);
		this.buffFull.write_2_Short(x1,y1);
		this.buffFull.write_2_Short(x2,y2);
		if((this.type & 4) != 0) this.buffFull.write_1_Float(z);
		if((this.type & 8) != 0) {
			this.buffFull.write_1_UInt(rgba1);
			this.buffFull.write_1_UInt(rgba2);
		}
		if((this.type & 16) != 0) {
			this.buffFull.write_2_Float(rotation1,rotation2);
			this.buffFull.write_2_Short(pivot_x1,pivot_y1);
			this.buffFull.write_2_Short(pivot_x2,pivot_y2);
		}
		if((this.type & 128) != 0) this.buffFull.write_1_UInt(param.element);
		this.buffFull.write_2_Float(t1,t2);
		this.buffFull.write_2_Short(tx,ty);
		if(this.fill_bytes) this.buffFull.write_1_Float(0.0);
		this.buffFull.write_2_Short(x1,y1);
		this.buffFull.write_2_Short(x2,y2);
		if((this.type & 4) != 0) this.buffFull.write_1_Float(z);
		if((this.type & 8) != 0) {
			this.buffFull.write_1_UInt(rgba1);
			this.buffFull.write_1_UInt(rgba2);
		}
		if((this.type & 16) != 0) {
			this.buffFull.write_2_Float(rotation1,rotation2);
			this.buffFull.write_2_Short(pivot_x1,pivot_y1);
			this.buffFull.write_2_Short(pivot_x2,pivot_y2);
		}
		if((this.type & 128) != 0) this.buffFull.write_1_UInt(param.element);
		this.buffFull.write_2_Float(t1,t2);
		this.buffFull.write_2_Short(tx,ty);
		this.buffFull.byteOffset = 0;
		lime_graphics_opengl_GL.context.bindBuffer(34962,this.glBuff);
		lime_graphics_opengl_GL.context.bufferSubData(34962,buf_pos * this.VERTEX_STRIDE,this.buffFull.dataView);
		lime_graphics_opengl_GL.context.bindBuffer(34962,null);
	}
	,getDefaultFragmentShaderSrc: function() {
		return "\tvarying vec2 vTexCoord;\r\n\t\t#if_RGBA\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#else_RGBA\r\n\t\t\t#if_PICKING\r\n\t\t\tvarying vec4 vRGBA;\r\n\t\t\t#end_PICKING\r\n\t\t#end_RGBA\r\n\t\t\r\n\t\tuniform sampler2D uImage;\r\n\t\t\r\n\t\t#if_PICKING\r\n\t\tuniform vec2 uResolution;\r\n\t\t#end_PICKING\r\n\t\t\r\n\t\tvoid main(void)\r\n\t\t{\r\n\t\t\tvec4 texel = texture2D(uImage, vTexCoord / #MAX_TEXTURE_SIZE);\r\n\t\t\tif(texel.a < 0.5) discard; // TODO (z-order/blend mode!!!)\r\n\t\t\t#if_PICKING\r\n\t\t\tif (uResolution.x == 1.0) { \r\n\t\t\t\tgl_FragColor = vRGBA; //vec4(1.0, 1.0, 1.0, 1.0);\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\t#if_RGBA\r\n\t\t\t\tgl_FragColor = texel * vRGBA;\r\n\t\t\t\t#else_RGBA\r\n\t\t\t\tgl_FragColor = texel;\r\n\t\t\t\t#end_RGBA\t\t\t\t\r\n\t\t\t}\r\n\t\t\t#else_PICKING\r\n\t\t\t\t#if_RGBA\r\n\t\t\t\tgl_FragColor = texel * vRGBA;\r\n\t\t\t\t#else_RGBA\r\n\t\t\t\tgl_FragColor = texel;\r\n\t\t\t\t#end_RGBA\r\n\t\t\t#end_PICKING\r\n\t\t}\r\n\t";
	}
	,getDefaultVertexShaderSrc: function() {
		return "\tattribute vec4 aPosition;\r\n\t\t\r\n\t\t#if_ZINDEX\r\n\t\tattribute float aZindex;\r\n\t\t#end_ZINDEX\r\n\t\t\r\n\t\t#if_RGBA\r\n\t\tattribute vec4 aRGBA;\r\n\t\tattribute vec4 aRGBA_END;\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#end_RGBA\r\n\t\t\r\n\t\t#if_ROTATION\r\n\t\tattribute vec2 aRotation;\r\n\t\tattribute vec4 aPivot;\r\n\t\t#end_ROTATION\r\n\t\t\r\n\t\t#if_PICKING\r\n\t\tattribute vec4 aElement;\r\n\t\t\t#if_RGBA\r\n\t\t\t#else_RGBA\r\n\t\t\tvarying vec4 vRGBA;\r\n\t\t\t#end_RGBA\r\n\t\t#end_PICKING\r\n\t\t\t\r\n\t\tattribute vec2 aTime;\r\n\t\t\r\n\t\tattribute vec2 aTexCoord;\r\n\t\t\r\n\t\tvarying vec2 vTexCoord;\r\n\t\t\r\n\t\tuniform float uTime;\r\n\t\tuniform float uZoom;\r\n\t\tuniform vec2 uResolution;\r\n\t\tuniform vec2 uDelta;\r\n\t\t\r\n\t\tvoid main(void) {\r\n\t\t\t#if_RGBA\r\n\t\t\tvRGBA = aRGBA.wzyx + (aRGBA_END.wzyx - aRGBA.wzyx) * max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0));\t\r\n\t\t\t#end_RGBA\r\n\t\t\t\r\n\t\t\t#if_PICKING\r\n\t\t\tif (uResolution.x == 1.0) {\r\n\t\t\t\tvRGBA = aElement;\r\n\t\t\t}\r\n\t\t\t#end_PICKING\r\n\t\t\t\r\n\t\t\tvTexCoord = aTexCoord;\r\n\t\t\t\r\n\t\t\tvec2 VertexPosStart = vec2 ( aPosition ); //vec2 (aPosition.x, aPosition.y);\r\n\t\t\tvec2 VertexPosEnd   = vec2 ( aPosition.z, aPosition.w);\r\n\t\t\t\r\n\t\t\t#if_ROTATION\r\n\t\t\tfloat alpha = aRotation.x + (aRotation.y - aRotation.x)\t* max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0));\r\n\t\t\t\t\t\t\t\t\r\n\t\t\tVertexPosStart = (VertexPosStart - vec2(aPivot))\r\n\t\t\t\t\t\t\t* mat2 (\r\n\t\t\t\t\t\t\t\tvec2(cos(alpha), -sin(alpha)),\r\n\t\t\t\t\t\t\t\tvec2(sin(alpha),  cos(alpha))\r\n\t\t\t\t\t\t\t) + vec2(aPivot);\r\n\t\t\t\r\n\t\t\tVertexPosEnd = (VertexPosEnd -  vec2(aPivot.z, aPivot.w))\r\n\t\t\t\t\t\t\t* mat2 (\r\n\t\t\t\t\t\t\t\tvec2(cos(alpha), -sin(alpha)),\r\n\t\t\t\t\t\t\t\tvec2(sin(alpha),  cos(alpha))\r\n\t\t\t\t\t\t\t) + vec2(aPivot.z, aPivot.w);\r\n\t\t\t#end_ROTATION\r\n\t\t\t\t\r\n\t\t\tfloat zoom = uZoom;\r\n\t\t\tfloat width = uResolution.x;\r\n\t\t\tfloat height = uResolution.y;\r\n\t\t\tfloat deltaX = floor(uDelta.x);\r\n\t\t\tfloat deltaY = floor(uDelta.y);\r\n\t\t\t\r\n\t\t\tfloat right = width-deltaX*zoom;\r\n\t\t\tfloat left = -deltaX*zoom;\r\n\t\t\tfloat bottom = height-deltaY*zoom;\r\n\t\t\tfloat top = -deltaY * zoom;\r\n\t\t\t\t\t\t\r\n\t\t\tgl_Position = mat4 (\r\n\t\t\t\tvec4(2.0 / (right - left)*zoom, 0.0, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 2.0 / (top - bottom)*zoom, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 0.0, -0.001, 0.0),\r\n\t\t\t\tvec4(-(right + left) / (right - left), -(top + bottom) / (top - bottom), 0.0, 1.0)\r\n\t\t\t)\r\n\t\t\t* vec4( VertexPosStart + floor( \r\n\t\t\t\t\t\t\t\t(VertexPosEnd - VertexPosStart)\r\n\t\t\t\t\t\t\t\t* max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0))\r\n\t\t\t\t\t\t\t\t* zoom) / zoom ,\r\n\t\t\t\t#if_ZINDEX\r\n\t\t\t\taZindex\r\n\t\t\t\t#else_ZINDEX\r\n\t\t\t\t0.0\r\n\t\t\t\t#end_ZINDEX\r\n\t\t\t\t, 1.0\r\n\t\t\t)\r\n\t\t\t// rotate displaylist\r\n\t\t\t/** mat4 (\r\n\t\t\t\tvec4(cos(winkel), -sin(winkel), 0.0, 0.0),\r\n\t\t\t\tvec4(sin(winkel),  cos(winkel), 0.0, 0.0),\r\n\t\t\t\tvec4(        0.0,          1.0, 0.0, 0.0),\r\n\t\t\t\tvec4(        0.0,          0.0, 0.0, 1.0)\r\n\t\t\t)*/\r\n\t\t\t;\r\n\t\t}\r\n\t";
	}
	,__class__: de_peote_view_element_ElementAnimBuffer
};
var de_peote_view_element_ElementSimple = function() {
	this.tile = -1;
	this.image = -1;
	this.x = de_peote_view_PeoteView.elementDefaults.x;
	this.y = de_peote_view_PeoteView.elementDefaults.y;
	this.w = de_peote_view_PeoteView.elementDefaults.w;
	this.h = de_peote_view_PeoteView.elementDefaults.h;
	this.z = de_peote_view_PeoteView.elementDefaults.z;
};
de_peote_view_element_ElementSimple.__name__ = true;
de_peote_view_element_ElementSimple.__interfaces__ = [de_peote_view_element_I_$Element];
de_peote_view_element_ElementSimple.prototype = {
	set: function(elemBuff,param,texturecache) {
		if(param.x == null) param.x = this.x; else this.x = param.x;
		if(param.y == null) param.y = this.y; else this.y = param.y;
		if(param.w == null) param.w = this.w; else this.w = param.w;
		if(param.h == null) param.h = this.h; else this.h = param.h;
		if(param.z == null) param.z = this.z; else this.z = param.z;
		if(param.rgba == null) param.rgba = de_peote_view_PeoteView.elementDefaults.rgba;
		if(param.image == null && de_peote_view_PeoteView.elementDefaults.image != null) param.image = de_peote_view_PeoteView.elementDefaults.image;
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
		if(param.tile != null) this.tile = param.tile; else if(de_peote_view_PeoteView.elementDefaults.tile != null) this.tile = de_peote_view_PeoteView.elementDefaults.tile;
		if(this.tile != -1) {
			param.tx += Math.floor(this.tile % 16 * param.tw / 16);
			param.ty += Math.floor(Math.floor(this.tile / 16) * param.th / 16);
			param.tw = Math.floor(param.tw / 16);
			param.th = Math.floor(param.th / 16);
		}
		elemBuff.set(this,param);
	}
	,get: function() {
		return { x : this.x, y : this.y, z : this.z, w : this.w, h : this.h, tile : this.tile, image : this.image};
	}
	,bufferUpdate: function(a,b) {
		this.act_program = a;
		this.buf_pos = b;
	}
	,del: function(elemBuff,texturecache) {
		elemBuff.del(this);
		if(this.image != -1) texturecache.unUseImage(this.image);
	}
	,__class__: de_peote_view_element_ElementSimple
};
var de_peote_view_element_ElementSimpleBuffer = function(t,b) {
	this.attr = null;
	this.type = t;
	var offset = 4;
	if((this.type & 4) != 0) {
		this.ZINDEX_OFFSET = offset;
		offset += 4;
	}
	if((this.type & 8) != 0) {
		this.RGBA_OFFSET = offset;
		offset += 4;
	}
	if((this.type & 128) != 0) {
		this.PICKING_OFFSET = offset;
		offset += 4;
	}
	this.TEX_OFFSET = offset;
	offset += 4;
	this.VERTEX_STRIDE = offset;
	var full = new de_peote_view_element_BufferData(b.max_segments * b.segment_size * de_peote_view_element_ElementSimpleBuffer.VERTEX_COUNT * this.VERTEX_STRIDE);
	this.glBuff = lime_graphics_opengl_GL.context.createBuffer();
	lime_graphics_opengl_GL.context.bindBuffer(34962,this.glBuff);
	lime_graphics_opengl_GL.context.bufferData(34962,full.dataView,35044);
	lime_graphics_opengl_GL.context.bindBuffer(34962,null);
	this.buffFull = new de_peote_view_element_BufferData(de_peote_view_element_ElementSimpleBuffer.VERTEX_COUNT * this.VERTEX_STRIDE);
	this.emptyBuffFull = new de_peote_view_element_BufferData(de_peote_view_element_ElementSimpleBuffer.VERTEX_COUNT * this.VERTEX_STRIDE);
};
de_peote_view_element_ElementSimpleBuffer.__name__ = true;
de_peote_view_element_ElementSimpleBuffer.__interfaces__ = [de_peote_view_element_I_$ElementBuffer];
de_peote_view_element_ElementSimpleBuffer.prototype = {
	'delete': function() {
		lime_graphics_opengl_GL.context.deleteBuffer(this.glBuff);
	}
	,disableVertexAttributes: function() {
		lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[0]);
		if((this.type & 4) != 0) lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[2]);
		if((this.type & 8) != 0) lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[3]);
		if((this.type & 128) != 0) lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[8]);
		lime_graphics_opengl_GL.context.disableVertexAttribArray(this.attr[1]);
	}
	,setVertexAttributes: function() {
		lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[0]);
		if((this.type & 4) != 0) lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[2]);
		if((this.type & 8) != 0) lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[3]);
		if((this.type & 128) != 0) lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[8]);
		lime_graphics_opengl_GL.context.enableVertexAttribArray(this.attr[1]);
		lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[0],2,5122,false,this.VERTEX_STRIDE,0);
		if((this.type & 4) != 0) lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[2],1,5126,false,this.VERTEX_STRIDE,this.ZINDEX_OFFSET);
		if((this.type & 8) != 0) lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[3],4,5121,true,this.VERTEX_STRIDE,this.RGBA_OFFSET);
		if((this.type & 128) != 0) lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[8],4,5121,true,this.VERTEX_STRIDE,this.PICKING_OFFSET);
		lime_graphics_opengl_GL.context.vertexAttribPointer(this.attr[1],2,5122,false,this.VERTEX_STRIDE,this.TEX_OFFSET);
	}
	,del: function(e) {
		lime_graphics_opengl_GL.context.bindBuffer(34962,this.glBuff);
		lime_graphics_opengl_GL.context.bufferSubData(34962,e.buf_pos * this.VERTEX_STRIDE,this.emptyBuffFull.dataView);
		lime_graphics_opengl_GL.context.bindBuffer(34962,null);
	}
	,rotX: function(x,y,pivotX,pivotY,alpha) {
		return Math.round((x - pivotX) * Math.cos(alpha) - (y - pivotY) * Math.sin(alpha) + pivotX);
	}
	,rotY: function(x,y,pivotX,pivotY,alpha) {
		return Math.round((y - pivotY) * Math.cos(alpha) + (x - pivotX) * Math.sin(alpha) + pivotY);
	}
	,set: function(e,param) {
		var buf_pos = e.buf_pos;
		var x;
		var y;
		var xw;
		var yh;
		var x1;
		var y1;
		var xw1;
		var yh1;
		if((this.type & 16) != 0 && param.rotation != null) {
			if(param.pivotX != null) param.pivotX = param.x + param.pivotX; else param.pivotX = param.x;
			if(param.pivotY != null) param.pivotY = param.y + param.pivotY; else param.pivotY = param.y;
			var alpha = param.rotation / 180 * Math.PI;
			x = this.rotX(param.x,param.y,param.pivotX,param.pivotY,alpha);
			y = this.rotY(param.x,param.y,param.pivotX,param.pivotY,alpha);
			xw = this.rotX(param.x + param.w,param.y + param.h,param.pivotX,param.pivotY,alpha);
			yh = this.rotY(param.x + param.w,param.y + param.h,param.pivotX,param.pivotY,alpha);
			x1 = this.rotX(param.x,param.y + param.h,param.pivotX,param.pivotY,alpha);
			y1 = this.rotY(param.x + param.w,param.y,param.pivotX,param.pivotY,alpha);
			xw1 = this.rotX(param.x + param.w,param.y,param.pivotX,param.pivotY,alpha);
			yh1 = this.rotY(param.x,param.y + param.h,param.pivotX,param.pivotY,alpha);
		} else {
			x = x1 = param.x;
			y = y1 = param.y;
			xw = xw1 = x + param.w;
			yh = yh1 = y + param.h;
		}
		var z = param.z;
		var rgba = param.rgba;
		var tx = param.tx;
		var ty = param.ty;
		var txw = tx + param.tw;
		var tyh = ty + param.th;
		param.element += 1;
		this.buffFull.byteOffset = 0;
		this.buffFull.write_2_Short(xw,yh);
		if((this.type & 4) != 0) this.buffFull.write_1_Float(z);
		if((this.type & 8) != 0) this.buffFull.write_1_UInt(rgba);
		if((this.type & 128) != 0) this.buffFull.write_1_UInt(param.element);
		this.buffFull.write_2_Short(txw,tyh);
		this.buffFull.write_2_Short(xw,yh);
		if((this.type & 4) != 0) this.buffFull.write_1_Float(z);
		if((this.type & 8) != 0) this.buffFull.write_1_UInt(rgba);
		if((this.type & 128) != 0) this.buffFull.write_1_UInt(param.element);
		this.buffFull.write_2_Short(txw,tyh);
		this.buffFull.write_2_Short(x1,yh1);
		if((this.type & 4) != 0) this.buffFull.write_1_Float(z);
		if((this.type & 8) != 0) this.buffFull.write_1_UInt(rgba);
		if((this.type & 128) != 0) this.buffFull.write_1_UInt(param.element);
		this.buffFull.write_2_Short(tx,tyh);
		this.buffFull.write_2_Short(xw1,y1);
		if((this.type & 4) != 0) this.buffFull.write_1_Float(z);
		if((this.type & 8) != 0) this.buffFull.write_1_UInt(rgba);
		if((this.type & 128) != 0) this.buffFull.write_1_UInt(param.element);
		this.buffFull.write_2_Short(txw,ty);
		this.buffFull.write_2_Short(x,y);
		if((this.type & 4) != 0) this.buffFull.write_1_Float(z);
		if((this.type & 8) != 0) this.buffFull.write_1_UInt(rgba);
		if((this.type & 128) != 0) this.buffFull.write_1_UInt(param.element);
		this.buffFull.write_2_Short(tx,ty);
		this.buffFull.write_2_Short(x,y);
		if((this.type & 4) != 0) this.buffFull.write_1_Float(z);
		if((this.type & 8) != 0) this.buffFull.write_1_UInt(rgba);
		if((this.type & 128) != 0) this.buffFull.write_1_UInt(param.element);
		this.buffFull.write_2_Short(tx,ty);
		this.buffFull.byteOffset = 0;
		lime_graphics_opengl_GL.context.bindBuffer(34962,this.glBuff);
		lime_graphics_opengl_GL.context.bufferSubData(34962,buf_pos * this.VERTEX_STRIDE,this.buffFull.dataView);
		lime_graphics_opengl_GL.context.bindBuffer(34962,null);
	}
	,getDefaultFragmentShaderSrc: function() {
		return "\tvarying vec2 vTexCoord;\r\n\t\t#if_RGBA\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#else_RGBA\r\n\t\t\t#if_PICKING\r\n\t\t\tvarying vec4 vRGBA;\r\n\t\t\t#end_PICKING\r\n\t\t#end_RGBA\r\n\t\t\r\n\t\tuniform sampler2D uImage;\r\n\t\t\r\n\t\t#if_PICKING\r\n\t\tuniform vec2 uResolution;\r\n\t\t#end_PICKING\r\n\t\t\r\n\t\tvoid main(void)\r\n\t\t{\r\n\t\t\tvec4 texel = texture2D(uImage, vTexCoord / #MAX_TEXTURE_SIZE);\r\n\t\t\tif(texel.a < 0.5) discard; // TODO (z-order/blend mode!!!)\r\n\t\t\t#if_PICKING\r\n\t\t\tif (uResolution.x == 1.0) { \r\n\t\t\t\tgl_FragColor = vRGBA; //vec4(1.0, 1.0, 1.0, 1.0);\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\t#if_RGBA\r\n\t\t\t\tgl_FragColor = texel * vRGBA;\r\n\t\t\t\t#else_RGBA\r\n\t\t\t\tgl_FragColor = texel;\r\n\t\t\t\t#end_RGBA\t\t\t\t\r\n\t\t\t}\r\n\t\t\t#else_PICKING\r\n\t\t\t\t#if_RGBA\r\n\t\t\t\tgl_FragColor = texel * vRGBA;\r\n\t\t\t\t#else_RGBA\r\n\t\t\t\tgl_FragColor = texel;\r\n\t\t\t\t#end_RGBA\r\n\t\t\t#end_PICKING\r\n\t\t}\r\n\t";
	}
	,getDefaultVertexShaderSrc: function() {
		return "\tattribute vec2 aPosition;\r\n\t\t\r\n\t\t#if_ZINDEX\r\n\t\tattribute float aZindex;\r\n\t\t#end_ZINDEX\r\n\t\t\r\n\t\t#if_RGBA\r\n\t\tattribute vec4 aRGBA;\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#end_RGBA\r\n\r\n\t\t#if_PICKING\r\n\t\tattribute vec4 aElement;\r\n\t\t\t#if_RGBA\r\n\t\t\t#else_RGBA\r\n\t\t\tvarying vec4 vRGBA;\r\n\t\t\t#end_RGBA\r\n\t\t#end_PICKING\r\n\t\t\t\r\n\t\tattribute vec2 aTexCoord;\r\n\t\t\r\n\t\tvarying vec2 vTexCoord;\r\n\t\t\r\n\t\tuniform float uTime;\r\n\t\tuniform float uZoom;\r\n\t\tuniform vec2 uResolution;\r\n\t\tuniform vec2 uDelta;\r\n\t\t\r\n\t\tvoid main(void) {\r\n\t\t\t#if_RGBA\r\n\t\t\tvRGBA = aRGBA.wzyx;\r\n\t\t\t#end_RGBA\r\n\t\t\t\r\n\t\t\t#if_PICKING\r\n\t\t\tif (uResolution.x == 1.0) {\r\n\t\t\t\tvRGBA = aElement;\r\n\t\t\t}\r\n\t\t\t#end_PICKING\r\n\t\t\t\r\n\t\t\tvTexCoord = aTexCoord;\r\n\t\t\t\t\t\t\r\n\t\t\tfloat zoom = uZoom;\r\n\t\t\tfloat width = uResolution.x;\r\n\t\t\tfloat height = uResolution.y;\r\n\t\t\tfloat deltaX = floor(uDelta.x);\r\n\t\t\tfloat deltaY = floor(uDelta.y);\r\n\t\t\t\r\n\t\t\tfloat right = width-deltaX*zoom;\r\n\t\t\tfloat left = -deltaX*zoom;\r\n\t\t\tfloat bottom = height-deltaY*zoom;\r\n\t\t\tfloat top = -deltaY * zoom;\r\n\t\t\t\r\n\t\t\tgl_Position = mat4 (\r\n\t\t\t\tvec4(2.0 / (right - left)*zoom, 0.0, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 2.0 / (top - bottom)*zoom, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 0.0, -0.001, 0.0),\r\n\t\t\t\tvec4(-(right + left) / (right - left), -(top + bottom) / (top - bottom), 0.0, 1.0)\r\n\t\t\t)\r\n\t\t\t* vec4 (aPosition ,\r\n\t\t\t\t#if_ZINDEX\r\n\t\t\t\taZindex\r\n\t\t\t\t#else_ZINDEX\r\n\t\t\t\t0.0\r\n\t\t\t\t#end_ZINDEX\r\n\t\t\t\t, 1.0\r\n\t\t\t\t);\r\n\t\t}\r\n\t";
	}
	,__class__: de_peote_view_element_ElementSimpleBuffer
};
var de_peote_view_texture_Image = function(image_url,w,h) {
	this.used = 0;
	this.holePos = -1;
	this.url = "";
	this.url = image_url;
	this.tw = w;
	this.th = h;
};
de_peote_view_texture_Image.__name__ = true;
de_peote_view_texture_Image.prototype = {
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
				var tmp_context = tmp_canvas.getContext("2d",null);
				tmp_context.clearRect(0,0,tmp_canvas.width,tmp_canvas.height);
				tmp_context.drawImage(image,0,0,image.width,image.height);
				var image_bytes = tmp_context.getImageData(0,0,tmp_canvas.width,tmp_canvas.height);
				var imageData;
				var view = image_bytes.data;
				var this1;
				if(view != null) this1 = new Uint8Array(view); else this1 = null;
				imageData = this1;
				tmp_canvas = null;
				tmp_context = null;
				image_bytes = null;
				onload(_g,image.width,image.height,imageData);
			} catch( e ) {
				if (e instanceof js__$Boot_HaxeError) e = e.val;
				onerror(e);
			}
		};
		image.src = this.url;
	}
	,__class__: de_peote_view_texture_Image
};
var de_peote_view_texture_Texture = function() { };
de_peote_view_texture_Texture.__name__ = true;
de_peote_view_texture_Texture.createEmptyTexture = function(width,height) {
	var texture = lime_graphics_opengl_GL.context.createTexture();
	lime_graphics_opengl_GL.context.bindTexture(3553,texture);
	lime_graphics_opengl_GL.context.texImage2D(3553,0,6408,width,height,0,6408,5121,null);
	lime_graphics_opengl_GL.context.texParameteri(3553,10240,9729);
	lime_graphics_opengl_GL.context.texParameteri(3553,10241,9729);
	lime_graphics_opengl_GL.context.bindTexture(3553,null);
	return texture;
};
de_peote_view_texture_Texture.createSubTexture = function(t,x,y,w,h,data) {
	lime_graphics_opengl_GL.context.bindTexture(3553,t);
	lime_graphics_opengl_GL.context.texSubImage2D(3553,0,x,y,w,h,6408,5121,data);
	lime_graphics_opengl_GL.context.bindTexture(3553,null);
};
var de_peote_view_texture_TextureCache = function(img_width,img_height,max_images) {
	this.isLoading = 0;
	this.texture = null;
	this.segment_width = img_width;
	this.segment_height = img_height;
	de_peote_view_texture_TextureCache.max_texture_size = Math.floor(lime_graphics_opengl_GL.context.getParameter(3379) / 2);
	var this1;
	this1 = new Array(max_images);
	this.image = this1;
	this.unusedImages = new haxe_ds_IntMap();
	this.imgLoadQueue = [];
	this.max_h_segments = Math.floor(de_peote_view_texture_TextureCache.max_texture_size / this.segment_width);
	this.max_v_segments = Math.floor(de_peote_view_texture_TextureCache.max_texture_size / this.segment_height);
	this.segment_holes = new de_peote_tools_Holes(this.max_h_segments * this.max_v_segments);
	this.texture = de_peote_view_texture_Texture.createEmptyTexture(this.max_h_segments * this.segment_width,this.max_v_segments * this.segment_height);
};
de_peote_view_texture_TextureCache.__name__ = true;
de_peote_view_texture_TextureCache.prototype = {
	onerror: function(msg) {
		null;
	}
	,setImage: function(image_nr,imageUrl,w,h) {
		if(h == null) h = 0;
		if(w == null) w = 0;
		if(imageUrl == null) imageUrl = "";
		if(w == 0) w = this.segment_width;
		if(h == 0) h = this.segment_height;
		var val = new de_peote_view_texture_Image(imageUrl,w,h);
		this.image[image_nr] = val;
	}
	,useImage: function(image_nr) {
		var img = this.image[image_nr];
		if(img.used++ == 0) {
			if(img.holePos == -1) {
				if(this.segment_holes.hole.length == 0) {
					if(this.clear() == 0) img = null;
				}
				if(img != null) {
					img.holePos = this.segment_holes.getHole();
					img.tx = img.holePos % this.max_h_segments * this.segment_width;
					img.ty = Math.floor(img.holePos / this.max_h_segments) * this.segment_height;
					this.imgLoadQueue.push(img);
					if(img.url != "") {
						if(this.isLoading++ == 0) this.imgLoadQueue.shift().load($bind(this,this.onImageLoad),$bind(this,this.onerror));
					}
				}
			}
		}
		return img;
	}
	,unUseImage: function(image_nr) {
		var img = this.image[image_nr];
		if(--img.used == 0) this.unusedImages.h[image_nr] = true;
	}
	,onImageLoad: function(img,w,h,data) {
		if(img.holePos > -1) de_peote_view_texture_Texture.createSubTexture(this.texture,img.holePos % this.max_h_segments * this.segment_width,Math.floor(img.holePos / this.max_h_segments) * this.segment_height,w,h,data);
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
	,__class__: de_peote_view_texture_TextureCache
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
haxe__$Int64__$_$_$Int64.__name__ = true;
haxe__$Int64__$_$_$Int64.prototype = {
	__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
haxe_ds_IntMap.__name__ = true;
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
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
	,__class__: haxe_ds_IntMap
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,keys: function() {
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = true;
haxe_io_Bytes.alloc = function(length) {
	return new haxe_io_Bytes(new ArrayBuffer(length));
};
haxe_io_Bytes.ofString = function(s) {
	var a = [];
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
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) return hb;
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.prototype = {
	getDouble: function(pos) {
		if(this.data == null) this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		return this.data.getFloat64(pos,true);
	}
	,getFloat: function(pos) {
		if(this.data == null) this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		return this.data.getFloat32(pos,true);
	}
	,setInt32: function(pos,v) {
		if(this.data == null) this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		this.data.setInt32(pos,v,true);
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
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
	,__class__: haxe_io_Bytes
};
var haxe_io_Eof = function() { };
haxe_io_Eof.__name__ = true;
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
var haxe_io_FPHelper = function() { };
haxe_io_FPHelper.__name__ = true;
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) return 0.0;
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af;
	if(f < 0) af = -f; else af = f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else {
		var av;
		if(v < 0) av = -v; else av = v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var sig;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		sig = Math.round(v1);
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0?-2147483648:0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
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
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_Browser = function() { };
js_Browser.__name__ = true;
js_Browser.createXMLHttpRequest = function() {
	if(typeof XMLHttpRequest != "undefined") return new XMLHttpRequest();
	if(typeof ActiveXObject != "undefined") return new ActiveXObject("Microsoft.XMLHTTP");
	throw new js__$Boot_HaxeError("Unable to create XMLHttpRequest object.");
};
var js_html__$CanvasElement_CanvasUtil = function() { };
js_html__$CanvasElement_CanvasUtil.__name__ = true;
js_html__$CanvasElement_CanvasUtil.getContextWebGL = function(canvas,attribs) {
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
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
js_html_compat_ArrayBuffer.__name__ = true;
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_DataView = function(buffer,byteOffset,byteLength) {
	this.buf = buffer;
	if(byteOffset == null) this.offset = 0; else this.offset = byteOffset;
	if(byteLength == null) this.length = buffer.byteLength - this.offset; else this.length = byteLength;
	if(this.offset < 0 || this.length < 0 || this.offset + this.length > buffer.byteLength) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
};
js_html_compat_DataView.__name__ = true;
js_html_compat_DataView.prototype = {
	getInt8: function(byteOffset) {
		var v = this.buf.a[this.offset + byteOffset];
		if(v >= 128) return v - 256; else return v;
	}
	,getUint8: function(byteOffset) {
		return this.buf.a[this.offset + byteOffset];
	}
	,getInt16: function(byteOffset,littleEndian) {
		var v = this.getUint16(byteOffset,littleEndian);
		if(v >= 32768) return v - 65536; else return v;
	}
	,getUint16: function(byteOffset,littleEndian) {
		if(littleEndian) return this.buf.a[this.offset + byteOffset] | this.buf.a[this.offset + byteOffset + 1] << 8; else return this.buf.a[this.offset + byteOffset] << 8 | this.buf.a[this.offset + byteOffset + 1];
	}
	,getInt32: function(byteOffset,littleEndian) {
		var p = this.offset + byteOffset;
		var a = this.buf.a[p++];
		var b = this.buf.a[p++];
		var c = this.buf.a[p++];
		var d = this.buf.a[p++];
		if(littleEndian) return a | b << 8 | c << 16 | d << 24; else return d | c << 8 | b << 16 | a << 24;
	}
	,getUint32: function(byteOffset,littleEndian) {
		var v = this.getInt32(byteOffset,littleEndian);
		if(v < 0) return v + 4294967296.; else return v;
	}
	,getFloat32: function(byteOffset,littleEndian) {
		return haxe_io_FPHelper.i32ToFloat(this.getInt32(byteOffset,littleEndian));
	}
	,getFloat64: function(byteOffset,littleEndian) {
		var a = this.getInt32(byteOffset,littleEndian);
		var b = this.getInt32(byteOffset + 4,littleEndian);
		return haxe_io_FPHelper.i64ToDouble(littleEndian?a:b,littleEndian?b:a);
	}
	,setInt8: function(byteOffset,value) {
		if(value < 0) this.buf.a[byteOffset + this.offset] = value + 128 & 255; else this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setUint8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setInt16: function(byteOffset,value,littleEndian) {
		this.setUint16(byteOffset,value < 0?value + 65536:value,littleEndian);
	}
	,setUint16: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
		} else {
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p] = value & 255;
		}
	}
	,setInt32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,value,littleEndian);
	}
	,setUint32: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p++] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >>> 24;
		} else {
			this.buf.a[p++] = value >>> 24;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value & 255;
		}
	}
	,setFloat32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,haxe_io_FPHelper.floatToI32(value),littleEndian);
	}
	,setFloat64: function(byteOffset,value,littleEndian) {
		var i64 = haxe_io_FPHelper.doubleToI64(value);
		if(littleEndian) {
			this.setUint32(byteOffset,i64.low);
			this.setUint32(byteOffset,i64.high);
		} else {
			this.setUint32(byteOffset,i64.high);
			this.setUint32(byteOffset,i64.low);
		}
	}
	,__class__: js_html_compat_DataView
};
var js_html_compat_Uint8Array = function() { };
js_html_compat_Uint8Array.__name__ = true;
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g = 0;
		while(_g < arg1) {
			var i = _g++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) offset = 0;
		if(length == null) length = buffer.byteLength - offset;
		if(offset == 0) arr = buffer.a; else arr = buffer.a.slice(offset,offset + length);
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	var t = this;
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			t[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			t[i1 + offset] = a1[i1];
		}
	} else throw new js__$Boot_HaxeError("TODO");
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var t = this;
	var a = js_html_compat_Uint8Array._new(t.slice(start,end));
	a.byteOffset = start;
	return a;
};
var lime_AssetCache = function() {
	this.audio = new haxe_ds_StringMap();
	this.font = new haxe_ds_StringMap();
	this.image = new haxe_ds_StringMap();
	this.version = Std["int"](Math.random() * 1000000);
};
lime_AssetCache.__name__ = true;
lime_AssetCache.prototype = {
	__class__: lime_AssetCache
};
var lime_app_Event_$Void_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$Void_$Void.__name__ = true;
lime_app_Event_$Void_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function() {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i]();
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$Void_$Void
};
var lime_Assets = function() { };
lime_Assets.__name__ = true;
var lime__$backend_html5_HTML5Application = function(parent) {
	this.gameDeviceCache = new haxe_ds_IntMap();
	this.parent = parent;
	this.currentUpdate = 0;
	this.lastUpdate = 0;
	this.nextUpdate = 0;
	this.framePeriod = -1;
	lime_audio_AudioManager.init();
};
lime__$backend_html5_HTML5Application.__name__ = true;
lime__$backend_html5_HTML5Application.prototype = {
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
		case 124:
			return 1073741928;
		case 125:
			return 1073741929;
		case 126:
			return 1073741930;
		case 186:
			return 59;
		case 187:
			return 61;
		case 188:
			return 44;
		case 189:
			return 45;
		case 190:
			return 46;
		case 191:
			return 47;
		case 192:
			return 96;
		case 219:
			return 91;
		case 220:
			return 92;
		case 221:
			return 93;
		case 222:
			return 39;
		}
		return keyCode;
	}
	,create: function(config) {
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
			for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
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
		this.lastUpdate = new Date().getTime();
		this.handleApplicationEvent();
		return 0;
	}
	,exit: function() {
	}
	,handleApplicationEvent: function(__) {
		this.updateGameDevices();
		this.currentUpdate = new Date().getTime();
		if(this.currentUpdate >= this.nextUpdate) {
			this.deltaTime = this.currentUpdate - this.lastUpdate;
			this.parent.onUpdate.dispatch(this.deltaTime | 0);
			if(this.parent.renderers[0] != null) {
				this.parent.renderers[0].onRender.dispatch();
				this.parent.renderers[0].flip();
			}
			if(this.framePeriod < 0) {
				this.nextUpdate = this.currentUpdate;
				this.nextUpdate = this.currentUpdate;
			} else this.nextUpdate = this.currentUpdate + this.framePeriod;
			this.lastUpdate = this.currentUpdate;
		}
		window.requestAnimationFrame($bind(this,this.handleApplicationEvent));
	}
	,handleKeyEvent: function(event) {
		if(this.parent.windows[0] != null) {
			var keyCode = this.convertKeyCode(event.keyCode != null?event.keyCode:event.which);
			var modifier;
			modifier = (event.shiftKey?3:0) | (event.ctrlKey?192:0) | (event.altKey?768:0) | (event.metaKey?3072:0);
			if(event.type == "keydown") {
				this.parent.windows[0].onKeyDown.dispatch(keyCode,modifier);
				if(this.parent.windows[0].onKeyDown.canceled) event.preventDefault();
			} else {
				this.parent.windows[0].onKeyUp.dispatch(keyCode,modifier);
				if(this.parent.windows[0].onKeyUp.canceled) event.preventDefault();
			}
		}
	}
	,handleWindowEvent: function(event) {
		if(this.parent.windows[0] != null) {
			var _g = event.type;
			switch(_g) {
			case "focus":
				this.parent.windows[0].onFocusIn.dispatch();
				this.parent.windows[0].onActivate.dispatch();
				break;
			case "blur":
				this.parent.windows[0].onFocusOut.dispatch();
				this.parent.windows[0].onDeactivate.dispatch();
				break;
			case "resize":
				var cacheWidth = this.parent.windows[0].__width;
				var cacheHeight = this.parent.windows[0].__height;
				this.parent.windows[0].backend.handleResize();
				if(this.parent.windows[0].__width != cacheWidth || this.parent.windows[0].__height != cacheHeight) this.parent.windows[0].onResize.dispatch(this.parent.windows[0].__width,this.parent.windows[0].__height);
				break;
			case "beforeunload":
				this.parent.windows[0].onClose.dispatch();
				break;
			}
		}
	}
	,setFrameRate: function(value) {
		if(value >= 60) this.framePeriod = -1; else if(value > 0) this.framePeriod = 1000 / value; else this.framePeriod = 1000;
		return value;
	}
	,updateGameDevices: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		if(devices == null) return;
		var id;
		var gamepad;
		var joystick;
		var data;
		var cache;
		var _g1 = 0;
		var _g = devices.length;
		while(_g1 < _g) {
			var i = _g1++;
			id = i;
			data = devices[id];
			if(data == null) continue;
			if(!this.gameDeviceCache.h.hasOwnProperty(id)) {
				cache = new lime__$backend_html5_GameDeviceData();
				cache.id = id;
				cache.connected = data.connected;
				var _g3 = 0;
				var _g2 = data.buttons.length;
				while(_g3 < _g2) {
					var i1 = _g3++;
					cache.buttons.push(data.buttons[i1].value);
				}
				var _g31 = 0;
				var _g21 = data.axes.length;
				while(_g31 < _g21) {
					var i2 = _g31++;
					cache.axes.push(data.axes[i2]);
				}
				if(data.mapping == "standard") cache.isGamepad = true;
				this.gameDeviceCache.h[id] = cache;
				if(data.connected) {
					lime_ui_Joystick.__connect(id);
					if(cache.isGamepad) lime_ui_Gamepad.__connect(id);
				}
			}
			cache = this.gameDeviceCache.h[id];
			joystick = lime_ui_Joystick.devices.h[id];
			gamepad = lime_ui_Gamepad.devices.h[id];
			if(data.connected) {
				var button;
				var value;
				var _g32 = 0;
				var _g22 = data.buttons.length;
				while(_g32 < _g22) {
					var i3 = _g32++;
					value = data.buttons[i3].value;
					if(value != cache.buttons[i3]) {
						if(i3 == 6) {
							joystick.onAxisMove.dispatch(data.axes.length,value);
							if(gamepad != null) gamepad.onAxisMove.dispatch(4,value);
						} else if(i3 == 7) {
							joystick.onAxisMove.dispatch(data.axes.length + 1,value);
							if(gamepad != null) gamepad.onAxisMove.dispatch(5,value);
						} else {
							if(value > 0) joystick.onButtonDown.dispatch(i3); else joystick.onButtonUp.dispatch(i3);
							if(gamepad != null) {
								switch(i3) {
								case 0:
									button = 0;
									break;
								case 1:
									button = 1;
									break;
								case 2:
									button = 2;
									break;
								case 3:
									button = 3;
									break;
								case 4:
									button = 9;
									break;
								case 5:
									button = 10;
									break;
								case 8:
									button = 4;
									break;
								case 9:
									button = 6;
									break;
								case 10:
									button = 7;
									break;
								case 11:
									button = 8;
									break;
								case 12:
									button = 11;
									break;
								case 13:
									button = 12;
									break;
								case 14:
									button = 13;
									break;
								case 15:
									button = 14;
									break;
								case 16:
									button = 5;
									break;
								default:
									continue;
								}
								if(value > 0) gamepad.onButtonDown.dispatch(button); else gamepad.onButtonUp.dispatch(button);
							}
						}
						cache.buttons[i3] = value;
					}
				}
				var _g33 = 0;
				var _g23 = data.axes.length;
				while(_g33 < _g23) {
					var i4 = _g33++;
					if(data.axes[i4] != cache.axes[i4]) {
						joystick.onAxisMove.dispatch(i4,data.axes[i4]);
						if(gamepad != null) gamepad.onAxisMove.dispatch(i4,data.axes[i4]);
						cache.axes[i4] = data.axes[i4];
					}
				}
			} else if(cache.connected) {
				cache.connected = false;
				lime_ui_Joystick.__disconnect(id);
				lime_ui_Gamepad.__disconnect(id);
			}
		}
	}
	,__class__: lime__$backend_html5_HTML5Application
};
var lime__$backend_html5_GameDeviceData = function() {
	this.connected = true;
	this.buttons = [];
	this.axes = [];
};
lime__$backend_html5_GameDeviceData.__name__ = true;
lime__$backend_html5_GameDeviceData.prototype = {
	__class__: lime__$backend_html5_GameDeviceData
};
var lime__$backend_html5_HTML5Renderer = function(parent) {
	this.parent = parent;
};
lime__$backend_html5_HTML5Renderer.__name__ = true;
lime__$backend_html5_HTML5Renderer.prototype = {
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
		if(this.parent.window.backend.div != null) {
			this.parent.context = lime_graphics_RenderContext.DOM(this.parent.window.backend.div);
			this.parent.type = lime_graphics_RendererType.DOM;
		} else if(this.parent.window.backend.canvas != null) {
			var webgl = null;
			if(!Object.prototype.hasOwnProperty.call(this.parent.window.config,"hardware") || this.parent.window.config.hardware) {
				var options = { alpha : false, antialias : Object.prototype.hasOwnProperty.call(this.parent.window.config,"antialiasing")?this.parent.window.config.antialiasing > 0:false, depth : Object.prototype.hasOwnProperty.call(this.parent.window.config,"depthBuffer")?this.parent.window.config.depthBuffer:true, premultipliedAlpha : false, stencil : Object.prototype.hasOwnProperty.call(this.parent.window.config,"stencilBuffer")?this.parent.window.config.stencilBuffer:false, preserveDrawingBuffer : false};
				webgl = js_html__$CanvasElement_CanvasUtil.getContextWebGL(this.parent.window.backend.canvas,options);
			}
			if(webgl == null) {
				this.parent.context = lime_graphics_RenderContext.CANVAS(this.parent.window.backend.canvas.getContext("2d"));
				this.parent.type = lime_graphics_RendererType.CANVAS;
			} else {
				lime_graphics_opengl_GL.context = webgl;
				this.parent.context = lime_graphics_RenderContext.OPENGL(lime_graphics_opengl_GL.context);
				this.parent.type = lime_graphics_RendererType.OPENGL;
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
			this.parent.onContextLost.dispatch();
			break;
		case "webglcontextrestored":
			this.createContext();
			this.parent.onContextRestored.dispatch(this.parent.context);
			break;
		default:
		}
	}
	,__class__: lime__$backend_html5_HTML5Renderer
};
var lime__$backend_html5_HTML5Window = function(parent) {
	this.unusedTouchesPool = new List();
	this.currentTouches = new haxe_ds_IntMap();
	this.parent = parent;
	if(parent.config != null && Object.prototype.hasOwnProperty.call(parent.config,"element")) this.element = parent.config.element;
};
lime__$backend_html5_HTML5Window.__name__ = true;
lime__$backend_html5_HTML5Window.prototype = {
	close: function() {
		this.parent.application.removeWindow(this.parent);
	}
	,create: function(application) {
		this.setWidth = this.parent.__width;
		this.setHeight = this.parent.__height;
		this.parent.id = lime__$backend_html5_HTML5Window.windowID++;
		if(js_Boot.__instanceof(this.element,HTMLCanvasElement)) this.canvas = this.element; else this.canvas = window.document.createElement("canvas");
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
			this.element.addEventListener("gamepadconnected",$bind(this,this.handleGamepadEvent),true);
			this.element.addEventListener("gamepaddisconnected",$bind(this,this.handleGamepadEvent),true);
		}
	}
	,handleFocusEvent: function(event) {
		if(this.enableTextEvents) haxe_Timer.delay(function() {
			lime__$backend_html5_HTML5Window.textInput.focus();
		},20);
	}
	,handleGamepadEvent: function(event) {
		var _g = event.type;
		switch(_g) {
		case "gamepadconnected":
			lime_ui_Joystick.__connect(event.gamepad.index);
			if(event.gamepad.mapping == "standard") lime_ui_Gamepad.__connect(event.gamepad.index);
			break;
		case "gamepaddisconnected":
			lime_ui_Joystick.__disconnect(event.gamepad.index);
			lime_ui_Gamepad.__disconnect(event.gamepad.index);
			break;
		default:
		}
	}
	,handleInputEvent: function(event) {
		if(lime__$backend_html5_HTML5Window.textInput.value != "") {
			this.parent.onTextInput.dispatch(lime__$backend_html5_HTML5Window.textInput.value);
			lime__$backend_html5_HTML5Window.textInput.value = "";
		}
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
				this.parent.onMouseDown.dispatch(x,y,event.button);
				break;
			case "mouseenter":
				this.parent.onEnter.dispatch();
				break;
			case "mouseleave":
				this.parent.onLeave.dispatch();
				break;
			case "mouseup":
				this.parent.onMouseUp.dispatch(x,y,event.button);
				break;
			case "mousemove":
				this.parent.onMouseMove.dispatch(x,y);
				break;
			default:
			}
		} else this.parent.onMouseWheel.dispatch(event.deltaX,-event.deltaY);
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
		var rect = null;
		if(this.element != null) {
			if(this.canvas != null) rect = this.canvas.getBoundingClientRect(); else if(this.div != null) rect = this.div.getBoundingClientRect(); else rect = this.element.getBoundingClientRect();
		}
		var windowWidth = this.setWidth;
		var windowHeight = this.setHeight;
		if(windowWidth == 0 || windowHeight == 0) {
			if(rect != null) {
				windowWidth = rect.width;
				windowHeight = rect.height;
			} else {
				windowWidth = 1;
				windowHeight = 1;
			}
		}
		var _g = 0;
		var _g1 = event.changedTouches;
		while(_g < _g1.length) {
			var data = _g1[_g];
			++_g;
			var x = 0.0;
			var y = 0.0;
			if(rect != null) {
				x = (data.clientX - rect.left) * (windowWidth / rect.width);
				y = (data.clientY - rect.top) * (windowHeight / rect.height);
			} else {
				x = data.clientX;
				y = data.clientY;
			}
			var _g2 = event.type;
			switch(_g2) {
			case "touchstart":
				var touch = this.unusedTouchesPool.pop();
				if(touch == null) touch = new lime_ui_Touch(x / windowWidth,y / windowHeight,data.identifier,0,0,data.force,this.parent.id); else {
					touch.x = x / windowWidth;
					touch.y = y / windowHeight;
					touch.id = data.identifier;
					touch.dx = 0;
					touch.dy = 0;
					touch.pressure = data.force;
					touch.device = this.parent.id;
				}
				this.currentTouches.h[data.identifier] = touch;
				lime_ui_Touch.onStart.dispatch(touch);
				if(this.primaryTouch == null) this.primaryTouch = touch;
				if(touch == this.primaryTouch) this.parent.onMouseDown.dispatch(x,y,0);
				break;
			case "touchend":
				var touch1 = this.currentTouches.h[data.identifier];
				if(touch1 != null) {
					var cacheX = touch1.x;
					var cacheY = touch1.y;
					touch1.x = x / windowWidth;
					touch1.y = y / windowHeight;
					touch1.dx = touch1.x - cacheX;
					touch1.dy = touch1.y - cacheY;
					touch1.pressure = data.force;
					lime_ui_Touch.onEnd.dispatch(touch1);
					this.currentTouches.remove(data.identifier);
					this.unusedTouchesPool.add(touch1);
					if(touch1 == this.primaryTouch) {
						this.parent.onMouseUp.dispatch(x,y,0);
						this.primaryTouch = null;
					}
				}
				break;
			case "touchmove":
				var touch2 = this.currentTouches.h[data.identifier];
				if(touch2 != null) {
					var cacheX1 = touch2.x;
					var cacheY1 = touch2.y;
					touch2.x = x / windowWidth;
					touch2.y = y / windowHeight;
					touch2.dx = touch2.x - cacheX1;
					touch2.dy = touch2.y - cacheY1;
					touch2.pressure = data.force;
					lime_ui_Touch.onMove.dispatch(touch2);
					if(touch2 == this.primaryTouch) this.parent.onMouseMove.dispatch(x,y);
				}
				break;
			default:
			}
		}
	}
	,resize: function(width,height) {
	}
	,setEnableTextEvents: function(value) {
		if(value) {
			if(lime__$backend_html5_HTML5Window.textInput == null) {
				lime__$backend_html5_HTML5Window.textInput = window.document.createElement("input");
				lime__$backend_html5_HTML5Window.textInput.type = "text";
				lime__$backend_html5_HTML5Window.textInput.style.position = "absolute";
				lime__$backend_html5_HTML5Window.textInput.style.opacity = "0";
				lime__$backend_html5_HTML5Window.textInput.style.color = "transparent";
				lime__$backend_html5_HTML5Window.textInput.value = "";
				lime__$backend_html5_HTML5Window.textInput.autocapitalize = "off";
				lime__$backend_html5_HTML5Window.textInput.autocorrect = "off";
				lime__$backend_html5_HTML5Window.textInput.autocomplete = "off";
				lime__$backend_html5_HTML5Window.textInput.style.left = "0px";
				lime__$backend_html5_HTML5Window.textInput.style.top = "50%";
				if(new EReg("(iPad|iPhone|iPod).*OS 8_","gi").match(window.navigator.userAgent)) {
					lime__$backend_html5_HTML5Window.textInput.style.fontSize = "0px";
					lime__$backend_html5_HTML5Window.textInput.style.width = "0px";
					lime__$backend_html5_HTML5Window.textInput.style.height = "0px";
				} else {
					lime__$backend_html5_HTML5Window.textInput.style.width = "1px";
					lime__$backend_html5_HTML5Window.textInput.style.height = "1px";
				}
				lime__$backend_html5_HTML5Window.textInput.style.pointerEvents = "none";
				lime__$backend_html5_HTML5Window.textInput.style.zIndex = "-10000000";
				window.document.body.appendChild(lime__$backend_html5_HTML5Window.textInput);
			}
			if(!this.enableTextEvents) {
				lime__$backend_html5_HTML5Window.textInput.addEventListener("input",$bind(this,this.handleInputEvent),true);
				lime__$backend_html5_HTML5Window.textInput.addEventListener("blur",$bind(this,this.handleFocusEvent),true);
			}
			lime__$backend_html5_HTML5Window.textInput.focus();
		} else if(lime__$backend_html5_HTML5Window.textInput != null) {
			lime__$backend_html5_HTML5Window.textInput.removeEventListener("input",$bind(this,this.handleInputEvent),true);
			lime__$backend_html5_HTML5Window.textInput.removeEventListener("blur",$bind(this,this.handleFocusEvent),true);
			lime__$backend_html5_HTML5Window.textInput.blur();
		}
		return this.enableTextEvents = value;
	}
	,setFullscreen: function(value) {
		return false;
	}
	,__class__: lime__$backend_html5_HTML5Window
};
var lime_app_Event_$Dynamic_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$Dynamic_$Void.__name__ = true;
lime_app_Event_$Dynamic_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$Dynamic_$Void
};
var lime_app_Event_$Float_$Float_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$Float_$Float_$Int_$Void.__name__ = true;
lime_app_Event_$Float_$Float_$Int_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1,a2) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1,a2);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$Float_$Float_$Int_$Void
};
var lime_app_Event_$Float_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$Float_$Float_$Void.__name__ = true;
lime_app_Event_$Float_$Float_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$Float_$Float_$Void
};
var lime_app_Event_$Int_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$Int_$Float_$Void.__name__ = true;
lime_app_Event_$Int_$Float_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$Int_$Float_$Void
};
var lime_app_Event_$Int_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$Int_$Int_$Void.__name__ = true;
lime_app_Event_$Int_$Int_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$Int_$Int_$Void
};
var lime_app_Event_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$Int_$Void.__name__ = true;
lime_app_Event_$Int_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$Int_$Void
};
var lime_app_Event_$Int_$lime_$ui_$JoystickHatPosition_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$Int_$lime_$ui_$JoystickHatPosition_$Void.__name__ = true;
lime_app_Event_$Int_$lime_$ui_$JoystickHatPosition_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,__class__: lime_app_Event_$Int_$lime_$ui_$JoystickHatPosition_$Void
};
var lime_app_Event_$String_$Int_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$String_$Int_$Int_$Void.__name__ = true;
lime_app_Event_$String_$Int_$Int_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,__class__: lime_app_Event_$String_$Int_$Int_$Void
};
var lime_app_Event_$String_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$String_$Void.__name__ = true;
lime_app_Event_$String_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$String_$Void
};
var lime_app_Event_$lime_$graphics_$RenderContext_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$lime_$graphics_$RenderContext_$Void.__name__ = true;
lime_app_Event_$lime_$graphics_$RenderContext_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$lime_$graphics_$RenderContext_$Void
};
var lime_app_Event_$lime_$ui_$GamepadAxis_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$lime_$ui_$GamepadAxis_$Float_$Void.__name__ = true;
lime_app_Event_$lime_$ui_$GamepadAxis_$Float_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$lime_$ui_$GamepadAxis_$Float_$Void
};
var lime_app_Event_$lime_$ui_$GamepadButton_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$lime_$ui_$GamepadButton_$Void.__name__ = true;
lime_app_Event_$lime_$ui_$GamepadButton_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$lime_$ui_$GamepadButton_$Void
};
var lime_app_Event_$lime_$ui_$Gamepad_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$lime_$ui_$Gamepad_$Void.__name__ = true;
lime_app_Event_$lime_$ui_$Gamepad_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$lime_$ui_$Gamepad_$Void
};
var lime_app_Event_$lime_$ui_$Joystick_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$lime_$ui_$Joystick_$Void.__name__ = true;
lime_app_Event_$lime_$ui_$Joystick_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$lime_$ui_$Joystick_$Void
};
var lime_app_Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void.__name__ = true;
lime_app_Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void
};
var lime_app_Event_$lime_$ui_$Touch_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
lime_app_Event_$lime_$ui_$Touch_$Void.__name__ = true;
lime_app_Event_$lime_$ui_$Touch_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.__priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) this.remove(listeners[i]); else i++;
			if(this.canceled) break;
		}
	}
	,__class__: lime_app_Event_$lime_$ui_$Touch_$Void
};
var lime_app_Future = function(work) {
	if(work != null) {
		if(lime_app_Future.__threadPool == null) {
			lime_app_Future.__threadPool = new lime_system_ThreadPool();
			lime_app_Future.__threadPool.doWork.add(lime_app_Future.threadPool_doWork);
			lime_app_Future.__threadPool.onComplete.add(lime_app_Future.threadPool_onComplete);
			lime_app_Future.__threadPool.onError.add(lime_app_Future.threadPool_onError);
		}
		var promise = new lime_app_Promise();
		promise.future = this;
		lime_app_Future.__threadPool.queue({ promise : promise, work : work});
	}
};
lime_app_Future.__name__ = true;
lime_app_Future.threadPool_doWork = function(state) {
	try {
		var result = state.work();
		lime_app_Future.__threadPool.sendComplete({ promise : state.promise, result : result});
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		lime_app_Future.__threadPool.sendError({ promise : state.promise, error : e});
	}
};
lime_app_Future.threadPool_onComplete = function(state) {
	state.promise.complete(state.result);
};
lime_app_Future.threadPool_onError = function(state) {
	state.promise.error(state.error);
};
lime_app_Future.prototype = {
	onComplete: function(listener) {
		if(listener != null) {
			if(this.__completed) listener(this.value); else if(!this.__errored) {
				if(this.__completeListeners == null) this.__completeListeners = [];
				this.__completeListeners.push(listener);
			}
		}
		return this;
	}
	,__class__: lime_app_Future
};
var lime_app_Preloader = function() {
	this.total = 0;
	this.loaded = 0;
	this.onProgress = new lime_app_Event_$Int_$Int_$Void();
	this.onComplete = new lime_app_Event_$Void_$Void();
	this.onProgress.add($bind(this,this.update));
};
lime_app_Preloader.__name__ = true;
lime_app_Preloader.prototype = {
	create: function(config) {
	}
	,load: function(urls,types) {
		var url = null;
		var cacheVersion = lime_Assets.cache.version;
		var _g1 = 0;
		var _g = urls.length;
		while(_g1 < _g) {
			var i = _g1++;
			url = urls[i];
			var _g2 = types[i];
			switch(_g2) {
			case "IMAGE":
				if(!lime_app_Preloader.images.exists(url)) {
					var image = new Image();
					lime_app_Preloader.images.set(url,image);
					image.onload = $bind(this,this.image_onLoad);
					image.src = url + "?" + cacheVersion;
					this.total++;
				}
				break;
			case "BINARY":
				if(!lime_app_Preloader.loaders.exists(url)) {
					var loader = new lime_net_HTTPRequest();
					lime_app_Preloader.loaders.set(url,loader);
					this.total++;
				}
				break;
			case "TEXT":
				if(!lime_app_Preloader.loaders.exists(url)) {
					var loader1 = new lime_net_HTTPRequest();
					lime_app_Preloader.loaders.set(url,loader1);
					this.total++;
				}
				break;
			case "FONT":
				this.total++;
				this.loadFont(url);
				break;
			default:
			}
		}
		var $it0 = lime_app_Preloader.loaders.keys();
		while( $it0.hasNext() ) {
			var url1 = $it0.next();
			var loader2 = lime_app_Preloader.loaders.get(url1);
			var future = loader2.load(url1 + "?" + cacheVersion);
			future.onComplete($bind(this,this.loader_onComplete));
		}
		if(this.total == 0) this.start();
	}
	,loadFont: function(font) {
		var _g = this;
		if(window.document.fonts && ($_=window.document.fonts,$bind($_,$_.load))) window.document.fonts.load("1em '" + font + "'").then(function(_) {
			_g.loaded++;
			_g.onProgress.dispatch(_g.loaded,_g.total);
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
					_g.onProgress.dispatch(_g.loaded,_g.total);
					if(_g.loaded == _g.total) _g.start();
					return true;
				}
				return false;
			};
			if(!checkFont()) interval = window.setInterval(checkFont,50);
		}
	}
	,start: function() {
		this.complete = true;
		this.onComplete.dispatch();
	}
	,update: function(loaded,total) {
	}
	,image_onLoad: function(_) {
		this.loaded++;
		this.onProgress.dispatch(this.loaded,this.total);
		if(this.loaded == this.total) this.start();
	}
	,loader_onComplete: function(_) {
		this.loaded++;
		this.onProgress.dispatch(this.loaded,this.total);
		if(this.loaded == this.total) this.start();
	}
	,__class__: lime_app_Preloader
};
var lime_app_Promise = function() {
	this.future = new lime_app_Future();
};
lime_app_Promise.__name__ = true;
lime_app_Promise.prototype = {
	complete: function(data) {
		if(!this.future.__errored) {
			this.future.__completed = true;
			this.future.value = data;
			if(this.future.__completeListeners != null) {
				var _g = 0;
				var _g1 = this.future.__completeListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(data);
				}
				this.future.__completeListeners = null;
			}
		}
		return this;
	}
	,error: function(msg) {
		if(!this.future.__completed) {
			this.future.__errored = true;
			this.future.__errorMessage = msg;
			if(this.future.__errorListeners != null) {
				var _g = 0;
				var _g1 = this.future.__errorListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(msg);
				}
				this.future.__errorListeners = null;
			}
		}
		return this;
	}
	,progress: function(progress) {
		if(!this.future.__errored && !this.future.__completed) {
			if(this.future.__progressListeners != null) {
				var _g = 0;
				var _g1 = this.future.__progressListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(progress);
				}
			}
		}
		return this;
	}
	,__class__: lime_app_Promise
};
var lime_audio_ALAudioContext = function() { };
lime_audio_ALAudioContext.__name__ = true;
var lime_audio_ALCAudioContext = function() { };
lime_audio_ALCAudioContext.__name__ = true;
var lime_audio_AudioBuffer = function() { };
lime_audio_AudioBuffer.__name__ = true;
var lime_audio_AudioContext = { __ename__ : true, __constructs__ : ["OPENAL","HTML5","WEB","FLASH","CUSTOM"] };
lime_audio_AudioContext.OPENAL = function(alc,al) { var $x = ["OPENAL",0,alc,al]; $x.__enum__ = lime_audio_AudioContext; $x.toString = $estr; return $x; };
lime_audio_AudioContext.HTML5 = function(context) { var $x = ["HTML5",1,context]; $x.__enum__ = lime_audio_AudioContext; $x.toString = $estr; return $x; };
lime_audio_AudioContext.WEB = function(context) { var $x = ["WEB",2,context]; $x.__enum__ = lime_audio_AudioContext; $x.toString = $estr; return $x; };
lime_audio_AudioContext.FLASH = function(context) { var $x = ["FLASH",3,context]; $x.__enum__ = lime_audio_AudioContext; $x.toString = $estr; return $x; };
lime_audio_AudioContext.CUSTOM = function(data) { var $x = ["CUSTOM",4,data]; $x.__enum__ = lime_audio_AudioContext; $x.toString = $estr; return $x; };
var lime_audio_AudioManager = function() { };
lime_audio_AudioManager.__name__ = true;
lime_audio_AudioManager.init = function(context) {
	if(lime_audio_AudioManager.context == null) {
		if(context == null) try {
			window.AudioContext = window.AudioContext || window.webkitAudioContext;;
			lime_audio_AudioManager.context = lime_audio_AudioContext.WEB(new AudioContext ());
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			lime_audio_AudioManager.context = lime_audio_AudioContext.HTML5(new lime_audio_HTML5AudioContext());
		} else lime_audio_AudioManager.context = context;
	}
};
var lime_audio_FlashAudioContext = function() { };
lime_audio_FlashAudioContext.__name__ = true;
var lime_audio_HTML5AudioContext = function() {
};
lime_audio_HTML5AudioContext.__name__ = true;
lime_audio_HTML5AudioContext.prototype = {
	__class__: lime_audio_HTML5AudioContext
};
var lime_graphics_ConsoleRenderContext = function() { };
lime_graphics_ConsoleRenderContext.__name__ = true;
lime_graphics_ConsoleRenderContext.prototype = {
	__class__: lime_graphics_ConsoleRenderContext
};
var lime_graphics_FlashRenderContext = function() { };
lime_graphics_FlashRenderContext.__name__ = true;
var lime_graphics_Image = function() { };
lime_graphics_Image.__name__ = true;
lime_graphics_Image.prototype = {
	__class__: lime_graphics_Image
};
var lime_graphics_RenderContext = { __ename__ : true, __constructs__ : ["OPENGL","CANVAS","DOM","FLASH","CAIRO","CONSOLE","CUSTOM","NONE"] };
lime_graphics_RenderContext.OPENGL = function(gl) { var $x = ["OPENGL",0,gl]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.CANVAS = function(context) { var $x = ["CANVAS",1,context]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.DOM = function(element) { var $x = ["DOM",2,element]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.FLASH = function(stage) { var $x = ["FLASH",3,stage]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.CAIRO = function(cairo) { var $x = ["CAIRO",4,cairo]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.CONSOLE = function(context) { var $x = ["CONSOLE",5,context]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.CUSTOM = function(data) { var $x = ["CUSTOM",6,data]; $x.__enum__ = lime_graphics_RenderContext; $x.toString = $estr; return $x; };
lime_graphics_RenderContext.NONE = ["NONE",7];
lime_graphics_RenderContext.NONE.toString = $estr;
lime_graphics_RenderContext.NONE.__enum__ = lime_graphics_RenderContext;
var lime_graphics_Renderer = function(window) {
	this.onRender = new lime_app_Event_$Void_$Void();
	this.onContextRestored = new lime_app_Event_$lime_$graphics_$RenderContext_$Void();
	this.onContextLost = new lime_app_Event_$Void_$Void();
	this.window = window;
	this.backend = new lime__$backend_html5_HTML5Renderer(this);
	this.window.renderer = this;
};
lime_graphics_Renderer.__name__ = true;
lime_graphics_Renderer.prototype = {
	create: function() {
		this.backend.create();
	}
	,flip: function() {
		this.backend.flip();
	}
	,__class__: lime_graphics_Renderer
};
var lime_graphics_RendererType = { __ename__ : true, __constructs__ : ["OPENGL","CANVAS","DOM","FLASH","CAIRO","CONSOLE","CUSTOM"] };
lime_graphics_RendererType.OPENGL = ["OPENGL",0];
lime_graphics_RendererType.OPENGL.toString = $estr;
lime_graphics_RendererType.OPENGL.__enum__ = lime_graphics_RendererType;
lime_graphics_RendererType.CANVAS = ["CANVAS",1];
lime_graphics_RendererType.CANVAS.toString = $estr;
lime_graphics_RendererType.CANVAS.__enum__ = lime_graphics_RendererType;
lime_graphics_RendererType.DOM = ["DOM",2];
lime_graphics_RendererType.DOM.toString = $estr;
lime_graphics_RendererType.DOM.__enum__ = lime_graphics_RendererType;
lime_graphics_RendererType.FLASH = ["FLASH",3];
lime_graphics_RendererType.FLASH.toString = $estr;
lime_graphics_RendererType.FLASH.__enum__ = lime_graphics_RendererType;
lime_graphics_RendererType.CAIRO = ["CAIRO",4];
lime_graphics_RendererType.CAIRO.toString = $estr;
lime_graphics_RendererType.CAIRO.__enum__ = lime_graphics_RendererType;
lime_graphics_RendererType.CONSOLE = ["CONSOLE",5];
lime_graphics_RendererType.CONSOLE.toString = $estr;
lime_graphics_RendererType.CONSOLE.__enum__ = lime_graphics_RendererType;
lime_graphics_RendererType.CUSTOM = ["CUSTOM",6];
lime_graphics_RendererType.CUSTOM.toString = $estr;
lime_graphics_RendererType.CUSTOM.__enum__ = lime_graphics_RendererType;
var lime_graphics_cairo_Cairo = function() { };
lime_graphics_cairo_Cairo.__name__ = true;
lime_graphics_cairo_Cairo.prototype = {
	__class__: lime_graphics_cairo_Cairo
};
var lime_graphics_opengl_GL = function() { };
lime_graphics_opengl_GL.__name__ = true;
lime_graphics_opengl_GL.bufferData = function(target,data,usage) {
	lime_graphics_opengl_GL.context.bufferData(target,data,usage);
};
var lime_math_Matrix3 = function() { };
lime_math_Matrix3.__name__ = true;
var lime_math_Vector2 = function() { };
lime_math_Vector2.__name__ = true;
var lime_net_HTTPRequest = function() {
	this.promise = new lime_app_Promise();
};
lime_net_HTTPRequest.__name__ = true;
lime_net_HTTPRequest.prototype = {
	load: function(url) {
		var _g = this;
		this.bytesLoaded = 0;
		this.bytesTotal = 0;
		var request = new XMLHttpRequest();
		request.addEventListener("progress",$bind(this,this.request_onProgress),false);
		request.onreadystatechange = function() {
			if(request.readyState != 4) return;
			if(request.status != null && request.status >= 200 && request.status <= 400) {
				_g.bytes = lime_utils_Bytes.ofData(request.response);
				_g.promise.complete(_g.bytes);
			} else _g.promise.error(request.status);
		};
		request.open("GET",url,true);
		request.responseType = "arraybuffer";
		request.send("");
		return this.promise.future;
	}
	,request_onProgress: function(event) {
		this.promise.progress(event.loaded / event.total);
	}
	,__class__: lime_net_HTTPRequest
};
var lime_system_System = function() { };
lime_system_System.__name__ = true;
lime_system_System.embed = $hx_exports.lime.embed = function(element,width,height,background,assetsPrefix) {
	var htmlElement = null;
	if(typeof(element) == "string") htmlElement = window.document.getElementById(js_Boot.__cast(element , String)); else if(element == null) htmlElement = window.document.createElement("div"); else htmlElement = element;
	var color = null;
	if(background != null) {
		background = StringTools.replace(background,"#","");
		if(background.indexOf("0x") > -1) color = Std.parseInt(background); else color = Std.parseInt("0x" + background);
	}
	if(width == null) width = 0;
	if(height == null) height = 0;
	ApplicationMain.config.windows[0].background = color;
	ApplicationMain.config.windows[0].element = htmlElement;
	ApplicationMain.config.windows[0].width = width;
	ApplicationMain.config.windows[0].height = height;
	ApplicationMain.config.assetsPrefix = assetsPrefix;
	ApplicationMain.create();
};
var lime_system_ThreadPool = function(minThreads,maxThreads) {
	if(maxThreads == null) maxThreads = 1;
	if(minThreads == null) minThreads = 0;
	this.onError = new lime_app_Event_$Dynamic_$Void();
	this.onComplete = new lime_app_Event_$Dynamic_$Void();
	this.doWork = new lime_app_Event_$Dynamic_$Void();
	this.minThreads = minThreads;
	this.maxThreads = maxThreads;
	this.currentThreads = 0;
};
lime_system_ThreadPool.__name__ = true;
lime_system_ThreadPool.prototype = {
	queue: function(state) {
		this.doWork.dispatch(state);
	}
	,sendComplete: function(state) {
		this.onComplete.dispatch(state);
	}
	,sendError: function(state) {
		this.onError.dispatch(state);
	}
	,__class__: lime_system_ThreadPool
};
var lime_ui_Gamepad = function(id) {
	this.onDisconnect = new lime_app_Event_$Void_$Void();
	this.onButtonUp = new lime_app_Event_$lime_$ui_$GamepadButton_$Void();
	this.onButtonDown = new lime_app_Event_$lime_$ui_$GamepadButton_$Void();
	this.onAxisMove = new lime_app_Event_$lime_$ui_$GamepadAxis_$Float_$Void();
	this.id = id;
	this.connected = true;
};
lime_ui_Gamepad.__name__ = true;
lime_ui_Gamepad.__connect = function(id) {
	if(!lime_ui_Gamepad.devices.h.hasOwnProperty(id)) {
		var gamepad = new lime_ui_Gamepad(id);
		lime_ui_Gamepad.devices.h[id] = gamepad;
		lime_ui_Gamepad.onConnect.dispatch(gamepad);
	}
};
lime_ui_Gamepad.__disconnect = function(id) {
	var gamepad = lime_ui_Gamepad.devices.h[id];
	if(gamepad != null) gamepad.connected = false;
	lime_ui_Gamepad.devices.remove(id);
	if(gamepad != null) gamepad.onDisconnect.dispatch();
};
lime_ui_Gamepad.prototype = {
	__class__: lime_ui_Gamepad
};
var lime_ui_Joystick = function(id) {
	this.onTrackballMove = new lime_app_Event_$Int_$Float_$Void();
	this.onHatMove = new lime_app_Event_$Int_$lime_$ui_$JoystickHatPosition_$Void();
	this.onDisconnect = new lime_app_Event_$Void_$Void();
	this.onButtonUp = new lime_app_Event_$Int_$Void();
	this.onButtonDown = new lime_app_Event_$Int_$Void();
	this.onAxisMove = new lime_app_Event_$Int_$Float_$Void();
	this.id = id;
	this.connected = true;
};
lime_ui_Joystick.__name__ = true;
lime_ui_Joystick.__connect = function(id) {
	if(!lime_ui_Joystick.devices.h.hasOwnProperty(id)) {
		var joystick = new lime_ui_Joystick(id);
		lime_ui_Joystick.devices.h[id] = joystick;
		lime_ui_Joystick.onConnect.dispatch(joystick);
	}
};
lime_ui_Joystick.__disconnect = function(id) {
	var joystick = lime_ui_Joystick.devices.h[id];
	if(joystick != null) joystick.connected = false;
	lime_ui_Joystick.devices.remove(id);
	if(joystick != null) joystick.onDisconnect.dispatch();
};
lime_ui_Joystick.__getDeviceData = function() {
	if(navigator.getGamepads) return navigator.getGamepads(); else if(navigator.webkitGetGamepads) return navigator.webkitGetGamepads(); else return null;
};
lime_ui_Joystick.prototype = {
	__class__: lime_ui_Joystick
};
var lime_ui_Touch = function(x,y,id,dx,dy,pressure,device) {
	this.x = x;
	this.y = y;
	this.id = id;
	this.dx = dx;
	this.dy = dy;
	this.pressure = pressure;
	this.device = device;
};
lime_ui_Touch.__name__ = true;
lime_ui_Touch.prototype = {
	__class__: lime_ui_Touch
};
var lime_ui_Window = function(config) {
	this.onTextInput = new lime_app_Event_$String_$Void();
	this.onTextEdit = new lime_app_Event_$String_$Int_$Int_$Void();
	this.onRestore = new lime_app_Event_$Void_$Void();
	this.onResize = new lime_app_Event_$Int_$Int_$Void();
	this.onMove = new lime_app_Event_$Float_$Float_$Void();
	this.onMouseWheel = new lime_app_Event_$Float_$Float_$Void();
	this.onMouseUp = new lime_app_Event_$Float_$Float_$Int_$Void();
	this.onMouseMoveRelative = new lime_app_Event_$Float_$Float_$Void();
	this.onMouseMove = new lime_app_Event_$Float_$Float_$Void();
	this.onMouseDown = new lime_app_Event_$Float_$Float_$Int_$Void();
	this.onMinimize = new lime_app_Event_$Void_$Void();
	this.onLeave = new lime_app_Event_$Void_$Void();
	this.onKeyUp = new lime_app_Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void();
	this.onKeyDown = new lime_app_Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void();
	this.onFullscreen = new lime_app_Event_$Void_$Void();
	this.onFocusOut = new lime_app_Event_$Void_$Void();
	this.onFocusIn = new lime_app_Event_$Void_$Void();
	this.onEnter = new lime_app_Event_$Void_$Void();
	this.onDeactivate = new lime_app_Event_$Void_$Void();
	this.onCreate = new lime_app_Event_$Void_$Void();
	this.onClose = new lime_app_Event_$Void_$Void();
	this.onActivate = new lime_app_Event_$Void_$Void();
	this.config = config;
	this.__width = 0;
	this.__height = 0;
	this.__fullscreen = false;
	this.__scale = 1;
	this.__x = 0;
	this.__y = 0;
	this.__title = "";
	this.id = -1;
	if(config != null) {
		if(Object.prototype.hasOwnProperty.call(config,"width")) this.__width = config.width;
		if(Object.prototype.hasOwnProperty.call(config,"height")) this.__height = config.height;
		if(Object.prototype.hasOwnProperty.call(config,"x")) this.__x = config.x;
		if(Object.prototype.hasOwnProperty.call(config,"y")) this.__y = config.y;
		if(Object.prototype.hasOwnProperty.call(config,"fullscreen")) this.__fullscreen = config.fullscreen;
		if(Object.prototype.hasOwnProperty.call(config,"borderless")) this.__borderless = config.borderless;
		if(Object.prototype.hasOwnProperty.call(config,"resizable")) this.__resizable = config.resizable;
		if(Object.prototype.hasOwnProperty.call(config,"title")) this.__title = config.title;
	}
	this.backend = new lime__$backend_html5_HTML5Window(this);
};
lime_ui_Window.__name__ = true;
lime_ui_Window.prototype = {
	close: function() {
		this.backend.close();
	}
	,create: function(application) {
		this.application = application;
		this.backend.create(application);
		if(this.renderer != null) this.renderer.create();
	}
	,resize: function(width,height) {
		this.backend.resize(width,height);
		this.__width = width;
		this.__height = height;
	}
	,set_fullscreen: function(value) {
		return this.__fullscreen = this.backend.setFullscreen(value);
	}
	,set_height: function(value) {
		this.resize(this.__width,value);
		return this.__height;
	}
	,set_width: function(value) {
		this.resize(value,this.__height);
		return this.__width;
	}
	,__class__: lime_ui_Window
};
var lime_utils_Bytes = function(length,bytesData) {
	haxe_io_Bytes.call(this,bytesData);
};
lime_utils_Bytes.__name__ = true;
lime_utils_Bytes.alloc = function(length) {
	var bytes = haxe_io_Bytes.alloc(length);
	return new lime_utils_Bytes(bytes.length,bytes.b.bufferValue);
};
lime_utils_Bytes.ofData = function(b) {
	var bytes = haxe_io_Bytes.ofData(b);
	return new lime_utils_Bytes(bytes.length,bytes.b.bufferValue);
};
lime_utils_Bytes.ofString = function(s) {
	var bytes = haxe_io_Bytes.ofString(s);
	return new lime_utils_Bytes(bytes.length,bytes.b.bufferValue);
};
lime_utils_Bytes.__super__ = haxe_io_Bytes;
lime_utils_Bytes.prototype = $extend(haxe_io_Bytes.prototype,{
	__class__: lime_utils_Bytes
});
var lime_utils_GLUtils = function() { };
lime_utils_GLUtils.__name__ = true;
lime_utils_GLUtils.compileShader = function(source,type) {
	var shader = lime_graphics_opengl_GL.context.createShader(type);
	lime_graphics_opengl_GL.context.shaderSource(shader,source);
	lime_graphics_opengl_GL.context.compileShader(shader);
	if(lime_graphics_opengl_GL.context.getShaderParameter(shader,35713) == 0) switch(type) {
	case 35633:
		throw new js__$Boot_HaxeError("Error compiling vertex shader");
		break;
	case 35632:
		throw new js__$Boot_HaxeError("Error compiling fragment shader");
		break;
	default:
		throw new js__$Boot_HaxeError("Error compiling unknown shader type");
	}
	return shader;
};
lime_utils_GLUtils.createProgram = function(vertexSource,fragmentSource) {
	var vertexShader = lime_utils_GLUtils.compileShader(vertexSource,35633);
	var fragmentShader = lime_utils_GLUtils.compileShader(fragmentSource,35632);
	var program = lime_graphics_opengl_GL.context.createProgram();
	lime_graphics_opengl_GL.context.attachShader(program,vertexShader);
	lime_graphics_opengl_GL.context.attachShader(program,fragmentShader);
	lime_graphics_opengl_GL.context.linkProgram(program);
	if(lime_graphics_opengl_GL.context.getProgramParameter(program,35714) == 0) throw new js__$Boot_HaxeError("Unable to initialize the shader program.");
	return program;
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
var __map_reserved = {}
var ArrayBuffer = $global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
var DataView = $global.DataView || js_html_compat_DataView;
var Uint8Array = $global.Uint8Array || js_html_compat_Uint8Array._new;
de_peote_telnet_PeoteTelnet.WILL = 251;
de_peote_telnet_PeoteTelnet.WONT = 252;
de_peote_telnet_PeoteTelnet.DO = 253;
de_peote_telnet_PeoteTelnet.IAC = 255;
de_peote_telnet_PeoteTelnet.SB = 250;
de_peote_telnet_PeoteTelnet.SE = 240;
de_peote_telnet_PeoteTelnet.NOP = 241;
de_peote_telnet_PeoteTelnet.ECHO = 1;
de_peote_telnet_PeoteTelnet.TERMINALTYPE = 24;
de_peote_telnet_PeoteTelnet.EOR = 25;
de_peote_telnet_PeoteTelnet.NAWS = 31;
de_peote_terminal_AnsiParser.Off = 0;
de_peote_terminal_AnsiParser.Start = 1;
de_peote_terminal_AnsiParser.Sequence = 2;
de_peote_terminal__$TermCode_TermCode_$Impl_$.BS = 8;
de_peote_terminal__$TermCode_TermCode_$Impl_$.HT = 9;
de_peote_terminal__$TermCode_TermCode_$Impl_$.CR = 13;
de_peote_view_Buffer.VERTEX_COUNT = 6;
de_peote_view_PeoteView.elementDefaults = { displaylist : 0, program : null, image : null, tile : null, x : 0, y : 0, w : 100, h : 100, z : 0, rgba : -1, rotation : 0, pivotX : 0, pivotY : 0};
de_peote_view_Program.rComment = new EReg("//.*?$","gm");
de_peote_view_Program.rNewline = new EReg("\r?\n","g");
de_peote_view_Program.rSpaces = new EReg("\t\t+","g");
de_peote_view_Program.rZINDEXstart = new EReg("#else_ZINDEX(.*?)#end_ZINDEX","ig");
de_peote_view_Program.rZINDEXend = new EReg("#if_ZINDEX(.*?)#end_ZINDEX","ig");
de_peote_view_Program.rRGBAstart = new EReg("#else_RGBA(.*?)#end_RGBA","ig");
de_peote_view_Program.rRGBAend = new EReg("#if_RGBA(.*?)#end_RGBA","ig");
de_peote_view_Program.rROTATIONstart = new EReg("#else_ROTATION(.*?)#end_ROTATION","ig");
de_peote_view_Program.rROTATIONend = new EReg("#if_ROTATION(.*?)#end_ROTATION","ig");
de_peote_view_Program.rPICKINGstart = new EReg("#else_PICKING(.*?)#end_PICKING","ig");
de_peote_view_Program.rPICKINGend = new EReg("#if_PICKING(.*?)#end_PICKING","ig");
de_peote_view_Program.rMAX_TEXTURE_SIZE = new EReg("#MAX_TEXTURE_SIZE","g");
de_peote_view_element_ElementAnimBuffer.VERTEX_COUNT = 6;
de_peote_view_element_ElementAnimBuffer.defaultVertexShaderSrc = "\tattribute vec4 aPosition;\r\n\t\t\r\n\t\t#if_ZINDEX\r\n\t\tattribute float aZindex;\r\n\t\t#end_ZINDEX\r\n\t\t\r\n\t\t#if_RGBA\r\n\t\tattribute vec4 aRGBA;\r\n\t\tattribute vec4 aRGBA_END;\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#end_RGBA\r\n\t\t\r\n\t\t#if_ROTATION\r\n\t\tattribute vec2 aRotation;\r\n\t\tattribute vec4 aPivot;\r\n\t\t#end_ROTATION\r\n\t\t\r\n\t\t#if_PICKING\r\n\t\tattribute vec4 aElement;\r\n\t\t\t#if_RGBA\r\n\t\t\t#else_RGBA\r\n\t\t\tvarying vec4 vRGBA;\r\n\t\t\t#end_RGBA\r\n\t\t#end_PICKING\r\n\t\t\t\r\n\t\tattribute vec2 aTime;\r\n\t\t\r\n\t\tattribute vec2 aTexCoord;\r\n\t\t\r\n\t\tvarying vec2 vTexCoord;\r\n\t\t\r\n\t\tuniform float uTime;\r\n\t\tuniform float uZoom;\r\n\t\tuniform vec2 uResolution;\r\n\t\tuniform vec2 uDelta;\r\n\t\t\r\n\t\tvoid main(void) {\r\n\t\t\t#if_RGBA\r\n\t\t\tvRGBA = aRGBA.wzyx + (aRGBA_END.wzyx - aRGBA.wzyx) * max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0));\t\r\n\t\t\t#end_RGBA\r\n\t\t\t\r\n\t\t\t#if_PICKING\r\n\t\t\tif (uResolution.x == 1.0) {\r\n\t\t\t\tvRGBA = aElement;\r\n\t\t\t}\r\n\t\t\t#end_PICKING\r\n\t\t\t\r\n\t\t\tvTexCoord = aTexCoord;\r\n\t\t\t\r\n\t\t\tvec2 VertexPosStart = vec2 ( aPosition ); //vec2 (aPosition.x, aPosition.y);\r\n\t\t\tvec2 VertexPosEnd   = vec2 ( aPosition.z, aPosition.w);\r\n\t\t\t\r\n\t\t\t#if_ROTATION\r\n\t\t\tfloat alpha = aRotation.x + (aRotation.y - aRotation.x)\t* max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0));\r\n\t\t\t\t\t\t\t\t\r\n\t\t\tVertexPosStart = (VertexPosStart - vec2(aPivot))\r\n\t\t\t\t\t\t\t* mat2 (\r\n\t\t\t\t\t\t\t\tvec2(cos(alpha), -sin(alpha)),\r\n\t\t\t\t\t\t\t\tvec2(sin(alpha),  cos(alpha))\r\n\t\t\t\t\t\t\t) + vec2(aPivot);\r\n\t\t\t\r\n\t\t\tVertexPosEnd = (VertexPosEnd -  vec2(aPivot.z, aPivot.w))\r\n\t\t\t\t\t\t\t* mat2 (\r\n\t\t\t\t\t\t\t\tvec2(cos(alpha), -sin(alpha)),\r\n\t\t\t\t\t\t\t\tvec2(sin(alpha),  cos(alpha))\r\n\t\t\t\t\t\t\t) + vec2(aPivot.z, aPivot.w);\r\n\t\t\t#end_ROTATION\r\n\t\t\t\t\r\n\t\t\tfloat zoom = uZoom;\r\n\t\t\tfloat width = uResolution.x;\r\n\t\t\tfloat height = uResolution.y;\r\n\t\t\tfloat deltaX = floor(uDelta.x);\r\n\t\t\tfloat deltaY = floor(uDelta.y);\r\n\t\t\t\r\n\t\t\tfloat right = width-deltaX*zoom;\r\n\t\t\tfloat left = -deltaX*zoom;\r\n\t\t\tfloat bottom = height-deltaY*zoom;\r\n\t\t\tfloat top = -deltaY * zoom;\r\n\t\t\t\t\t\t\r\n\t\t\tgl_Position = mat4 (\r\n\t\t\t\tvec4(2.0 / (right - left)*zoom, 0.0, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 2.0 / (top - bottom)*zoom, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 0.0, -0.001, 0.0),\r\n\t\t\t\tvec4(-(right + left) / (right - left), -(top + bottom) / (top - bottom), 0.0, 1.0)\r\n\t\t\t)\r\n\t\t\t* vec4( VertexPosStart + floor( \r\n\t\t\t\t\t\t\t\t(VertexPosEnd - VertexPosStart)\r\n\t\t\t\t\t\t\t\t* max( 0.0, min( (uTime-aTime.x) / (aTime.y - aTime.x), 1.0))\r\n\t\t\t\t\t\t\t\t* zoom) / zoom ,\r\n\t\t\t\t#if_ZINDEX\r\n\t\t\t\taZindex\r\n\t\t\t\t#else_ZINDEX\r\n\t\t\t\t0.0\r\n\t\t\t\t#end_ZINDEX\r\n\t\t\t\t, 1.0\r\n\t\t\t)\r\n\t\t\t// rotate displaylist\r\n\t\t\t/** mat4 (\r\n\t\t\t\tvec4(cos(winkel), -sin(winkel), 0.0, 0.0),\r\n\t\t\t\tvec4(sin(winkel),  cos(winkel), 0.0, 0.0),\r\n\t\t\t\tvec4(        0.0,          1.0, 0.0, 0.0),\r\n\t\t\t\tvec4(        0.0,          0.0, 0.0, 1.0)\r\n\t\t\t)*/\r\n\t\t\t;\r\n\t\t}\r\n\t";
de_peote_view_element_ElementAnimBuffer.defaultFragmentShaderSrc = "\tvarying vec2 vTexCoord;\r\n\t\t#if_RGBA\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#else_RGBA\r\n\t\t\t#if_PICKING\r\n\t\t\tvarying vec4 vRGBA;\r\n\t\t\t#end_PICKING\r\n\t\t#end_RGBA\r\n\t\t\r\n\t\tuniform sampler2D uImage;\r\n\t\t\r\n\t\t#if_PICKING\r\n\t\tuniform vec2 uResolution;\r\n\t\t#end_PICKING\r\n\t\t\r\n\t\tvoid main(void)\r\n\t\t{\r\n\t\t\tvec4 texel = texture2D(uImage, vTexCoord / #MAX_TEXTURE_SIZE);\r\n\t\t\tif(texel.a < 0.5) discard; // TODO (z-order/blend mode!!!)\r\n\t\t\t#if_PICKING\r\n\t\t\tif (uResolution.x == 1.0) { \r\n\t\t\t\tgl_FragColor = vRGBA; //vec4(1.0, 1.0, 1.0, 1.0);\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\t#if_RGBA\r\n\t\t\t\tgl_FragColor = texel * vRGBA;\r\n\t\t\t\t#else_RGBA\r\n\t\t\t\tgl_FragColor = texel;\r\n\t\t\t\t#end_RGBA\t\t\t\t\r\n\t\t\t}\r\n\t\t\t#else_PICKING\r\n\t\t\t\t#if_RGBA\r\n\t\t\t\tgl_FragColor = texel * vRGBA;\r\n\t\t\t\t#else_RGBA\r\n\t\t\t\tgl_FragColor = texel;\r\n\t\t\t\t#end_RGBA\r\n\t\t\t#end_PICKING\r\n\t\t}\r\n\t";
de_peote_view_element_ElementSimpleBuffer.VERTEX_COUNT = 6;
de_peote_view_element_ElementSimpleBuffer.defaultVertexShaderSrc = "\tattribute vec2 aPosition;\r\n\t\t\r\n\t\t#if_ZINDEX\r\n\t\tattribute float aZindex;\r\n\t\t#end_ZINDEX\r\n\t\t\r\n\t\t#if_RGBA\r\n\t\tattribute vec4 aRGBA;\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#end_RGBA\r\n\r\n\t\t#if_PICKING\r\n\t\tattribute vec4 aElement;\r\n\t\t\t#if_RGBA\r\n\t\t\t#else_RGBA\r\n\t\t\tvarying vec4 vRGBA;\r\n\t\t\t#end_RGBA\r\n\t\t#end_PICKING\r\n\t\t\t\r\n\t\tattribute vec2 aTexCoord;\r\n\t\t\r\n\t\tvarying vec2 vTexCoord;\r\n\t\t\r\n\t\tuniform float uTime;\r\n\t\tuniform float uZoom;\r\n\t\tuniform vec2 uResolution;\r\n\t\tuniform vec2 uDelta;\r\n\t\t\r\n\t\tvoid main(void) {\r\n\t\t\t#if_RGBA\r\n\t\t\tvRGBA = aRGBA.wzyx;\r\n\t\t\t#end_RGBA\r\n\t\t\t\r\n\t\t\t#if_PICKING\r\n\t\t\tif (uResolution.x == 1.0) {\r\n\t\t\t\tvRGBA = aElement;\r\n\t\t\t}\r\n\t\t\t#end_PICKING\r\n\t\t\t\r\n\t\t\tvTexCoord = aTexCoord;\r\n\t\t\t\t\t\t\r\n\t\t\tfloat zoom = uZoom;\r\n\t\t\tfloat width = uResolution.x;\r\n\t\t\tfloat height = uResolution.y;\r\n\t\t\tfloat deltaX = floor(uDelta.x);\r\n\t\t\tfloat deltaY = floor(uDelta.y);\r\n\t\t\t\r\n\t\t\tfloat right = width-deltaX*zoom;\r\n\t\t\tfloat left = -deltaX*zoom;\r\n\t\t\tfloat bottom = height-deltaY*zoom;\r\n\t\t\tfloat top = -deltaY * zoom;\r\n\t\t\t\r\n\t\t\tgl_Position = mat4 (\r\n\t\t\t\tvec4(2.0 / (right - left)*zoom, 0.0, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 2.0 / (top - bottom)*zoom, 0.0, 0.0),\r\n\t\t\t\tvec4(0.0, 0.0, -0.001, 0.0),\r\n\t\t\t\tvec4(-(right + left) / (right - left), -(top + bottom) / (top - bottom), 0.0, 1.0)\r\n\t\t\t)\r\n\t\t\t* vec4 (aPosition ,\r\n\t\t\t\t#if_ZINDEX\r\n\t\t\t\taZindex\r\n\t\t\t\t#else_ZINDEX\r\n\t\t\t\t0.0\r\n\t\t\t\t#end_ZINDEX\r\n\t\t\t\t, 1.0\r\n\t\t\t\t);\r\n\t\t}\r\n\t";
de_peote_view_element_ElementSimpleBuffer.defaultFragmentShaderSrc = "\tvarying vec2 vTexCoord;\r\n\t\t#if_RGBA\r\n\t\tvarying vec4 vRGBA;\r\n\t\t#else_RGBA\r\n\t\t\t#if_PICKING\r\n\t\t\tvarying vec4 vRGBA;\r\n\t\t\t#end_PICKING\r\n\t\t#end_RGBA\r\n\t\t\r\n\t\tuniform sampler2D uImage;\r\n\t\t\r\n\t\t#if_PICKING\r\n\t\tuniform vec2 uResolution;\r\n\t\t#end_PICKING\r\n\t\t\r\n\t\tvoid main(void)\r\n\t\t{\r\n\t\t\tvec4 texel = texture2D(uImage, vTexCoord / #MAX_TEXTURE_SIZE);\r\n\t\t\tif(texel.a < 0.5) discard; // TODO (z-order/blend mode!!!)\r\n\t\t\t#if_PICKING\r\n\t\t\tif (uResolution.x == 1.0) { \r\n\t\t\t\tgl_FragColor = vRGBA; //vec4(1.0, 1.0, 1.0, 1.0);\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\t#if_RGBA\r\n\t\t\t\tgl_FragColor = texel * vRGBA;\r\n\t\t\t\t#else_RGBA\r\n\t\t\t\tgl_FragColor = texel;\r\n\t\t\t\t#end_RGBA\t\t\t\t\r\n\t\t\t}\r\n\t\t\t#else_PICKING\r\n\t\t\t\t#if_RGBA\r\n\t\t\t\tgl_FragColor = texel * vRGBA;\r\n\t\t\t\t#else_RGBA\r\n\t\t\t\tgl_FragColor = texel;\r\n\t\t\t\t#end_RGBA\r\n\t\t\t#end_PICKING\r\n\t\t}\r\n\t";
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var x = new haxe__$Int64__$_$_$Int64(0,0);
	$r = x;
	return $r;
}(this));
js_Boot.__toStr = {}.toString;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
lime_Assets.cache = new lime_AssetCache();
lime__$backend_html5_HTML5Window.windowID = 0;
lime_app_Preloader.images = new haxe_ds_StringMap();
lime_app_Preloader.loaders = new haxe_ds_StringMap();
lime_ui_Gamepad.devices = new haxe_ds_IntMap();
lime_ui_Gamepad.onConnect = new lime_app_Event_$lime_$ui_$Gamepad_$Void();
lime_ui_Joystick.devices = new haxe_ds_IntMap();
lime_ui_Joystick.onConnect = new lime_app_Event_$lime_$ui_$Joystick_$Void();
lime_ui_Touch.onEnd = new lime_app_Event_$lime_$ui_$Touch_$Void();
lime_ui_Touch.onMove = new lime_app_Event_$lime_$ui_$Touch_$Void();
lime_ui_Touch.onStart = new lime_app_Event_$lime_$ui_$Touch_$Void();
ApplicationMain.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
