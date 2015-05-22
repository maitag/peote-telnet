/*
   ###############################################################################
   #    Author:   Sylvio Sell - maitag - Rostock 2013                            #
   #    Homepage: http://maitag.de                                               #
   #    License: GNU General Public License (GPL), Version 2.0                   #
   #                                                                             #
   #    more images about that lyapunov fractalcode at:                          #
   #    http://maitag.de/~semmi/                                                 #
   #                          (have fun!;)                                       #
   ############################################################################### */
   
precision mediump float;

varying vec2 vTexCoord;
uniform sampler2D uImage;

uniform float uTime;

uniform vec2 uMouse, uResolution;

void main( void ) {

	// x y pos
	float a = vTexCoord.x/400.0; // uResolution.x;
	float b = vTexCoord.y/400.0; // uResolution.y;
	
	// PArameter
	float p1 = 1.7+(0.7 / 5.0)*sin(uTime/1.5);
	float p2 = 1.7+(0.8 / 5.0)*cos(uTime/2.0+0.3);
	
	float index = 0.0;
	
	float xx = 1.0 + log(uTime);
	
	// pre-iteration ##########################
	
	for (int i = 0; i < 2; i++) {
		xx = p1 * sin(xx + a) * sin(xx + a) + p2;
		xx = p1 * sin(xx + b) * sin(xx + b) + p2;
	}
	
	// main-iteration ########################
	
	for (int i = 0; i < 5; i++) {
		xx = p1 * sin(xx + a) * sin(xx + a) + p2;
		index = index + log(abs(2.0 * p1 * sin(xx + a) * cos(xx + a)));
		
		xx = p1 * sin(xx + b) * sin(xx + b) + p2;
		index = index + log(abs(2.0 * p1 * sin(xx + b) * cos(xx + b)));
	}
	
	index = index / 10.0;
	
	if (index > 0.0) {
		gl_FragColor = vec4(index*0.25+0.3, index*0.27+0.4, 0.15, 1.0);
	}
	else {
		gl_FragColor = vec4((0.0-index)*0.11+0.2, (0.0-index)*0.13+0.4, (0.0-index)*0.1, 1.0);
	}
}

