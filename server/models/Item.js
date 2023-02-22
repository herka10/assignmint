const { Schema } = require('mongoose');

const itemSchema = new Schema(
    {
        itemDescription: {
            type:String,
            minLength:1,
            maxlength: 200,
        },
        quantity: {
            type: Number,
            default: 0,
        },
    }
);

module.exports = itemSchema;