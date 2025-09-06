import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";


const words = [
  "Performance",
  "Accessibile",
  "User Friendly",
  "Secure",
  "Maintainable",
  "Search Engine Optimized",
  "Responsive",
  "Scalable",
  "Reliable"
]

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }} >
          <div className="flex flex-none gap-4 py-3
            pr-4 -translate-x-1/2 animate-move-left [animationDuration:20s]
          "
           
          >

           {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {words.map((word, index) => (
                <div key={index} className="inline-flex gap-4 items-center">
                  <span className="text-gray-900 uppercase font-extrabold text-sm ">{word}</span>
                  <StarIcon className="size-6 text-gray-900 -rotate-12"/>
                </div>
              ))}
            </Fragment>
           ))}
          </div>
        </div>
      </div>
    </div>
  );
};
