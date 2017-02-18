### Peote Telnet - terminal emulation and telnet client

written in [Haxe](http://haxe.org). Uses [OpenFl/Lime](http://www.openfl.org/documentation/setup/install-haxe/)
to run on multiple hardware devices.


####Depends on
[peote-socket](https://github.com/maitag/peote-socket) and [peote-view](https://github.com/maitag/peote-view),

```
haxelib git peote-socket https://github.com/maitag/peote-socket
haxelib git peote-view https://github.com/maitag/peote-view
```


For html5 haxe targets you can use [peote-proxy](https://github.com/maitag/peote-proxy) to redirect throught NAT!

####Build


`$ lime build peoteTelnetClient.lime linux  (android/windows/html5)`



####TESTING

- edit ip/port inside Assets/config.conf to what telnet(/mud;)-server adress you wanna connect
- if run inside webbrowser, flashplayer (raw-socket-bridge) or websockets needs permission to leave sandbox,
  so wrap around that with some kind of [proxy](https://github.com/maitag/peote-proxy) running serverside

####Why another Terminal Emulation ?

- use power of haxe-lime multiplatform code generation
- building mud-clients ;)

####Todo

- display resizing
- better error handling
- reconnect socket
- more control commands (keyboard-input)
- local echo switch
- ansi-background-colors