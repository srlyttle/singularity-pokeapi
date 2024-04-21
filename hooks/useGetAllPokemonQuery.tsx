import { pokemonApi } from "@/constants";
import { CategoryResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllPokemons = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["all-pokemon"],
    queryFn: async () => {
      const response = await axios.get<CategoryResponse>(
        `${pokemonApi}/pokemon?offset=0&limit=1302`
      );

      return response.data.results;
    },
  });
  if (error) {
    throw new Error(`error gettting all pokemons ${error.message}`);
  }
  return { data, error, isLoading };
};
