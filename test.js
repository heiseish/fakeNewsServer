'use-strict';
var politicsArrayFunctions = require('./libs/politics');
const politics = (url) => politicsArrayFunctions.reduce((sum, func) => sum + func(url), 0)/politicsArrayFunctions.length;
console.log(politics(1));
