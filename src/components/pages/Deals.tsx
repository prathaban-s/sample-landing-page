import React from "react";

export default function Deals() {
  return (
    <div className="h-auto bg-secondary md:h-screen flex justify-center items-center m-auto flex-col gap-7 p-10 ">
      <p className="text-white font-semibold text-5xl"> Get your best deal </p>
      <div className="flex flex-wrap max-w-[1200px] items-start gap-7">
        <div className="h-[640px] w-auto sm:w-[360px] bg-white p-10 rounded-lg"></div>
        <div className="h-[640px] w-auto sm:w-[360px] bg-primary p-10 rounded-lg"></div>
        <div className="h-[640px] w-auto sm:w-[360px] bg-white p-10 rounded-lg"></div>
      </div>
    </div>
  );
}
