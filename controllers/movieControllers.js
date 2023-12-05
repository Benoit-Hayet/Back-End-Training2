const database = require("../database");

const getMovies = (req,res) => {
    database
    .query("select*from movie")
    .then (([movies]) =>  {
        res.json(movies);
    })
    .catch((err) => {
        console.error(err);
    });
}
module.exports= {
    getMovies,
};