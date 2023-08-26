const { pharmaService } = require("../../services");

//  create pharma details
const createPharma = async ( req, res ) => {
    try{
        const reqBody = req.body;

        const pharmaDetails = await pharmaService.getpharmaById(reqBody.id);
        if (!pharmaDetails) {
            throw new Error("pharma Details already exist by this name! ");
        }

        const pharma = await pharmaService.createPharma(reqBody);
        if (!pharma) {
            throw new Error("Something went wrong, please try again or later");
        }

        res.status(200).json({
            success: true,
            message: "pharma create successfully",
            data: { pharma },
        })
    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  get pharma list
const getPharmaList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { pharma_name: { $regex: search, $option:"i" } },
            ]
        }

        const getList = await pharmaService.getPharmaList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get pharma list successfully",
            data: getList,
        });

    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Get pharma details by Id
const getPharmaDetails = async (req, res) => {
    try{
        const getDetails = await pharmaService.getpharmaById(req.params.pharmaId);
        if (!getDetails) {
            throw new Error("pharma not found");
        }

        res.status(200).json({
            success: true,
            message: "pharma details get successfully",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Delete pharma
const deletePharma = async (req, res) => {
    try {
        const pharmaName = req.params.pharmaName;
        const pharmaExist = await pharmaService.getpharmaById(pharmaId);
        if (!pharmaExist) {
            throw new Error("pharma not found");
        }
        await pharmaService.deletePharma(pharmaName);

        res.status(200).json({
            success: true,
            message: "pharma delete successfully",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createPharma,
    getPharmaList,
    getPharmaDetails,
    deletePharma,
}