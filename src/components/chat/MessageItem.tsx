
import { Message } from "@/types/chat";

interface MessageItemProps {
  message: Message;
}

export const MessageItem = ({ message }: MessageItemProps) => {
  const isOutgoing = message.type === "outgoing";
  
  return (
    <div className={`flex ${isOutgoing ? "justify-end" : "justify-start"}`}>
      <div 
        className={`
          ${isOutgoing 
            ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-sm" 
            : "bg-accent rounded-2xl rounded-tl-sm"
          } 
          p-3 max-w-[80%]
        `}
      >
        <p>{message.text}</p>
        <div 
          className={`
            text-xs mt-1 text-right 
            ${isOutgoing ? "opacity-80" : "text-muted-foreground"}
          `}
        >
          {message.time}
        </div>
      </div>
    </div>
  );
};
