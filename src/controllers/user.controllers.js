import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import uploadOnCloudinary from "../utils/uploadOnCloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res, next) => {
  // get user details form frontend
  const { fullname, email, username, password } = req.body;

  // validation  - not empty
  if (fullname === "" || email === "" || username === "" || password === "") {
    throw new ApiError(400, "Please enter all fields");
  } else {
    console.log("req.body", req.body);
  }

  // check if user already exists: username email
  const existedUser = await User.findOne({
    $or: [{ email: email }, { username: username }],
  });

  if (existedUser) {
    throw new ApiError(409, "User already exists");
  } else {
    
    // check for images , check for avatar

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    // console.log("avatarL ocalPath", avatarLocalPath);
    if (!avatarLocalPath) {
      throw new ApiError(400, "Please upload an avatar");
    } 
    // else {
    //   await user.save();
    //   const token = user.generateAccessToken();
    //   const refreshToken = user.generateRefreshToken();
    //   res.status(201).json({
    //     success: true,
    //     token,
    //     refreshToken,
    //     user: {
    //       id: user._id,
    //       fullname: user.fullname,
    //       username: user.username,
    //       email: user.email,
    //       avatar: user.avatar,
    //     },
    //   });
    // }
     

    // upload them to cloudinary , avatar

 const avatar = await uploadOnCloudinary(avatarLocalPath, "avatar") 
 const coverImage = await uploadOnCloudinary(coverImageLocalPath, "coverImage")

 if (!avatar)    {
    throw new ApiError(400, "Please upload an avatar");
 }
 if (!coverImage){
    throw new ApiError(400, "Please upload a cover image");
 }



    // create user object create entry in db

     const user = await User.create({
        fullname,
        email : email.lowercase(),
        username : username.lowercase(),
        password,
        avatar : avatar.url,
        coverImage: coverImage?.url || ""
    });
   const createduser =  await User.findById(user._id).select("-password -refreshToken")

   if (!createduser) {
    throw new ApiError(500, "something went wrong while registeing the user please try again later");
   }
   return res.status(201).json(
    new ApiResponse(200, "user registered successfully", "success", "success", createduser)
   )
    // remove password and refresh to ken field from response
    // check for user creation
    // return response or send error
  }
});




// login controllers
const loginUser = asyncHandler(async (req, res, next) => {
    console.log("req.body", req.body);
    res.status(200).json({
        message: "Login user route",
        success: true
    });
})


export { registerUser, loginUser } 