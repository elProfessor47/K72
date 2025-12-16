import React, { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Loader = () => {
  const barsRef = useRef([]);
  const parallelsRef = useRef([]);
  const container = useRef(null);
  const pageRef = useRef(null);
  const tlRef = useRef(null);
  const barsTlRef = useRef(null);
  const logoRef = useRef(null);
  const location = useLocation();

  useGSAP(
    () => {
      if (tlRef.current) tlRef.current.kill();
      if (barsTlRef.current) barsTlRef.current.kill();
      gsap.set(logoRef.current, { filter: "none" });
      gsap.set(container.current, { display: "block" });
      gsap.set(parallelsRef.current, { yPercent: 0 });
      gsap.set(barsRef.current, { display: "none", scaleY: 0.2 });
      gsap.set(pageRef.current, { opacity: 0, overflow: "hidden" });
      gsap.set(logoRef.current, { opacity: 0, y: -40 });

      const tl = gsap.timeline();
      tlRef.current = tl;
      tl.from(parallelsRef.current, {
        yPercent: -150,
        duration: 0.55,
        delay: 0.2,
        stagger: 0.11,
        ease: "power1.inOut",
        onComplete: () => {
          const barsTl = gsap.timeline({
            repeat: -1,
            defaults: { duration: 0.5, ease: "power1.inOut" },
          });
          barsTlRef.current = barsTl;

          gsap.set(barsRef.current, { display: "block" });

          barsTl
            .to(barsRef.current, { scaleY: 1, stagger: 0.095 })
            .to(barsRef.current, { scaleY: 0.2, stagger: 0.095 }, "-=0.3")
            .to(barsRef.current, { scaleY: 1, stagger: 0.095 }, "-=0.3")
            .to(barsRef.current, { scaleY: 0.2, stagger: 0.095 }, "-=0.3");
        },
      });

      tl.to(
        logoRef.current,
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tl.to({}, { duration: 1.2 });

      tl.to(parallelsRef.current, {
        yPercent: 150,
        duration: 0.55,
        delay: 0.2,
        stagger: 0.11,
        ease: "power1.inOut",
        onStart: () => {
          gsap.to(barsRef.current, { display: "none", duration: 0.3 });
        },
      });
      tl.to(
        logoRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
        },
        "-=1"
      );

      if (location.pathname !== "/") {
        tl.to(
          logoRef.current,
          {
            filter: "invert(1)",
            duration: 1,
            ease: "power2.out",
          },
          "<"
        );
      } else {
        tl.to(
          logoRef.current,
          {
            filter: "invert(0)",
            duration: 1,
            ease: "power2.out",
          },
          "-=1"
        );
      }

      tl.set(container.current, { display: "none" });
      tl.set(parallelsRef.current, { yPercent: 0 });
      tl.set(pageRef.current, { overflow: "visible" });
      gsap.to(pageRef.current, { opacity: 1, delay: 2 });

      return () => {
        tl.kill();
        if (barsTlRef.current) barsTlRef.current.kill();
      };
    },
    { scope: container, dependencies: [location] }
  );

  return (
    <>
      <div
        ref={container}
        className="z-[99] fixed bg-transparent w-full h-full"
      >
        <div className="absolute flex flex-row-reverse w-full h-full">
          {[0, 1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              ref={(el) => (parallelsRef.current[i] = el)}
              className={`bg-black ${i === 0 || i === 1 ? "w-[50%] lg:w-[25%]" : ""
                } h-full ${i === 2 || i === 3 || i === 4 ? "hidden lg:block w-[25%]" : ""
                }`}
            ></div>
          ))}
        </div>
        <div className="right-3 bottom-3 absolute flex flex-row-reverse w-14 h-8">
          {[0, 1, 2, 3].map((_, i) => (
            <div
              key={i}
              ref={(el) => (barsRef.current[i] = el)}
              className="hidden bg-white w-[25%] h-full scale-y-[0.2] origin-bottom"
            ></div>
          ))}
        </div>
        <div className="top-14 left-4 absolute">
          <svg
            ref={logoRef}
            className="scale-[1.15]"
            fill="white"
            width="103"
            height="44"
            viewBox="0 0 103 44"
          >
            <path
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
      </div>

      <div ref={pageRef} className="z-0 relative">
        <Outlet />
      </div>
    </>
  );
};

export default Loader;
