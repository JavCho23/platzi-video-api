const Joi = require("joi");

const movieIdSchema = Joi.string().regex(
    /^[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}$/
);
const movieTitleSchema = Joi.string().max(80);
const movieYearSchema = Joi.number().min(1888).max(2077);
const movieCoverSchema = Joi.string().uri();
const movieDescriptionSchema = Joi.string().max(300);
const movieDurationSchema = Joi.number().min(1).max(300);
const movieContentRatingSchema = Joi.string().max(5);
const movieSourceSchema = Joi.string().uri();
const movieTagsSchema = Joi.array().items(Joi.string().max(50));

const createMovieSchema = {
    title: movieTitleSchema.required(),
    year: movieYearSchema.required(),
    cover: movieCoverSchema.required(),
    description: movieDescriptionSchema.required(),
    duration: movieDurationSchema.required(),
    contentRating: movieContentRatingSchema.required(),
    source: movieSourceSchema.required(),
    tags: movieTagsSchema,
};

const updateMovieSchema = {
    title: movieTitleSchema,
    year: movieYearSchema,
    cover: movieCoverSchema,
    description: movieDescriptionSchema,
    duration: movieDurationSchema,
    contentRating: movieContentRatingSchema,
    source: movieSourceSchema,
    tags: movieTagsSchema,
};

module.exports = {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema,
};
