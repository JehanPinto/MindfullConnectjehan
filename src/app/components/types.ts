export interface ChatUser {
  name: string;
  role?: string;
  avatar?: string;
  status?: string;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
  isTyping?: boolean;
}

export interface ChatMessage {
  id: string;
  content: string;
  timestamp: string;
  sender: string | { _id: string; fullName: string };
  attachment?: {
    type: string;
    name: string;
    date: string;
    size: string;
  };
}

export interface MediaItem {
  id: string;
  url: string;
}

export interface FileTypeItem {
  icon: string;
  type: string;
  count: string;
  size: string;
  bgColor: string;
}
export interface User {
  _id: string;
  fullName: string;
  email: string;
  profileImageUrl?: string;
  lastSeen?: string;
  role: string;
}

export interface Conversation {
  _id: string;
  participants: User[];
  lastMessage?: ChatMessage;
}
