import { PokemonsData, SimplePokemon } from "@/app/pokemons";
import PokemonGrid from "@/app/pokemons/components/PokemonGrid";

const getPokémons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsData = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`,
  }));

  return pokemons;
};

export default async function Pokemons() {
  const pokemons = await getPokémons(151);

  return <PokemonGrid pokemons={pokemons} />;
}
