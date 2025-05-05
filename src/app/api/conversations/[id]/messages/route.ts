import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";
import Message from "@/models/Message";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();

  try {
    const token = request.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    if (!process.env.JWT_SECRET) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: string };
    const conversationId = params.id;

    // Fetch messages for the conversation
    const messages = await Message.find({ conversationId })
      .populate("sender", "fullName")
      .sort({ timestamp: 1 }); // Sort by timestamp ascending

    return NextResponse.json({ messages });
  } catch (error: any) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}