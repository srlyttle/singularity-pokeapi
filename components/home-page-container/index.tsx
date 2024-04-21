"use client";

import { PageHeader } from "@/common-styles";
import { useGetAllPokemons } from "@/hooks/useGetAllPokemonQuery";
import React from "react";
import PokemonResults from "../pokemon-results";

export default function HomePageContainer() {
  const { data } = useGetAllPokemons();
  return (
    <>
      <PageHeader>Home</PageHeader>
      <PokemonResults pokemons={data} />
    </>
  );
}
