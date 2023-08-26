const { schoolService } = require("../../services");

//  create school details
const createSchool = async ( req, res ) => {
    try{
        const reqBody = req.body;

        const schoolDetails = await schoolService.getSchoolById(reqBody.id);
        if (!schoolDetails) {
            throw new Error("school Details already exist by this name! ");
        }

        const school = await schoolService.createSchool(reqBody);
        if (!school) {
            throw new Error("Something went wrong, please try again or later");
        }

        res.status(200).json({
            success: true,
            message: "school create successfully",
            data: { school },
        })
    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  get school list
const getSchoolList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { school_name: { $regex: search, $option:"i" } },
            ]
        }

        const getList = await schoolService.getSchoolList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get school list successfully",
            data: getList,
        });

    }catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Get school details by Id
const getSchoolDetails = async (req, res) => {
    try{
        const getDetails = await schoolService.getSchoolById(req.params.schoolId);
        if (!getDetails) {
            throw new Error("school not found");
        }

        res.status(200).json({
            success: true,
            message: "school details get successfully",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//  Delete school
const deleteSchool = async (req, res) => {
    try {
        const schoolName = req.params.schoolName;
        const schoolExist = await schoolService.getSchoolById(schoolId);
        if (!schoolExist) {
            throw new Error("school not found");
        }
        await schoolService.deleteSchool(schoolName);

        res.status(200).json({
            success: true,
            message: "school delete successfully",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createSchool,
    getSchoolList,
    getSchoolDetails,
    deleteSchool,
}