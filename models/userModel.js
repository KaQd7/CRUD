const mongoose = require("mongoose");

const usersSchema = {
    user: String,
    email: String,
    password: String
}

const User = mongoose.model("User", usersSchema);

module.exports = User;