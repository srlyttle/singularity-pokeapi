"use client";
import React from "react";

import {
  AltButton,
  CategoryListButton,
  CategoryListItem,
  CategoryUnorderedList,
} from "./category-list.styles";
import { Category } from "@/types";
import { useRouter, usePathname } from "next/navigation";
interface Props {
  categories?: Category[];
}

export default function CategoryList({ categories }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  if (categories?.length === 0) {
    return <div className="notes-empty">No categories found!</div>;
  }

  return (
    <CategoryUnorderedList>
      <CategoryListItem>
        <AltButton onClick={() => router.push(`/`)}>home</AltButton>
      </CategoryListItem>
      {categories?.map(({ name }) => (
        <CategoryListItem key={name}>
          <AltButton
            data-testid={`category-button-${name}`}
            onClick={() => router.push(`/category/${name}`)}
            isActive={pathname === `/category/${name}`}
          >
            {name}
          </AltButton>
        </CategoryListItem>
      ))}
    </CategoryUnorderedList>
  );
}
