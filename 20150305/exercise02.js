/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
*/
console.log("esercizio 2\n");
var i = 1;
var j = 1;
var x = 0;
while (i<=10){
	while (j<=10){
	x=x+i;
	if (j<10)
 	console.log(x + ',');
	else
	console.log(x);
	j++;
	}	
	console.log('\n');
	i++;
	j=1;
	x=0;
} 


