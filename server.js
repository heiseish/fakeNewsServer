
var express = require('express');
app = express();
port = process.env.PORT || 3000;

app.listen(port);

/* serves main page */
app.get("/", function(req, res) {
	res.sendfile('index.htm')
});

app.post("/fake", function(req, res) { 
	/* some server side logic */
	res.send("Yeah fake as fuck");
});
