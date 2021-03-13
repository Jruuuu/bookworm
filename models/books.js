const mongoose = require ("mongoose");


const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true},
    author:{
        type: Array,
        required: true},
    description:{
        type: String},
    image:{
        type:String},
    link:{
        type:String}
    });
    module.exports  = mongoose.model("Book", bookSchema);


