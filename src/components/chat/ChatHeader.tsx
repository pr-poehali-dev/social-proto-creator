
import { Button } from "@/components/ui/button";
import { Phone, Video, Info } from "lucide-react";
import { ChatData } from "@/types/chat";

interface ChatHeaderProps {
  chat: ChatData;
}

export const ChatHeader = ({ chat }: ChatHeaderProps) => {
  return (
    <div className="p-4 border-b flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img 
          src={chat.avatar} 
          alt={chat.name} 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-medium">{chat.name}</div>
          <div className="text-xs text-green-500">{chat.online ? "В сети" : "Не в сети"}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="icon" variant="ghost">
          <Phone className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost">
          <Video className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost">
          <Info className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
