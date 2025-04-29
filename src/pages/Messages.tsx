
import { useState } from "react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ChatList } from "@/components/chat/ChatList";
import { ChatHeader } from "@/components/chat/ChatHeader"; 
import { MessageList } from "@/components/chat/MessageList";
import { MessageInput } from "@/components/chat/MessageInput";
import { ChatData, Message } from "@/types/chat";

const Messages = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Привет! Как дела с разработкой нашего проекта?",
      time: "10:30",
      type: "incoming"
    },
    {
      text: "Всё идёт по плану! Сейчас работаю над интерфейсом сообщений.",
      time: "10:45",
      type: "outgoing"
    },
    {
      text: "Супер! Очень ждём результатов. 🚀",
      time: "11:01",
      type: "incoming"
    },
    {
      text: "Скоро будет готово! Хочешь, покажу демо версию?",
      time: "11:03",
      type: "outgoing"
    }
  ]);
  
  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "outgoing"
    };
    
    setMessages([...messages, newMessage]);
  };
  
  const getCurrentChat = () => {
    return chats.find(chat => chat.id === activeChat) || chats[0];
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-6">
        <Card className="h-[calc(100vh-8rem)]">
          <div className="grid grid-cols-1 md:grid-cols-3 h-full">
            {/* Список чатов */}
            <div className="border-r">
              <ChatList 
                chats={chats} 
                activeChat={activeChat}
                onChatSelect={setActiveChat}
              />
            </div>
            
            {/* Окно чата */}
            <div className="col-span-2 flex flex-col h-full">
              <ChatHeader chat={getCurrentChat()} />
              <MessageList messages={messages} />
              <MessageInput onSendMessage={handleSendMessage} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Данные чатов
const chats: ChatData[] = [
  {
    id: 1,
    name: "Николай Тихонов",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    lastMessage: "Супер! Очень ждём результатов. 🚀",
    time: "11:01",
    unread: 0,
    online: true
  },
  {
    id: 2,
    name: "Анна Кузнецова",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    lastMessage: "Когда встречаемся для обсуждения?",
    time: "Вчера",
    unread: 2,
    online: true
  },
  {
    id: 3,
    name: "Алексей Леонов",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lastMessage: "Отличные фотографии с запуска! 👍",
    time: "Вчера",
    unread: 0,
    online: false
  },
  {
    id: 4,
    name: "Юпитер Групп",
    avatar: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    lastMessage: "Маша: Всем привет! Есть новости по проекту.",
    time: "20 апр",
    unread: 1,
    online: false
  },
  {
    id: 5,
    name: "Дмитрий Волков",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    lastMessage: "Спасибо за помощь с задачей!",
    time: "18 апр",
    unread: 0,
    online: true
  }
];

export default Messages;
