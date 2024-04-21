import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface Props extends Omit<ImageProps, "src" | "onError"> {
  alt: string;
  src: string;
  fallbackSrc: string;
}

export default function ImageWithFallback(props: Props) {
  const { src, alt, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      alt={alt}
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
