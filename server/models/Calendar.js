const { Schema, model } = require('mongoose');
const eventSchema = require('./Event');

const calendarSchema = new Schema({
    firstName: {
        type:String,
        required: true,
    },
    events: [eventSchema],
});

const Calendar = model('Calendar', calendarSchema);

module.export = Calendar;