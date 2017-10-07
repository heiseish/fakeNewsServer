var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

app.get('/fakenews', function (req, res) {
  res.send('Hello World!')
})
