const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    userMsg: {
        type: String,
        required: true
    },
}, {timestamps: true});

const UserMsg = mongoose.model('messages', msgSchema);

module.exports = UserMsg;
