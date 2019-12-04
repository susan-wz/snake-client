const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });
  // interpret incoming data as text
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.setEncoding('utf8'); 

  conn.on('connect', (callback) => {
    console.log("Successfully connected to game server");
    conn.write('Name: SWZ');
  })

  return conn;
}

module.exports = {connect};