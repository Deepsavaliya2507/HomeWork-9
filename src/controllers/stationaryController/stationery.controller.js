const { stationeryService } = require("../../services");

//  create stationery details
const createStationery = async ( req, res ) => {
    try{
        const reqBody = req.body;

        const stationeryDetails = await stationeryService.getStationeryById(reqBody.id);
        if (!stationeryDetails) {
            throw new Error("stationery Details already exist by this name! ");
        }

        const stationery = await stationeryService.createStationery(reqBody);
        if (!stationery) {
            throw new Error("Something went wrong, please try again or later");
        }

        res.status(200).json({
            success: true,
            message: "stationery create successfully",
            data: { stationery },
        })
    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  get stationery list
const getStationeryList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { stationery_name: { $regex: search, $option:"i" } },
            ]
        }

        const getList = await stationeryService.getStationeryList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get stationery list successfully",
            data: getList,
        });

    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Get stationery details by Id
const getStationeryDetails = async (req, res) => {
    try{
        const getDetails = await stationeryService.getStationeryById(req.params.stationeryId);
        if (!getDetails) {
            throw new Error("stationery not found");
        }

        res.status(200).json({
            success: true,
            message: "stationery details get successfully",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Delete stationery
const deleteStationery = async (req, res) => {
    try {
        const stationeryName = req.params.stationeryName;
        const stationeryExist = await stationeryService.getStationeryById(stationeryId);
        if (!stationeryExist) {
            throw new Error("stationery not found");
        }
        await stationeryService.deleteStationery(stationeryName);

        res.status(200).json({
            success: true,
            message: "stationery delete successfully",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createStationery,
    getStationeryList,
    getStationeryDetails,
    deleteStationery,
}