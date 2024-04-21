import styled from "styled-components";

export const CategoryUnorderedList = styled.ul`
  padding: 0;
`;

export const CategoryListItem = styled.li`
  padding: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

interface CategoryListButtonProps {
  isActive?: boolean;
}

export const CategoryListButton = styled.button<CategoryListButtonProps>`
  width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-weight: 500;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  height: 20px;
  background-color: #ffffff;
  background-color: ${(props) => (props.isActive ? "#f0f0f0" : "#ffffff")};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 13px;
  font-size: 16px;
`;

export const AltButton = styled.button<CategoryListButtonProps>`
  background-color: var(--gray-20);
  color: var(--white);
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  margin: 0px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px var(--gray-80);
  transition: ease background-color 250ms;
  width: 100%;
  width: 100%;
  &:hover {
    background-color: var(--gray-60);
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
