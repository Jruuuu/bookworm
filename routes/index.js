const path = require("path");
const router = require("express").Router();
const BookModel = require("../models/books.js");

// API Routes

router.post("/api/books/save", function(req,res) {
  console.log("req body",req.body)
  const Book = new BookModel(req.body);
  Book.save().then(doc => {
    console.log(doc)
  })
  .catch(err =>{
    console.error(err)
  })
  });

  router.get("/api/books/save",function(req,res){
    BookModel.find({})
    .then(data =>{
      console.log(data);
      res.json(data)
    })
     });


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
