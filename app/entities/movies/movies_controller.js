const MoviesLister = require("./aplication/movies_lister");
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
}
module.exports = new MoviesController();
