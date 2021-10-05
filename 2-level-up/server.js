'use strict';

const http = require('http');

http.createServer((req, res) => {
	const url = req.url;
	console.log(url);
	res.end(JSON.stringify({ response: url }));
}).listen(80);