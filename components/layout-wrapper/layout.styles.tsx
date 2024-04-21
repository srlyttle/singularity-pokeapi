"use client";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Main = styled.main`
  flex: 1;
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
`;
export const MainLayoutView = styled.section`
  height: 85vh;

  background: var(--white);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1), 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: calc(100% - 32px);
  margin: 8px;
  padding: 16px;
  overflow-y: auto;
`;
