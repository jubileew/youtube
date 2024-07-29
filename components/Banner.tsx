import { generateBanner } from "@/scripts/generateBanner";
import { useState } from "react";

export const Banner = () => {
  const [imgUrl] = useState(() => generateBanner().img);
  const [isHidden, setIsHidden] = useState(false);
  if (isHidden) return null;
  return (
    <div
      style={{ "--image-url": `url(${imgUrl})` }}
      className="w-72 sm:w-full bg-[image:var(--image-url)] mt-5 h-32 rounded-lg flex flex-col items-end justify-between"
    >
      <button className="text-white px-3 py-1" onClick={() => setIsHidden(!isHidden)}>
        x
      </button>
      <p className="text-white font-bold text-3xl p-5 self-start">
        Discover more today.
      </p>
    </div>
  );
};
