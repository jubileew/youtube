import { ChannelList } from "./ChannelList";
import { MenuItemList } from "./MenuItemList";
import { useMenuContext } from "@/context/MenuMinimizedContext";
import { useData } from "@/app/hooks/useData";
import { iconArraySchema } from "@/app/schemas/icons";
import { channelArraySchema } from "@/app/schemas/channels";

export const Sidebar = () => {
  const {
    data: menuItems,
    error: menuError,
    isLoading: isMenuLoading,
  } = useData({
    path: "icons",
    schema: iconArraySchema,
  });
  const {
    data: channels,
    error: channelError,
    isLoading: isChannelsLoading,
  } = useData({ path: "channels", schema: channelArraySchema });

  const menuContext = useMenuContext();

  if (isMenuLoading || isChannelsLoading) return <div></div>;
  if (!(isMenuLoading || isChannelsLoading) && (menuError || channelError))
    return <div>An error occurred</div>;

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
