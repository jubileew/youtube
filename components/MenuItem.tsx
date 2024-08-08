import { IconType } from "@/app/schemas/icons";
import { useMenuContext } from "@/context/MenuMinimizedContext";

type MenuItemProps = {
  data: IconType;
};

export const MenuItem = ({ data }: MenuItemProps) => {
  const menuContext = useMenuContext();
  return menuContext?.isMinimized ? (
    <button className="flex flex-col px-5 space-x-2 items-center w-full rounded-lg hover:bg-gray-100 active:bg-gray-50 p-2 mr-2 text-xs self-center">
        <iframe
          className="flex justify-center"
          src="http://dbtek.github.io/fa-random-icon/fa-random.html"
          width="20"
          height="20"
        />
        <span className="text-xs">
          {data.text[0].toUpperCase() + data.text.slice(1)}
        </span>
    </button>
  ) : (
    <button className="flex px-5 space-x-2 items-center w-full rounded-lg hover:bg-gray-100 active:bg-gray-50 p-2 mr-2 text-xs self-center">
      <iframe
        className="flex justify-center"
        src="http://dbtek.github.io/fa-random-icon/fa-random.html"
        width="20"
        height="20"
      />
      <span>{data.text[0].toUpperCase() + data.text.slice(1)}</span>
    </button>
  );
};
