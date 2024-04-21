"use client";

import { GridContainer } from "@/common-styles";
import React from "react";
import Card from "../card";
import LoadingSkeleton from "../loading-skeleton";
import {
  SearchWrapper,
  ResultWrapper,
} from "../pokemon-results/pokemon-results.styles";

function CategoryResulstSkeletonLoader() {
  return (
    <div data-testid="pokemon-loading">
      <SearchWrapper role="search">
        <LoadingSkeleton width="550px" height="50px" />
      </SearchWrapper>

      <GridContainer>
        {Array.from(Array(12).keys()).map((key) => {
          return (
            <div key={key}>
              <Card>
                <ResultWrapper>
                  <LoadingSkeleton width="330px" height="230px" />
                </ResultWrapper>
              </Card>
            </div>
          );
        })}
      </GridContainer>
    </div>
  );
}

export default CategoryResulstSkeletonLoader;
