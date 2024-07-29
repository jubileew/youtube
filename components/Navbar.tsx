import { useMenuContext } from "@/context/MenuMinimizedContext";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarIcons } from "./NavbarIcons";
import { Searchbar } from "./Searchbar";

export const Navbar = () => {
  const menuContext = useMenuContext();
  return (
    <div className="fixed top-0 w-screen p-4 flex justify-between bg-white z-10 ">
      <div className="flex items-center pl-2">
        <FontAwesomeIcon
          className="h-4 w-4 self-center hover:cursor-pointer mr-5"
          style={{ color: "#636363" }}
          icon={faBars}
          onClick={() => menuContext.setIsMinimized(!menuContext.isMinimized)}
        />
        <img src="logo.png" className="w-6 h-6"></img>
        <span className="uppercase font-bold ml-1">Youtube</span>
      </div>
      <Searchbar />
      <NavbarIcons />
    </div>
  );
};
