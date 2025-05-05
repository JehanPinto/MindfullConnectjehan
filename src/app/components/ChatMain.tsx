"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatMessage as ChatMessageType, Conversation, User } from "./types";

interface ChatMainProps {
  conversationId: string | null;
  user: User | null;
  token: string | null;
  conversation?: Conversation;
  onToggleProfileSidebar: () => void;
  fetchConversations: () => Promise<void>;
  onBack?: () => void; // Add onBack prop
  className?: string;
}

export const ChatMain: React.FC<ChatMainProps> = ({
  conversationId,
  user,
  token,
  conversation,
  onToggleProfileSidebar,
  fetchConversations,
  onBack,
  className,
}) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isScrolledUp) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isScrolledUp]);

  useEffect(() => {
    const handleScroll = () => {
      if (messagesContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
        const atBottom = scrollHeight - scrollTop - clientHeight < 50;
        setIsScrolledUp(!atBottom);
        console.log("Scroll position:", { scrollTop, scrollHeight, clientHeight, atBottom, isScrolledUp: !atBottom });
      }
    };

    const container = messagesContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [conversationId]);

  useEffect(() => {
    if (!conversationId || !token) return;

    const fetchMessages = async () => {
      const res = await fetch(`/api/messages/${conversationId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setMessages(
          data.messages.map((msg: any) => ({
            id: msg._id,
            content: msg.content,
            timestamp: new Date(msg.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            sender: msg.sender._id === user?._id ? "user" : "other",
            attachment: msg.attachment,
          }))
        );
      } else {
        console.error(data.error);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [conversationId, token, user]);

  const handleSendMessage = async () => {
    if (!newMessage) {
      console.log("No message content to send");
      return;
    }
    if (!conversationId) {
      console.log("No conversation selected");
      return;
    }
    if (!token) {
      console.log("User not authenticated");
      return;
    }

    console.log("Sending message:", newMessage, "to conversation:", conversationId);

    try {
      const res = await fetch(`/api/messages/${conversationId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: newMessage }),
      });

      if (res.ok) {
        const { message } = await res.json();
        console.log("Message sent successfully:", message);
        setNewMessage("");
        setMessages((prev) => [
          ...prev,
          {
            id: message._id,
            content: message.content,
            timestamp: new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            sender: "user",
            attachment: message.attachment,
          },
        ]);
        fetchConversations();
      } else {
        const data = await res.json();
        console.error("Failed to send message:", data.error);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleScrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsScrolledUp(false);
  };

  const otherParticipant = conversation?.participants.find((p) => p._id !== user?._id);

  return (
    <main className={`flex flex-col justify-between px-6 py-8 bg-white h-full ${className}`}>
      <div className="flex flex-col h-full w-full max-md:max-w-full">
        {!conversationId ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-lg font-semibold text-gray-500">No conversation selected</h2>
            <p className="text-sm text-gray-400">
              Please select a conversation from the sidebar to start chatting.
            </p>
          </div>
        ) : (
          <>
            <header className="flex flex-wrap gap-10 justify-between items-center py-3 pr-2 w-full border-b border-solid border-b-[color:var(--Primary-P7,#E5EAFF)]">
              <div className="flex gap-2.5 items-center self-stretch my-auto">
                {onBack && (
                  <button onClick={onBack} className="sm:hidden mr-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/back-arrow-icon-url?placeholderIfAbsent=true&apiKey=your-api-key"
                      className="object-contain w-6 aspect-square"
                      alt="Back"
                    />
                  </button>
                )}
                <div className="flex gap-2 items-center self-stretch my-auto">
                  <div className="flex flex-col items-center self-stretch pt-1 pb-8 my-auto w-12 h-12 bg-red-200 rounded-[100.75px]">
                    <div className="flex shrink-0 bg-emerald-500 h-[11px] rounded-[100px] w-[11px]" />
                  </div>
                  <div className="flex flex-col items-start self-stretch my-auto text-center text-black">
                    <h2 className="text-xs font-semibold">
                      {otherParticipant?.fullName || "Jean-Eude Cokou"}
                    </h2>
                    <p className="mt-1 text-xs">{otherParticipant?.role || "Project Manager"}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center self-stretch my-auto">
                <button>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d08141d8351701fa168fadc1daef0ca269e159d4?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
                    className="object-contain w-6 aspect-square"
                    alt="Video call"
                  />
                </button>
                <button>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3efc60fdff5781dc31234b0e6b5046dbdf466c7?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
                    className="object-contain w-6 aspect-square"
                    alt="Audio call"
                  />
                </button>
                <button onClick={onToggleProfileSidebar}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ee42b3e99f27e7d2774d2c8caf9c4f0b55edf43?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
                    className="object-contain w-6 aspect-square"
                    alt="More options"
                  />
                </button>
              </div>
            </header>

            <div className="relative flex-1">
            <section
                ref={messagesContainerRef}
                className="mt-8 w-full bg-white rounded-xl overflow-y-auto max-h-[400px] min-h-[400px]"
              >
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                <div ref={messagesEndRef} />
              </section>

              {isScrolledUp && (
                <button
                  onClick={handleScrollToBottom}
                  className="absolute bottom-4 right-4 p-2 bg-blue-100 rounded-full shadow-lg hover:bg-blue-300 transition-colors"
                >
                  <img
                    src="/down-arrow.svg"
                    className="w-6 h-6"
                    alt="Scroll to bottom"
                  />
                </button>
              )}
            </div>

            <footer className="flex flex-wrap gap-10 justify-between items-center px-3 py-2 mt-4 w-full rounded-lg">
              <div className="flex gap-2 items-center self-stretch my-auto text-sm text-stone-500">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/88e4a9230a70882d89aeeab379816c034333991d?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt="Attachment"
                />
                <input
                  type="text"
                  placeholder="Enter your message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                  className="self-stretch my-auto bg-transparent outline-none"
                />
              </div>
              <button
                onClick={handleSendMessage}
                className="flex gap-2.5 items-center self-stretch p-3 my-auto w-10 h-10 bg-blue-900 rounded-lg"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f38d43167fc382dbd85341e1ce5fe591b8369?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
                  className="object-contain self-stretch my-auto w-4 aspect-square"
                  alt="Send"
                />
              </button>
            </footer>
          </>
        )}
      </div>
    </main>
  );
};

export default ChatMain;