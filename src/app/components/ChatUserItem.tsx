import React from "react";
import { ChatUser } from "./types";

interface ChatUserItemProps {
  user: ChatUser;
  isActive?: boolean;
}

export const ChatUserItem: React.FC<ChatUserItemProps> = ({
  user,
  isActive,
}) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <article
      className={`flex gap-2 items-center px-5 py-2 w-full ${
        isActive ? "bg-indigo-100 border-l-4 border-blue-900" : ""
      }`}
    >
      {user.avatar ? (
        <div className="flex flex-col items-center self-stretch pt-1 pb-8 my-auto w-12 h-12 bg-red-200 rounded-[100.75px]">
          {user.status === "online" && (
            <div className="flex shrink-0 bg-emerald-500 h-[11px] rounded-[100px] w-[11px]" />
          )}
        </div>
      ) : (
        <div
          className={`self-stretch px-3 my-auto w-12 h-12 text-base font-bold tracking-normal leading-none text-center whitespace-nowrap ${
            user.name.includes("UI")
              ? "bg-orange-100 text-orange-400"
              : "bg-slate-300 text-slate-800"
          } rounded-[100.75px]`}
        >
          {getInitials(user.name)}
        </div>
      )}

      <div className="flex-1 shrink self-stretch my-auto basis-0">
        <div className="flex gap-7 justify-between items-start w-full">
          <h3 className="text-sm font-semibold text-center text-black">
            {user.name}
          </h3>
          <time className="text-xs text-right text-neutral-700">
            {user.lastMessageTime}
          </time>
        </div>
        <div className="flex gap-2.5 items-center mt-1 w-full">
          <p
            className={`flex-1 shrink self-stretch my-auto text-xs ${
              user.isTyping
                ? "font-medium text-blue-900"
                : "font-light text-neutral-400"
            } tracking-normal leading-5 basis-0`}
          >
            {user.isTyping ? "Typing..." : user.lastMessage}
          </p>
          {user.unreadCount && (
            <span className="self-stretch p-1 my-auto text-xs font-semibold tracking-normal leading-none text-indigo-100 bg-blue-800 rounded">
              {user.unreadCount}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
