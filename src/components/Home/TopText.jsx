import React, { useRef } from "react";
import Video from "./Video";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

const TopText = () => {
  const ellipseRef = useRef(null);
  gsap.registerPlugin(DrawSVGPlugin);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      repeat: -1,
      repeatDelay: 0.5,
    });

    tl.fromTo(
      ellipseRef.current,
      { drawSVG: "0% 0%" },
      { drawSVG: "100% 200%", duration: 2 }
    );

    tl.to({}, { duration: 2 });

    tl.fromTo(
      ellipseRef.current,
      { drawSVG: "50% 150%" },
      { drawSVG: "250% 250%", duration: 2 }
    );
  }, []);
  return (
    <div className="relative py-2 font-lausanne-300 text-[2.7rem] 420:text-[3.1rem] 500:text-[3.8rem] 720:text-[5.3rem] 840:text-[6.4rem] 960:text-[7.2rem] sm:text-[4.5rem] lg:text-[6rem] 1360:text-9xl text-center uppercase leading-[2.6rem] 1360:leading-[7.2rem] 500:leading-[3.3rem] 720:leading-[4.5rem] 840:leading-[5.3rem] 960:leading-[6rem] sm:leading-[3.8rem] lg:leading-[5.3rem] lg:tracking-tight">
      <div>The sparks for</div>
      <div className="flex justify-center items-center">
        all
        <div className="rounded-full w-20 lg:w-55 h-10 lg:h-25 overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="relative">
        <div>creative</div>
        <svg
          className="-top-5 1360:-top-12 420:-top-6.5 500:-top-7 720:-top-10 840:-top-12 sm:-top-9 lg:-top-8 absolute -scale-[0.6] 420:scale-[0.6] 500:scale-[0.55] sm:scale-[0.58] lg:scale-[0.65]"
          viewBox="0 0 612 112.453125"
          fill="transparent"
          stroke="var(--color-primary)"
          strokeWidth={"3px"}
          transform="scale(1,-1)"
        >
          <ellipse
            ref={ellipseRef}
            cx="306"
            cy="56.2265625"
            rx="304"
            ry="54.2265625"
          ></ellipse>
        </svg>
      </div>
    </div>
  );
};

export default TopText;
