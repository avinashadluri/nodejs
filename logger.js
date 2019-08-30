// console.log(__dirname);
var url = "http://mylogger.io/log";
function log(message) {
  // send Http request
  console.log("log func called");
  return message;
  // add emitter code TODO
}
module.exports = log;
// module.exports.endpoint = url; // if we want to export url to world
