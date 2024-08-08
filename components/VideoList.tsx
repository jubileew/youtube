import { useData } from "@/app/hooks/useData";
import { Video } from "./Video";
import { videoArraySchema, VideoType } from "@/app/schemas/videos";
import { useState } from "react";

export const VideoList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 20;
  const handleClick = (num: number) => {
    setCurrentPage(num);
  };
  const {
    data: videos,
    error,
    isLoading,
  } = useData({ path: "videos", schema: videoArraySchema });
  const currentVideos = videos?.slice(
    currentPage * videosPerPage,
    (currentPage + 1) * videosPerPage
  );
  const lastPage = Math.ceil(videos?.length / videosPerPage) - 1;

  if (isLoading) return <div></div>;
  if (!isLoading && error) return <div>An error occurred</div>;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-5 gap-3">
        {currentVideos?.map((item: VideoType, ind: number) => (
          <Video data={item} key={ind} />
        ))}
      </div>
      <div className="flex justify-center space-x-10 text-sm pt-1">
        <button
          className={`bg-gray-100 rounded-full p-1 ${
            currentPage !== 0 ? "hover:bg-gray-200" : "opacity-40"
          } w-7`}
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 0}
        >
          {"<"}
        </button>
        <button
          className={`bg-gray-100 rounded-full p-1 ${
            currentPage !== lastPage ? "hover:bg-gray-200" : "opacity-40"
          } w-7`}
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === lastPage}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
