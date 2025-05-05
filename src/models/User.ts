import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImageUrl: { type: String, default: "/ava2.svg" }, // Add default value
  lastSeen: { type: Date },
  role: { type: String },
});

// Ensure the model is registered with Mongoose
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;