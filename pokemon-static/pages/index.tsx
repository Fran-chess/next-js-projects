import { pokeApi } from "@/api";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Layout } from "@/components/layouts/Layout";
import PokemonCards from "@/components/pokemon/PokémonCards";
import { Pokémons, SmallPokemon } from "@/interfaces";
import { DarkModeProps } from "@/types/types";
import { NextPage, GetStaticProps } from "next";
interface Props {
  pokémons: SmallPokemon[];
}

const Home: NextPage<DarkModeProps & { pokemons: SmallPokemon[] }> = (
  props
) => {
  const { darkMode, pokemons } = props;
  return (
    <Layout title="Listado de Pokémons">
      <main className="p-6 cursor-pointer">
        <ThemeSwitcher darkMode={darkMode} />
        <PokemonCards pokemons={pokemons} />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const resp = await pokeApi.get<Pokémons>("/pokemon?limit=151");

  const pokemons = resp.data.results.map((pokemon) => {
    const id = pokemon.url
      .split("/")
      .filter((x) => x)
      .pop();
    return {
      ...pokemon,
      id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
