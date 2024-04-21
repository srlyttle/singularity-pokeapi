import React, { PropsWithChildren } from "react";
import { CardWrapper, CardTitle, CardContent } from "./card.styles";

export default function Card({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <CardWrapper>
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
}
