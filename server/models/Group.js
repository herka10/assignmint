const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const groupSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'group requires name',
    },
    firstName: {
        type: String,
    },
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Groups;