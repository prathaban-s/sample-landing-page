import React from "react";
import Image from "next/image";

interface SlidingCardProps {
  title: string;
  icon: string;
  cardClass?: string;
}

export default function SlidingCard({
  title,
  icon,
  cardClass,
}: SlidingCardProps) {
  return (
    <div
      className={`${cardClass} bg-accent text-white text-xl px-8 py-3 flex items-center justify-center gap-2 font-extralight`}
    >
      <Image src={icon} alt={title} className="h-7 w-7" />
      {title}
      <span>x</span>
    </div>
  );
}
