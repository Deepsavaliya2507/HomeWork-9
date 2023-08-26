const { hotelService } = require("../../services");

//  create hotel details
const createHotel = async ( req, res ) => {
    try{
        const reqBody = req.body;

        const hotelDetails = await hotelService.getHotelById(reqBody.id);
        if (!hotelDetails) {
            throw new Error("Hotel Details already exist by this name! ");
        }

        const hotel = await hotelService.createHotel(reqBody);
        if (!hotel) {
            throw new Error("Something went wrong, please try again or later");
        }

        res.status(200).json({
            success: true,
            message: "Hotel create successfully",
            data: { hotel },
        })
    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  get hotel list
const getHotelList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { hotel_name: { $regex: search, $option:"i" } },
            ]
        }

        const getList = await hotelService.getHotelList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get hotel list successfully",
            data: getList,
        });

    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Get hotel details by Id
const getHotelDetails = async (req, res) => {
    try{
        const getDetails = await hotelService.getHotelById(req.params.hotelId);
        if (!getDetails) {
            throw new Error("hotel not found");
        }

        res.status(200).json({
            success: true,
            message: "Hotel details get successfully",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Delete hotel
const deleteHotel = async (req, res) => {
    try {
        const hotelName = req.params.hotelName;
        const hotelExist = await hotelService.getHotelById(hotelId);
        if (!hotelExist) {
            throw new Error("Hotel not found");
        }
        await hotelService.deleteHotel(hotelName);

        res.status(200).json({
            success: true,
            message: "Hotel delete successfully",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createHotel,
    getHotelList,
    getHotelDetails,
    deleteHotel,
}