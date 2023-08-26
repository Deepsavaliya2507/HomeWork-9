const { musicService } = require("../../services");

//  create music details
const createMusic = async ( req, res ) => {
    try{
        const reqBody = req.body;

        const musicDetails = await musicService.getMusicById(reqBody.id);
        if (!musicDetails) {
            throw new Error("music Details already exist by this name! ");
        }

        const music = await musicService.createMusic(reqBody);
        if (!music) {
            throw new Error("Something went wrong, please try again or later");
        }

        res.status(200).json({
            success: true,
            message: "music create successfully",
            data: { music },
        })
    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  get music list
const getMusicList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { music_name: { $regex: search, $option:"i" } },
            ]
        }

        const getList = await musicService.getMusicList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get music list successfully",
            data: getList,
        });

    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Get music details by Id
const getMusicDetails = async (req, res) => {
    try{
        const getDetails = await musicService.getMusicById(req.params.musicId);
        if (!getDetails) {
            throw new Error("music not found");
        }

        res.status(200).json({
            success: true,
            message: "music details get successfully",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Delete music
const deleteMusic = async (req, res) => {
    try {
        const musicName = req.params.musicName;
        const musicExist = await musicService.getMusicById(musicId);
        if (!musicExist) {
            throw new Error("music not found");
        }
        await musicService.deleteMusic(musicName);

        res.status(200).json({
            success: true,
            message: "music delete successfully",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createMusic,
    getMusicList,
    getMusicDetails,
    deleteMusic,
}