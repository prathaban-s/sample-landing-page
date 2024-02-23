import { Button } from "@/components/ui/button";
import React from "react";
import CommentCard from "../card/CommentCard";
import profileIcon1 from "../../../assets/gamesos/icons/profile-1.jpg";
import profileIcon2 from "../../../assets/gamesos/icons/profile-2.jpg";
import profileIcon3 from "../../../assets/gamesos/icons/profile-3.jpg";

export default function Quotes() {
  return (
    <div className="min-h-screen quotes-bg bg-center flex flex-wrap">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="m-10 max-w-[434px] pr-4 flex flex-col gap-5 ">
          <p className="uppercase text-lg font-bold"> What people think?</p>
          <p className="uppercase text-5xl font-bold">Press Quotes</p>
          <p className="font-extralight text-sm">
            Our goal is to create a product and service that you’re satisfied
            with and use it every day. This is why we’re constantly working on
            our services to make it better every day and really listen to what
            our users has to say.
          </p>
          <Button className="w-1/2 font-bold mt-4">
            Read more testimonals
          </Button>
        </div>
      </div>
      <div className="w-full md:max-w-[500px] md:w-1/2 flex justify-center flex-col ">
        <CommentCard
          image={profileIcon1}
          title="Evan lahti"
          subTitle="PC Gamer"
          description="“One of my gaming highlights of the year.”"
          date="October 18, 2018"
        />
        <CommentCard
          image={profileIcon2}
          cardClass="pl-auto"
          title="Jada Griffin"
          subTitle="Nedreactor"
          description="“The next big thing in the world of streaming and survival games.”"
          date="December 21, 2018"
        />
        <CommentCard
          image={profileIcon3}
          title="Aaron williams"
          subTitle="Uproxx"
          description="'Snoop Dogg Playing The Wildly Entertaining‘SOS’ Is Ridiculous.'"
          date="December 24, 2018"
        />
      </div>
    </div>
  );
}
