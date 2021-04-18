const { handleError, parseError, notFound } = require("./error");

module.exports = function (app) {
    app.use(notFound);
    app.use(parseError);
    app.use(handleError);
};
