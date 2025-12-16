import React from "react";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MontrealClock } from "../components/Home/BottomTextNClock";

const LayoutFooter = () => {
  const footerLinks = ["fb", "ig", "in", "be"];

  const footerLinksTwo = [
    "privacy policy",
    "privacy notice",
    "ethics report",
    "consent choices",
  ];

  return (
    <div className="z-10 relative flex flex-col justify-between bg-black w-full font-lausanne-500 text-white uppercase select-none">
      <div className="flex lg:flex-row flex-col justify-between p-4 h-[40vh]">
        <div className="flex gap-2">
          {footerLinks.map((item, i) => (
            <div
              key={i}
              className="px-3 lg:px-6 lg:pt-1.5 border-2 rounded-full h-fit hover:text-primary text-3xl lg:text-6xl cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
        <div>
          <NavLink className="flex justify-center items-center px-3 lg:px-6 lg:pt-1.5 border-2 rounded-full w-fit text-[8vw] hover:text-primary lg:text-6xl uppercase">
            <div>Contact</div>
            <FaHeart className="scale-[0.9]" />
          </NavLink>
        </div>
      </div>

      <div className="relative flex xl:flex-row flex-col xl:justify-between items-center p-3 py-8 w-full text-sm xl:text-sm 420:text-lg">
        <div className="top-5 -left-30 xl:left-0 relative 420:scale-[1.25] lg:scale-[1.5] xl:scale-[1]">
          <MontrealClock />
        </div>
        <div className="xl:left-1/2 xl:absolute flex xl:flex-row flex-col justify-center items-center xl:gap-12 py-15 xl:py-0 xl:-translate-x-1/2">
          {footerLinksTwo.map((item, i) => (
            <div key={i} className="hover:text-primary cursor-pointer">
              {item}
            </div>
          ))}
        </div>
        <div className="hover:text-primary text-lg cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back To Top
        </div>
      </div>
    </div>
  );
};

export default LayoutFooter;
