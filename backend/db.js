const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongodb_url)

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todoModel = mongoose.model('todo', todoSchema);

module.exports = {
    todoModel
}