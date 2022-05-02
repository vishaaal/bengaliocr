const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    submittedImg: {
        type: String
    }
}, {
    collection: 'users'
})
module.exports = mongoose.model('User', userSchema)