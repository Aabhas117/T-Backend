import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists: username , email
  // check for images , check for avatar
  // upload them to cloudinary, check again avatar here 
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check user creation 
  // return response 
   
     const {fullName, email , username, password }=  req.body
     console.log("email:", email);


});
export { registerUser };
