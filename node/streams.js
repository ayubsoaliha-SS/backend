// Streams in Node.js
// Streams are used to handle reading/writing data piece-by-piece
//  rather than loading everything into memory at once. 
//  This is crucial for large files.The four types are:
// Readable: To read data (e.g., fs.createReadStream()).
// Writable: To write data (e.g., fs.createWriteStream()).
// Duplex: Can both read and write (e.g., a network socket).
// Transform: A type of Duplex stream where the data can be
//  modified while reading/writing (e.g., zlib compression).


const fs = require("fs");

const readStream = fs.createReadStream("input.txt");

readStream.on("data", chunk => {
  console.log(chunk.toString());
});