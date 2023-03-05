// node.js runs on the server and not in a browser(backend)
// The console is the terminal window

console.log("Dummy message to test the console");

// Global object instead of window object

console.log(global);

// Has common core modules
// Common JS Modules instead of ES6 Modules
// Missing some JS API's like fetch

const os = require("os");
const path = require("path");
const { add, subtract, multiply, divide } = require("./math");

console.log(
  `19 + 16 = ${add(19, 16)} | 14 - 9 = ${subtract(
    14,
    9
  )} | 15 times 8 = ${multiply(15, 8)} | 81 divide by 9 =  ${divide(81, 9)}`
);

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
