import { generateChannels } from "@/scripts/generateChannels";
import { useEffect, useState } from "react";

export const NavbarIcons = () => {
  useEffect(() => {
    const initialAvatar = generateChannels(1)[0].avatar;
    setAvatar(initialAvatar);
  },[]);
  const [avatar, setAvatar] = useState("");
  return (
    <div className="flex justify-center items-center space-x-4">
      {Array.from({ length: 3 }, (_, ind) => (
        <iframe
          key={ind}
          className="flex justify-center"
          src="http://dbtek.github.io/fa-random-icon/fa-random.html"
          width="20"
          height="20"
        />
      ))}

      <img
        src={avatar}
        alt="channel logo"
        style={{ clipPath: "circle()" }}
        width={25}
        height={25}
        className="cursor-pointer"
      />
    </div>
  );
};
