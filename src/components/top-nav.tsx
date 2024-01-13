import { cn } from "../lib/utils";
import { Search } from "lucide-react";

export default function TopNav() {
  return (
    <>
      <div className="md:flex justify-between hidden content-center items-center">
        <span>
          <Search className="w-4 h-4" />
        </span>
        <div className="flex md:gap-4">
          {" "}
          {topNav.map((item, index) => (
            <a
              key={index}
              href="/"
              className={cn(
                "text-xs",
                item === "International" && "font-black capitalize"
              )}
            >
              {item}
            </a>
          ))}
        </div>
        <span className="flex gap-4">
          {topNavButton.map((item, index) => (
            <a
              key={index}
              href="/"
              className="text-xs text-zinc-100 bg-sky-800/60 px-4 transition-colors duration-300 py-2 shadow-sm hover:bg-sky-800/90 font-semibold rounded-md"
            >
              {item}
            </a>
          ))}
        </span>
      </div>
    </>
  );
}

const topNavButton = ["Submit story", "Sign In"];

const topNav = ["U.S.", "International", "Canada", "Español", "中文"];
