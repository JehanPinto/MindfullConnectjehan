import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";
import User from "@/models/User";

export async function GET(request: NextRequest) {
  await connectDB();

  try {
    const token = request.headers.get("authorization")?.split(" ")[1];
    console.log("Received token in /api/users:", token);
    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not defined");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: string };
    console.log("Decoded token in /api/users:", decoded);

    // Fetch all users except the logged-in user, include profileImageUrl
    const users = await User.find({ _id: { $ne: decoded.userId } }).select(
      "fullName email role _id profileImageUrl"
    );

    return NextResponse.json({ users });
  } catch (error: any) {
    console.error("Error fetching users in /api/users:", error.message, error.stack);
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
}