import React from "react";
import Header from "./Header";
import { Button } from "@/components/ui/button";
export default function GameIntro() {
  return (
    <div className="h-screen intro-bg bg-center shadow-inner shadow-stone-950">
      <Header />
      <div className="flex flex-col items-center justify-center gap-5 h-full pt-5 px-10">
        <p className="uppercase text-6xl font-bold">SURVIVE AT ALL COSTS</p>
        <p className="uppercase text-lg font-semibold">
          Experience new social battle royale game
        </p>
        <Button size="lg" className="font-bold text-lg py-8">
          <span className="border-r pr-3 border-black"> Buy now on Stream</span>
          <span className="pl-3">$14.99</span>
        </Button>
      </div>
    </div>
  );
}
