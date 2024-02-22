import React from "react";
import { Button } from "../../ui/button";
import SlidingCard from "../card/SlidingCard";
import facebookIcon from "../../../assets/icons/facebook.svg";
import twitterIcon from "../../../assets/icons/twitter.svg";
import pintrestIcon from "../../../assets/icons/pintrest.svg";
import muskIcon from "../../../assets/icons/musk.svg";
import speedIcon from "../../../assets/icons/speed.svg";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="h-auto bg-secondary sm:h-screen flex justify-center items-center m-auto flex-col gap-7 p-10 ">
      <div className="absolute top-10 left-7 flex items-center gap-2">
        <Image src={speedIcon} alt="speed" width={30} height={30} />
        <span className="text-primary font-bold text-2xl">Findtrend</span>
      </div>
      <p className="text-white text-7xl text-center font-extrabold max-w-[700px] sm:pt-0 pt-10">
        Minimize your tabs. Find the trends
      </p>
      <p className="text-muted text-center max-w-[666px]">
        Don’t let your computer memories consumes all of those browser tabs.
        Findtrend let you gathers all of your favorite website into one place.
      </p>
      <Button className="rounded-full font-bold text-lg" size="lg">
        Get Started 🔥
      </Button>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <SlidingCard
          title="Crypto Punk"
          icon={twitterIcon}
          cardClass="rotate-6"
        />
        <SlidingCard
          title="Product Design"
          icon={pintrestIcon}
          cardClass="-rotate-6"
        />
        <SlidingCard
          title="Popular Design"
          icon={facebookIcon}
          cardClass="rotate-6"
        />
        <SlidingCard title="Elon Musk" icon={muskIcon} cardClass="-rotate-6" />
      </div>
    </div>
  );
}
