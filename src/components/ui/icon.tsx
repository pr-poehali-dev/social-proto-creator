
import React from "react";
import * as Icons from "lucide-react";

interface IconProps {
  name: keyof typeof Icons | string;
  fallback?: keyof typeof Icons;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  fallback = "CircleAlert", 
  size = 24, 
  color, 
  className = "" 
}) => {
  // Try to get the icon component
  const IconComponent = 
    Icons[name as keyof typeof Icons] || 
    Icons[fallback as keyof typeof Icons];
  
  return (
    <IconComponent 
      size={size} 
      color={color} 
      className={className} 
    />
  );
};

export default Icon;
