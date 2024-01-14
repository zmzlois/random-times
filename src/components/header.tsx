import { cn } from "../lib/utils";
import { Separator } from "./ui/separator";
import { useState } from "react";
import {
  ChevronDown,
  ArrowLeftIcon,
  AlignJustify,
  AlignLeft,
  ArrowLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { LeftSection, RightSection } from "../lib/sections";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDate();
const event = new Date(Date.UTC(year, month, day, 3, 0, 0));

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const time = event.toLocaleDateString(undefined, options);

export default function Header() {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-3 justify-between py-4 content-center items-center">
        <div className="md:flex flex-col hidden">
          <p className="text-xs font-bold">{time}</p>
          <p className="text-xs">Today's Paper</p>
        </div>
        <div className="block md:hidden">
          <MobileNav />
        </div>

        <a
          href="/"
          className="flex md:gap-4 gap-2 font-chelten-700 md:text-4xl text-xl justify-center"
        >
          The Random Times
        </a>
        <span className="flex gap-4 "></span>
      </div>
      <Separator />
      <div className="md:flex hidden px-52 justify-between py-2 content-center items-center">
        {LeftSection.map((item, index) => (
          <a key={index} href="/" className="text-xs flex gap-1 items-center">
            <span>{item}</span>
            <ChevronDown className="w-3 h-3 text-slate-400 " />
          </a>
        ))}
        <Separator className="rotate-9 w-[1px] h-6" />
        {RightSection.map((item, index) => (
          <a key={index} href="/" className="text-xs flex gap-1 items-center">
            <span>{item}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-[2px]">
        <Separator className="bg-black" />
        <Separator className="bg-black" />
      </div>
    </>
  );
}

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <AlignJustify className="w-5 h-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <a
            href="/"
            className="flex md:gap-4 md:font-chelten-700 font-chelten-500 md:text-4xl text-xl justify-left"
          >
            The Random Times
          </a>
        </SheetHeader>
        <div className="grid gap-4 py-12">
          {LeftSection.map((item, index) => (
            <a
              key={index}
              href="/"
              className="text-xs flex gap-1 items-center border-b border-gray-200 pb-4"
            >
              <span>{item}</span>
              <ArrowRight className="w-3 h-3 text-slate-400 " />
            </a>
          ))}
          {RightSection.map((item, index) => (
            <a
              key={index}
              href="/"
              className="text-xs flex gap-1 items-center border-b border-gray-200 pb-4"
            >
              <span>{item}</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
            </a>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <button type="button" className="flex gap-2 items-center">
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="text-sm">Back</span>
            </button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
