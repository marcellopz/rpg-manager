import React, { createContext, useContext, useState } from "react";
import Navbar, { NavbarLink } from "./navbar/Navbar";
import Footer from "./navbar/Footer";
import { useLocation } from "react-router-dom";

const noNavbarRoutes = ["/authenticate"];

interface NavbarContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error(
      "useNavbarContext must be used within a NavbarContextProvider"
    );
  }
  return context;
};

interface NavbarContextProviderProps {
  children: React.ReactNode;
  links: NavbarLink[];
  // Define any properties you want to pass down to children components here
}

export const NavbarProvider = ({
  children,
  links,
}: NavbarContextProviderProps) => {
  const [count, setCount] = useState<number>(0);
  const location = useLocation();

  const navbarContextValue: NavbarContextProps = {
    count,
    setCount,
  };

  if (noNavbarRoutes.includes(location.pathname)) {
    return (
      <NavbarContext.Provider value={navbarContextValue}>
        {children}
      </NavbarContext.Provider>
    );
  }

  return (
    <NavbarContext.Provider value={navbarContextValue}>
      <Navbar links={links} />
      {children}
      <Footer />
    </NavbarContext.Provider>
  );
};
