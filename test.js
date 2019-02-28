const request = require('request');
var c29s = require('./c29s.js');
var verify = c29s.cwrap('c29s_verify', 'number', ['array','number','array']);


request.get('https://swap.coinscope.cc/api/rawblock/599000', (error, response, body) => {
	var data = JSON.parse(body).data;
	
	verify(Buffer.from([0,2,0,0,0,0,0,0,0,12]),10,cycle);

	console.log(data.cycle);
});


/*
var cycle = Buffer.alloc(32*4);
for(var i in edges)
{
	cycle.writeInt32LE(edges[i], i*4);
}

for(var i=0 ; i < 10000;i++)
	verify(Buffer.from([0,2,0,0,0,0,0,0,0,12]),10,cycle);
*/
