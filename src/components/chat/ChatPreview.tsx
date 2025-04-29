
import { ChatData } from "@/types/chat";

interface ChatPreviewProps {
  chat: ChatData;
  isActive: boolean;
  onClick: () => void;
}

export const ChatPreview = ({ chat, isActive, onClick }: ChatPreviewProps) => {
  return (
    <div 
      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${isActive ? 'bg-accent' : 'hover:bg-muted'}`}
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={chat.avatar} 
          alt={chat.name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        {chat.online && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <div className="font-medium truncate">{chat.name}</div>
          <div className="text-xs text-muted-foreground">{chat.time}</div>
        </div>
        <div className="text-sm text-muted-foreground truncate">
          {chat.lastMessage}
        </div>
      </div>
      {chat.unread > 0 && (
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
          {chat.unread}
        </div>
      )}
    </div>
  );
};
