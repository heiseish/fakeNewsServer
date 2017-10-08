'use-strict';
var identify = require('./identify');
var compile = require('./compile');
// some fact checking tool:
// Quote checker: http://trooclick.com/views/quote-verifier -> scrape
// fact checking api: http://factmata.com/
// Flow of the checking process:
// -> Find the type of check: eg Politics, sciences, social, etc since we're using different apis, 
// some APIs can check certain type of fact
// -> Pass args to relevant fact checker api
// -> Compile the result from diffrent apis and yield a final result
const check = (url) => {
	var type = identify(url);
	return compile(type, url);
}
module.exports = check;

