import React, { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isFullScreenNavOpen, setIsFullScreenNavOpen] = useState(false);

  return (
    <NavContext.Provider
      value={{ isFullScreenNavOpen, setIsFullScreenNavOpen }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
