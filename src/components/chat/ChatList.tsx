
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChatPreview } from "./ChatPreview";
import { ChatData } from "@/types/chat";

interface ChatListProps {
  chats: ChatData[];
  activeChat: number;
  onChatSelect: (id: number) => void;
}

export const ChatList = ({ chats, activeChat, onChatSelect }: ChatListProps) => {
  return (
    <div className="p-4">
      <div className="relative mb-4">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Поиск сообщений..."
          className="pl-8 w-full"
        />
      </div>
      
      <div className="space-y-1">
        {chats.map((chat) => (
          <ChatPreview 
            key={chat.id}
            chat={chat}
            isActive={chat.id === activeChat}
            onClick={() => onChatSelect(chat.id)}
          />
        ))}
      </div>
    </div>
  );
};
