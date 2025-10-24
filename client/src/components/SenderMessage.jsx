import React from "react";

const SenderMessage = ({ text, image, time }) => {
  return (
    <div className="flex justify-end mb-3">
      <div className="max-w-[75%] sm:max-w-[60%] bg-emerald-500 text-white rounded-2xl rounded-br-none px-4 py-2 shadow-md">
        {image && (
          <img
            src={image}
            alt="Sent"
            className="rounded-lg mb-2 max-w-full object-cover"
          />
        )}
        {text && <p className="break-words">{text}</p>}
        <p className="text-xs text-emerald-100 text-right mt-1">{time}</p>
      </div>
    </div>
  );
};

export default SenderMessage;
