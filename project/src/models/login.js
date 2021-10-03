const mongoose = require('mongoose');


const loginSchema = new mongoose.Schema({
    email: { type: String, required: false},
    password: {type: String, required: false},
},{
    versionkey: false,
    timestamps: true
})

const Login = mongoose.model('login',loginSchema)

module.exports = Login;