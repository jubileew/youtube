import { useData } from "@/app/hooks/useData";
import { Tag } from "./Tag";
import { useRef } from "react";
import { tagArraySchema, TagType } from "@/app/schemas/tags";

export const TagList = () => {
  const {
    data: tags,
    error,
    isLoading,
  } = useData({ path: "tags", schema: tagArraySchema });

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

  if (isLoading) return <div></div>;
  if (!isLoading && error) return <div>An error occurred</div>;

  return (
    <div
      ref={scrollRef}
      className="flex items-center p-2 w-screen fixed bg-white z-10 text-nowrap overflow-hidden"
    >
      <button
        className="flex items-center bg-white lg:hidden fixed z-10 left-0 p-3 h-8 m-0"
        onClick={handleScrollRight}
      >
        {"<"}
      </button>
      <Tag data={undefined} isFirst={true} key={0} />
      {tags.map((item: TagType, ind: number) => (
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
