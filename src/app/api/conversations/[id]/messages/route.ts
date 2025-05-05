import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";
import Message from "@/models/Message";
import Conversation from "@/models/Conversation";

export async function GET(request: NextRequest, context: any) {
  await connectDB();

  const { params } = context; // Destructure params from context
  const { id: conversationId } = params; // Destructure id and rename to conversationId

  try {
    const token = request.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    if (!process.env.JWT_SECRET) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: string };
    } catch (error) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    }

    // Get sorting parameter from query (e.g., ?sort=timestamp)
    const { searchParams } = new URL(request.url);
    const sort = searchParams.get("sort") || "timestamp"; // Default to timestamp
    const sortOrder = searchParams.get("order") || "asc"; // Default to ascending

    const messages = await Message.find({ conversationId })
      .populate("sender", "fullName")
      .sort({ [sort]: sortOrder === "asc" ? 1 : -1 });

    return NextResponse.json({ messages });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest, context: any) {
  await connectDB();

  const { params } = context; // Destructure params from context
  const { id: conversationId } = params; // Destructure id and rename to conversationId

  try {
    const token = request.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    if (!process.env.JWT_SECRET) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }
    let decoded: { userId: string };
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: string };
    } catch (error) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    }

    const { content, attachment } = await request.json();

    if (!content && !attachment) {
      return NextResponse.json({ error: "Message content or attachment is required" }, { status: 400 });
    }

    const message = new Message({
      conversationId,
      sender: decoded.userId,
      content: content || "",
      attachment,
      timestamp: new Date(),
    });

    await message.save();
    await message.populate("sender", "fullName");

    await Conversation.findByIdAndUpdate(conversationId, { lastMessage: message._id });

    return NextResponse.json({ message });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}