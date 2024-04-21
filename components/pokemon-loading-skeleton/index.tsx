import {
  PokemonWrapper,
  PokemonDetails,
  PokemonInfo,
  InfoRow,
  PokemonStats,
} from "@/components/pokemon-page-container/pokemon.styles";
import { PageHeader } from "@/common-styles";
import React from "react";
import Card from "../card";
import LoadingSkeleton from "../loading-skeleton";

export default function PokemonSkeletonLoader() {
  return (
    <div data-testid="pokemon-loading">
      <PageHeader>
        <LoadingSkeleton width="300px" height="2rem" />
      </PageHeader>
      <PokemonWrapper data-testid={`pokemon-stats-loading}`}>
        <PokemonDetails>
          <Card>
            <PokemonInfo>
              <InfoRow>
                <LoadingSkeleton width="300px" height="2rem" />
              </InfoRow>
              <InfoRow>
                <LoadingSkeleton width="300px" height="2rem" />
              </InfoRow>
              <InfoRow>
                <LoadingSkeleton width="300px" height="2rem" />
              </InfoRow>
              <InfoRow>
                <LoadingSkeleton width="300px" height="2rem" />
              </InfoRow>
              <InfoRow>
                <LoadingSkeleton width="300px" height="2rem" />
              </InfoRow>
            </PokemonInfo>
          </Card>
        </PokemonDetails>

        <PokemonStats>
          <LoadingSkeleton width="550px" height="550px" />
        </PokemonStats>
      </PokemonWrapper>
    </div>
  );
}
