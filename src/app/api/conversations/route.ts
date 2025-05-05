import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";
import Conversation from "@/models/Conversation";
import User from "@/models/User"; // Still import for TypeScript types, but registration is handled by index.ts

export async function GET(request: NextRequest) {
  await connectDB();

  try {
    const token = request.headers.get("authorization")?.split(" ")[1];
    console.log("Received token:", token);
    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not defined");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: string };
    console.log("Decoded token:", decoded);
    const conversations = await Conversation.find({
      participants: decoded.userId,
    })
      .populate("participants", "fullName email profileImageUrl lastSeen role")
      .populate("lastMessage");

    return NextResponse.json({ conversations });
  } catch (error: any) {
    console.error("Error fetching conversations:", error.message, error.stack);
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  await connectDB();

  try {
    const token = request.headers.get("authorization")?.split(" ")[1];
    console.log("Received token (POST):", token);
    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not defined");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: string };
    console.log("Decoded token (POST):", decoded);
    const { participantId } = await request.json();

    const participant = await User.findById(participantId);
    if (!participant) {
      return NextResponse.json({ error: "Participant not found" }, { status: 404 });
    }

    const existingConversation = await Conversation.findOne({
      participants: { $all: [decoded.userId, participantId] },
    });

    if (existingConversation) {
      return NextResponse.json({ conversation: existingConversation });
    }

    const conversation = new Conversation({
      participants: [decoded.userId, participantId],
    });

    await conversation.save();
    await conversation.populate("participants", "fullName email profileImageUrl lastSeen role");

    return NextResponse.json({ conversation }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating conversation:", error.message, error.stack);
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
}