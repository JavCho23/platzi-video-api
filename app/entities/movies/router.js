const express = require("express");
const MoviesController = require("./movies_controller");

const router = express.Router();

router.get("/", MoviesController.getAllMovies);

module.exports = router;
