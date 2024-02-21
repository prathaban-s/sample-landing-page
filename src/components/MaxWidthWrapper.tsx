import React from "react";

export default function MaxWidthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-[900px]">{children}</div>;
}
