const mongoose = require('mongoose');

const ProgileSchema = new mongoose.Schema({
    user: {
        // connect to id in user model that Mongoose creates dynamically
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})