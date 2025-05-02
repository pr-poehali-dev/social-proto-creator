
import React from "react";

const ProfileNavigation = () => {
  return (
    <div className="bg-white rounded-full p-2 mb-4 flex justify-center space-x-4 shadow-sm">
      <a href="#" className="text-pastel-pink font-medium">Profile</a>
      <a href="#" className="text-gray-400 hover:text-pastel-pink transition-colors">Instagram</a>
      <a href="#" className="text-gray-400 hover:text-pastel-pink transition-colors">Data</a>
      <a href="#" className="text-gray-400 hover:text-pastel-pink transition-colors">More</a>
    </div>
  );
};

export default ProfileNavigation;
