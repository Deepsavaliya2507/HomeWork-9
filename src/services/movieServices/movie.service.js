const Movie = require("../../models/movieModel/movie.model");

//  create Movie
const createMovie = async (reqBody) => {
    return Movie.create(reqBody);
};

//  get Movie list
const getMovieList = async (filter, options) => {
    return Movie.find({});
    // return Movie.find({$or: [{Movie_total_rooms: 10}]});
};

//  get Movie by Id
const getMovieById = async (MovieId) => {
    return Movie.findOne({ MovieId });
};

//  delete Movie
const deleteMovie = async (MovieId) => {
    return MovieId.findByIaAndDelete(MovieId);
};

module.exports = {
    createMovie,
    getMovieList,
    getMovieById,
    deleteMovie,
}