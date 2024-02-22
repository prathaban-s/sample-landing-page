import React from "react";
import Image from "next/image";
interface ImageCardProps {
  image: string;
  cardClass?: string;
}

export default function ImageCard({ image, cardClass }: ImageCardProps) {
  return (
    <div
      className={` size-24 flex  items-center justify-center rounded-lg ${cardClass}`}
    >
      <Image src={image} alt="brandsImage" className="size-10" />
    </div>
  );
}
