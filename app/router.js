const MoviesRouter = require("./entities/movies/api/router");

module.exports = function (app) {
    app.use("/api/movies", MoviesRouter);
};
