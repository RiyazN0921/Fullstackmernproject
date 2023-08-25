const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:String,
        default:"To Do"
    }
})

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;