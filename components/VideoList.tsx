import { VideoType } from "@/scripts/generateVideos";
import { Video } from "./Video";

type VideoListProps = {
  videos: VideoType[] | undefined;
};

export const VideoList = ({ videos }: VideoListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-5 gap-3">
      {videos?.map((item, ind) => (
        <Video data={item} key={ind} />
      ))}
    </div>
  );
};
