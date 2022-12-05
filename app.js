'use strict';

let spdy = require('spdy'); 

spdy.createServer({
	spdy: {
		plain: true,
		'x-forwarded-for': true,
		ssl: false
	}
}, function(req, res) {
    res.writeHead(200);
    res.end('Hello world over HTTP/2');
}).listen(3000);