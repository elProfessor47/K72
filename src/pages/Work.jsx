import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNav } from "../context/NavContext";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const logoRef = useRef(null);

  const images = [
    {
      left: {
        image: "workImg1",
        title: "Jean Coutu",
        description: "Everyones Pharmacy",
        year: 2024,
      },
      right: {
        image: "workImg2",
        title: "Widescape",
        description: "Widescape",
        year: 2022,
      },
    },
    {
      left: { image: "workImg3", title: "OKA", description: "OKA", year: 2022 },
      right: {
        image: "workImg4",
        title: "Opto-Reseau",
        description: "Opto-Reseau",
        year: 2021,
      },
    },
    {
      left: {
        image: "workImg5",
        title: "Coup Fumant",
        description: "Coup Fumant",
        year: 2021,
      },
      right: {
        image: "workImg6",
        title: "Shelton Brewery",
        description: "Shelton",
        year: 2020,
      },
    },
    {
      left: {
        image: "workImg7",
        title: "GardaWorld",
        description: "Best",
        year: 2021,
      },
      right: {
        image: "workImg8",
        title: "La Fondation BAnQ",
        description: "A table avec I'histoire",
        year: 2021,
      },
    },
    {
      left: {
        image: "workImg9",
        title: "Sollio",
        description: "La Coop",
        year: 2019,
      },
      right: {
        image: "workImg10",
        title: "Lamajeure",
        description: "Lamajeure",
        year: 2019,
      },
    },
    {
      left: {
        image: "workImg11",
        title: "Orchestre Symphonique",
        description: "Synesthesia",
        year: 2019,
      },
      right: {
        image: "workImg12",
        title: "La Fondation BAnQ",
        description: "100 Temps",
        year: 2020,
      },
    },
    {
      left: {
        image: "workImg13",
        title: "GardaWorld",
        description: "Crisis24",
        year: 2021,
      },
      right: {
        image: "workImg14",
        title: "Opto-Reseau",
        description: "We See You Like No Other",
        year: 2020,
      },
    },
    {
      left: {
        image: "workImg15",
        title: "PME MTL",
        description: "Open",
        year: 2020,
      },
      right: {
        image: "workImg16",
        title: "Lassonde",
        description: "Fruite",
        year: 2019,
      },
    },
  ];

  const { isFullScreenNavOpen } = useNav();

  const rowRefs = useRef([]);
  const infoRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const yearRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    if (isScrolled) {
      gsap.to(".infoStrip", { top: "11%", delay: 0.2, duration: 0.4 });
    } else {
      gsap.to(".infoStrip", { top: "22%", duration: 0.2 });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useGSAP(
    () => {
      if (windowWidth < 720) return;

      const expansionAmount = 390;

      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        const startOffset = index * expansionAmount;

        gsap.to(row, {
          height: "500px",
          scrollTrigger: {
            trigger: row,
            scrub: 1,
            start: `top+=${startOffset} 74%`,
            end: `+=400`,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => {
        ScrollTrigger.refresh();
      };
    },
    { dependencies: [windowWidth] }
  );

  useEffect(() => {
    if (hoveredItem) {
      gsap.to(infoRef.current, { opacity: 1, y: 0, duration: 0.4 });
      gsap.fromTo(
        [titleRef.current, descRef.current, yearRef.current],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          onStart: () => {
            titleRef.current.textContent = hoveredItem.title;
            descRef.current.textContent = hoveredItem.description;
            yearRef.current.textContent = hoveredItem.year;
          },
        }
      );
    } else {
      gsap.to(infoRef.current, { opacity: 0, y: -20, duration: 0.2 });
    }
  }, [hoveredItem]);

  useGSAP(() => {
    gsap.to(
      logoRef.current,
      {
        zIndex: `${isFullScreenNavOpen ? 24 : 26}`,
        opacity: `${isFullScreenNavOpen ? 0 : 1}`,
        duration: 1,
      },
      "-=2"
    );
  }, [isFullScreenNavOpen]);

  return (
    <div className="bg-white w-full min-h-screen font-lausanne-500">
      <div className="z-[26] fixed p-4" ref={logoRef}>
        <NavLink to="/">
          <svg
            className="scale-[1.15]"
            fill="black"
            width="103"
            height="44"
            viewBox="0 0 103 44"
          >
            <path
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </NavLink>
      </div>
      <div className="pt-80">
        <div
          ref={infoRef}
          className="hidden z-[2] fixed lg:flex justify-between items-center bg-white opacity-0 px-5 border-black border-y-2 w-full h-16 text-3xl pointer-events-none infoStrip"
        >
          <div ref={titleRef}></div>
          <div ref={descRef}></div>
          <div ref={yearRef}></div>
        </div>

        <div>
          <h1 className="relative px-2 lg:text-[12rem] text-7xl uppercase leading-none">
            work
            <sup className="top-2 absolute px-2 text-4xl">16</sup>
          </h1>
        </div>

        <div className="lg:-mt-8 px-2.5 pb-3 w-full">
          {images.map((item, i) => (
            <div
              className="flex 720:flex-row flex-col gap-2 py-1 720:h-[100px] 720:overflow-hidden text-white"
              ref={(el) => (rowRefs.current[i] = el)}
              key={i}
            >
              <div className="flex flex-col w-full 720:w-[50%] 720:h-full cursor-pointer">
                <div
                  className="group relative w-full h-full"
                  onMouseEnter={() => setHoveredItem(item.left)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src={`/images/workImg/${item.left.image}.jpg`}
                    alt="workImage"
                    className="group-hover:brightness-80 group-hover:rounded-4xl w-full h-full object-cover transition-all duration-200 ease-in-out"
                  />
                  <div className="hidden absolute inset-0 lg:flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                    <h1 className="px-4 pt-2 border-2 rounded-full text-6xl uppercase">
                      View Project
                    </h1>
                  </div>
                </div>
                <div className="lg:hidden flex 720:flex-row justify-between mt-2 720:mt-0 px-1 py-1 w-full text-black">
                  <div className="flex flex-col">
                    <div className="text-xl 500:text-2xl sm:text-3xl">
                      {item.left.title}
                    </div>
                    <div>{item.left.description}</div>
                  </div>
                  <div className="mt-1 720:mt-0">{item.left.year}</div>
                </div>
              </div>
              <div className="flex flex-col mt-4 720:mt-0 w-full 720:w-[50%] 720:h-full cursor-pointer">
                <div
                  className="group relative w-full h-full"
                  onMouseEnter={() => setHoveredItem(item.right)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src={`/images/workImg/${item.right.image}.jpg`}
                    alt="workImage"
                    className="group-hover:brightness-80 group-hover:rounded-4xl w-full h-full object-cover transition-all duration-200 ease-in-out"
                  />
                  <div className="hidden absolute inset-0 lg:flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                    <h1 className="px-4 pt-2 border-2 rounded-full text-6xl uppercase">
                      View Project
                    </h1>
                  </div>
                </div>
                <div className="lg:hidden flex 720:flex-row justify-between mt-2 720:mt-0 px-1 py-1 w-full text-black">
                  <div className="flex flex-col">
                    <div className="text-xl 500:text-2xl sm:text-3xl">
                      {item.right.title}
                    </div>
                    <div>{item.right.description}</div>
                  </div>
                  <div className="mt-1 720:mt-0">{item.right.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
