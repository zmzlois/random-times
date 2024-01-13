import { cn } from "../lib/utils";
import { Separator } from "./separator";


const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDate();
const event = new Date(Date.UTC(year, month, day, 3, 0, 0));

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const time = event.toLocaleDateString(undefined, options);

export default function Header() {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-3 justify-between py-4 content-center items-center">
       <div className="flex flex-col">
       <p className="text-xs font-bold">
          {time}
        </p> 
        <p className="text-xs">Today's Paper</p>
       </div>
       
        <h1 className="flex md:gap-4 font-chelten-700 text-4xl">
    The Random Times
        </h1>
        <span className="flex gap-4 ">
        </span>
      </div>
        <Separator />
    </>
  );
}

const topNavButton = ["Subscribe", "Sign In"];

const topNav = ["U.S.", "International", "Canada", "Español", "中文"];
