"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function () {
  const router = useRouter();
  useEffect(() => {
    router.push("/findtrend");
  }, []);
  return <div></div>;
}
