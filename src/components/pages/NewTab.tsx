import React from "react";
import SlidingCard from "../card/SlidingCard";
import speedIcon from "../../assets/icons/speed.svg";

export default function NewTab() {
  return (
    <div className="bg-primary h-auto sm:h-[75vh] flex justify-center items-center m-auto flex-col gap-7 p-10">
      <p className="font-extrabold text-7xl">Open new tabs is sh*t</p>
      <div className="flex items-center justify-center flex-wrap">
        <div className="bg-white h-[150px] w-[350px] rounded-lg flex items-center justify-center">
          <SlidingCard title="Findtrend" icon={speedIcon} cardClass="" />
        </div>
      </div>
      <p className="text-lg text-center font-semibold max-w-[666px]">
        A solution for your browser tabs and don’t make your device get slower
        over time. Get ease and faster to discover a trend with just one tab.
      </p>
    </div>
  );
}
