const { Schema, model } = require('mongoose');
const eventSchema = require('./Event');

const calendarSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    // TODO: Don't think we need this? Populates in resolvers - events: [eventSchema],
});

const Calendar = model('Calendar', calendarSchema);

module.exports = Calendar;