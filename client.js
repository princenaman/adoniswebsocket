var io = require('socket.io-client');

var connected = 0
console.log(new Date().toGMTString())
var socketdata = {
  "abc": 1,
  "xyz": 100
}
var url = 'http://localhost:3333/chat'
var max = parseInt(process.argv[2], 10)

for (i = 0; i < max; i++) {
  var socket = io.connect(url, {
    'force new connection': true
  });

  try {
    socket.on('connect', () => {
      if (socket.connected) {
        connected++
        // console.log('connected:' + connected)
        socket.emit('message', socketdata, (data) => {
          console.log('updated data at ' + (new Date().toGMTString()) + '. connected:' + connected)
        });
        setInterval(function() {
          socket.emit('message', socketdata, (data) => {
            console.log('updated data at ' + (new Date().toGMTString()) + '. connected:' + connected)
          });
        }, 60000, socket)
      } else {
        // console.log('retrying')
        socket.connect()
      }
    });

    socket.on('connect_error', (error) => {
      // console.log('connect_error: ', error);
      socket.connect()
    });

    socket.on('connect_timeout', (timeout) => {
      // console.log('timeout: ', timeout);
      socket.connect()
    });

    socket.on('error', (error) => {
      // console.log('error: ', error);
      socket.connect()
    });

    socket.on('disconnect', (error) => {
      // console.log('error: ', error);
      if (connected > 0) { connected-- }
      // console.log('connected:' + connected)
      socket.connect()
    });
  } catch (e) {
    console.log('exception', e);
  }

}
