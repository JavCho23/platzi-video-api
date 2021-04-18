const express = require("express");
const MoviesController = require("./movies_controller");
const Validate = require("../../shared/middlewares/validation");
const Schemes = require("./schema");
const router = express.Router();

router.post(
    "/",
    Validate(Schemes.createMovieSchema),
    MoviesController.createMovie.bind(MoviesController)
);
router.get("/", MoviesController.getAllMovies.bind(MoviesController));
router.get(
    "/:movieId",
    Validate({ movieId: Schemes.movieIdSchema }, "params"),
    MoviesController.findMovie.bind(MoviesController)
);
router.put(
    "/:movieId",
    Validate({ movieId: Schemes.movieIdSchema }, "params"),
    Validate(Schemes.updateMovieSchema),
    MoviesController.updateMovie.bind(MoviesController)
);

module.exports = router;
