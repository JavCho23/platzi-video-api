module.exports = function (err, _, res, _) {
    res.status(err.status || 500).json({
        result: err.message,
        stack: err.stack,
    });
};
