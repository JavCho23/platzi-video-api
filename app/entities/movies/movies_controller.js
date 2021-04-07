const MoviesCreator = require("./aplication/movies_creator");
const MoviesFinder = require("./aplication/movies_finder");
const MoviesLister = require("./aplication/movies_lister");
const MoviesUpdater = require("./aplication/movies_updater");
const MoviesRepository = require("./repository/mock_movies_repository");

class MoviesController {
    constructor() {
        this.repository = new MoviesRepository();
        console.log("Repositorio creado", this.repository);
    }
    async getAllMovies(req, res, next) {
        const { tags } = req.query;

        try {
            const moviesLister = new MoviesLister(this.repository);
            const movies = await moviesLister.run(tags);

            res.status(200).json({
                data: movies,
                message: "movies listed",
            });
        } catch (err) {
            next(err);
        }
    }
    async findMovie(req, res, next) {
        const movieId = req.params.movieId;

        try {
            const moviesFinder = new MoviesFinder(this.repository);
            const movie = await moviesFinder.run(movieId);

            res.status(200).json({
                data: movie,
                message: "movie finded",
            });
        } catch (err) {
            next(err);
        }
    }

    async createMovie(req, res, next) {
        const movie = req.body;

        try {
            const moviesCreator = new MoviesCreator(this.repository);
            const movie = await moviesCreator.run(movie);

            res.status(201).json({
                data: movie,
                message: "movie finded",
            });
        } catch (err) {
            next(err);
        }
    }

    async updateMovie(req, res, next) {
        const movieId = req.params.movieId;
        const movie = req.body;

        try {
            const moviesUpdater = new MoviesUpdater(this.repository);
            const movieUpdated = await moviesUpdater.run(movieId, movie);

            res.status(200).json({
                data: movieUpdated,
                message: "movie finded",
            });
        } catch (err) {
            next(err);
        }
    }
}
module.exports = new MoviesController();
