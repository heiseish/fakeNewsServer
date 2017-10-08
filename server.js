'use-strict';
var check = require('./api/check');
var app = require('express')();
var bodyParser = require('body-parser');


port = process.env.PORT || 3000;

app.listen(port);

/* serves main page */
// app.get("/", function(req, res) {
// 	res.sendfile('index.htm')
// });

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/fake", function(req, res) { 
	/* some server side logic */
	let result = check(req.body.urlToBeChecked);
	res.send(result);
});
