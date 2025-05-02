
import React from "react";
import Header from "@/components/Header";
import {
  ProfileNavigation,
  ProfileHeader,
  BioSection,
  DateShapes,
  Playlist,
  ProfileCard,
  ZodiacSign,
  FriendsSection,
  PhotoGallery,
  EmojiSection,
  PlushToy
} from "@/components/pastel";

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
            <ProfileNavigation />
            
            {/* Блок с приветствием и основными фотографиями */}
            <ProfileHeader />
            
            {/* Информационный блок - описание */}
            <BioSection />
            
            {/* Звездочки с датами */}
            <DateShapes />
            
            {/* Список любимых песен */}
            <Playlist />
          </div>
          
          {/* Колонка 2 - Правая сторона с дополнительной информацией */}
          <div className="space-y-4">
            {/* Блок профиля */}
            <ProfileCard />
            
            {/* Знак зодиака */}
            <ZodiacSign />
            
            {/* Фотографии друзей */}
            <FriendsSection />
            
            {/* Сетка фотографий */}
            <PhotoGallery />
            
            {/* Любимые эмодзи */}
            <EmojiSection />
            
            {/* Мягкая игрушка */}
            <PlushToy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastelProfile;
