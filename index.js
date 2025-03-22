//File system

// --------------------------------------------------------------

// // fs.readFile("example.txt", "utf8", (err, data) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log(data);
// // });

// const content = "tHIS IS THE WRITE FILE SYSTEM TEXT FILE";
// fs.writeFile("output.txt", content, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("The file has been Written successfully!");
// });
//
const fs = require("fs");
const http = require("http");
const path = require("path");
const os = require("os");
const url = require("url");
const crypto = require("crypto");
const sayHello = require("./greetings");
const math = require("./math");
const lodash = require("lodash");

// Create a server
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, World!\n");
// });

// // Start the server on port 3000
// server.listen(3000, () => {
//   console.log(`Server is running at http://localhost:3000`);
// });

//Path module
// const directory = "/users/local/projects/";
// const fileName = "example.txt";
// const fullPath = path.join(directory, fileName);
// console.log(fullPath);

// Os MODULE
// console.log("platform:", os.platform());
// console.log("Cpu architecure:", os.arch());
// console.log("FreeMemory:", os.freemem());
// console.log("Totalmemory:", os.totalmem());

// url module

// const myUrl = new URL(
//   "http://mywebsite.com:3000/hello.html?id=100&status=active"
// );
// console.log("href :", myUrl.href);
// console.log("host:", myUrl.host);
// console.log(myUrl.pathname);
// console.log(myUrl.search);
// console.log(myUrl.searchParams);

// Crypto module

// const hash = crypto.createHash("sha256");
// hash.update("Hello world");
// console.log(hash.digest("hex"));

// for hashing the hello world we use the crypto module

// custom modules for testing

// const message = sayHello("Developers");
// console.log(message);

// THese are also custom modules for testing
// const result = math.add(5, 3);
// console.log(result);

// const result1 = math.subtract(5, 3);
// console.log(result1);

//The working array with lodash functions or npm package

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const reversed = lodash.reverse(numbers);
// console.log(reversed);

// const filtered = lodash.filter(numbers, (num) => num % 2 === 0);
// console.log(filtered);

// streams in Node.js

//1. ReadAble Streams

// Import the 'fs' module to work with the file system
// const fs = require("fs");

// Create a readable stream to read the file 'example.txt'
// The 'encoding: "utf-8"' option ensures the data is read as a string
// const readableStream = fs.createReadStream("example.txt", {
//   encoding: "utf-8",
// });

// // Listen for the 'data' event, which is emitted whenever a chunk of data is read
// readableStream.on("data", (chunk) => {
//   // Log each chunk of data to the console
//   console.log(chunk);
// });

// // Listen for the 'end' event, which is emitted when the entire file has been read
// readableStream.on("end", () => {
//   // Log a message indicating that the file reading is complete
//   console.log("Finished Reading the file");
// });

// // Listen for the 'error' event, which is emitted if an error occurs while reading the file
// readableStream.on("error", (err) => {
//   // Log the error message to the console
//   console.log("Error:", err);
// });

//2.  WriteAble Streams
// const writeableStream = fs.createWriteStream("output2.txt");
// writeableStream.write("This is the write ");
// writeableStream.write("file system text file");
// writeableStream.end();

// writeableStream.on("finish", () => {
//   console.log("finished The writing of the file ");
// });

//3. piping streams

const readableStream = fs.createReadStream("example.txt");
const writeableStream = fs.createWriteStream("example-output.txt");
readableStream.pipe(writeableStream);
writeableStream.on("finish", () => {
  console.log("File copied Successfully!");
});
