class MoviesFinder {
    constructor(repository) {
        this.repository = repository;
    }
    async run(movieId) {
        return this.repository.find(movieId);
    }
}
module.exports = MoviesFinder;
