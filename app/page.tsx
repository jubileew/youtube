"use client";
import { TagList } from "@/components/TagList";
import { VideoList } from "@/components/VideoList";
import { MenuMinimizedProvider } from "@/context/MenuMinimizedContext";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { Banner } from "@/components/Banner";

export default function Home() {
  return (
    <main>
      <MenuMinimizedProvider>
        <Navbar />
        <div className="flex h-screen pt-12 mt-4">
          <Sidebar />
          <div>
            <TagList />
            <div className="flex flex-col justify-center items-center pt-10 pr-7 w-[calc(100vw-11rem)] overflow-y-scroll">
              <Banner />
              <VideoList />
            </div>
          </div>
        </div>
      </MenuMinimizedProvider>
    </main>
  );
}
