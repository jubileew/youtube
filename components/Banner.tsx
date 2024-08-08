import { useData } from "@/app/hooks/useData";
import { bannerSchema } from "@/app/schemas/banner";
import { useState } from "react";

export const Banner = () => {
  const { data, error, isLoading } = useData({
    path: "banner",
    schema: bannerSchema,
  });

  const [isHidden, setIsHidden] = useState(false);
  if (isHidden) return null;

  if (isLoading) return <div></div>;
  if (!isLoading && error) return <div>An error occurred</div>;

  return (
    <div
      style={{ background: `url(${data?.img})` }}
      className="w-72 sm:w-full mt-5 h-32 rounded-lg flex flex-col items-end justify-between"
    >
      <button
        className="text-white px-3 py-1"
        onClick={() => setIsHidden(!isHidden)}
      >
        x
      </button>
      <p className="text-white font-bold text-3xl p-5 self-start">
        Discover more today.
      </p>
    </div>
  );
};
