"use client";

import { PageHeader } from "@/common-styles";
import React from "react";
import { useGetCategories } from "@/hooks/useGetCategoriesQuery";
import { useGetPokemonsByCategory } from "@/hooks/useGetPokemonsByCategoryQuery";
import CategoryResults from "../category-results";
import CategoryResulstSkeletonLoader from "../category-results-loading-skeleton";

interface Props {
  categoryId: string;
}

export default function CategoryPageContainer({ categoryId }: Props) {
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategories();
  const selectedCategory = categories?.find(
    (category) => category.name === categoryId
  );
  const { data: pokemonsByCategory, isLoading: isPokemonsLoading } =
    useGetPokemonsByCategory(selectedCategory?.url, selectedCategory?.name);

  if (isCategoriesLoading || isPokemonsLoading) {
    return <CategoryResulstSkeletonLoader />;
  }

  return (
    <>
      <PageHeader data-testid={`category-title-${categoryId}`}>
        {categoryId}
      </PageHeader>
      <CategoryResults items={pokemonsByCategory} />
    </>
  );
}
