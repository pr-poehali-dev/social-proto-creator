
import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, X, Star, MessageCircle, Coffee, Music, Camera, Plane } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DatingProfile {
  id: number;
  name: string;
  age: number;
  occupation: string;
  distance: string;
  bio: string;
  interests: string[];
  images: string[];
}

const profiles: DatingProfile[] = [
  {
    id: 1,
    name: "Анна",
    age: 27,
    occupation: "Астрофизик",
    distance: "2 км от вас",
    bio: "Изучаю звезды, люблю долгие прогулки под ночным небом и обсуждать теорию струн за чашкой кофе.",
    interests: ["наука", "астрономия", "кофе", "путешествия"],
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    ]
  },
  {
    id: 2,
    name: "Михаил",
    age: 29,
    occupation: "Инженер-программист",
    distance: "5 км от вас",
    bio: "Создаю будущее с помощью кода. Фанат космических технологий и хорошего кофе. Ищу кого-то для совместных приключений.",
    interests: ["программирование", "музыка", "фотография", "кофе"],
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    ]
  },
  {
    id: 3,
    name: "Елена",
    age: 25,
    occupation: "Дизайнер",
    distance: "3 км от вас",
    bio: "Творческая душа с любовью к космическому дизайну. Ищу вдохновение везде и всегда открыта для новых впечатлений.",
    interests: ["дизайн", "искусство", "космос", "путешествия"],
    images: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    ]
  }
];

const Dating = () => {
  const [currentProfiles, setCurrentProfiles] = useState<DatingProfile[]>(profiles);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleSwipe = (direction: "left" | "right", id: number) => {
    const action = direction === "right" ? "лайкнули" : "пропустили";
    console.log(`Вы ${action} профиль #${id}`);
    
    setCurrentProfiles((prevProfiles) => 
      prevProfiles.filter(profile => profile.id !== id)
    );
    
    setCurrentImageIndex(0);
  };
  
  const handleNextImage = (e: React.MouseEvent, profileId: number) => {
    e.stopPropagation();
    if (currentProfiles.length === 0) return;
    
    const profile = currentProfiles.find(p => p.id === profileId);
    if (!profile) return;
    
    const nextIndex = (currentImageIndex + 1) % profile.images.length;
    setCurrentImageIndex(nextIndex);
  };

  const getInterestIcon = (interest: string) => {
    switch (interest.toLowerCase()) {
      case "кофе": return <Coffee className="h-3 w-3" />;
      case "музыка": return <Music className="h-3 w-3" />;
      case "фотография": return <Camera className="h-3 w-3" />;
      case "путешествия": return <Plane className="h-3 w-3" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Космические знакомства</h1>
        
        <div className="h-[70vh] relative">
          <AnimatePresence>
            {currentProfiles.length > 0 ? (
              <motion.div
                key={currentProfiles[0].id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ 
                  x: 300, 
                  opacity: 0,
                  transition: { duration: 0.2 } 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute inset-0"
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative h-3/5 bg-black" onClick={(e) => handleNextImage(e, currentProfiles[0].id)}>
                    <img 
                      src={currentProfiles[0].images[currentImageIndex]} 
                      alt={currentProfiles[0].name}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute top-2 left-0 right-0 flex justify-center gap-1">
                      {currentProfiles[0].images.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-1 rounded-full bg-white/70 ${idx === currentImageIndex ? 'w-6' : 'w-3 opacity-60'}`}
                        />
                      ))}
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                      <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold">{currentProfiles[0].name}, {currentProfiles[0].age}</h2>
                      </div>
                      <div className="text-sm opacity-90">{currentProfiles[0].occupation}</div>
                      <div className="text-xs opacity-75">{currentProfiles[0].distance}</div>
                    </div>
                  </div>
                  
                  <CardContent className="h-2/5 p-4 flex flex-col overflow-y-auto">
                    <p className="text-sm mb-3">{currentProfiles[0].bio}</p>
                    
                    <div className="mb-3">
                      <h3 className="text-xs font-medium text-muted-foreground mb-2">Интересы</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProfiles[0].interests.map((interest, idx) => (
                          <Badge key={idx} variant="secondary" className="flex items-center gap-1">
                            {getInterestIcon(interest)}
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛸</div>
                  <h2 className="text-xl font-semibold">Профили закончились</h2>
                  <p className="text-muted-foreground mt-2">Загляните позже, скоро появятся новые</p>
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => setCurrentProfiles(profiles)}
                  >
                    Начать заново
                  </Button>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
        
        {currentProfiles.length > 0 && (
          <div className="flex justify-center gap-6 mt-6">
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full h-14 w-14 p-0 border-red-200 hover:border-red-300 hover:bg-red-50"
              onClick={() => handleSwipe("left", currentProfiles[0].id)}
            >
              <X className="h-6 w-6 text-red-500" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full h-14 w-14 p-0 border-amber-200 hover:border-amber-300 hover:bg-amber-50"
            >
              <Star className="h-6 w-6 text-amber-400" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full h-14 w-14 p-0 border-green-200 hover:border-green-300 hover:bg-green-50"
              onClick={() => handleSwipe("right", currentProfiles[0].id)}
            >
              <Heart className="h-6 w-6 text-green-500" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dating;
