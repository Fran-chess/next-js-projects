'use client'
import Image from "next/image";
import { SimplePokemon } from "..";
import { FC } from "react";
import { useRouter } from "next/navigation";
interface PropsCards {
  pokemons: SimplePokemon[];
}

const PokemonGrid: FC<PropsCards> = ({ pokemons }) => {
  const router = useRouter();
  const onClick = (id: string) => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <ul className="flex flex-wrap space-between">
      {pokemons.map((pokemon) => (
        <li
          key={pokemon.id}
          onClick={() => onClick(pokemon.id)}
          className="flex flex-col item-centerm-2 bg-white rounded-lg shadow-md overflow-hidden w-40 transform transition duration-500 hover:scale-105 hover:shadow-xl"
        >
          {pokemon.img && (
            <div className="relative w-full h-40">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                alt={pokemon.name}
                width={100}
                height={100}
                key={pokemon.id}
                priority={false}
              />
            </div>
          )}

          <p className="text-center mt-2 font-bold p-2 border-t border-zinc-600">
            <span className="underline-effect">{pokemon.name}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default PokemonGrid;
