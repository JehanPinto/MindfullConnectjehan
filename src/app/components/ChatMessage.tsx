import React from "react";
import { ChatMessage as ChatMessageType } from "./types";

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isSender = message.sender === "user";

  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
      <article
        className={`flex flex-col ${
          isSender ? "items-end" : "items-start"
        } w-full max-w-[318px]`}
      >
        <time className={`text-xs ${isSender ? "text-right" : "text-left"} text-neutral-400`}>
          {message.timestamp}
        </time>
        <div
          className={`flex-1 shrink gap-2.5 p-2 w-full text-xs tracking-normal leading-5 ${
            isSender
              ? "text-indigo-100 bg-blue-900 rounded-lg"
              : "bg-indigo-100 text-zinc-900 rounded-lg"
          } basis-0`}
        >
          {message.content}

          {message.attachment && (
            <div className="flex gap-2 items-center p-2 mt-2.5 w-full bg-white rounded-md">
              <div className="flex flex-col justify-center self-stretch px-px py-1.5 my-auto w-6 text-xs text-center text-white whitespace-nowrap">
                <span className="px-0.5 bg-rose-500 rounded-sm">
                  {message.attachment.type}
                </span>
              </div>
              <div className="flex-1 shrink self-stretch my-auto basis-0">
                <h4 className="text-sm leading-none text-slate-600">
                  {message.attachment.name}
                </h4>
                <div className="flex gap-1 items-start w-full text-xs leading-none text-slate-400">
                  <time>{message.attachment.date}</time>
                  <span className="text-xs leading-relaxed text-slate-500">
                    •
                  </span>
                  <span>{message.attachment.size}</span>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c65d8d459e487020a086f2c644a153413df253c?placeholderIfAbsent=true&apiKey=fd0c2c04ade54c2997bae3153b14309c"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                alt="Download attachment"
              />
            </div>
          )}
        </div>
      </article>
    </div>
  );
};