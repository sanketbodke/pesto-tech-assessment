import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const generateAccessAndRefreshTokens = async (userId)=> {
    try{
        const user = await User.findById(userId)
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave : false})

        return { accessToken, refreshToken }
    } catch (error){
        throw new ApiError(500, "Something went wrong while generating access and refresh token")
    }
}

const registerUser = asyncHandler(async (req,resp) => {
    // get user details

    const { username, email, avatar, password } = req.body

    if(
        [username, email, avatar, password].some((field) => field.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }

    // check if user already exists

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(409, "user already exits")
    }

    // create user object

    const user = await User.create({
        username: username.toLowerCase(),
        email,
        avatar,
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    // check for user creation

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    // return resp

    return resp.status(201).json(
        new ApiResponse(200, createdUser, "User Register Successfully")
    )
})

const loginUser = asyncHandler(asyncHandler(async (req,resp) => {
    // data from user

    const { username, password } = req.body

    if(!username || !password){
        throw new ApiError(400, "Username or Email required")
    }

    // find user

    const user = await User.findOne({
        $or: [{username}, {password}]
    })

    if(!user){
        throw new ApiError(400, "User Does Not Exist!")
    }

    // password check

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid Password!")
    }

    // access and refresh token

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("--password --refreshToken")

    // send cookies

    const options = {
        httpOnly: true,
        secure: true
    }

    return resp
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, refreshToken, accessToken
                },
                "User logged in successfully"
            )
        )
}))

export {
    loginUser,
    registerUser
}