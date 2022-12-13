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
  arr[arr.findLast]=msg;
  console.log("we got a message")
  sleep(350); //wait
  //send back first msg in list to all listening on that port
  server.send(arr[0], 0, arr[0].length, port, hostname, function(err, bytes) {
    console.log("succesfully sent out a packet \n");
  });
});
if (arr[50]==undefined && arr.find(element=>element!==undefined)!==undefined) {
  //send out message since original relay failed
  //this sends out the first sendable packet it finds in queue arr
  server.send(arr[arr.find(element=>element!==undefined)], 0, arr[arr.find(element=>element!==undefined)].length, port, hostname, function(err, bytes) {
    console.log("no msg recieved, relaying packet to hopefully wake up nodes;");
  });
  arr.splice(0,1);
}
//no while loop since every client sends a packet every second, even if no action is performed 
//this is so short because node does most of the stuff on its own
