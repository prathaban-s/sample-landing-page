import React from "react";
import { Button } from "../ui/button";
import SlidingCard from "../card/SlidingCard";
import facebookIcon from "@/assets/icons/facebook.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import pintrestIcon from "@/assets/icons/pintrest.svg";
import muskIcon from "@/assets/icons/musk.svg";
export default function Intro() {
  return (
    <div className="h-screen bg-secondary flex justify-center items-center m-auto flex-col gap-7 ">
      <p className="text-white text-7xl text-center font-extrabold ">
        Minimize your tabs.
        <br />
        Find the trends
      </p>
      <p className="text-muted text-center">
        Don’t let your computer memories consumes all of those browser tabs.
        <br />
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
