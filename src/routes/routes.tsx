import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import PageNotFound from "./PageNotFound";
import { NavbarProvider } from "../contexts/navbarContext";

const About = () => <h1>About</h1>;

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/campaign", label: "Campaign" },
  //   { to: "/maps", label: "Maps" },
  { to: "/calculator", label: "Calculator" },
];

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavbarProvider links={links}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </NavbarProvider>
    </BrowserRouter>
  );
}
