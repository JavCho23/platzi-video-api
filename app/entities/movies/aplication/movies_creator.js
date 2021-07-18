class MoviesCreator {
    constructor(repository) {
        this.repository = repository;
    }
    async run(movie) {
        return this.repository.create(movie);
    }
}
module.exports = MoviesCreator;
