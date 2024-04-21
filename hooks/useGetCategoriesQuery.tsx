import { pokemonApi } from "@/constants";
import { CategoryResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const excludedCategories = ["unknown", "shadow"];

export const useGetCategories = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get<CategoryResponse>(`${pokemonApi}/type`);

      return response.data.results.filter(
        (category) => !excludedCategories.includes(category.name)
      );
    },
  });
  if (error) {
    throw new Error(`error gettting categories ${error.message}`);
  }
  return { data, error, isLoading };
};
