const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type: String,
        required: true},
        synopsis:String,
    author:{
        type: String,
        required: true},
    description:{
        type: String},
    imsge:{
        type:String},
    link:{
        type:String}
    });
    const Book = mongoose.model("Book", bookSchema);
    module.exports = Book;

