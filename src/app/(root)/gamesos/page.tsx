import GameIntro from "@/components/gamesos/pages/GameIntro";
import React from "react";
import "../../../styles/gamesos.css";
import Features from "@/components/gamesos/pages/Features";
import Quotes from "@/components/gamesos/pages/Quotes";

export default function page() {
  return (
    <>
      <GameIntro />
      <Features />
      <Quotes />
    </>
  );
}
