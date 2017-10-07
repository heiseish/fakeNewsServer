
var express = require('express');
app = express();
port = process.env.PORT || 3000;

app.listen(port);

/* serves main page */
app.get("/", function(req, res) {
	res.sendfile('index.htm')
});

app.post("/fake/:string", function(req, res) { 
	/* some server side logic */
	let result = req.params.string;
	console.log(result);
	res.write(result);
});
