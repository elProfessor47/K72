import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { useNav } from "../../context/NavContext";

const StaffProjectSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const projectRef = useRef([]);
  const fixedRef = useRef(null);
  const { isFullScreenNavOpen } = useNav();

  const projectsData = [
    {
      title: "Opto-Reseau",
      Description: "We see you like no other",
      src: "agencyImg1",
    },
    { title: "Lamajeure", Description: "Lamajeure", src: "agencyImg2" },
    { title: "Lassonde", Description: "Fruite", src: "agencyImg3" },
  ];

  useGSAP(() => {
    if (fixedRef.current && projectRef.current.length) {
      ScrollTrigger.create({
        trigger: projectRef.current[0],
        start: "top top",
        end: "bottom -150%",
        pin: fixedRef.current,
        pinSpacing: false,
      });
    }

    projectRef.current.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top -5%",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });
    });
  }, []);

  return (
    <div className="relative">
      <div
        ref={fixedRef}
        className={`z-[50] ${isFullScreenNavOpen ? "hidden" : ""} absolute w-full flex justify-center pt-3 font-lausanne-500 text-xl uppercase cursor-pointer pointer-events-none`}
      >
        <div className="hover:text-primary hover:underline pointer-events-auto">
          View All Projects
        </div>
      </div>

      {projectsData.map((currProject, idx) => {
        const { title, Description, src } = currProject;

        return (
          <div
            ref={(el) => (projectRef.current[idx] = el)}
            key={idx}
            className={`relative cursor-pointer h-[92vh] w-full group overflow-hidden rounded-ss-4xl ${idx !== 0 ? "-mt-8" : ""
              }`}
          >
            <img
              src={`/images/agencyProjectImg/${src}.jpg`}
              className="group-hover:brightness-90 w-full h-full object-cover object-left xl:object-top group-hover:scale-[1.05] transition-all duration-500"
              alt=""
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center px-6 font-lausanne-500 text-center pointer-events-none">
              <div className="text-2xl 720:text-3xl">{title}</div>
              <div className="720:text-[4.5rem] text-5xl group-hover:underline">
                {Description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StaffProjectSection;
