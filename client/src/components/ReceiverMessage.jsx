import React from "react";
import dp from "../assets/dp.webp";

const ReceiverMessage = ({ text, image, time, userImage }) => {
  return (
    <div className="flex items-end gap-2 mb-3">
      <img
        src={userImage || dp}
        alt="User"
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border"
      />
      <div className="max-w-[75%] sm:max-w-[60%] bg-white text-gray-800 rounded-2xl rounded-bl-none px-4 py-2 shadow-md border border-gray-100">
        {image && (
          <img
            src={image}
            alt="Received"
            className="rounded-lg mb-2 max-w-full object-cover"
          />
        )}
        {text && <p className="break-words">{text}</p>}
        <p className="text-xs text-gray-500 text-right mt-1">{time}</p>
      </div>
    </div>
  );
};

export default ReceiverMessage;
