import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  conversationId: {
    type: Schema.Types.ObjectId,
    ref: "Conversation",
    required: true,
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  attachment: {
    type: { type: String },
    name: { type: String },
    size: { type: String },
  },
});

export default mongoose.models.Message || mongoose.model("Message", messageSchema);