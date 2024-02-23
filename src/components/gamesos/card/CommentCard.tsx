import Image from "next/image";
import React from "react";
import profile1Icon from "../../../assets/gamesos/icons/profile-1.jpg";

interface Props {
  image: any;
  title: string;
  subTitle: string;
  description: string;
  date: string;
  cardClass?: string;
}

export default function CommentCard({
  image,
  title,
  subTitle,
  description,
  date,
  cardClass,
}: Props) {
  return (
    <div
      className={` w-auto  p-4 bg-white bg-opacity-10 float-right mx-10 my-5 ${cardClass}`}
    >
      <div className="flex">
        <div className="relative pr-4">
          <Image
            src={image}
            alt="profile"
            sizes="50px"
            className="rounded-full z-10 relative"
          />
          <div className="bg-primary w-[50px] h-[50px] rounded-full absolute top-0 left-2" />
        </div>
        <div className="flex justify-center flex-col">
          <p className="uppercase text-primary font-bold">{title}</p>
          <p className="text-muted text-sm">{subTitle}</p>
        </div>
      </div>
      <p className="mt-5">{description}</p>
      <p className="mt-5 text-muted">{date}</p>
    </div>
  );
}
