const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./DB/index.js')

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Parse cookies from the request
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}
app.listen(3000); //listens on port 3000 -> http://localhost:3000/