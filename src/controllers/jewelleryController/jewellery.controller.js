const { jewelleryService } = require("../../services");

//  create jewellery details
const createJewellery = async ( req, res ) => {
    try{
        const reqBody = req.body;

        const jewelleryDetails = await jewelleryService.getJewelleryById(reqBody.id);
        if (!jewelleryDetails) {
            throw new Error("jewellery Details already exist by this name! ");
        }

        const jewellery = await jewelleryService.createJewellery(reqBody);
        if (!jewellery) {
            throw new Error("Something went wrong, please try again or later");
        }

        res.status(200).json({
            success: true,
            message: "jewellery create successfully",
            data: { jewellery },
        })
    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  get jewellery list
const getJewelleryList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { jewellery_name: { $regex: search, $option:"i" } },
            ]
        }

        const getList = await jewelleryService.getJewelleryList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get jewellery list successfully",
            data: getList,
        });

    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Get jewellery details by Id
const getJewelleryDetails = async (req, res) => {
    try{
        const getDetails = await jewelleryService.getJewelleryById(req.params.jewelleryId);
        if (!getDetails) {
            throw new Error("jewellery not found");
        }

        res.status(200).json({
            success: true,
            message: "jewellery details get successfully",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Delete jewellery
const deleteJewellery = async (req, res) => {
    try {
        const jewelleryName = req.params.jewelleryName;
        const jewelleryExist = await jewelleryService.getJewelleryById(jewelleryId);
        if (!jewelleryExist) {
            throw new Error("jewellery not found");
        }
        await jewelleryService.deleteJewellery(jewelleryName);

        res.status(200).json({
            success: true,
            message: "jewellery delete successfully",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createJewellery,
    getJewelleryList,
    getJewelleryDetails,
    deleteJewellery,
}