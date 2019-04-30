const express = require('express');
// import {connectDB} from ('./config/db')
const app = express();

// Connect database
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Connect to the Mongo DB
mongoose.connect(db, {useNewUrlParser: true});

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));