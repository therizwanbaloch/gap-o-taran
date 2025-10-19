import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { LuUpload } from "react-icons/lu";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import dp from "../assets/dp.webp";

const Profile = () => {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const user = userData?.user || {};

  const [name, setName] = useState("");
  const [imagePreview, setImagePreview] = useState(dp);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImagePreview(user.image || dp);
    }
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully (backend logic to be implemented)");
  };

  if (!user._id) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        Loading user data...
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen bg-gray-50 px-4 py-8 sm:py-16">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg shadow-gray-200 p-6 sm:p-8 flex flex-col items-center relative">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-lg"
        >
          <IoMdArrowRoundBack className="w-6 h-6 mr-1" />
          Back
        </button>

        {/* Profile Picture Section */}
        <div className="relative mb-6 mt-6">
          <img
            src={imagePreview}
            alt="Profile"
            className="w-40 h-40 sm:w-44 sm:h-44 rounded-full border-4 border-emerald-600 object-cover"
          />
          <label
            htmlFor="profileImage"
            className="absolute bottom-3 right-3 bg-emerald-500 text-white p-2 rounded-full cursor-pointer hover:bg-emerald-600 transition"
          >
            <LuUpload className="w-5 h-5" />
          </label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 sm:gap-5">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />

          <input
            type="text"
            value={user.userName}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-400 focus:outline-none"
          />

          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-400 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-emerald-500 transition"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
