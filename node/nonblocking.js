//3. Non-blocking I/O 
// In traditional systems, the thread waits for a file to read
//  or a database to respond. 
// Node.js doesn't wait. It sends the request to the OS or
//  a background thread pool (Libuv) and moves on to the 
//  next line of code. When the task is done, 
// a callback is triggered to handle the result.

const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("Runs first");