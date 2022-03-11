const mongoose = require('mongoose');

// step 1 :- create the schema for user
const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {
    versionKey: false,
    timestamps: true
});
// step 2 :- connect the schema to the users collection
const User = mongoose.model("user", userSchema); // users

module.exports = User;