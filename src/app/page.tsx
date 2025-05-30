"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import ChatInterface from "./chatinterface/page";

export default function Home() {
  const { user, token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || !token) {
      router.push("/register");
    } else {
      router.push("/chatinterface");
    }
  }, [user, token, router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <p>Redirecting...</p>
      <ChatInterface/>
    </div>
  );
}