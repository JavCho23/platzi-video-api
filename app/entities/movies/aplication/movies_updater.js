class MoviesUpdater {
  constructor(repository) {
      this.repository = repository;
  }
  async run(movieId,movie) {
      return this.repository.update(movieId,movie);
  }
}
module.exports = MoviesUpdater;
