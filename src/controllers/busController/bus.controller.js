const { busService } = require("../../services");

//  create bus details
const createBus = async ( req, res ) => {
    try{
        const reqBody = req.body;

        const busDetails = await busService.getBusById(reqBody.id);
        if (!busDetails) {
            throw new Error("bus Details already exist by this name! ");
        }

        const bus = await busService.createBus(reqBody);
        if (!bus) {
            throw new Error("Something went wrong, please try again or later");
        }

        res.status(200).json({
            success: true,
            message: "bus create successfully",
            data: { bus },
        })
    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  get bus list
const getBusList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { bus_name: { $regex: search, $option:"i" } },
            ]
        }

        const getList = await busService.getBusList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get bus list successfully",
            data: getList,
        });

    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Get bus details by Id
const getBusDetails = async (req, res) => {
    try{
        const getDetails = await busService.getBusById(req.params.busId);
        if (!getDetails) {
            throw new Error("bus not found");
        }

        res.status(200).json({
            success: true,
            message: "bus details get successfully",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Delete bus
const deleteBus = async (req, res) => {
    try {
        const busName = req.params.busName;
        const busExist = await busService.getBusById(busId);
        if (!busExist) {
            throw new Error("bus not found");
        }
        await busService.deleteBus(busName);

        res.status(200).json({
            success: true,
            message: "bus delete successfully",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createBus,
    getBusList,
    getBusDetails,
    deleteBus,
}