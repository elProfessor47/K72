import React, { useEffect, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { NavLink } from "react-router-dom";

// ! BottomText Component

const BottomTextNClock = () => {
  return (
    <div className="flex flex-col gap-4 420:gap-6 500:gap-8 720:gap-12 sm:gap-10 lg:gap-6 font-lausanne-500">
      <div className="flex justify-end items-center px-2 w-full font-medium text-[11.7px] lg:text-[0.89rem] leading-[1.4]">
        <p className="w-[75%] 1360:w-[20%] 420:w-[60%] 500:w-[50%] 720:w-[40%] 840:w-[35%] 960:w-[30%] sm:w-[45%] lg:w-[25%]">
          &emsp;&emsp;&emsp;&emsp;&emsp; K72 is an agency that builds brands
          from every angle. Today, tomorrow and years from now. We think the
          best sparks fly when comfort zones get left behind and friction
          infuses our strategies, brands and communications with real feeling.
          We’re transparent, honest and say what we mean, and when we believe in
          something, we’re all in.
        </p>
      </div>
      <div className="relative flex justify-center items-center 840:gap-2 lg:gap-0 lg:mt-6.5 text-[2.2rem] 420:text-[2.8rem] 500:text-[3.4rem] 720:text-[4.7rem] 840:text-[5.6rem] 960:text-[6.4rem] sm:text-[4.2rem] lg:text-[4.4rem] 1360:text-8xl">
        <NavLink to="/work" className="m-1.5 720:m-2 px-4 840:px-6 pt-1.5 1360:pt-3 720:pt-2 border-3 rounded-full hover:text-primary uppercase leading-[0.85] select-none">
          Work
        </NavLink>
        <NavLink to="/agency" className="m-1.5 720:m-2 px-4 840:px-6 pt-1.5 1360:pt-3 720:pt-2 border-3 rounded-full hover:text-primary uppercase leading-[0.85] select-none">
          Agency
        </NavLink>
        <div className="hidden lg:block">
          <MontrealClock />
        </div>
      </div>
    </div>
  );
};

// ! MontrealClock Component

export const MontrealClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const montrealTime = new Date().toLocaleTimeString("en-CA", {
        timeZone: "America/Toronto",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(montrealTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bottom-1.5 left-1.5 absolute flex items-center gap-3">
      <CiGlobe className="size-7.5 font-medium" />
      <span className="text-[1rem]">MONTREAL_{time}</span>
    </div>
  );
};

export default BottomTextNClock;
