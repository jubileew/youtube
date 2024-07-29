"use client";
import { TagList } from "@/components/TagList";
import { VideoList } from "@/components/VideoList";
import { MenuMinimizedProvider } from "@/context/MenuMinimizedContext";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";
import { generateIcons, IconType } from "@/scripts/generateIcons";
import { ChannelType, generateChannels } from "@/scripts/generateChannels";
import { generateVideos, VideoType } from "@/scripts/generateVideos";
import { Banner } from "@/components/Banner";
import { generateTags, TagType } from "@/scripts/generateTags";

export default function Home() {
  useEffect(() => {
    const initialMenu = generateIcons(10);
    const initialChannels = generateChannels(5);
    const initialVideos = generateVideos(40);
    const initialTags = generateTags(10);
    setMenuItems(initialMenu);
    setChannels(initialChannels);
    setVideos(initialVideos);
    setTags(initialTags);
  }, []);
  const [menuItems, setMenuItems] = useState<IconType[]>();
  const [channels, setChannels] = useState<ChannelType[]>();
  const [videos, setVideos] = useState<VideoType[]>();
  const [tags, setTags] = useState<TagType[]>();
  return (
    <main>
      <MenuMinimizedProvider>
        <Navbar />
        <div className="flex h-screen pt-12 mt-4">
          <Sidebar menuItems={menuItems} channels={channels} />
          <div className="overflow-y-scroll overflow-x-clip ml-3">
            <TagList tags={tags} />
            <div className="flex flex-col justify-center items-center pt-10 pr-7 w-[calc(100vw-11rem)]">
              <Banner />
              <VideoList videos={videos} />
            </div>
          </div>
        </div>
      </MenuMinimizedProvider>
    </main>
  );
}
