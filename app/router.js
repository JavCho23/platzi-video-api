const MoviesRouter = require("./entities/movies/router");

module.exports = function (app) {
    app.use("/api/movies", MoviesRouter);
};
