import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-white pt-50">
      <div className="flex 960:flex-row flex-col gap-10 960:gap-0 px-2 py-6 font-lausanne-500">
        <div className="960:w-[67%] text-[4rem] 960:text-[7.5rem] uppercase leading-[0.9]">
          Page Not Found
        </div>

        <div className="flex flex-col gap-2 960:w-[33%]">
          <div className="text-[2rem] 960:text-[3.5rem] leading-[1]">
            The page you are looking for could not be found.
          </div>

          <NavLink
            to="/"
            className="px-4 pt-1 border-3 rounded-full w-fit hover:text-primary text-4xl uppercase select-none"
          >
            back to home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
