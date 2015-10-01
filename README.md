### Peote Telnet - terminal emulation and telnet client

written in [Haxe](http://haxe.org). Uses [OpenFl/Lime](http://www.openfl.org/documentation/setup/install-haxe/)
to run on multiple hardware devices.


####Depends
[peote-socket](https://github.com/maitag/peote-socket) and [peote-view](https://github.com/maitag/peote-view)
(please download this first)

####Build

(look into peoteTelnetClient.lime file where external sources are!)


#####native OS:

`$ lime build peoteTelnetClient.lime linux  (android/windows)`



#####Javascript/WebGL:

`$ lime build peoteTelnetClient.lime html5`

look into html5-test folder, how to get it run in webbrowser with flash-rawsocket-bridge (PeoteSocketBridge.swf)


####TESTING

- edit ip/port inside Assets/config.conf to what telnet(/mud;)-server adress you wanna connect
- if run inside webbrowser, flashplayer (raw-socket-bridge) needs permission to leave sandbox,
  wrap around that with some kind of [xml-daemon](https://github.com/maitag/peote-telnet/blob/master/html5-test/flashpolicyd.pl) running serverside

####Why another Terminal Emulation ?

- use power of haxe-lime multiplatform code generation
- building mud-clients ;)

####Todo

- more control commands (keyboard-input)
- local echo switch
- ansi-background-colors
- reconnect socket