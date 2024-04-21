import { pokemonApi } from "@/constants";
import { PokemonItem } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetPokemonsByCategory = (
  categoryUrl?: string,
  categoryName?: string
) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemons", categoryName],
    queryFn: async () => {
      if (!categoryUrl) {
        return [];
      }
      const categoryResponse = (await axios.get)<Record<string, PokemonItem[]>>(
        categoryUrl
      );

      const pokemons = (await categoryResponse).data.pokemon;

      return pokemons;
    },
    enabled: !!categoryUrl && !!categoryName,
  });
  if (error) {
    throw new Error(`error gettting pokemon for categories ${error.message}`);
  }
  return { data, error, isLoading };
};
