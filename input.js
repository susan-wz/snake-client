/*
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === "w") {
      conn.write('Move: up');
    } else if (key === "a") {
      conn.write('Move: left');
    } else if (key === "s") {
      conn.write('Move: down');
    } else if (key === "d") {
      conn.write('Move: right');
    }
  };
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = {setupInput};