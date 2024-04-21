"use client";

import React from "react";
import { useRouter } from "next/navigation";

import PokemonResults from "../pokemon-results";
import { PokemonItem } from "@/types";

interface Props {
  items?: PokemonItem[];
}
export default function CategoryResults({ items }: Props) {
  const router = useRouter();
  if (items?.length === 0) {
    return <div className="notes-empty">No items in category found!</div>;
  }

  return <PokemonResults pokemons={items?.map((item) => item.pokemon)} />;
}
