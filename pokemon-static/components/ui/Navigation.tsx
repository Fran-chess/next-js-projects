import Image from "next/image";
import React from "react";

const Navigation = () => {
  return (
    <nav className="flex justify-around items-center py-3 bg-neutral-300 dark:bg-neutral-700">
      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Pokémon xxx" width={100} height={100} priority
      />
      <div>
      <span className="text-white text-3xl">P</span>
        <span className="text-red-500 text-lg ">okémon</span>
      </div>
        <span className="text-white">Favoritos</span>
    </nav>
  );
};

export default Navigation;
