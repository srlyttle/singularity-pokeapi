"use client";

import React, { Suspense } from "react";
import Link from "next/link";

import CategoryList from "../category-list";
import CategoryListSkeleton from "../category-list-skeleton";
import { SidebarSection } from "./sidebar.styles";
import { useGetCategories } from "@/hooks/useGetCategoriesQuery";

export default function Sidebar() {
  const { data: categories, isLoading } = useGetCategories();

  if (isLoading) {
    return <CategoryListSkeleton />;
  }
  return (
    <SidebarSection>
      <Link href={"/"} className="link--unstyled"></Link>
      <nav>
        <CategoryList categories={categories} />
      </nav>
    </SidebarSection>
  );
}
