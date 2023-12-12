import { SmallPokemon } from "@/interfaces";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
interface PokemonCardsProps {
  pokemons: SmallPokemon[];
}

const PokemonCards: FC<PokemonCardsProps> = ({ pokemons }) => {
  const router = useRouter();

  const onClick = (id: string) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <ul className="flex flex-wrap justify-center">
      {pokemons.map((pokemon) => (
        <li
          key={pokemon.id}
          onClick={() => onClick(pokemon.id)}
          className="m-2 bg-white rounded-lg shadow-md overflow-hidden w-40 transform transition duration-500 hover:scale-105 hover:shadow-xl"
        >
          {pokemon.img && (
            <div className="relative w-full h-40">
              <Image
                src={pokemon.img}
                alt={pokemon.name}
                layout="fill"
                objectFit="contain"
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

export default PokemonCards;
