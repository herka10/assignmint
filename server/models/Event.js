const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const eventSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title needed',
    },
    firstName: {
        type: String,
    },
    startDate:{
        type: Date,
        default: Date.now,
        required: 'Date required',
    },
    dueDate: {
        type: Date,
        // default:,
        required: 'Due dated needed',
    },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Events;