//havent tried this, idk if it works?
var stuff=require('./stuff.json')
const dgram = require('node:dgram');
const server = dgram.createSocket('udp4');
arr =Array(60)
//start listening 
server.bind(stuff.port, stuff.hostname);
while (True) {
server.on('message', function(msg, rinfo) {
  //append to array's first blank index
  arr[arr.findLast] = msg;
  console.log("message recieved")
  sleep(350); //wait
  arrl[arrl.findLast] = rinfo.address
  //send back first msg in list to all listening on that port
  server.send(arr[0], 0, arr[0].length, stuff.port, stuff.hostname, function(err, bytes) {
    console.log("succesfully sent out a packet \n");
  });
});
if (arr[50] == undefined && arr.find(element => element !== undefined) !== undefined) {
  //send out message since original relay failed
  //this sends out the first sendable packet it finds in queue arr
  server.send(arr[arr.find(element => element !== undefined)], 0, arr[arr.find(element => element !== undefined)].length, stuff.port, stuff.hostname, function(err, bytes) {
    console.log("packet dropped, relaying last available packet");
  });
  //bump up, keep going
  arr.splice(0, 1);
}
sleep(350);
//send if no message was recieved, should never be called anyways
 server.send(arr[0], 0, arr[0].length, stuff.port, stuff.hostname, function(err, bytes) {
    console.log("sent another message");
   arr.splice(0,1);
  });
}


