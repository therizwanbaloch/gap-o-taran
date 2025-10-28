import React from "react";

const SenderMessage = ({ text, image, time }) => {
return ( <div className="flex justify-end mb-3"> <div className="max-w-[75%] bg-emerald-500 text-white rounded-2xl rounded-br-none px-4 py-2 shadow-md">
{image && ( <img
         src={image}
         alt="sent"
         className="w-48 sm:w-56 h-auto rounded-lg mb-2"
       />
)}
{text && <p className="text-sm sm:text-base break-words">{text}</p>}
{time && ( <p className="text-xs text-emerald-100 text-right mt-1">{time}</p>
)} </div> </div>
);
};

export default SenderMessage;
