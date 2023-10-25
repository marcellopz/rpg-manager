import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import PageNotFound from "./PageNotFound";
import { NavbarProvider } from "../contexts/navbarContext";
import CampaignApp from "../pages/Campaign/CampaignApp";
import CalculatorApp from "../pages/Calculator/CalculatorApp";

const About = () => <h1>About</h1>;

const links = [
  { to: "/", label: "Home" },
  { to: "/campaign", label: "Campaign" },
  { to: "/calculator", label: "Calculator" },
  { to: "/about", label: "About" },
];

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavbarProvider links={links}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaign" element={<CampaignApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<CalculatorApp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </NavbarProvider>
    </BrowserRouter>
  );
}
