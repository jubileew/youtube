import type { VideoType } from "../scripts/generateVideos";

type VideoProps = {
  data: VideoType;
};

export const Video = ({ data }: VideoProps) => {
  return (
    <div className="relative flex flex-col items-center ">
      <img
        src={data.thumbnail}
        alt="video thumbnail"
        className="pb-2 hover:opacity-95 hover:cursor-pointer rounded-lg overflow-hidden"
      />
      <div className="flex items-start space-x-2 justify-center">
        <img
          src={data.channelAvatar}
          alt="channel logo"
          style={{ clipPath: "circle()" }}
          width={25}
          height={25}
          className="sticky"
        />
        <div className="flex flex-col w-48">
          <span className="text-sm text-wrap font-semibold pb-1 hover:cursor-pointer">
            {data.title}
          </span>
          <span className="text-gray-600 text-xs hover:cursor-pointer">
            {data.channelName}
          </span>
          <span className="text-gray-600 text-xs pb-4">
            {data.views > 1000 && data.views < 1000000
              ? `${Math.floor(data.views / 1000)}K Views`
              : data.views >= 1000000
              ? `${Math.floor(data.views / 10 ** 6)}M Views`
              : data.views}
          </span>
        </div>
      </div>
    </div>
  );
};
