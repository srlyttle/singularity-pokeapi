import CategoryPageContainer from "@/components/category-page-container";

export default function Page({ params }: { params: { id: string } }) {
  return <CategoryPageContainer categoryId={params.id} />;
}
