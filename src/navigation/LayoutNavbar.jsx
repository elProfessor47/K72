import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNav } from "../context/NavContext";
import FullScreenNav from "./FullScreenNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LayoutNavbar = () => {
  const { isFullScreenNavOpen, setIsFullScreenNavOpen } = useNav();
  const [hovered, setHovered] = useState(null);
  const logoRef = useRef(null);
  const workRef = useRef(null);
  const agencyRef = useRef(null);
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "power2.inOut" },
    });

    if (isScrolled) {
      tl.to(workRef.current, { height: "0rem" }, 0)
        .to(agencyRef.current, { height: "0rem" }, 0)
        .to(menuRef.current, { height: "3.5rem" }, 0);
    } else {
      tl.to(workRef.current, { height: "3.5rem" }, 0)
        .to(agencyRef.current, { height: "5.75rem" }, 0)
        .to(menuRef.current, { height: "8.5rem" }, 0);
    }
  }, [isScrolled]);

  useGSAP(() => {
    gsap.set(logoRef.current, {
      display: isFullScreenNavOpen ? "none" : "block",
    });
  }, [isFullScreenNavOpen]);

  return (
    <div className="top-0 z-50 fixed flex justify-between w-full select-none">
      <NavLink to="/" className="p-4">
        <svg
          ref={logoRef}
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

      <div className="flex">
        <NavLink
          ref={workRef}
          to="/work"
          className="group relative flex items-end bg-black w-72 h-14 overflow-hidden text-white cursor-pointer"
          onMouseEnter={() => setHovered("work")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="top-0 absolute bg-primary w-full h-0 group-hover:h-full transition-all duration-200"></div>
          <div
            className={`uppercase font-lausanne-500 text-xl relative px-2 ${hovered === "work" ? "text-black" : "text-white"
              }`}
          >
            Work(16)
          </div>
        </NavLink>

        <NavLink
          ref={agencyRef}
          to="/agency"
          className="group relative flex items-end bg-black w-100 h-23 overflow-hidden text-white cursor-pointer"
          onMouseEnter={() => setHovered("agency")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="top-0 absolute bg-primary w-full h-0 group-hover:h-full transition-all duration-200"></div>
          <div
            className={`uppercase font-lausanne-500 text-xl relative px-2 ${hovered === "agency" ? "text-black" : "text-white"
              }`}
          >
            Agency
          </div>
        </NavLink>

        <div
          ref={menuRef}
          className="group relative bg-black w-52 h-34 overflow-hidden text-white cursor-pointer"
          onMouseEnter={() => setHovered("menu")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setIsFullScreenNavOpen(!isFullScreenNavOpen)}
        >
          <div className="top-0 absolute bg-primary w-full h-0 group-hover:h-full transition-all duration-200"></div>
          <div className="relative flex flex-col gap-18 py-6 h-full">
            <div className="flex flex-col items-end gap-1 px-4">
              <div
                className={`w-12 h-[2px] ${hovered === "menu" ? "bg-black h-[1.6px]" : "bg-white"
                  }`}
              ></div>
              <div
                className={`w-6 h-[2px] ${hovered === "menu" ? "bg-black h-[1.5px]" : "bg-white"
                  }`}
              ></div>
            </div>
            <div>
              <div
                className={`uppercase self-end font-lausanne-500 text-xl px-2 ${hovered === "menu" ? "text-black" : "text-white"
                  }`}
              >
                Menu
              </div>
            </div>
          </div>
        </div>
      </div>

      {isFullScreenNavOpen && (
        <div className="z-40 fixed inset-0">
          <FullScreenNav
            isOpen={isFullScreenNavOpen}
            toggleFullScreenNav={setIsFullScreenNavOpen}
          />
        </div>
      )}
    </div>
  );
};

export default LayoutNavbar;
