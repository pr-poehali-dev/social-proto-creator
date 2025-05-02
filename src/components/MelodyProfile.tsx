
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const MelodyProfile = () => {
  return (
    <div className="min-h-screen bg-melody-background p-4 md:p-6 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute -right-24 top-20 w-48 h-48 rounded-full bg-melody-olive opacity-20"></div>
      <div className="absolute -left-24 bottom-20 w-64 h-64 rounded-full bg-melody-pink opacity-10"></div>
      
      {/* Верхняя навигация */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">website: www.melody-salvatore.com</span>
        </div>
        <Button className="bg-melody-yellow hover:bg-melody-olive text-white rounded-full">
          Enter
        </Button>
      </div>
      
      {/* Основной контейнер */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Левая колонка - главное фото */}
          <div className="lg:col-span-1">
            <div className="hexagon-clip bg-melody-olive overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop" 
                alt="Melody Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="mt-4 flex items-center space-x-2">
              <Badge className="melody-badge">Libra</Badge>
              <Badge className="melody-badge">Capallo</Badge>
              <span className="text-xs text-gray-500">(by Kooswilig)</span>
            </div>
          </div>
          
          {/* Средняя и правая колонки */}
          <div className="lg:col-span-2 space-y-4">
            {/* Заголовок профиля */}
            <div className="flex items-center">
              <div className="flex items-center space-x-1">
                <span className="w-8 h-8 bg-melody-olive rounded-full flex items-center justify-center text-white font-bold">M</span>
                <span className="w-8 h-8 bg-melody-olive rounded-full flex items-center justify-center text-white font-bold">C</span>
              </div>
              <h1 className="text-3xl font-bold text-melody-olive ml-2">Melody Salvatore</h1>
              <span className="ml-2 text-melody-pink">(astranova)</span>
            </div>
            
            {/* Блок информации о профиле */}
            <div className="bg-melody-pink rounded-3xl p-4 text-white">
              <p className="text-sm leading-relaxed">
                Melody Salvatore o mejor conocida como Mel, es una veterinaria y modelo europea, nacida el 11 de octubre del 2002, cuenta con 20 años. Mel a su corta edad a obtenido reconocimiento por sus trabajos y a formado una familia. Es alguien muy tranquila y reservada, cuando conoce a personas nuevas suele ser algo distante hasta ganar confianza, una vez establecido un vínculo es muy cariñosa y detallista con sus cercanos.
              </p>
            </div>
          </div>
        </div>
        
        {/* Нижняя часть - фотогалерея и информация */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Левая колонка - профиль и галерея */}
          <div className="space-y-4">
            {/* Мини-профиль */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop" 
                alt="Melody"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-melody-pink">Melody Salvatore</h3>
                <p className="text-xs text-gray-500">@astranova_mel</p>
              </div>
            </div>
            
            {/* Теги */}
            <div className="flex space-x-2">
              <Badge className="bg-melody-olive text-white">Music</Badge>
              <Badge className="bg-melody-pink text-white">Fashion</Badge>
            </div>
            
            {/* Галерея фотографий */}
            <div className="grid grid-cols-3 gap-2">
              <div className="circle-bubble bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" 
                  alt="Gallery 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="circle-bubble bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" 
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="circle-bubble bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop" 
                  alt="Gallery 3"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Кнопка добавления */}
              <div className="circle-bubble bg-melody-pink flex items-center justify-center">
                <span className="text-white text-xl">+</span>
              </div>
            </div>
            
            {/* Дополнительные фотографии */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-bubble bg-gray-100 aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop" 
                  alt="Photo 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-bubble bg-gray-100 aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
                  alt="Photo 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Средняя колонка - фотографии с подписями */}
          <div className="space-y-4">
            <div className="rounded-bubble bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop" 
                alt="Featured 1"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 text-white">
                <p className="text-sm">El asmaboy 2023</p>
              </div>
            </div>
            
            <div className="rounded-bubble bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1550927312-3af3c565011f?q=80&w=600&auto=format&fit=crop" 
                alt="Featured 2"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 text-white">
                <p className="text-sm">Fotos de niño</p>
              </div>
            </div>
          </div>
          
          {/* Правая колонка - информация об отношениях */}
          <div className="space-y-4">
            <div className="olive-card p-4">
              <p className="text-sm leading-relaxed">
                Se encuentra en una relación formal desde el 18 de diciembre del 2022, pero lleva un tiempo conociendo a su actual pareja en forma de amistad. Melody ama mucho a Naol y está feliz de formar una familia junto a ella, también espera pasar toda su vida a su lado.
              </p>
              <div className="mt-2 text-xs opacity-75 text-right">
                (by xarisxao)
              </div>
            </div>
            
            {/* LOVE блок */}
            <div className="flex justify-center space-x-2 my-4">
              <div className="love-circle">L</div>
              <div className="love-circle">O</div>
              <div className="love-circle">V</div>
              <div className="love-circle">E</div>
            </div>
            
            {/* Даты */}
            <div className="flex justify-between items-center">
              <div className="bg-melody-olive px-4 py-2 rounded-full">
                <span className="font-bold text-white">18.12.22</span>
              </div>
              <span className="text-melody-pink font-medium">especiales</span>
              <div className="bg-melody-olive px-4 py-2 rounded-full">
                <span className="font-bold text-white">03.10.20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MelodyProfile;
