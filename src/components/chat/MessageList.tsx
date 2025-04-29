
import { MessageItem } from "./MessageItem";
import { Message } from "@/types/chat";

interface MessageListProps {
  messages: Message[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      <div className="flex justify-center">
        <div className="text-xs bg-muted rounded-full px-3 py-1 text-muted-foreground">
          Сегодня
        </div>
      </div>
      
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    </div>
  );
};
