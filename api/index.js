// import express and cors
const cors = require('cors')
const express = require('express')

// create the express app with cors enabled
const app = express();
app.use(cors());
app.options('*', cors());

// define port
const port = 8085;

// define root controller (GET)
app.get('/', (rep, res, next) => {
  res.send('welcome to my api ...');
});

app.get('/suma', (req, res, next) => {
  var x = Number(req.query.x);
  var y = Number(req.query.y);
  console.log(x);
  console.log(y);

  var result = x + y;
  var objResult = {
          result: result
        }
  res.send(objResult);
});

app.get('/resta', (req, res, next) => {
  var x = Number(req.query.x);
  var y = Number(req.query.y);
  console.log(x);
  console.log(y);

  var result = x - y;
  var objResult = {
          result: result
        }
  res.send(objResult);
});

app.get('/mult', (req, res, next) => {
  var x = Number(req.query.x);
  var y = Number(req.query.y);
  console.log(x);
  console.log(y);

  var result = x * y;
  var objResult = {
          result: result
        }
  res.send(objResult);
});

app.get('/div', (req, res, next) => {
  var x = Number(req.query.x);
  var y = Number(req.query.y);
  console.log(x);
  console.log(y);

  var result = x / y;
  var objResult = {
          result: result
        }
  res.send(objResult);
});

app.get('/pow', (req, res, next) => {
  var x = Number(req.query.x);
  var y = Number(req.query.y);
  console.log(x);
  console.log(y);

  var result = Math.pow(x, y);
  var objResult = {
          result: result
        }
  res.send(objResult);
});

app.get('/cuad', (req, res, next) => {
  var n = Number(req.query.n);
  console.log(n);

  var result = Math.pow(n, 2);
  var objResult = {
          result: result
        }
  res.send(objResult);
});

app.get('/sqrt', (req, res, next) => {
  var n = Number(req.query.n)
  console.log(n);

  var result = Math.sqrt(n);
  var objResult = {
          result: result
        }
  res.send(objResult);
});

app.listen(port, () =>
  console.log('listening on port ' + port)
);
