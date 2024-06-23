const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    zip:{
        type:String,
        required: true,
    },
})

const ProfileModel = mongoose.model("profile", ProfileSchema);
module.exports = ProfileModel

