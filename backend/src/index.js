const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const url_db = 'mongodb://localhost:27017/omnistack10';
mongoose.connect(url_db, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(routes);



app.listen(3333);