import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import { setUser } from "../services/auth.service.js";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
export const googleLogin = async (req, res) => {
  const { credential } = req.body;
  try {
    // 1. Verify token with Google
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture, sub } = payload;

    // 2. Check if user exists
    let user = await User.findOne({ email });

    // 3. If not, create user
    if (!user) {
      user = await User.create({
        fullName: name,
        email,
        profilePic: picture,
        googleId: sub,
      });
    }

    // 4. Generate your own JWT for login
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 5. Return user and token
    res.status(200).json({ user, token });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(401).json({ message: "Google login failed" });
  }
};
export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
      if(!fullName || !email || !password){
        return res.status(400).json({ message: "All field are required" });
      }
           const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
      if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
      }
  
      
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new user
      const newUser = new User({
        fullName,
        email,
        password: hashedPassword,
      });
  
      // Save the new user

      await newUser.save();
      const token = setUser(newUser);
      res.cookie("uid", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        sameSite: "None",
        secure: process.env.NODE_ENV !== "development",
      });
  
  
      // Send the response
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,  // Ensure profilePic exists in your model
      });
  
    } catch (error) {
      console.log("Error in signup controller: ", error);
      res.status(500).json({ message: "Server error" });
    }
}
export const login=async(req,res)=>{
  const {email,password}=req.body
   try {
 const user= await User.findOne({email})
 if(!user){
  return res.status(400).json({ message: "Invalid Credentials" });
}
const iscorrectPassword= await bcrypt.compare(password,user.password)
if(!iscorrectPassword){
  return res.status(400).json({ message: "Invalid Credentials" });
}
  const token = setUser(user);
  res.cookie("uid", token, { 
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "None", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
   });
res.status(200).json({
  _id: user._id,
  fullName: user.fullName,
  email: user.email,
  profilePic: user.profilePic,
  message: "Login successful"
});


   } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: error.message });
  }
}
export const logout = (req, res) => {
  try {
    res.clearCookie("uid", {
      httpOnly: true,
      sameSite: "None",
      secure: process.env.NODE_ENV !== "development",
    });
   return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



