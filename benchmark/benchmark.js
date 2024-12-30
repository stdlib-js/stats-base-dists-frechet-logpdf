/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var randu = require( '@stdlib/random-base-randu' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var EPS = require( '@stdlib/constants-float64-eps' );
var pkg = require( './../package.json' ).name;
var logpdf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var alpha;
	var m;
	var s;
	var x;
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ( randu()*100.0 ) - 50.0;
		alpha = ( randu()*20.0 ) + EPS;
		m = ( randu()*60.0 ) - 20.0;
		s = ( randu()*20.0 ) + EPS;
		y = logpdf( x, alpha, s, m );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory', function benchmark( b ) {
	var mylogpdf;
	var alpha;
	var m;
	var s;
	var x;
	var y;
	var i;

	alpha = 10.0;
	s = 3.0;
	m = 4.0;
	mylogpdf = logpdf.factory( alpha, s, m );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu() * 50.0;
		y = mylogpdf( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
