import { faMicrophone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Searchbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex items-center gap-2 justify-center relative w-[60%]">
      <div className="flex px-2 relative">
        <div
          className={`flex overflow-hidden relative rounded-l-full border-gray-100 border-2 p-1 text-sm h-9 w-80 ${isFocused ? "pl-4" : ""}`}
          style={{ transformOrigin: "left" }}
        >
          <FontAwesomeIcon
            className={`h-4 w-4  self-center hover:cursor-pointer ${!isFocused ? "hidden" : "" }`}
            icon={faSearch}
            style={{ color: "#4b5563" }}
          />
          <input
            className={`md:w-[30vw] w-[10vw] focus:outline-none indent-3`}
            placeholder="Search"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <div className="flex justify-center rounded-r-full bg-gray-100 hover:bg-gray-200 w-12 h-9">
          <FontAwesomeIcon
            className="h-4 w-4 self-center hover:cursor-pointer"
            icon={faSearch}
            style={{ color: "#4b5563" }}
          />
        </div>
      </div>

      <div className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center hover:bg-gray-200 cursor-pointer">
        <FontAwesomeIcon
          className="h-4 w-4 self-center"
          icon={faMicrophone}
          style={{ color: "#4b5563" }}
        />
      </div>
    </div>
  );
};
