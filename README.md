# Peote Telnet

Crossplatform terminal emulation and [telnet](https://en.wikipedia.org/wiki/Telnet) client written in [Haxe](http://haxe.org) and  
[OpenFl/Lime](http://www.openfl.org/download/) Framework.  


## Depends on
[Lime](https://github.com/openfl/lime), [peote-socket](https://github.com/maitag/peote-socket) and [peote-view](https://github.com/maitag/peote-view),
install with:
```
haxelib install lime
haxelib git peote-socket https://github.com/maitag/peote-socket
haxelib git peote-view https://github.com/maitag/peote-view
```


For html5 webclients you can use [peote-proxy](https://github.com/maitag/peote-proxy)  
on a dedicated server to connect them throught [NAT](https://en.wikipedia.org/wiki/Network_address_translation).

## Build

`$ lime build peoteTelnetClient.lime linux  (android/windows/html5)`


## Run

Edit the ip/port inside `Assets/config.conf` to configure adress of telnet-server you want to connect.  

If run inside webbrowser, flashplayer (raw-socket-bridge) or websockets needs permission to leave sandbox,  
so wrap around with a [proxy](https://github.com/maitag/peote-proxy) running serverside.

## Why another Terminal Emulation ?

- use power of haxe-lime multiplatform code generation
- building mud-clients ;)

## Todo

- display resizing
- better error handling
- reconnect socket
- more control commands (keyboard-input)
- local echo switch
- ansi-background-colors
