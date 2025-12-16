import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const StaffImageSection = ({ imgSrc, staff }) => {
  const imgRef = useRef(null);
  const topMarqueeRef = useRef(null);
  const bottomMarqueeRef = useRef(null);

  useGSAP(() => {
    if (!imgRef.current) return;

    ScrollTrigger.create({
      trigger: imgRef.current,
      start: "top top",
      end: "bottom -50%",
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    });

    gsap.fromTo(
      [topMarqueeRef.current, bottomMarqueeRef.current],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 65%",
          end: "bottom 65%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div className="relative flex justify-center items-center w-[80%] 500:w-[70%] xl:w-[33%]">

      <div
        className="top-[10%] z-20 sm:z-0 absolute w-screen"
        ref={topMarqueeRef}
      >
        <Marquee
          direction="left"
          speed={200}
          gradient={false}
          className="font-lausanne-500 text-primary 1080:text-[6.5rem] 1360:text-[8.5rem] 960:text-[6rem] sm:text-[5rem] xl:text-[8rem] text-5xl 420:text-6xl 500:text-7xl uppercase"
        >
          <div>{staff.name}</div>
        </Marquee>
      </div>

      <div
        className="xl:bottom-[30%] absolute w-screen"
        ref={bottomMarqueeRef}
      >
        <Marquee
          direction="right"
          speed={200}
          gradient={false}
          className="overflow-hidden font-lausanne-500 uppercase"
        >
          <div className="flex items-end gap-6 xl:gap-16 leading-none tracking-[1.1]">
            <div className="xl:-m-2 text-primary 1080:text-[6.5rem] 1360:text-[8.5rem] 960:text-[6rem] sm:text-[5rem] xl:text-[8rem] text-5xl 420:text-6xl 500:text-7xl">
              {staff.lastname}
            </div>
            <div className="pr-6 pb-2 text-2xl xl:text-4xl">{staff.position}</div>
          </div>
        </Marquee>
      </div>

      <div className="rounded-ss-4xl rounded-se-4xl w-full h-[70vh] 500:h-[90vh] 840:h-[100vh] xl:h-screen overflow-hidden">
        <img
          ref={imgRef}
          src={imgSrc}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default StaffImageSection;
