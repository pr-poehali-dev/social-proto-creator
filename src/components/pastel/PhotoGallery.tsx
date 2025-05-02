
import React from "react";

const PhotoGallery = () => {
  return (
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
  );
};

export default PhotoGallery;
