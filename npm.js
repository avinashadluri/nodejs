const printHeading = arg => {
    console.log("\x1b[36m%s\x1b[0m", arg ? arg : ""); //cyan
};
const printMessage = arg => {
    console.log(arg ? arg : "NA");
};

const mongoose = require('mongoose');

printHeading('Using npm packages:')