import uploadOnCloudinary from "../config/Cloudinary.js";
import conversationModel from "../models/conversationModel.js";
import messageModel from "../models/messageModel.js";


export const sendMessage = async (req, res) => {
  try {
    
    const sender = req.user.id || req.user._id;
    const { receiver } = req.params;
    const { message } = req.body;

    let imageUrl = "";

    if (req.file) {
      const uploadResult = await uploadOnCloudinary(req.file.path);
      imageUrl = uploadResult?.url || "";
    }

    
    let conversation = await conversationModel.findOne({
      participants: { $all: [sender, receiver] },
    });

    const newMessage = await messageModel.create({
      sender,
      receiver,
      text: message,
      image: imageUrl,
    });

    if (!conversation) {
      conversation = await conversationModel.create({
        participants: [sender, receiver],
        messages: [newMessage._id],
      });
    } else {
      conversation.messages.push(newMessage._id);
      await conversation.save();
    }

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error sending message:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: error.message,
    });
  }
};


export const getMessages = async (req, res) => {
  try {
    const sender = req.user.id || req.user._id;
    const { receiver } = req.params;

    const messages = await messageModel
      .find({
        $or: [
          { sender, receiver },
          { sender: receiver, receiver: sender },
        ],
      })
      .sort({ createdAt: 1 });

    return res.status(200).json({
      success: true,
      message: "Messages fetched successfully",
      data: messages,
    });
  } catch (error) {
    console.error("Error getting messages:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get messages",
      error: error.message,
    });
  }
};

