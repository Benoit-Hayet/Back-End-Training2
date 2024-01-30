const AbstractManager = require("./AbstractManager");

class MovieManager extends AbstractManager  {
    constructor() {
      super({ table: "movie" });
    }
  }
    
    getMovies = (id,title,director,release_year,genre,image_url) => {
        return this.database
        const sqlQuery =
       `select id,title,director,release_year,genre,image_url
       `;
    
}
    module.exports = MovieManager;
