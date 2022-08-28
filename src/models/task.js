const mongoose = require('mongoose')




const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Users'
    }
}, {
    timestamps: true
})

const Task = mongoose.model( 'Tasks', taskSchema)

module.exports = Task