import User from "../models/userModel.js";
import uploadOnCloudinary from "../config/Cloudinary.js";

export const getCurrentUser = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const editProfile = async (req, res) => {
  try {
    const { name } = req.body;
    const updateData = {};

    if (name) updateData.name = name;

    if (req.file) {
      const imageUrl = await uploadOnCloudinary(req.file.path);
      if (imageUrl) updateData.image = imageUrl.url || imageUrl; 
    }

    const user = await User.findByIdAndUpdate(req.user.id, updateData, {
      new: true,
    }).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const getOtherUsers = async (req, res) => {
  try {
    console.log("Authenticated user:", req.user);
    const loggedInUserId = req.user?.id;
    if (!loggedInUserId) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    const users = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
};