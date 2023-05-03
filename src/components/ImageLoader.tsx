import React from "react";
import Image from "next/image";

type Props = { src: string; alt: string };

export default function ImageLoader({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      loading="lazy"
      layout="responsive"
      width="100%"
      height="62.5%" // 16:10 aspect ratio
      objectFit="cover"
    />
  );
}
