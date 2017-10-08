'use-strict';
var apis = require('./libs');
const compile = (type, url) => apis[type].reduce((sum, func) => sum + func(url), 0)/apis[type].length;

module.exports = compile;