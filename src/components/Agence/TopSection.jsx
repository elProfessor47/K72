import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const TopSection = () => {
  const agencyImages = [
    "/images/agencyImg/agencyImgOne.jpg",
    "/images/agencyImg/agencyImgTwo.jpg",
    "/images/agencyImg/agencyImgThree.jpg",
    "/images/agencyImg/agencyImgFour.jpg",
    "/images/agencyImg/agencyImgFive.jpg",
    "/images/agencyImg/agencyImgSix.jpg",
    "/images/agencyImg/agencyImgSeven.jpg",
    "/images/agencyImg/agencyImgEight.jpg",
    "/images/agencyImg/agencyImgNine.jpg",
    "/images/agencyImg/agencyImgTen.jpg",
    "/images/agencyImg/agencyImgEleven.jpg",
    "/images/agencyImg/agencyImgTwelve.jpg",
  ];
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top 25%",
        end: "top -100%",
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          let index;
          if (self.progress < 1) {
            index = Math.floor(self.progress * agencyImages.length);
          } else {
            index = Math.floor(self.progress * agencyImages.length - 1);
          }
          imgRef.current.src = agencyImages[index];
        },
      },
    });
  }, []);
  return (
    <div className="z-0 relative font-lausanne-500 text-[4.5rem] 1080:text-[14rem] 500:text-[6rem] 720:text-[9rem] 840:text-[10rem] 960:text-[12rem] sm:text-[7rem] xl:text-[17rem] text-center leading-[0.9]">
      <div>SEVEN7Y</div>
      <div>TWO</div>
      <div className="flex justify-end px-5 py-15 w-full text-[1.35rem] 720:text-[2.5rem] xl:text-[3.5rem] text-left leading-[1]">
        <div className="w-full lg:w-[60%]">
          &emsp;&emsp;&emsp;&emsp;&emsp; We’re inquisitive and open-minded, and
          we make sure creativity crowds out ego from every corner. A brand is a
          living thing, with values, a personality and a story. If we ignore
          that, we can achieve short-term success, but not influence that goes
          the distance. We bring that perspective to every brand story we help
          tell.
        </div>
      </div>
      <div
        ref={imgDivRef}
        className="-top-110 xl:-top-50 left-30 500:left-45 sm:left-60 xl:left-100 -z-1 absolute rounded-2xl w-20 1080:w-45 500:w-25 720:w-35 840:w-40 sm:w-30 xl:w-50 xl:h-68 overflow-hidden"
      >
        <img
          ref={imgRef}
          src={agencyImages[0]}
          className="w-full h-full object-cover object-fit"
          alt=""
        />
      </div>
    </div>
  );
};

export default TopSection;
