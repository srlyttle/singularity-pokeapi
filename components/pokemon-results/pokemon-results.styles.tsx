import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 0 16px;
  border-radius: 100px;
  border: 1px solid var(--gray-20);
  width: 50%;
  height: 2rem;
  outline-style: none;
  appearance: none;
  color: var(--gray-20);
  font-weight: 600;
  font-size: 1rem;
`;

export const SearchWrapper = styled.div`
  padding: 1rem;
`;

export const SearchLabel = styled.label`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultText = styled.h3`
  text-transform: capitalize;
`;

export const NotFoundResultText = styled.h3`
  text-transform: capitalize;
  padding: 2rem;
`;

export const CursorPointerDiv = styled.div`
  cursor: pointer;
`;
