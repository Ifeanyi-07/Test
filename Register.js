const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    date: String, 
    department: String,
    course: String,


    
})

const RegisterModel = mongoose.model("register", RegisterSchema);
module.exports = RegisterModel;