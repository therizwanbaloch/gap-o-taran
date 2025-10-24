import React, { useState } from "react";
import dp from "../assets/dp.webp";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { AiOutlinePicture } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";
import SenderMessage from "./SenderMessage";
import ReceiverMessage from "./ReceiverMessage";

const MessageArea = () => {
  const { selectedUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [frontImage, setFrontImage] = useState(null);
  const [backendImage, setBackendImage] = useState(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleSend = () => {
    if (!message && !image) return;
    console.log("Send:", { message, image });
    setMessage("");
    setImage(null);
  };

  const canSend = message.trim() || image;

  return (
    <div
      className={`flex flex-col bg-white h-screen ${
        selectedUser ? "flex" : "hidden lg:flex"
      } w-full lg:w-[70%]`}
    >
      {selectedUser ? (
        <>
          {/* Header */}
          <div className="w-full h-16 bg-gradient-to-b from-emerald-500 to-emerald-600 px-4 flex items-center gap-3 sm:gap-4 shadow-md">
            <button
              onClick={() => dispatch(setSelectedUser(null))}
              className="flex items-center text-white hover:text-emerald-200 transition-colors lg:hidden"
            >
              <IoMdArrowRoundBack className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            <div
              className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white cursor-pointer hover:scale-105 transition-transform shadow-inner"
              title="View Profile"
            >
              <img
                src={selectedUser?.image || dp}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-white font-semibold text-base sm:text-lg truncate">
              {selectedUser?.name || "User"}
            </h1>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-slate-100">
            {/* Example Chat Bubbles */}
            <ReceiverMessage
              text="Hey! How are you?"
              time="10:45 AM"
              userImage={selectedUser?.image}
            />
            <SenderMessage
              text="I’m good! Just finishing the Gap-O-Taran UI 😄"
              time="10:46 AM"
            />
            <ReceiverMessage
              image="https://placehold.co/300x200"
              text="Wow! That looks amazing 🔥"
              time="10:48 AM"
              userImage={selectedUser?.image}
            />
            <SenderMessage
              text="Thanks! I’ll deploy it tonight."
              time="10:49 AM"
            />
          </div>

          {/* Fixed Input Bar */}
          <div className="w-full p-2 sm:p-3 bg-white border-t border-gray-200 flex items-center gap-2 sm:gap-3 sticky bottom-0 shadow-sm">
            {/* Image Upload */}
            <label className="cursor-pointer text-emerald-600 hover:text-emerald-500 transition-colors">
              <AiOutlinePicture className="w-6 h-6 sm:w-7 sm:h-7" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>

            {/* Text Input */}
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-slate-100 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base outline-none focus:ring-2 focus:ring-emerald-400 text-gray-800"
            />

            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={!canSend}
              className={`rounded-full p-2 sm:p-3 transition-all duration-200 ${
                canSend
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <HiOutlinePaperAirplane className="w-5 h-5 sm:w-6 sm:h-6 rotate-45" />
            </button>
          </div>
        </>
      ) : (
        /* Welcome Screen */
        <div className="flex-1 bg-white flex flex-col items-center justify-center text-center px-4">
          <p className="text-emerald-700 text-lg sm:text-xl font-semibold mb-1">
            Welcome to{" "}
            <span className="text-emerald-600 font-bold">Gap-O-Taran</span>
          </p>
          <p className="text-gray-600 text-sm sm:text-base font-medium">
            Select a user from the list to start chatting.
          </p>
        </div>
      )}
    </div>
  );
};

export default MessageArea;
