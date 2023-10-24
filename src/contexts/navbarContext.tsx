import React, { createContext, useContext, useState } from "react";
import Navbar from "./navbar/Navbar";

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
  links: { to: string; label: string }[];
  // Define any properties you want to pass down to children components here
}

export const NavbarProvider = ({
  children,
  links,
}: NavbarContextProviderProps) => {
  const [count, setCount] = useState<number>(0);

  const navbarContextValue: NavbarContextProps = {
    count,
    setCount,
  };

  return (
    <NavbarContext.Provider value={navbarContextValue}>
      <Navbar links={links} />
      {children}
    </NavbarContext.Provider>
  );
};
