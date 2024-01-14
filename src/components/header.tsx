import { cn } from "../lib/utils";
import { Separator } from "./ui/separator";
import { ChevronDown } from "lucide-react";
import { LeftSection, RightSection } from "../lib/sections";
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
        <div className="flex flex-col">
          <p className="text-xs font-bold">{time}</p>
          <p className="text-xs">Today's Paper</p>
        </div>

        <h1 className="flex md:gap-4 font-chelten-700 text-4xl justify-center">
          The Random Times
        </h1>
        <span className="flex gap-4 "></span>
      </div>
      <Separator />
      <div className="flex px-52 justify-between py-2 content-center items-center">
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

