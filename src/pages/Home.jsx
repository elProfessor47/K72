import React from "react";
import Video from "../components/Home/Video";
import TopText from "../components/Home/TopText";
import BottomTextNClock from "../components/Home/BottomTextNClock";
import ShortNav from "../navigation/ShortNav";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <div className="fixed w-full h-screen">
          <Video />
        </div>
        <ShortNav />
        <div className="relative flex flex-col justify-end lg:justify-between lg:items-center gap-4 420:gap-6 500:gap-8 720:gap-12 sm:gap-10 lg:gap-6 xl:gap-0 w-full h-screen text-white">
          <TopText />
          <BottomTextNClock />
        </div>
      </div>
    </>
  );
};

export default Home;
