
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Image, Grid, Bookmark, Users, Settings, EditIcon } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-6">
        <div className="mb-8">
          <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl mb-4 relative">
            <Button 
              size="icon" 
              variant="ghost" 
              className="absolute bottom-4 right-4 bg-background/80 hover:bg-background"
            >
              <EditIcon className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative -mt-16 md:-mt-20 ml-4 md:ml-8">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
                alt="Профиль" 
                className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-background object-cover"
              />
            </div>
            
            <div className="flex-1 px-4 md:px-0">
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold">Юрий Космонавт</h1>
                  <p className="text-muted-foreground">@yuri_kosmonaut</p>
                  <p className="mt-2">Исследую глубины космоса и возможности веб-технологий. Разработчик. Мечтатель.</p>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Настройки
                  </Button>
                  <Button size="sm">
                    <EditIcon className="h-4 w-4 mr-2" />
                    Редактировать профиль
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-6 mt-6">
                <div className="text-center">
                  <div className="font-bold">246</div>
                  <div className="text-sm text-muted-foreground">Публикаций</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">15.3K</div>
                  <div className="text-sm text-muted-foreground">Подписчиков</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">512</div>
                  <div className="text-sm text-muted-foreground">Подписок</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="posts">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="posts" className="flex gap-2">
              <Grid className="h-4 w-4" />
              <span className="hidden md:inline">Публикации</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex gap-2">
              <Bookmark className="h-4 w-4" />
              <span className="hidden md:inline">Сохраненные</span>
            </TabsTrigger>
            <TabsTrigger value="tags" className="flex gap-2">
              <Image className="h-4 w-4" />
              <span className="hidden md:inline">Медиа</span>
            </TabsTrigger>
            <TabsTrigger value="friends" className="flex gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden md:inline">Друзья</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="aspect-square overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1550000000000 + item * 10000}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`} 
                    alt={`Пост ${item}`} 
                    className="w-full h-full object-cover"
                  />
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="saved">
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground">Сохраненные публикации появятся здесь</p>
            </div>
          </TabsContent>
          
          <TabsContent value="tags">
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground">Ваши медиа материалы появятся здесь</p>
            </div>
          </TabsContent>
          
          <TabsContent value="friends">
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground">Ваши друзья появятся здесь</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
