import { tabletMixin } from "@/common-styles";
import styled from "styled-components";

export const PokemonWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 16px;

  ${tabletMixin("flex-direction: column;")}
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
`;

export const PokemonDetails = styled.div`
  display: flex;
  flex: 1;
  font-size: 1.5rem;
  ${tabletMixin("flex-direction: column;")}
`;

export const PokemonStats = styled.div`
  display: flex;
  flex: 1;
`;

export const PokemonDetailRow = styled.div`
  display: flex;
  flex: 1;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem 0;
`;

export const InfoValue = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--gray-20);
`;

export const InfoLabel = styled.label`
  display: flex;
  font-weight: semibold;
  padding-right: 0.5rem;
  width: 100px;
  justify-content: flex-end;
`;
