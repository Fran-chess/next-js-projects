import { Layout } from "@/components/layouts/Layout";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getStaticProps } from './[id]';


interface Props {
   pokémon: any;
}

const PokémonDetails: NextPage<Props> = ({pokémon}) => {

  const router = useRouter();

  console.log()
  

  return (
    <Layout title="Pokémon detail">
      <h1>


      </h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
/*   const resp = await pokeApi.get<Pokémons>("/pokemon?limit=151");
 */
  const pokemons = resp.data.results.map((pokemon) => {

  return {
    props: {
      pokemons,
    },
  };
};





export default PokémonDetails;
