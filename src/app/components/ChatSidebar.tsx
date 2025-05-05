"use client";

import React, { useEffect, useState } from "react";
import { ChatUserItem } from "./ChatUserItem";
import { ChatUser, Conversation, User } from "./types";
import { useAuth } from "@/context/AuthContext";

interface ChatSidebarProps {
  onSelectConversation: (conversationId: string) => void;
  conversations: Conversation[];
  users: User[];
  className?: string; // Add className as an optional property
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({ onSelectConversation, conversations, users }) => {
  const { user, token } = useAuth();
  const [otherUsers, setOtherUsers] = useState<User[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(conversations[0]?._id || null);

  useEffect(() => {
    if (!users) {
      setIsLoadingUsers(false);
      return;
    }

    const conversationParticipantIds = conversations
      .flatMap((conv) => conv.participants)
      .map((p) => p._id)
      .filter((id) => id !== user?._id);

    const filteredUsers = users.filter(
      (u) => u._id !== user?._id && !conversationParticipantIds.includes(u._id)
    );

    setOtherUsers(filteredUsers);
    setIsLoadingUsers(false);
  }, [users, user, conversations]);

  const mapConversationToChatUser = (conv: Conversation): ChatUser => {
    console.log("Mapping conversation:", conv._id, "Participants:", conv.participants);
    console.log("Logged-in user ID:", user?._id);

    const otherParticipant = conv.participants.find((p) => p._id !== user?._id);
    console.log("Selected other participant:", otherParticipant);

    return {
      name: otherParticipant?.fullName || "Unknown",
      status: "offline",
      avatar: otherParticipant?.profileImageUrl || "avatar1",
      isTyping: false,
      lastMessage: conv.lastMessage?.content,
      lastMessageTime: conv.lastMessage?.timestamp
        ? new Date(conv.lastMessage.timestamp).toLocaleTimeString()
        : "Unknown",
      unreadCount: 0,
    };
  };

  const mapUserToChatUser = (u: User): ChatUser => ({
    name: u.fullName,
    status: "offline",
    avatar: u.profileImageUrl || "avatar1",
    isTyping: false,
    lastMessage: "",
    lastMessageTime: "",
    unreadCount: 0,
  });

  const conversationUsers: ChatUser[] = conversations.map(mapConversationToChatUser);
  const otherChatUsers: ChatUser[] = otherUsers.map(mapUserToChatUser);

  const handleStartConversation = async (participantId: string) => {
    if (!token) return;

    try {
      console.log("Starting new conversation with participant:", participantId);
      const res = await fetch("/api/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ participantId }),
      });

      const data = await res.json();
      console.log("Response from POST /api/conversations:", data);
      if (res.ok) {
        setSelectedConversationId(data.conversation._id);
        onSelectConversation(data.conversation._id);
      } else {
        console.error("Failed to start conversation:", data.error);
      }
    } catch (error) {
      console.error("Error starting conversation:", error);
    }
  };

  const handleSelectConversation = (conversationId: string) => {
    setSelectedConversationId(conversationId);
    onSelectConversation(conversationId);
  };

  return (
    <aside className="flex gap-2.5 items-start bg-white h-full min-w-60 w-[306px]">
      <div className="flex flex-col bg-white rounded-2xl border-r border-solid border-r-[color:var(--Primary-P7,#E5EAFF)] h-full min-w-60 w-[298px]">
        <header className="w-full">
          <div className="flex gap-10 justify-between items-center px-5 pt-4 w-full rounded-xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/af7accf8d9e2a34fdcb44c9ff6e8afb11763ff74?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              alt="Menu"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3a6323dbf2d354e271b79d7f87bad8e3c934906?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt="New message"
            />
          </div>

          <nav className="px-5 mt-6 w-full text-center">
            <div className="flex gap-2 items-center p-1 w-full text-xs tracking-wide bg-blue-50 rounded-xl text-neutral-400">
              <button className="flex-1 shrink gap-2.5 self-stretch p-1 my-auto font-bold text-blue-900 bg-indigo-300 rounded basis-0">
                All
              </button>
              <button className="flex-1 shrink self-stretch my-auto basis-0">
                Teams
              </button>
              <button className="flex-1 shrink self-stretch my-auto basis-0">
                Unread
              </button>
            </div>

            <div className="flex gap-10 justify-between items-center px-4 py-3 mt-6 w-full text-base font-medium whitespace-nowrap rounded-lg text-neutral-400">
              <div className="flex gap-2 items-center self-stretch my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f34afa7ac9a7fb7f479637d51e1ce5fe591b8369?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt="Search"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="self-stretch my-auto bg-transparent outline-none"
                />
              </div>
              <button className="flex shrink-0 self-stretch my-auto w-6 h-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ee42b3e99f27e7d2774d2c8caf9c4f0b55edf43?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
                  alt="Filter"
                  className="w-full h-full"
                />
              </button>
            </div>
          </nav>
        </header>

        <section className="mt-6 w-full bg-white rounded-xl flex-1 overflow-y-auto">
          {conversationUsers.length > 0 ? (
            <>
              <h3 className="px-5 text-sm font-semibold text-gray-700">Conversations</h3>
              {conversationUsers.map((chatUser, index) => (
                <div
                  key={conversations[index]._id}
                  onClick={() => handleSelectConversation(conversations[index]._id)}
                >
                  <ChatUserItem
                    user={chatUser}
                    isActive={selectedConversationId === conversations[index]._id}
                  />
                </div>
              ))}
            </>
          ) : (
            <p className="px-5 text-sm text-gray-500">No conversations yet.</p>
          )}

          <h3 className="px-5 mt-6 text-sm font-semibold text-gray-700">Start a new conversation</h3>
          {isLoadingUsers ? (
            <p className="px-5 text-sm text-gray-500">Loading users...</p>
          ) : otherChatUsers.length > 0 ? (
            otherChatUsers.map((chatUser, index) => (
              <div
                key={otherUsers[index]._id}
                onClick={() => handleStartConversation(otherUsers[index]._id)}
              >
                <ChatUserItem user={chatUser} isActive={false} />
              </div>
            ))
          ) : (
            <p className="px-5 text-sm text-gray-500">No other users available.</p>
          )}
        </section>
      </div>
    </aside>
  );
};

export default ChatSidebar;