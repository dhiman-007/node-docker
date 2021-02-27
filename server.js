'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App

var posts = {

}

const app = express();
app.get('/', (req, res) => {
  res.send('<center>Hello World From Docker - Container</center>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);