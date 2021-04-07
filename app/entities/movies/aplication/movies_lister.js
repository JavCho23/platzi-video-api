class MoviesLister {
    constructor(repository) {
        this.repository = repository;
    }
    async run() {
        return this.repository.getAllMovies();
    }
}
module.exports = MoviesLister;
