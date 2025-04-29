import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import { BookOpen, Heart, Music, Star, Image, MessageCircle, Cloud, User, Instagram } from "lucide-react";

const PastelProfile = () => {
  return (
    <div className="min-h-screen bg-pastel-light-pink relative">
      <Header />
      
      {/* Главная сетка профиля */}
      <div className="container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Колонка 1 - Основная информация профиля */}
          <div className="md:col-span-2 space-y-4">
            {/* Верхняя навигация */}
            <div className="bg-white rounded-full p-2 mb-4 flex justify-center space-x-4 shadow-sm">
              <a href="#" className="text-pastel-pink font-medium">Profile</a>
              <a href="#" className="text-gray-400 hover:text-pastel-pink transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-pastel-pink transition-colors">Data</a>
              <a href="#" className="text-gray-400 hover:text-pastel-pink transition-colors">More</a>
            </div>
            
            {/* Блок с приветствием и основными фотографиями */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Фото слева */}
              <div className="col-span-1 relative">
                <div className="round-img h-full bg-pastel-pink bg-opacity-30 p-3">
                  <img 
                    src="https://images.unsplash.com/photo-1631066570732-3b950ab1aefe?q=80&w=1974&auto=format&fit=crop" 
                    alt="Profile picture" 
                    className="w-full h-full object-cover rounded-2xl transform rotate-2"
                  />
                </div>
              </div>
              
              {/* Приветствие в центре */}
              <div className="col-span-1 flex flex-col justify-center items-center">
                <div className="bg-white rounded-full p-4 shadow-md text-center w-40 h-40 flex flex-col justify-center animate-float">
                  <h2 className="text-3xl font-bold text-pastel-dark-pink">Hey,</h2>
                  <h1 className="text-4xl font-bold text-pastel-dark-pink">Sari!</h1>
                </div>
              </div>
              
              {/* Фото справа */}
              <div className="col-span-1 relative">
                <div className="rounded-full h-full bg-pastel-beige bg-opacity-30 p-3">
                  <img 
                    src="https://images.unsplash.com/photo-1624217247667-61f0c9ed3ecc?q=80&w=1974&auto=format&fit=crop" 
                    alt="Profile picture" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Информационный блок - описание */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="pastel-card bg-white p-4">
                <p className="text-gray-600 text-sm">
                  Es una persona muy introvertida, pero agarra confianza muy rápido, lo que hace que sea una persona bromista e hiperactiva.
                </p>
              </div>
              
              <div className="pastel-card bg-white p-4">
                <p className="text-gray-600 text-sm">
                  Cantante, modelo, fanática de la naturaleza.
                </p>
              </div>
            </div>
            
            {/* Звездочки с датами */}
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 w-32 star-shape bg-pastel-beige flex flex-col justify-center items-center mx-auto">
                <span className="text-2xl font-bold text-white">05</span>
                <span className="text-sm text-white">line</span>
              </div>
              
              <div className="h-32 w-32 rounded-full bg-white flex flex-col justify-center items-center mx-auto shadow-md">
                <span className="text-2xl font-bold text-gray-400">27</span>
                <span className="text-sm text-gray-400">julio</span>
              </div>
            </div>
            
            {/* Список любимых песен */}
            <div className="pastel-card bg-pastel-pink p-4">
              <h3 className="text-white font-medium mb-2">Playlist:</h3>
              <ul className="text-white text-sm space-y-1">
                <li>Converse high - BTS</li>
                <li>Singularity - V</li>
                <li>Red Lights - Bangchan</li>
                <li>Hyunjin</li>
                <li>Beautiful - BTS</li>
              </ul>
            </div>
          </div>
          
          {/* Колонка 2 - Правая сторона с дополнительной информацией */}
          <div className="space-y-4">
            {/* Блок профиля */}
            <div className="pastel-card bg-pastel-beige p-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1631066570732-3b950ab1aefe?q=80&w=1974&auto=format&fit=crop" 
                  alt="Avatar" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">Sari Sari</h2>
                  <p className="text-sm text-white opacity-90">@S.araki</p>
                </div>
              </div>
              
              <div className="mt-3">
                <Badge className="pastel-badge">Нова</Badge>
              </div>
              
              <div className="mt-4 bg-white rounded-xl p-3">
                <p className="text-sm text-gray-600 italic">
                  "Vivir les mejores, los hombres valen pa pura verga."
                </p>
              </div>
              
              <div className="flex space-x-2 mt-4">
                <Button className="pastel-button flex-1 text-white">Follow</Button>
                <Button className="pastel-button flex-1 text-white">Message</Button>
              </div>
            </div>
            
            {/* Знак зодиака */}
            <div className="relative">
              <div className="zodiac-shape h-24 w-24 bg-pastel-pink flex items-center justify-center mx-auto">
                <span className="text-4xl text-white">♌</span>
              </div>
            </div>
            
            {/* Фотографии друзей */}
            <div className="pastel-card bg-pastel-beige p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-medium">My Babys</h3>
                <span className="text-sm text-white opacity-80">Zuki & Nem</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <img 
                  src="https://images.unsplash.com/photo-1606503825047-bceb7a43161f?q=80&w=1064&auto=format&fit=crop" 
                  alt="Friend" 
                  className="w-full h-24 object-cover rounded-xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop" 
                  alt="Friend" 
                  className="w-full h-24 object-cover rounded-xl"
                />
              </div>
            </div>
            
            {/* Сетка фотографий */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
                <div key={idx} className="bubble-img bg-pastel-pink p-1">
                  <img 
                    src={`https://images.unsplash.com/photo-16${Math.floor(10000000 + Math.random() * 90000000)}?q=80&w=400&auto=format&fit=crop`} 
                    alt={`Gallery ${idx}`} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
            
            {/* Любимые эмодзи */}
            <div className="pastel-card bg-pastel-beige p-4">
              <h3 className="text-white font-medium mb-3">Emojis favoritos:</h3>
              
              <div className="flex justify-around">
                <span className="text-2xl">💍</span>
                <span className="text-2xl">🎀</span>
                <span className="text-2xl">🌼</span>
                <span className="text-2xl">☁️</span>
              </div>
            </div>
            
            {/* Мягкая игрушка */}
            <div className="pastel-card bg-pastel-pink p-4 text-center">
              <h3 className="text-white font-medium mb-2">Sani to lover</h3>
              <img 
                src="https://images.unsplash.com/photo-1607195487393-78aac5553c78?q=80&w=1974&auto=format&fit=crop" 
                alt="Plush toy" 
                className="w-full h-32 object-cover rounded-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastelProfile;
