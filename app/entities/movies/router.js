const express = require("express");
const MoviesController = require("./movies_controller");

const router = express.Router();

router.post("/", MoviesController.createMovie.bind(MoviesController));
router.get("/", MoviesController.getAllMovies.bind(MoviesController));
router.get("/:movieId", MoviesController.findMovie.bind(MoviesController));
router.put("/:movieId", MoviesController.updateMovie.bind(MoviesController));

module.exports = router;
