
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (text: string) => void;
}

export const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };
  
  return (
    <div className="p-4 border-t">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <Input 
          placeholder="Написать сообщение..." 
          className="flex-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" size="icon">
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};
