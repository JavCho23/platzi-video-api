const boom = require("@hapi/boom");

function notFound(_, res) {
    const {
        output: { statusCode, payload },
    } = boom.notFound("Route not found");
    res.status(statusCode).json(payload);
}

function parseError(err, req, res, next) {
    if (!err.isBoom) {
        const error = boom.badImplementation(err);
        error.data = err.stack;
        next(error);
    }
    next(err);
}

function handleError(err, req, res) {
    const {
        output: { statusCode, payload },
        data,
    } = err;
    payload.details = data;
    res.status(statusCode).json(payload);
}

module.exports = {
    notFound,
    handleError,
    parseError,
};
