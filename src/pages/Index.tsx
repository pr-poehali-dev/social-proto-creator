
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import StoriesRow from "@/components/StoriesRow";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Users, Calendar, Star, Zap } from "lucide-react";

const posts = [
  {
    id: 1,
    author: {
      name: "Алексей Леонов",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      username: "leonov_space"
    },
    time: "2 часа назад",
    content: "Первый выход в открытый космос остается незабываемым опытом в моей жизни. Ощущение бесконечности вокруг тебя просто невероятно! 🚀",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    likes: 342,
    comments: 56
  },
  {
    id: 2,
    author: {
      name: "Валентина Терешкова",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      username: "v_tereshkova"
    },
    time: "5 часов назад",
    content: "В этот день 60 лет назад я стала первой женщиной в космосе. До сих пор не могу забыть первый взгляд на Землю из иллюминатора 💫",
    likes: 820,
    comments: 128
  },
  {
    id: 3,
    author: {
      name: "Илон Маск",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      username: "elonmusk"
    },
    time: "1 день назад",
    content: "Марс - следующий великий рубеж человечества. Мы станем межпланетным видом или останемся навсегда привязанными к Земле? Выбор за нами.",
    image: "https://images.unsplash.com/photo-1614728423169-3f65fd1eb8f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    likes: 1256,
    comments: 342
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <StoriesRow />
            <div className="flex items-center gap-4 mb-6">
              <Button className="w-full flex gap-2">
                <Plus className="h-4 w-4" />
                Создать пост
              </Button>
            </div>
            <div>
              {posts.map(post => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <Card className="mb-4">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Предложения</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-muted rounded-full h-10 w-10 flex items-center justify-center">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Группы</div>
                        <div className="text-xs text-muted-foreground">1.5k новых</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Смотреть</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-muted rounded-full h-10 w-10 flex items-center justify-center">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">События</div>
                        <div className="text-xs text-muted-foreground">3 предстоящих</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Смотреть</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-muted rounded-full h-10 w-10 flex items-center justify-center">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Избранное</div>
                        <div className="text-xs text-muted-foreground">12 новых записей</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Смотреть</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Активные друзья</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                        alt="Друг" 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                    </div>
                    <div className="text-sm">Николай Тихонов</div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                        alt="Друг" 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                    </div>
                    <div className="text-sm">Анна Кузнецова</div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                        alt="Друг" 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                    </div>
                    <div className="text-sm">Дмитрий Волков</div>
                  </div>
                </div>
                
                <Button variant="ghost" size="sm" className="w-full mt-3">
                  <Zap className="h-4 w-4 mr-2" />
                  Смотреть всех
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
