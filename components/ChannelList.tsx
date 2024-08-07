import { ChannelType } from "@/app/schemas/channels";
import { Channel } from "./Channel";

type ChannelListProps = {
  channels: ChannelType[] | undefined;
};

export const ChannelList = ({ channels }: ChannelListProps) => {
  return (
    <>
      {channels?.map((item, ind) => (
        <Channel data={item} key={ind} />
      ))}
    </>
  );
};
