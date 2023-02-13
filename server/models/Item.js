const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
        itemDescription: {
            type:String,
            minLength:1,
            maxlength: 200,
        },
        quanity: {
            type: Number,
            default: 0,
        },
    }
);

module.exports = itemSchema;