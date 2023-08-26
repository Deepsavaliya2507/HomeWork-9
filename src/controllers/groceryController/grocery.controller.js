const { groceryService } = require("../../services");

//  create grocery details
const createGrocery = async ( req, res ) => {
    try{
        const reqBody = req.body;

        const groceryDetails = await groceryService.getGroceryById(reqBody.id);
        if (!groceryDetails) {
            throw new Error("grocery Details already exist by this name! ");
        }

        const grocery = await groceryService.createGrocery(reqBody);
        if (!grocery) {
            throw new Error("Something went wrong, please try again or later");
        }

        res.status(200).json({
            success: true,
            message: "grocery create successfully",
            data: { grocery },
        })
    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  get grocery list
const getGroceryList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { grocery_name: { $regex: search, $option:"i" } },
            ]
        }

        const getList = await groceryService.getGroceryList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get grocery list successfully",
            data: getList,
        });

    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Get grocery details by Id
const getGroceryDetails = async (req, res) => {
    try{
        const getDetails = await groceryService.getGroceryById(req.params.groceryId);
        if (!getDetails) {
            throw new Error("grocery not found");
        }

        res.status(200).json({
            success: true,
            message: "grocery details get successfully",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Delete grocery
const deleteGrocery = async (req, res) => {
    try {
        const groceryName = req.params.groceryName;
        const groceryExist = await groceryService.getGroceryById(groceryId);
        if (!groceryExist) {
            throw new Error("grocery not found");
        }
        await groceryService.deleteGrocery(groceryName);

        res.status(200).json({
            success: true,
            message: "grocery delete successfully",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createGrocery,
    getGroceryList,
    getGroceryDetails,
    deleteGrocery,
}