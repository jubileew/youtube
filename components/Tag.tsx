import { TagType } from "@/app/schemas/tags";

type TagProps = {
  data?: TagType;
  isFirst: boolean;
};

export const Tag = ({ data, isFirst }: TagProps) => {
  if (isFirst) {
    return (
      <button className="rounded-lg bg-black p-2 mr-2 text-xs text-white">
        All
      </button>
    );
  }
  return (
    <button className="rounded-lg bg-gray-100 p-2 mr-2 text-xs hover:bg-gray-200">
      {data?.text}
    </button>
  );
};
