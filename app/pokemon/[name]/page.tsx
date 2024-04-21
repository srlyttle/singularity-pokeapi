import PokemonPageContainer from "@/components/pokemon-page-container";

export default function Page({ params }: { params: { name: string } }) {
  return <PokemonPageContainer name={params.name} />;
}
