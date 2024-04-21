import styled, { css } from "styled-components";

export const tabletMixin = (styles: string) => css`
  @media screen and (max-width: 768px) {
    ${styles}
  }
`;

export const PageHeader = styled.h2`
  margin-left: 1.5rem;
  text-transform: capitalize;
  color: var(--gray-20);
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  ${tabletMixin("grid-template-columns: repeat(2, 1fr);")}
`;
