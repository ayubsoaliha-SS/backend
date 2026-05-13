//2. fs vs. fs/promises 
// fs: The original module. It primarily uses callbacks
// (e.g., fs.readFile(path, (err, data) => { ... })).
//  If not handled carefully, this leads to "callback hell."
// fs/promises: A modern version that returns Promises. 
// This allows you to use async/await syntax, making your
//  code cleaner and easier to read 
// (e.g., const data = await fs.readFile(path);)



//callback style
const fs = require("fs");

fs.readFile("a.txt", "utf8", (err, data) => {
  console.log(data);
});

//promise style

const fs = require("fs/promises");

async function read() {
  const data = await fs.readFile("a.txt", "utf8");
  console.log(data);
}