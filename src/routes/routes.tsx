import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import PageNotFound from "./PageNotFound";
import { NavbarProvider } from "../contexts/navbarContext";
import CampaignApp from "../pages/Campaign/CampaignApp";
import CalculatorApp from "../pages/Calculator/CalculatorApp";
import Authenticate from "../pages/Authenticate/Authenticate";

const About = () => <h1>About</h1>;

const links = [
  { to: "/", label: "NAV_HOME", role: 'home' },
  { to: "/campaign", label: "NAV_CAMPAIGNS", role: 'campaigns' },
  { to: "/calculator", label: "NAV_CALCULATOR", role: 'calculator' },
];

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavbarProvider links={links}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route path="/campaign" element={<CampaignApp />} />
          <Route path="/campaign/:id/:name?" element={<CampaignApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<CalculatorApp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </NavbarProvider>
    </BrowserRouter>
  );
}
