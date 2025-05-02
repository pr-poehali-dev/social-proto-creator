
import React from "react";

const EmojiSection = () => {
  const emojis = ["💍", "🎀", "🌼", "☁️"];
  
  return (
    <div className="pastel-card bg-pastel-beige p-4">
      <h3 className="text-white font-medium mb-3">Emojis favoritos:</h3>
      
      <div className="flex justify-around">
        {emojis.map((emoji, index) => (
          <span key={index} className="text-2xl">{emoji}</span>
        ))}
      </div>
    </div>
  );
};

export default EmojiSection;
