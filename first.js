global.console.log("Hello world"); // global obj is like window obj in browser.
const printHeading = arg => {
  console.log("\x1b[36m%s\x1b[0m", arg ? arg : ""); //cyan
};
const printMessage = arg => {
  console.log(arg ? arg : "NA");
};
message = "Just a message";
printHeading(global.message);
printHeading("Modules");
// every file in node is a module
// they are private
printMessage(module);
printHeading("Creating modules");
printMessage("Created logger.js file");
printHeading("Loading modules");
const log = require("./logger");
printMessage(log("Log message"));
printHeading("Module wrapper function");
printMessage("logger.js file update");
// node wraps all the code into an immediately invoked function/self executing functions
printHeading("Path modules");
const path = require("path");
let pathObj = path.parse(__filename);
printMessage(pathObj);
printHeading("OS modules");
const os = require("os");
let totalMemory = os.totalmem();
let freeMemory = os.freemem();
printMessage(`Total memory is: ${totalMemory}`);
printMessage(`Free memory is: ${freeMemory}`);
printHeading("File system modules");
const fs = require("fs");
const files = fs.readdirSync("./");
printMessage(files);
fs.readdir("./", (err, files) => {
  err
    ? printMessage("Error " + err)
    : printMessage(
        "Callback after reading files => Files in dir are: " + files
      );
});
printHeading("Events modules");
const EventEmitter = require("events");
//  EventEmitter is a class
const emitter = new EventEmitter();
// Register a listener
emitter.on("messageLogged", arg => {
  printMessage("Listener called");
  printMessage(arg);
});
// Raise an event
emitter.emit("messageLogged");
// emit means making a noise, produce/ signalling
printHeading("Event arguments");
emitter.emit("messageLogged", { id: 1, url: "http://" });
printHeading("****Extending event emitter***");
printMessage("Logger file update");
