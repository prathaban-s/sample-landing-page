import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Features() {
  return (
    <div className="h-screen bg-cover bg-center features-bg flex flex-col items-end">
      <div className="flex w-full lg:w-2/5 items-center lg:items-start justify-center h-full flex-col p-10">
        <p className="uppercase text-white text-xl font-bold">
          what's so special?
        </p>
        <p className="text-7xl font-bold uppercase mt-4">Features</p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="font-bold text-3xl text-primary [&>svg]:hidden no-underline hover:no-underline">
              SURVIVE AT ALL COSTS
            </AccordionTrigger>
            <AccordionContent className="max-w-[365px]">
              You have 30 minutes to find a relic, signal for extraction, and
              grab one of three spots on the rescue chopper.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="font-bold text-3xl text-primary [&>svg]:hidden no-underline hover:no-underline">
              CREATE ALLIES & ENEMIES
            </AccordionTrigger>
            <AccordionContent className="max-w-[365px]">
              You have 30 minutes to find a relic, signal for extraction, and
              grab one of three spots on the rescue chopper.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="font-bold text-3xl text-primary [&>svg]:hidden no-underline hover:no-underline">
              IMPRESS THE AUDIENCE
            </AccordionTrigger>
            <AccordionContent className="max-w-[365px]">
              You have 30 minutes to find a relic, signal for extraction, and
              grab one of three spots on the rescue chopper.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
