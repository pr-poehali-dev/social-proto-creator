
import React from "react";

const BioSection = () => {
  return (
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
  );
};

export default BioSection;
