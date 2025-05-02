
import React from "react";

const FriendsSection = () => {
  return (
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
  );
};

export default FriendsSection;
