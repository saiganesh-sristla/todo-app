const mongoose = require('mongoose');
const { mongodb_url } = require('./config')

mongoose.connect(mongodb_url);

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todoModel = mongoose.model('todo', todoSchema);

module.exports = {
    todoModel
}