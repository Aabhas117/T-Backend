import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {uploadCloudinary} from "../utils/cloudinary.js"
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

  const { fullName, email, username, password } = req.body;
  console.log("email:", email);

  // if (fullName === "") {
  //   throw new ApiError(400, "fullname is required")
  // }
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  if (existedUser) {
    throw new ApiError(409, "User with email or password already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

if(!avatarLocalPath){
  throw new ApiError(400, "Avatar file is required")
}

const avatar = await uploadOnCloudinary(avatarLocalPath)
const coverImage = await uploadOnCloudinary(coverImageLocalPath)
if(!avatar){
  throw new ApiError(400, "Avatar file is required");
}
   User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase()
   })
  User.findOne({});
});
export { registerUser };
