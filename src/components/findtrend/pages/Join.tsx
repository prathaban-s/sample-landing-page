import React from "react";
import { Button } from "../../ui/button";

export default function Join() {
  return (
    <div className="h-auto sm:h-[50vh] bg-primary flex items-center justify-center p-10 gap-5 flex-col">
      <p className="text-6xl font-bold">Join us on email for </p>
      <p className="text-6xl text-destructive font-bold">
        more trending topics
      </p>
      <Button
        variant="secondary"
        className="rounded-full font-bold italic text-xl py-7 px-10"
      >
        Join us
      </Button>
    </div>
  );
}
