import { pokemonApi } from "@/constants";
import { PokemonApiResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetPokemonQuery = (id?: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      const data = (
        await (
          await axios.get
        )<PokemonApiResponse>(`${pokemonApi}/pokemon/${id}`)
      ).data;
      return data;
    },
  });
  if (error) {
    throw new Error(`error gettting pokemon ${error.message}`);
  }
  return { data, error, isLoading };
};
