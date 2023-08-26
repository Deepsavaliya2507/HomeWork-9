const { travelService } = require("../../services");

//  create travel details
const createTravel = async ( req, res ) => {
    try{
        const reqBody = req.body;

        const travelDetails = await travelService.getTravelById(reqBody.id);
        if (!travelDetails) {
            throw new Error("travel Details already exist by this name! ");
        }

        const travel = await travelService.createTravel(reqBody);
        if (!travel) {
            throw new Error("Something went wrong, please try again or later");
        }

        res.status(200).json({
            success: true,
            message: "travel create successfully",
            data: { travel },
        })
    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  get travel list
const getTravelList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { travel_name: { $regex: search, $option:"i" } },
            ]
        }

        const getList = await travelService.getTravelList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get travel list successfully",
            data: getList,
        });

    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Get travel details by Id
const getTravelDetails = async (req, res) => {
    try{
        const getDetails = await travelService.getTravelById(req.params.travelId);
        if (!getDetails) {
            throw new Error("travel not found");
        }

        res.status(200).json({
            success: true,
            message: "travel details get successfully",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Delete travel
const deleteTravel = async (req, res) => {
    try {
        const travelName = req.params.travelName;
        const travelExist = await travelService.getTravelById(travelId);
        if (!travelExist) {
            throw new Error("travel not found");
        }
        await travelService.deleteTravel(travelName);

        res.status(200).json({
            success: true,
            message: "travel delete successfully",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createTravel,
    getTravelList,
    getTravelDetails,
    deleteTravel,
}