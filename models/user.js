const {Schema, model} = require('mongoose');
const user = new Schema({
    login:{
        type: String,
        required: true,
    }, 
    userName: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        required: true,
    }, 
    photoUrl: {
        type: String
    }
})


module.exports = model('user', user)