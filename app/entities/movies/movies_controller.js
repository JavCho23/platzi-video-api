const MoviesLister = require("./aplication/movies_lister");

class MoviesController {
    async getAllMovies(req, res, next) {
        const { tags } = req.query;

        try {
            const movies = await MoviesLister.run();

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
