const MoviesRepository = require("../repository/mock_movies_repository");

class MoviesLister {
    async run() {
        return MoviesRepository.getAllMovies();
    }
}
module.exports = new MoviesLister();
