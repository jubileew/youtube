import { IconType } from "@/scripts/generateIcons";
import { ChannelList } from "./ChannelList";
import { MenuItemList } from "./MenuItemList";
import { useMenuContext } from "@/context/MenuMinimizedContext";
import { ChannelType } from "@/scripts/generateChannels";

type SidebarProps = {
  menuItems: IconType[] | undefined;
  channels: ChannelType[] | undefined;
};

export const Sidebar = ({ menuItems, channels }: SidebarProps) => {
  const menuContext = useMenuContext();
  return menuContext?.isMinimized ? (
    <div>
      <MenuItemList items={menuItems?.slice(0, -5)} />
    </div>
  ) : (
    <div className="w-44 h-full p-2">
      <MenuItemList items={menuItems?.slice(0, -5)} />
      <hr className="border-gray-200 my-2 dark:border-white" />
      <MenuItemList items={menuItems?.slice(5)} />
      <hr className="border-gray-200 my-2 dark:border-white" />
      <ChannelList channels={channels} />
    </div>
  );
};
