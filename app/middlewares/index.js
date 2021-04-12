const ErroHandler = require("./error");

module.exports = function (app) {
    app.use(ErroHandler);
};
