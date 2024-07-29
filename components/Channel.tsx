import type { ChannelType } from "../scripts/generateChannels";

type ChannelProps = {
  data: ChannelType;
};

export const Channel = ({ data }: ChannelProps) => {
  return (
    <button className="flex px-5 space-x-2 items-center w-full rounded-lg hover:bg-gray-100 active:bg-gray-50 p-3 mr-2 text-xs">
      <img src={data.avatar} alt="channel logo" style={{ clipPath: "circle()" }} width={15} height={15}/>
      <p className="w-32 overflow-ellipsis text-nowrap flex justify-start">{data.channelName}</p>
    </button>
  );
};
