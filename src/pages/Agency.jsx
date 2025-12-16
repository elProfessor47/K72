import React, { useRef } from "react";
import TopSection from "../components/Agence/TopSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import StaffImageSection from "../components/Agence/StaffImageSection";
import StaffInfoSection from "../components/Agence/StaffInfoSection";
import { NavLink } from "react-router-dom";
import StaffProjectSection from "../components/Agence/StaffProjectSection";
import { useNav } from "../context/NavContext";

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {
  const parentRef = useRef(null);
  const triggerRef = useRef(null);
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const logoRef = useRef(null);
  const { isFullScreenNavOpen } = useNav();

  const images = ["One", "Ten"];

  const staffData = [
    {
      name: "carl",
      lastname: "godbout",
      position: "business lead",
    },
    {
      name: "Meggie",
      lastname: "Lavoie",
      position: "account director",
    },
  ];

  useGSAP(() => {
    if (!parentRef.current || !triggerRef.current) return;

    gsap.to(parentRef.current, {
      backgroundColor: "black",
      color: "white",
      duration: 0.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 65%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(logoRef.current, {
      fill: "white",
      duration: 0.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 65%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(firstSectionRef.current, {
      opacity: 0,
      y: -80,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: firstSectionRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(secondSectionRef.current, {
      opacity: 0,
      y: -80,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: secondSectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

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
    <div
      ref={parentRef}
      className="bg-white w-full min-h-screen overflow-x-hidden transition-colors duration-500"
    >
      <div className="top-4 left-4 z-[55] fixed">
        <NavLink to="/">
          <svg
            className="scale-[1.15]"
            fill="currentColor"
            width="103"
            height="44"
            viewBox="0 0 103 44"
          >
            <path
              ref={logoRef}
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </NavLink>
      </div>

      <div className="pt-55 500:pt-65 sm:pt-70 xl:pt-90">
        <TopSection />
      </div>

      <div className="px-6 xl:px-30 py-40 xl:py-50 w-full font-lausanne-500 text-[1.25rem]">
        <div
          className="flex justify-between mb-30 w-full 960:w-[50%]"
          ref={firstSectionRef}
        >
          <div>Expertise</div>
          <ul className="leading-[1.25] list-none">
            <li>Strategy</li>
            <li>Advertising</li>
            <li>Branding</li>
            <li>Design</li>
            <li>Content</li>
          </ul>
          <div className="960:hidden block"></div>
        </div>

        <div
          className="flex 720:flex-row flex-col gap-12 leading-[1.25]"
          ref={secondSectionRef}
        >
          <div className="xl:w-[40%]">
            Our Work_ Born in curiosity, raised by dedication and fed with a
            steady diet of creativity.
          </div>
          <div className="xl:w-[30%]">
            Our Creative_ Simmering in an environment where talent can come to a
            full boil. Encouraged to become the best versions of ourselves.
          </div>
          <div className="xl:w-[30%]">
            Our Culture_ We’re open to each other. Period. The team works
            together to create a space that makes us proud.
          </div>
        </div>
      </div>

      <div>
        <div
          ref={triggerRef}
          className="flex flex-col justify-center items-center"
        >
          {images.map((imgName, idx) => (
            <div
              className={`w-full flex justify-center ${idx === 1 ? "-mt-10" : ""
                }`}
            >
              <StaffImageSection
                key={idx}
                imgSrc={`/images/agencyImg/agencyImg${imgName}.jpg`}
                staff={staffData[idx]}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <StaffInfoSection />
      </div>

      <div>
        <StaffProjectSection />
      </div>
    </div>
  );
};

export default Agency;
