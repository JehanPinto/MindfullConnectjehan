"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ChatMain } from "@/app/components/ChatMain";
import { ChatSidebar } from "@/app/components/ChatSidebar";
import { ProfileSidebar } from "@/app/components/ProfileSidebar";
import { useAuth } from "@/context/AuthContext";
import { Conversation } from "@/app/components/types";

export const ChatLayout: React.FC = () => {
  const { user, token, isLoading } = useAuth();
  const router = useRouter();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [isProfileSidebarVisible, setIsProfileSidebarVisible] = useState(false);
  const [showProfileSidebar, setShowProfileSidebar] = useState(false);
  const [layoutHeight, setLayoutHeight] = useState<number>(0);
  const [showChatMain, setShowChatMain] = useState(false);

  useEffect(() => {
    const updateLayoutHeight = () => {
      const navbarHeight = 64;
      const windowHeight = window.innerHeight;
      const calculatedHeight = windowHeight - navbarHeight;
      setLayoutHeight(calculatedHeight);
    };

    updateLayoutHeight();
    window.addEventListener("resize", updateLayoutHeight);
    return () => window.removeEventListener("resize", updateLayoutHeight);
  }, []);

  useEffect(() => {
    if (isLoading) {
      console.log("AuthContext is still loading, skipping redirect...");
      return;
    }

    if (!user || !token) {
      console.log("User or token is null, redirecting to login...");
      router.push("/login");
    }
  }, [user, token, isLoading, router]);

  const fetchUsers = useCallback(async () => {
    if (isLoading || !user || !token) {
      console.log("Skipping fetchUsers: AuthContext is loading or user/token is null");
      return;
    }

    try {
      console.log("Fetching users with token:", token);
      const res = await fetch("/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Response status from /api/users:", res.status);
      const data = await res.json();
      console.log("Response from /api/users:", data);
      if (res.ok) {
        const filteredUsers = data.users.filter((u: any) => u._id !== user._id);
        console.log("Setting users (excluding logged-in user):", filteredUsers);
        setUsers(filteredUsers);
      } else {
        console.error("Failed to fetch users:", data.error);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, [user, token, isLoading]);

  const fetchConversations = useCallback(async () => {
    if (isLoading || !user || !token) {
      console.log("Skipping fetchConversations: AuthContext is loading or user/token is null");
      return;
    }

    try {
      console.log("Fetching conversations with token:", token);
      const res = await fetch("/api/conversations", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Response status from /api/conversations:", res.status);
      const data = await res.json();
      console.log("Response from /api/conversations:", data);
      if (res.ok) {
        console.log("Setting conversations:", data.conversations);
        setConversations(data.conversations);
      } else {
        console.error("Failed to fetch conversations:", data.error);
      }
    } catch (error) {
      console.error("Error fetching conversations:", error);
    }
  }, [user, token, isLoading]);

  useEffect(() => {
    fetchConversations();
    fetchUsers();
  }, [fetchConversations, fetchUsers]);

  useEffect(() => {
    console.log("Conversations state updated:", conversations);
  }, [conversations]);

  useEffect(() => {
    console.log("Users state updated:", users);
  }, [users]);

  const handleSelectConversation = (conversationId: string) => {
    setSelectedConversationId(conversationId);
    setShowChatMain(true);
    fetchConversations();
  };

  const handleBack = () => {
    setShowChatMain(false);
    setSelectedConversationId(null);
    setShowProfileSidebar(false);
    setIsProfileSidebarVisible(false); // Reset for consistency
  };

  const toggleProfileSidebar = () => {
    // On small screens, if ChatMain is visible, toggle showProfileSidebar
    // On larger screens, toggle isProfileSidebarVisible
    if (showChatMain && !isProfileSidebarVisible) {
      setShowProfileSidebar((prev) => !prev);
    } else {
      setIsProfileSidebarVisible((prev) => !prev);
      setShowProfileSidebar(false); // Ensure small screen state is reset
    }
  };

  const handleProfileBack = () => {
    setShowProfileSidebar(false);
    setIsProfileSidebarVisible(false); // Reset both states
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading authentication...</p>
      </div>
    );
  }

  if (!user || !token) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Redirecting to login...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full sm:max-w-8xl mt-5 mx-auto sm:px-4 overflow-x-auto" style={{ height: `${layoutHeight}px` }}>
      <div className="flex w-full h-full">
        <div className="flex w-full sm:flex sm:w-full sm:h-full">
          <div className={`${showChatMain ? "hidden sm:flex" : "flex"} w-full sm:w-auto`}>
            <div className="w-full sm:w-[306px] md:w-[306px] max-md:w-2/3">
              <ChatSidebar
                onSelectConversation={handleSelectConversation}
                conversations={conversations}
                users={users}
                className="w-full sm:w-[306px] md:w-[306px] max-md:w-full sm:min-w-60"
              />
            </div>
          </div>
          <div className={`${showChatMain ? "flex" : "hidden sm:flex"} w-full sm:w-auto flex-1 md:flex-1 max-md:w-2/3`}>
            <div className={`${showProfileSidebar ? "hidden sm:flex" : "flex"} w-full sm:w-auto flex-1 md:flex-1 max-md:w-1/3`}>
              <ChatMain
                conversationId={selectedConversationId}
                user={user}
                token={token}
                conversation={conversations.find((conv) => conv._id === selectedConversationId)}
                onToggleProfileSidebar={toggleProfileSidebar}
                fetchConversations={fetchConversations}
                onBack={handleBack}
                className="w-full sm:flex-1 md:flex-1 max-md:w-full sm:min-w-60"
              />
            </div>
            {(isProfileSidebarVisible || showProfileSidebar) && (
              <div className={`${showProfileSidebar ? "flex" : "hidden sm:flex"} w-full sm:w-auto`}>
                <ProfileSidebar
                  onBack={handleProfileBack}
                  className="w-full sm:w-[306px] md:w-[306px] max-md:w-full sm:min-w-60"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;