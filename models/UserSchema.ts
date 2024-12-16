const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})


const User = mongoose.model("user", UserSchema);
export default User