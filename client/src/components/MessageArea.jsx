import React, { useEffect, useRef, useState } from "react";
import dp from "../assets/dp.webp";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { AiOutlinePicture } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";
import SenderMessage from "./SenderMessage";
import ReceiverMessage from "./ReceiverMessage";
import axios from "axios";

const MessageArea = () => {
const { selectedUser, userData } = useSelector((state) => state.user);
const dispatch = useDispatch();

const [message, setMessage] = useState("");
const [image, setImage] = useState(null);
const [messages, setMessages] = useState([]);

const bottomRef = useRef(null);

// scroll to bottom when messages change
useEffect(() => {
bottomRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

// fetch messages when selectedUser changes
useEffect(() => {
if (!selectedUser) {
setMessages([]);
return;
}


const fetchMessages = async () => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/get/${selectedUser._id}`,
      { withCredentials: true }
    );

    const msgs = res?.data?.data ?? [];
    setMessages(msgs);
  } catch (err) {
    console.error("Failed to load messages:", err);
  }
};

fetchMessages();


}, [selectedUser]);

// image input handler
const handleImageChange = (e) => {
const file = e.target.files?.[0];
if (file) setImage(file);
};

// send message
const handleSend = async () => {
if (!message.trim() && !image) return;


const formData = new FormData();
formData.append("message", message);
if (image) formData.append("image", image);

try {
  const res = await axios.post(
    `http://localhost:5000/api/send/${selectedUser._id}`,
    formData,
    {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

  const newMsg = res?.data?.data;
  if (newMsg) {
    setMessages((prev) => [...prev, newMsg]);
  } else {
    const fallback = res?.data?.newMessage || res?.data?.data || null;
    if (fallback) setMessages((prev) => [...prev, fallback]);
  }

  setMessage("");
  setImage(null);
} catch (err) {
  console.error("Failed to send message:", err);
}


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
{/* Header */} <div className="w-full h-16 bg-gradient-to-b from-emerald-500 to-emerald-600 px-4 flex items-center gap-3 sm:gap-4 shadow-md">
<button
onClick={() => dispatch(setSelectedUser(null))}
className="flex items-center text-white hover:text-emerald-200 transition-colors lg:hidden"
title="Back"
> <IoMdArrowRoundBack className="w-6 h-6 sm:w-7 sm:h-7" /> </button>


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

      {/* Messages */}
      <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-slate-100">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-6">
            No messages yet. Say hi 👋
          </div>
        ) : (
          messages.map((msg) => {
            const senderId =
              msg.senderId || msg.sender?._id || msg.sender || msg.user?._id;

            const isMine = String(senderId) === String(userData?._id);
            const text = msg.text ?? msg.message ?? "";
            const img = msg.image ?? null;
            const time = msg.createdAt
              ? new Date(msg.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "";

            return isMine ? (
              <SenderMessage
                key={msg._id || msg.id}
                text={text}
                image={img}
                time={time}
              />
            ) : (
              <ReceiverMessage
                key={msg._id || msg.id}
                text={text}
                image={img}
                time={time}
                userImage={selectedUser?.image}
              />
            );
          })
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="w-full p-2 sm:p-3 bg-white border-t border-gray-200 flex items-center gap-2 sm:gap-3 sticky bottom-0 shadow-sm">
        <label className="cursor-pointer text-emerald-600 hover:text-emerald-500 transition-colors">
          <AiOutlinePicture className="w-6 h-6 sm:w-7 sm:h-7" />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>

        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-slate-100 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base outline-none focus:ring-2 focus:ring-emerald-400 text-gray-800"
        />

        <button
          onClick={handleSend}
          disabled={!canSend}
          className={`rounded-full p-2 sm:p-3 transition-all duration-200 ${
            canSend
              ? "bg-emerald-500 hover:bg-emerald-600 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          title={canSend ? "Send" : "Type a message or attach image"}
        >
          <HiOutlinePaperAirplane className="w-5 h-5 sm:w-6 sm:h-6 rotate-45" />
        </button>
      </div>
    </>
  ) : (
    <div className="flex-1 bg-white flex flex-col items-center justify-center text-center px-4">
      <p className="text-emerald-700 text-lg sm:text-xl font-semibold mb-1">
        Welcome to <span className="text-emerald-600 font-bold">Gap-O-Taran</span>
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
