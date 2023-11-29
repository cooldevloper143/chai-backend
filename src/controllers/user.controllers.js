import asyncHandler from "../utils/asyncHandler.js";




const registerUser = asyncHandler(async (req, res, next) => {
    // get user details form frontend
    // validation  - not empty
    // check if user already exists: username email
    // check for images , check for avatar 
    // upload them to cloudinary , avatar
    // create user object create entry in db 


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