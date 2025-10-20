import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (filePath) => {
if (!filePath) return null;

try {
cloudinary.config({
cloud_name: process.env.CLOUD_NAME,
api_key: process.env.API_KEY,
api_secret: process.env.API_SECRET,
});

const uploadResult = await cloudinary.uploader.upload(filePath);
if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
return uploadResult.secure_url;


} catch (error) {
if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
console.error("Cloudinary upload error:", error.message);
return null;
}
};

export default uploadOnCloudinary;
