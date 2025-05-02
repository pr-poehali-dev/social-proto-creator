
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProfileCard = () => {
  return (
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
  );
};

export default ProfileCard;
