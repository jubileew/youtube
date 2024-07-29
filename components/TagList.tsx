import { TagType } from "@/scripts/generateTags";
import { Tag } from "./Tag";
import { useRef } from "react";

type TagListProps = {
  tags: TagType[] | undefined;
};

export const TagList = ({ tags }: TagListProps) => {
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (scrollRef.current && scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };
  const handleScrollLeft = () => {
    console.log(scrollRef.current);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      ref={scrollRef}
      className="flex items-center p-2 w-screen fixed bg-white z-10 text-nowrap overflow-x-scroll"
    >
      <button
        className="flex items-center bg-white lg:hidden fixed z-10 left-48 h-8 p-3 m-0"
        onClick={handleScrollRight}
      >
        {"<"}
      </button>
      <Tag data={undefined} isFirst={true} key={0} />
      {tags?.map((item, ind) => (
        <Tag data={item} isFirst={false} key={ind + 1} />
      ))}
      <button
        className="flex items-center bg-white lg:hidden fixed z-10 right-0 h-8 p-3 m-0"
        onClick={handleScrollLeft}
      >
        {">"}
      </button>
    </div>
  );
};
