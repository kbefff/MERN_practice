const express = require('express');
// import {connectDB} from ('./config/db')
const app = express();

// Connect database
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Connect to the Mongo DB
mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false});

// Init Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));