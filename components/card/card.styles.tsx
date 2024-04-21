import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 90%;
  border: 1px solid var(--gray-80);
`;

export const CardTitle = styled.h2`
  color:   color: var(--gray-20);
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const CardContent = styled.p`
  color:   color: var(--gray-20);
  font-size: 1rem;
`;
