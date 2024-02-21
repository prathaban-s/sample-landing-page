import Image from "next/image";
import React from "react";
import brandsImage from "@/assets/images/brands.png";

export default function Companies() {
  return (
    <div className="flex justify-center items-center m-auto flex-col gap-7 p-10 ">
      <p className="text-secondary text-6xl font-extrabold max-w-[1300px] leading-[75px] ">
        Findtrend helps you to increase your productivity and reduce your
        computer's memory load,
        <span className="text-muted">
          an application that can fulfill your daily browsing needs.
        </span>
      </p>
      <p className="text-secondary text-5xl font-extrabold mt-20">
        Findtrend make +1000 Startup grow
      </p>
      <Image src={brandsImage} alt="brandsImage" />
    </div>
  );
}
