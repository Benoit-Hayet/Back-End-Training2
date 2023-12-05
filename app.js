const express = require("express");
const app = express();
app.use(express.json());

const movieControllers = require("./controllers/movieControllers")

app.get("/api/movies",movieControllers.getMovies);

module.exports = app

