import { useData } from "@/app/hooks/useData";
import { channelArraySchema } from "@/app/schemas/channels";

export const NavbarIcons = () => {
  const { data, error, isLoading } = useData({
    path: "channels",
    schema: channelArraySchema,
  });

  if (isLoading) return <div></div>;
  if (!isLoading && error) return <div>An error occurred</div>;

  return (
    <div className="flex justify-center items-center space-x-4">
      {Array.from({ length: 3 }, (_, ind) => (
        <iframe
          key={ind}
          className="flex justify-center"
          src="http://dbtek.github.io/fa-random-icon/fa-random.html"
          width="20"
          height="20"
        />
      ))}

      <img
        src={data[0].avatar}
        alt="channel logo"
        style={{ clipPath: "circle()" }}
        width={25}
        height={25}
        className="cursor-pointer"
      />
    </div>
  );
};
