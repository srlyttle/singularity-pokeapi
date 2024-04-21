import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Card from "../card";
import { useDebounce } from "@/hooks/useDebounce";
import {
  CursorPointerDiv,
  NotFoundResultText,
  ResultText,
  ResultWrapper,
  SearchInput,
  SearchLabel,
  SearchWrapper,
} from "./pokemon-results.styles";
import ImageWithFallback from "../Image-with-fallback";
import { GridContainer } from "@/common-styles";
import { Category } from "@/types";

interface Props {
  pokemons: Category[] | undefined;
}
export default function PokemonResults({ pokemons }: Props) {
  const router = useRouter();
  const [searchTerm, setsearchTerm] = React.useState("");
  const debounedSearchValue = useDebounce(searchTerm, 300);
  const filteredPokemons = debounedSearchValue
    ? pokemons?.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(debounedSearchValue.toLowerCase())
      )
    : pokemons && pokemons?.length > 100
    ? pokemons?.slice(0, 30)
    : pokemons;

  return (
    <>
      <SearchWrapper role="search">
        <SearchLabel className="offscreen" htmlFor="results-search-input">
          Search
        </SearchLabel>
        <SearchInput
          id="results-search-input"
          data-testid="results-search-input"
          type="text"
          name="search"
          placeholder="Search"
          spellCheck={false}
          onChange={(e) => setsearchTerm(e.target.value || "")}
        />
      </SearchWrapper>

      {!filteredPokemons?.length ? (
        <NotFoundResultText data-testid="no-search-results">
          No pokemons found!
        </NotFoundResultText>
      ) : (
        <GridContainer>
          {filteredPokemons?.map(({ name, url }) => {
            const id = url.split("/")[url.split("/").length - 2];
            return (
              <CursorPointerDiv
                data-testid={`pokemon-${name}`}
                key={id}
                onClick={() => router.push(`/pokemon/${id}`)}
              >
                <Card>
                  <ResultWrapper>
                    <ResultText>{name}</ResultText>
                    <ImageWithFallback
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
                      alt={name}
                      width={100}
                      height={100}
                      fallbackSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
                    />
                  </ResultWrapper>
                </Card>
              </CursorPointerDiv>
            );
          })}
        </GridContainer>
      )}
    </>
  );
}
