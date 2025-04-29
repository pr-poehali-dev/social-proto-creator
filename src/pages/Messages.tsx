
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Send, Search, Phone, Video, Info } from "lucide-react";

const Messages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-6">
        <Card className="h-[calc(100vh-8rem)]">
          <div className="grid grid-cols-1 md:grid-cols-3 h-full">
            {/* Список чатов */}
            <div className="border-r">
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
                    <div 
                      key={chat.id}
                      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${chat.id === 1 ? 'bg-accent' : 'hover:bg-muted'}`}
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
                  ))}
                </div>
              </div>
            </div>
            
            {/* Окно чата */}
            <div className="col-span-2 flex flex-col h-full">
              {/* Заголовок чата */}
              <div className="p-4 border-b flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Николай Тихонов" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">Николай Тихонов</div>
                    <div className="text-xs text-green-500">В сети</div>
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
              
              {/* Сообщения */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex justify-center">
                  <div className="text-xs bg-muted rounded-full px-3 py-1 text-muted-foreground">
                    Сегодня
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-accent rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                    <p>Привет! Как дела с разработкой нашего проекта?</p>
                    <div className="text-xs text-muted-foreground mt-1 text-right">
                      10:30
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                    <p>Всё идёт по плану! Сейчас работаю над интерфейсом сообщений.</p>
                    <div className="text-xs mt-1 text-right opacity-80">
                      10:45
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-accent rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                    <p>Супер! Очень ждём результатов. 🚀</p>
                    <div className="text-xs text-muted-foreground mt-1 text-right">
                      11:01
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                    <p>Скоро будет готово! Хочешь, покажу демо версию?</p>
                    <div className="text-xs mt-1 text-right opacity-80">
                      11:03
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Ввод сообщения */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input placeholder="Написать сообщение..." className="flex-1" />
                  <Button size="icon">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Данные чатов
const chats = [
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
