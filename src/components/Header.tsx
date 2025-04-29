import React from "react";
import { Link } from "react-router-dom";
import { Home, User, MessageSquare, Heart, Star } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">
            Космос
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
              <Home size={18} />
              <span>Главная</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
              <User size={18} />
              <span>Профиль</span>
            </Link>
            <Link to="/messages" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
              <MessageSquare size={18} />
              <span>Сообщения</span>
            </Link>
            <Link to="/dating" className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
              <Heart size={18} />
              <span>Знакомства</span>
            </Link>
            <Link to="/pastel-profile" className="flex items-center space-x-1 text-pastel-pink font-medium">
              <Star size={18} />
              <span>Пастельный профиль</span>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/" className="text-gray-600">
              <Home size={20} />
            </Link>
            <Link to="/profile" className="text-gray-600">
              <User size={20} />
            </Link>
            <Link to="/messages" className="text-gray-600">
              <MessageSquare size={20} />
            </Link>
            <Link to="/dating" className="text-gray-600">
              <Heart size={20} />
            </Link>
            <Link to="/pastel-profile" className="text-pastel-pink">
              <Star size={20} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
