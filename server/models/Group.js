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
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
});

const Group = model('Group', groupSchema);

module.exports = Group;