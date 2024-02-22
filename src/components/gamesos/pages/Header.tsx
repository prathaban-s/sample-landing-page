import Image from "next/image";
import React from "react";
import gamesosLogo from "../../../assets/gamesos/icons/gamesos-logo.svg";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import xboxIcon from "../../../assets/gamesos/icons/xboxicon.svg";
import steamIcon from "../../../assets/gamesos/icons/steamicon.svg";

export default function Header() {
  const linkElements = (
    <>
      <Link href="" className="uppercase text-lg font-semibold">
        main
      </Link>
      <Link href="" className="uppercase text-lg font-semibold">
        about
      </Link>
      <Link href="" className="uppercase text-lg font-semibold">
        Game Features
      </Link>
      <Link href="" className="uppercase text-lg font-semibold">
        System Requirements
      </Link>
      <Link href="" className="uppercase text-lg font-semibold">
        Quotes
      </Link>
    </>
  );
  return (
    <>
      <Sheet>
        <div className="flex justify-between">
          <Image src={gamesosLogo} alt="logo" width={50} height={25} />
          <div className=" items-center gap-10 hidden lg:flex">
            {linkElements}
          </div>
          <div className="flex justify-center">
            <SheetTrigger className="block lg:hidden">
              <MenuIcon size={24} />
            </SheetTrigger>
            <div className="hidden gap-4 border-l pl-3 lg:flex">
              <Image src={xboxIcon} alt="xbox" sizes="50" />
              <Image src={steamIcon} alt="steam" sizes="50" />
            </div>
          </div>
        </div>
        <SheetContent side="left" className="bg-black">
          <SheetHeader>
            <Image src={gamesosLogo} alt="logo" width={50} height={25} />
          </SheetHeader>
          <div className="flex flex-col mt-10 items-start gap-5">
            {linkElements}
          </div>
          <SheetFooter className="absolute bottom-10 gap-2">
            <Image src={xboxIcon} alt="xbox" sizes="50" />
            <Image src={steamIcon} alt="steam" sizes="50" />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
