import { IconType } from "@/scripts/generateIcons";
import { MenuItem } from "./MenuItem";

type MenuItemListProps = {
  items: IconType[] | undefined;
};

export const MenuItemList = ({ items }: MenuItemListProps) => {
  return (
    <>
      {items?.map((item, ind) => (
        <MenuItem data={item} key={ind} />
      ))}
    </>
  );
};
