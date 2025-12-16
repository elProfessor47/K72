import React from "react";
import LayoutNavbar from "../navigation/LayoutNavbar";
import LayoutFooter from "./LayoutFooter";
import { Outlet } from "react-router-dom";
import ShortNav from "../navigation/ShortNav";

const Layout = () => {
  return (
    <div>
      <div className="hidden 1080:block">
        <LayoutNavbar />
      </div>
      <div className="1080:hidden block">
        <ShortNav />
      </div>
      <div>
        <Outlet />
      </div>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
