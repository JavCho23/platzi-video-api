const boom = require("@hapi/boom");
const Joi = require("joi");

function validate(data, schema) {
    const { error } = Joi.object(schema).validate(data);
    return error;
}

module.exports = function (schema, from = "body") {
    return function (req, _, next) {
        const error = validate(req[from], schema);
        if (error) throw new boom.badRequest(error, error.details);
        next();
    };
};
