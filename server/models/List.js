const { Schema, model } = require('mongoose');

const listSchema = new Schema(
    {
        listName: {
            type: String,
            required: 'must name event',
            minlegnth: 1,
            maxlegnth: 250,
        },
        createAt: {
            type: Date,
            defalut: Date.now,
            get: (timestamp) => dateFormat(timestamp)
        },

    }
);

const Lists = model("List", listSchema);

module.exports = Lists;
