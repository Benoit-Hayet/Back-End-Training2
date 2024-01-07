const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors({}));
app.use(express.json());

const movieControllers = require("./controllers/movieControllers")

app.get("/api/movies",movieControllers.getMovies);

module.exports = app

