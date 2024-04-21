"use client";

import { PageHeader } from "@/common-styles";
import React from "react";
import {
  PokemonWrapper,
  PokemonDetails,
  PokemonInfo,
  InfoRow,
  InfoLabel,
  InfoValue,
  PokemonStats,
} from "./pokemon.styles";
import { useGetPokemonQuery } from "@/hooks/useGetPokemonQuery";
import Card from "../card";
import PokemonSkeletonLoader from "../pokemon-loading-skeleton";
import ReactApexCharts from "react-apexcharts";

interface Props {
  name: string;
}

export default function PokemonPageContainer({ name }: Props) {
  const { data, isLoading } = useGetPokemonQuery(name);

  const config = {
    options: {
      colors: ["#0396df"],
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [
          "HP",
          "Attack",
          "Defense",
          "Special Attack",
          "Special Defense",
          "Speed",
        ],
      },
    },
    series: [
      {
        name: "Base Stats",
        data: data?.stats.map((stat) => stat.base_stat) || [],
      },
    ],
  };

  if (isLoading) {
    return <PokemonSkeletonLoader />;
  }
  return (
    <div data-testid={`pokemon-stats-${data?.name}`}>
      <PageHeader>{data?.name}</PageHeader>
      <PokemonWrapper data-testid={`pokemon-stats-${data?.name}`}>
        <PokemonDetails>
          <Card>
            <PokemonInfo>
              <InfoRow>
                <InfoLabel>Name:</InfoLabel>{" "}
                <InfoValue data-testid={`pokemon-name-${data?.name}`}>
                  {data?.name}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Height:</InfoLabel>{" "}
                <InfoValue data-testid={`pokemon-height-${data?.height}`}>
                  {data?.height}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Weight:</InfoLabel>
                <InfoValue data-testid={`pokemon-weight-${data?.weight}`}>
                  {data?.weight}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Experience:</InfoLabel>
                <InfoValue
                  data-testid={`pokemon-base-experience-${data?.base_experience}`}
                >
                  {data?.base_experience}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Types:</InfoLabel>
                <InfoValue data-testid={`pokemon-types-${data?.name}`}>
                  {data?.types.map((type) => type.type.name).join(", ")}
                </InfoValue>
              </InfoRow>
            </PokemonInfo>
          </Card>
        </PokemonDetails>

        <PokemonStats>
          <ReactApexCharts
            options={config.options}
            series={config.series}
            type="bar"
            height={550}
            width={550}
            data-testid={`pokemon-stats-chart-${data?.name}`}
          />
        </PokemonStats>
      </PokemonWrapper>
    </div>
  );
}
