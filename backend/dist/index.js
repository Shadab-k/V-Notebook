"use strict";

const connectToMongo = require('./db');
var cors = require('cors');
connectToMongo();
const express = require('express');
const app = express();
const port = 5000;

//Middleware 
app.use(cors());
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.listen(port, () => {
  console.log(`V-Notebook backend listening at http://localhost:${port}`);
});