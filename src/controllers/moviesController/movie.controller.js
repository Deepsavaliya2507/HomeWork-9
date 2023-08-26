const { movieService } = require("../../services");

//  create hotel details
const createMovie = async ( req, res ) => {
    try{
        const reqBody = req.body;

        const movieDetails = await movieService.getMovieById(reqBody.id);
        if (!movieDetails) {
            throw new Error("Hotel Details already exist by this name! ");
        }

        const hotel = await movieService.createMovie(reqBody);
        if (!movie) {
            throw new Error("Something went wrong, please try again or later");
        }

        res.status(200).json({
            success: true,
            message: "movie create successfully",
            data: { movie },
        })
    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  get movie list
const getMovieList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { movie_name: { $regex: search, $option:"i" } },
            ]
        }

        const getList = await movieService.getMovieList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get movie list successfully",
            data: getList,
        });

    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Get movie details by Id
const getMovieDetails = async (req, res) => {
    try{
        const getDetails = await movieService.getMovieById(req.params.movieId);
        if (!getDetails) {
            throw new Error("movie not found");
        }

        res.status(200).json({
            success: true,
            message: "movie details get successfully",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Delete movie
const deleteMovie = async (req, res) => {
    try {
        const movieName = req.params.movieName;
        const movieExist = await movieService.getMovieById(movieId);
        if (!movieExist) {
            throw new Error("movie not found");
        }
        await movieService.deleteMovie(movieName);

        res.status(200).json({
            success: true,
            message: "Hotel delete successfully",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createMovie,
    getMovieList,
    getMovieDetails,
    deleteMovie,
}