

import mongoose from "mongoose";
import "../models/index"; // Import all models to ensure they are registered

const MONGODB_URI = 'mongodb+srv://judepinto73:ucdv29RK2QSlensT@cluster0.v4jxuwd.mongodb.net/messagesDB?retryWrites=true&w=majority&appName=Cluster0';

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cachedConnection: typeof mongoose | null = null;

export default async function connectDB() {
  if (cachedConnection) {
    console.log("Using cached database connection");
    return cachedConnection;
  }

  try {
    console.log("Connecting to MongoDB...");
    const connection = await mongoose.connect(MONGODB_URI);
    cachedConnection = connection;
    console.log("MongoDB connected successfully");
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}