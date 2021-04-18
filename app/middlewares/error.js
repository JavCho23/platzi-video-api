const boom = require("@hapi/boom");

function notFound(_, res) {
    const {
        output: { statusCode, payload },
    } = boom.notFound("Route not found");
    res.status(statusCode).json(payload);
}

function parseError(err, _, _, next) {
    if (!err.isBoom) {
        const error = boom.badImplementation(err);
        error.data = err.stack;
        next(error);
    }
    next(err);
}

function handleError(err, _, res, _) {
    const {
        output: { statusCode, payload },
    } = err;
    console.log(err);
    res.status(statusCode).json(payload);
}

module.exports = {
    notFound,
    handleError,
    parseError,
};
