import asyncHandler from "../utils/asyncHandler.js";




const registerUser = asyncHandler(async (req, res, next) => {
    console.log("req.body", req.body);
    res.status(200).json({
        message: "Register user route",
        success: true
    });
})

// login controllers
const loginUser = asyncHandler(async (req, res, next) => {
    console.log("req.body", req.body);
    res.status(200).json({
        message: "Login user route",
        success: true
    });
})


export {registerUser,loginUser} 