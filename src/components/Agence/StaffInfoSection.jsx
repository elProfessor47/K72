import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const StaffInfoSection = () => {
  const imgDivRef = useRef(null);

  const handleMouseEnter = (imgName) => {
    const slide = document.createElement("img");
    slide.src = `/images/agencyImg/${imgName}.jpg`;
    slide.className =
      "absolute w-full h-full object-cover top-0 left-[-100%] rounded-3xl z-[999]";

    imgDivRef.current.appendChild(slide);

    gsap.to(slide, {
      left: 0,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (imgName) => {
    const currentImg = Array.from(imgDivRef.current.children)
      .reverse()
      .find((img) => img.src.includes(imgName));

    if (currentImg) {
      gsap.to(currentImg, {
        left: "-100%",
        duration: 0.4,
        delay: 0.35,
        onComplete: () => currentImg.remove(),
      });
    }
  };

  const staffData = [
    {
      name: "Sophie Auger",
      position: "Account Executive",
      imgName: "agencyImgSix",
    },
    {
      name: "Carl Godbout",
      position: "Business Lead",
      imgName: "agencyImgOne",
    },
    {
      name: "Camille Brière",
      position: "Copywriter",
      imgName: "agencyImgNine",
    },
    {
      name: "Mélanie Laviolette",
      position: "Art Director",
      imgName: "agencyImgEight",
    },
    {
      name: "Michèle Riendeau",
      position: "Director of Strategy",
      imgName: "agencyImgSeven",
    },
    {
      name: "Lawrence Meunier",
      position: "Account Coordinator",
      imgName: "agencyImgThree",
    },
    {
      name: "Isabelle Beauchemin",
      position: "Senior Director",
      imgName: "agencyImgEleven",
    },
    {
      name: "Olivier Duclos",
      position: "Olivier Duclos",
      imgName: "agencyImgTwo",
    },
    {
      name: "Joël Letarte",
      position: "Associate Creative Director",
      imgName: "agencyImgTwelve",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {
    if (!imgDivRef.current) return;
    ScrollTrigger.create({
      trigger: imgDivRef.current,
      start: "top 15%",
      end: "bottom 20%",
      pin: true,
    });
  }, []);

  useEffect(() => {
    if (imgDivRef.current) {
      imgDivRef.current.parentElement.classList.add("info-pin-spacer");
    }
  }, []);

  return (
    <div className="relative bg-black py-40 overflow-hidden">
      <div
        ref={imgDivRef}
        className="hidden lg:block top-10 left-[25%] z-[999] absolute rounded-3xl w-80 h-[75vh] overflow-hidden"
      ></div>

      <div className="z-[10] relative flex flex-col font-lausanne-500">
        {staffData.map((currData, idx) => {
          const { name, position, imgName } = currData;

          return (
            <div
              key={idx}
              onMouseEnter={() => handleMouseEnter(imgName)}
              onMouseLeave={() => handleMouseLeave(imgName)}
              className={`group relative flex justify-between border-white active:bg-primary active:text-black h-15 720:h-20 cursor-pointer
                ${idx === staffData.length - 1 ? "border-y" : "border-t"}
                text-white px-5 items-center transition-all duration-200`}
            >
              <div className="z-0 absolute inset-0 bg-primary h-0 group-hover:h-full transition-all duration-200"></div>

              <div className="z-10 relative text-primary 720:text-white xl:text-[1.1rem] group-hover:text-black text-sm transition-all duration-200 select-none">
                {position}
              </div>

              <div className="z-10 relative text-[1rem] 1080:text-[3rem] 720:text-[2.5rem] group-hover:text-black uppercase transition-all duration-200">
                {name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StaffInfoSection;
