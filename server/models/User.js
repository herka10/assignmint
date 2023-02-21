const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const itemSchema = require('./Item');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique:true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
    },

    events: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Event',
    }
],

    groups:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Group',
        }
    ],
    items: {
       type: [ itemSchema ],
       default: []
    }
});

//set put presave middleware
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 8;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

//compare the new password with hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;