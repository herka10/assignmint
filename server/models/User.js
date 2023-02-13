const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

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
    ]
});

//set put presave middleware
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

//compare the new password with hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;