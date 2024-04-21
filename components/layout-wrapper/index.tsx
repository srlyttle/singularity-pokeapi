"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Container, Main, MainLayoutView } from "./layout.styles";
import Sidebar from "../sidebar";

export default function LayoutWrapper({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <Container>
      <Main>
        <Sidebar />
        <MainLayoutView>{children}</MainLayoutView>
      </Main>
    </Container>
  );
}
