
import React from "react";

const ProfileHeader = () => {
  return (
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
  );
};

export default ProfileHeader;
