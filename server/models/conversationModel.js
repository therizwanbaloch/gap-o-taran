import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId, // ✅ capital “O”
        ref: "User",
        required: true,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Message",
      },
    ],
  },
  { timestamps: true }
);

const conversationModel = mongoose.model("Conversation", conversationSchema);
export default conversationModel;
