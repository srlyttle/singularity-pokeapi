import React from "react";
import {
  CategoryUnorderedList,
  CategoryListItem,
} from "../category-list/category-list.styles";
import LoadingSkeleton from "../loading-skeleton";

export default function CategoryListSkeleton() {
  return (
    <CategoryUnorderedList>
      {Array.from(Array(12).keys())?.map((key) => (
        <CategoryListItem key={key}>
          <LoadingSkeleton width="300px" height="2rem" />
        </CategoryListItem>
      ))}
    </CategoryUnorderedList>
  );
}
