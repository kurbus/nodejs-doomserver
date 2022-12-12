//havent tried this, idk if it works?
const hostname = "127.0.0.1";
const port = "666";
const dgram = require('node:dgram');
//start server
const server = dgram.createSocket('udp4');

//broadcast on
server.setBroadcast(true);
server.bind(port, hostname);
//shoot out a recieved message to all listening on that port (at any given time, no buffer)
server.on('message', function(msg, rinfo) {
  server.send(msg, 0, msg.length, port, hostname, function(err, bytes) {
});