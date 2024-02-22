import React from "react";
import { Button } from "../ui/button";

export default function Deals() {
  return (
    <div className="h-auto bg-secondary min-h-[100vh] flex justify-center items-center m-auto flex-col gap-7 p-10 ">
      <p className="text-white font-semibold text-5xl"> Get your best deal </p>
      <div className="flex flex-wrap max-w-[1200px] items-center justify-center gap-7">
        <div className="h-[640px] w-full sm:w-[360px] bg-white p-10 rounded-lg flex flex-col justify-between text-black">
          <div className="border-b pb-3">
            <p className=" font-bold text-3xl italic">Personal</p>
            <p className="text-lg font-semibold italic">
              Special first packet for all
            </p>
          </div>
          <div>
            <li className="text-black font-bold text-md italic leading-8">
              Up to 5 page each group
            </li>
            <li className="text-black font-bold text-md italic leading-8">
              Up to 10 group page
            </li>
            <li className="text-black font-bold text-md italic leading-8">
              5 Days group page saved
            </li>
          </div>
          <div>
            <Button className="rounded-full w-full font-bold italic text-xl py-7">
              Start free trail
            </Button>
          </div>
        </div>
        <div className="h-[640px] w-full sm:w-[360px] bg-primary p-10 rounded-lg text-black flex flex-col justify-between">
          <div className="border-b pb-3">
            <p className=" font-bold text-3xl italic">Regular</p>
            <p className="text-lg font-semibold italic">
              Recommended for personal pro
            </p>
          </div>
          <div>
            <p className="text-6xl text-center font-bold italic mb-6">
              $20
              <span className="text-lg">/Month</span>
            </p>
            <li className="text-black font-bold text-md italic leading-8">
              Up to 15 page each group
            </li>
            <li className="text-black font-bold text-md italic leading-8">
              Download page up to 20 page
            </li>
            <li className="text-black font-bold text-md italic leading-8">
              Up to 10 group page
            </li>
            <li className="text-black font-bold text-md italic leading-8">
              15 Days group page saved
            </li>
          </div>
          <div>
            <Button
              variant="secondary"
              className="rounded-full w-full font-bold italic text-xl py-7 text-white"
            >
              Start free trail
            </Button>
          </div>
        </div>
        <div className="h-[640px] w-full sm:w-[360px] bg-white p-10 rounded-lg text-black flex flex-col justify-between">
          <div className="border-b pb-3">
            <p className=" font-bold text-3xl italic">Premium</p>
            <p className="text-lg font-semibold italic">
              Packet for Startup & Company
            </p>
          </div>
          <div>
            <p className="text-6xl text-center font-bold italic mb-6">
              $48
              <span className="text-lg">/Month</span>
            </p>
            <li className="text-black font-bold text-md italic leading-8">
              Unlimited page groups
            </li>
            <li className="text-black font-bold text-md italic leading-8">
              Unlimited download page
            </li>
            <li className="text-black font-bold text-md italic leading-8">
              Unlimited page each group
            </li>
            <li className="text-black font-bold text-md italic leading-8">
              Customize sorting group pages
            </li>
            <li className="text-black font-bold text-md italic leading-8">
              Customize group page name
            </li>
            <li className="text-black font-bold text-md italic leading-8">
              30 Days group page saved
            </li>
          </div>
          <div>
            <Button className="rounded-full w-full font-bold italic text-xl py-7">
              Start free trail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
