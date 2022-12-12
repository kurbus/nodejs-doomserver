//havent tried this, idk if it works?
const hostname=require('os').hostname();
const port = "666";
const dgram = require('node:dgram');
//start server
const server = dgram.createSocket('udp4');
arr=Array(50)
//start listening 
server.bind(port, hostname);
server.on('message', function(msg, rinfo) {
  //append to array's first blank index
  arr[arr.findlLast]=msg;
  console.log("we got a message")
  //send back first msg in list to all listening on that port
  server.send(arr[0], 0, arr[0].length, port, hostname, function(err, bytes) {
    console.log("corresponded! \n");
  });
//bump up the next item in the queue, keeps the line moving
 arr.splice(0,1);
});