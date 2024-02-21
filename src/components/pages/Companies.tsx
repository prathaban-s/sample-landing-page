import Image from "next/image";
import React from "react";
import brandsImage from "../../assets/images/Brands.png";
import facebookIcon from "../../assets/icons/facebook.svg";
import discordIcon from "../../assets/icons/discord.svg";
import linkedInIcon from "../../assets/icons/linkedin.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import masterIcon from "../../assets/icons/master.svg";
import muskIcon from "../../assets/icons/musk.svg";
import pintrestIcon from "../../assets/icons/pintrest.svg";
import wkIcon from "../../assets/icons/wk.svg";

import ImageCard from "../card/ImageCard";

export default function Companies() {
  return (
    <div className="flex justify-center items-center m-auto flex-col gap-7 p-10 bg-gray-50">
      <p className="text-secondary text-6xl font-extrabold max-w-[1300px] leading-[75px] p-10 ">
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
      <p className="text-secondary text-5xl font-extrabold mt-10">
        All platform connect to Findtrend
      </p>
      <div className="flex flex-wrap mt-4 gap-5 items-center justify-center">
        <ImageCard image={facebookIcon} cardClass="bg-white" />
        <ImageCard image={twitterIcon} cardClass="bg-primary" />
        <ImageCard image={pintrestIcon} cardClass="bg-white" />
        <ImageCard image={linkedInIcon} cardClass="bg-white" />
        <ImageCard image={discordIcon} cardClass="bg-white" />
        <ImageCard image={masterIcon} cardClass="bg-white" />
        <ImageCard image={muskIcon} cardClass="bg-white" />
        <ImageCard image={wkIcon} cardClass="bg-white" />
      </div>
    </div>
  );
}
