import React, { useRef, useState } from "react";
import { MontrealClock } from "../components/Home/BottomTextNClock";
import { NavLink, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaHeart } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const FullScreenNav = ({ isOpen, toggleFullScreenNav }) => {
  const navigate = useNavigate();
  const navLinks = [
    {
      name: "Work",
      path: "/work",
      text: "see everything",
      src: "/images/navImg/navImg1.jpg",
    },
    {
      name: "Agency",
      path: "/agency",
      text: "know us",
      src: "/images/navImg/navImg2.jpg",
    },
    {
      name: "Contact",
      path: "/contact",
      text: "send us a fax",
      icon: <FaHeart />,
    },
    {
      name: "Blog",
      path: "/blog",
      text: "read articles",
      src: "/images/navImg/navImg3.jpg",
    },
  ];

  const navLinksTwo = [
    "Privacy Policy",
    "Privacy Notice",
    "Ethics Report",
    "Consent Choices",
  ];
  const navIcons = ["fb", "ig", "in", "be"];

  const navParallelsRef = useRef([]);
  const navLinkRef = useRef([]);
  const tlRef = useRef(null);
  const crossRef = useRef(null);
  const bottomSectionRef = useRef(null);
  const logoRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMenu = () => {
    const tl = tlRef.current;
    if (tl && tl.isActive()) return;
    if (tl) {
      tl.eventCallback("onReverseComplete", () => {
        tl.eventCallback("onReverseComplete", null);
        toggleFullScreenNav(false);
      });
      tl.timeScale(2).reverse();
      tl.reverse();
    } else {
      toggleFullScreenNav(false);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;

    tl.from(navParallelsRef.current, {
      yPercent: -150,
      duration: 0.3,
      delay: 0.2,
      stagger: 0.1,
      ease: "power1.inOut",
    });

    tl.to(logoRef.current, { opacity: 1, duration: 0.6, ease: "power2.out" });

    tl.from(
      crossRef.current,
      { xPercent: 150, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    gsap.set(navLinkRef.current, {
      rotateX: 90,
      opacity: 0,
      transformOrigin: "top center",
    });

    tl.to(
      navLinkRef.current,
      {
        rotateX: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
      },
      "-=0.6"
    );

    tl.to(bottomSectionRef.current, { opacity: 1, duration: 0.6 }, "-=0.8");

    if (isOpen) tl.timeScale(1.1).play(0);

    return () => tl.kill();
  }, [isOpen]);

  return (
    <div className="top-0 left-0 z-[999] fixed flex flex-col w-full h-screen text-white">
      <div className="-z-1 absolute flex flex-row-reverse w-full h-full">
        {[0, 1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            ref={(el) => (navParallelsRef.current[i] = el)}
            className={`bg-black ${i === 0 || i === 1 ? "w-[50%] lg:w-[25%]" : ""
              } h-full ${i === 2 || i === 3 || i === 4 ? "hidden lg:block w-[25%]" : ""
              }`}
          ></div>
        ))}
      </div>

      <div className="relative">
        <div className="p-4 w-fit cursor-pointer">
          <svg
            ref={logoRef}
            className="opacity-0 scale-[1.15]"
            fill="white"
            width="103"
            height="44"
            viewBox="0 0 103 44"
            onClick={() => {
              toggleFullScreenNav(false);
              navigate("/");
            }}
          >
            <path
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
        <div
          className="group top-2 right-4 absolute size-28 cursor-pointer"
          ref={crossRef}
          onClick={closeMenu}
        >
          <div className="absolute bg-white group-hover:bg-primary w-[3px] h-38 -rotate-45 origin-top"></div>
          <div className="right-0 absolute bg-white group-hover:bg-primary w-[3px] h-38 rotate-45 origin-top"></div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-30 840:pt-15 sm:pt-20 lg:pt-10 w-full">
        {navLinks.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            onClick={() => {
              toggleFullScreenNav(false);
              scrollToTop();
            }}
            ref={(el) => (navLinkRef.current[i] = el)}
            className={`h-[4rem] sm:h-[5rem] 840:h-[5.5rem] lg:h-[6rem] xl:h-[6.5rem] cursor-pointer group relative font-lausanne-500 border-t border-gray-500 w-full flex items-center justify-center pt-3 ${i === 3 ? "border-b" : ""
              }`}
          >
            <h1 className="text-[4rem] 840:text-[5.5rem] sm:text-[5rem] lg:text-[6rem] xl:text-[6.5rem] uppercase leading-none">
              {item.name}
            </h1>

            <div className="top-0 absolute bg-primary w-full h-0 group-hover:h-full overflow-hidden text-black transition-all duration-300 ease-in-out">
              <div
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full h-full overflow-hidden"
              >
                {hoveredIndex === i && (
                  <Marquee
                    gradient={false}
                    speed={200}
                    loop={0}
                    className="flex items-center h-full overflow-hidden whitespace-nowrap"
                  >
                    {[0, 1].map((_, j) => (
                      <div
                        key={j}
                        className="flex flex-shrink-0 items-center gap-10"
                      >
                        <h2 className="mb-2 pt-5 pl-10 text-[7rem] uppercase">
                          {item.text}
                        </h2>
                        {item.src ? (
                          <img
                            src={item.src}
                            alt=""
                            className="rounded-full w-55 h-20 object-cover"
                          />
                        ) : (
                          <div className="text-[5rem]">{item.icon}</div>
                        )}
                      </div>
                    ))}
                  </Marquee>
                )}
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      <div
        ref={bottomSectionRef}
        className="bottom-2 left-1/2 absolute flex 720:flex-row flex-col justify-between items-center gap-2 opacity-0 px-3 w-full text-[0.7rem] -translate-x-1/2"
      >
        <div className="hidden lg:block font-lausanne-500">
          <MontrealClock />
        </div>

        <div className="lg:left-1/2 lg:absolute flex lg:flex-row flex-col justify-center items-center 720:items-start lg:gap-3 xl:gap-8 font-lausanne-500 uppercase lg:-translate-x-1/2">
          {navLinksTwo.map((item, i) => (
            <NavLink key={i} className="hover:text-primary">
              {item}
            </NavLink>
          ))}
        </div>

        <div className="flex gap-2 font-lausanne-500 text-[2rem] uppercase">
          {navIcons.map((item, i) => (
            <NavLink
              key={i}
              className="flex justify-center items-center px-3 pt-1 border-2 rounded-full hover:text-primary leading-none"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
