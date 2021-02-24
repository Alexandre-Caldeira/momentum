const mongoose = require('../config/database');

const Schema = mongoose.Schema;


// Estrutura no db do nosso card de task
const TaskSchema = new Schema({
    macaddress: {type: String, required:true},
    type: {type:Number, required: true},
    title: {type:String, required: true},
    description: {type:String, required: true},
    when: {type:Date, required: true},
    done: {type:Boolean, default:false},
    created: {type: Date, default: Date.now()},
    notify: {type: Boolean, default: false},
    momentum: {type: Number, default: -1}
    
});

module.exports = mongoose.model('Task', TaskSchema);
