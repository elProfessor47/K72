import React, { useRef, useEffect, useState } from "react";
import ShortNav from "../navigation/ShortNav";
import Marquee from "react-fast-marquee";
import { FaHeart } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const marqueeRef = useRef(null);
  const [lastScroll, setLastScroll] = useState(0);

  const footerLinks = ["fb", "ig", "in", "be"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScroll ? 1 : -1;
      setLastScroll(currentScroll);

      gsap.to(marqueeRef.current, {
        rotation: direction * 7,
        transformOrigin: "center center",
        duration: 1,
        ease: "power1.out",
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className="relative bg-black w-full min-h-screen overflow-x-hidden font-lausanne-500 text-white">
      <ShortNav />
      <div className="flex 720:flex-row flex-col justify-between 720:items-end gap-8 mx-auto pt-30 720:pt-20 xl:pt-5 pb-15 720:pb-25 w-[85vw]">
        <div className="flex flex-col order-2 text-center">
          <div>Onscreen or in an office.</div>
          <div>Here. There.</div>
          <div>Anywhere.</div>
        </div>
        <div className="flex flex-col 720:order-1 font-lausanne-300 460:text-[3.8rem] 580:text-[4.3rem] 720:text-[5rem] 840:text-[6rem] xl:text-[8.5rem] text-5xl text-center uppercase leading-[0.9]">
          <div>To talk</div>
          <div>about</div>
          <div>your</div>
          <div>project</div>
        </div>
        <div className="flex flex-col hover:text-primary text-center hover:underline cursor-pointer">
          <div>525 Av. Viger O - Suite 400</div>
          <div>Montreal, QC H2Z 1G6</div>
        </div>
      </div>
      <div className="flex items-center w-[102vw] text-black uppercase">
        <Marquee
          speed={200}
          loop={0}
          className="group relative flex bg-primary pt-3 h-16 580:h-18 720:h-20 840:h-24 xl:h-34 overflow-hidden 460:text-[3.8rem] 580:text-[4.3rem] 720:text-[5rem] 840:text-[6rem] xl:text-[9rem] text-5xl -rotate-[3deg] cursor-pointer"
          ref={marqueeRef}
        >
          <div className="-top-3 z-[-1] absolute bg-white w-full h-0 group-hover:h-36 transition-all duration-250 ease-in-out"></div>
          {Array.from([0, 1]).map((_, i) => (
            <div key={i} className="flex items-center gap-4 lg:gap-8 pl-6 lg:pl-10">
              <div>hello@k72.ca</div>
              <div>
                <FaHeart className="460:text-[3.4rem] 580:text-[3.8rem] 720:text-[4.2rem] 840:text-[4.8rem] xl:text-[7.5rem] text-5xl" />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 h-60 font-lausanne-500">
        <div className="uppercase">follow us</div>
        <div className="flex gap-2">
          {footerLinks.map((item, i) => (
            <div
              key={i}
              className="px-3 xl:px-6 pt-1.5 border-2 rounded-full 460:text-[3rem] hover:text-primary text-4xl xl:text-6xl uppercase cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
