import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getGoogleBooks: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  getBooks: function(){
      return axios.get("/api/books")
  },
  saveBooks: function(savedBook){
      return axios.post("/api/books", savedBook)
  },
  destroyBook: function(savedBook){
      return axios.delete("/api/books" + savedBook)
  }
};
