import React, { useEffect, useState } from "react";
import FullScreenNav from "./FullScreenNav";
import { useNav } from "../context/NavContext";
import { useLocation, useNavigate } from "react-router-dom";

const ShortNav = () => {
  const { isFullScreenNavOpen, setIsFullScreenNavOpen } = useNav();
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [logoColor, setLogoColor] = useState("white");
  const bars = [
    { width: "w-12", hoverHeight: "h-[1.6px]" },
    { width: "w-6", hoverHeight: "h-[1.5px]" },
  ];

  useEffect(() => {
    if (location.pathname === "/blog") {
      setLogoColor("black");
    } else {
      setLogoColor("white");
    }
  }, [location.pathname]);

  return (
    <div className="top-0 z-[25] fixed flex justify-between w-full">
      <div className="p-4 cursor-pointer">
        <svg
          className="lg:scale-[1.15]"
          fill={logoColor}
          width="103"
          height="44"
          viewBox="0 0 103 44"
          onClick={() => {
            if (location.pathname === "/contact" || location.pathname === "/blog") navigate("/");
          }}
        >
          <path
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
      </div>
      <div
        className="group relative bg-black w-38 lg:w-48 h-12 cursor-pointer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="top-0 absolute bg-primary w-full h-0 group-hover:h-full transition-all duration-200"></div>

        <div
          className="relative flex flex-col justify-center items-end gap-1 px-8 h-full"
          onClick={() => setIsFullScreenNavOpen(!isFullScreenNavOpen)}
        >
          {bars.map((bar, i) => (
            <div
              key={i}
              className={`${bar.width} h-[1.4px] transition-all duration-150 ${isHover ? `bg-black ${bar.hoverHeight}` : "bg-white"
                }`}
            ></div>
          ))}
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

export default ShortNav;
