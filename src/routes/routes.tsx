import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import PageNotFound from "./PageNotFound";
import { NavbarProvider } from "../contexts/navbarContext";
import CampaignApp from "../pages/Campaign/CampaignApp";
import Authenticate from "../pages/Authenticate/Authenticate";
import SignOut from "../pages/Authenticate/SignOut";
import Profile from "../pages/Profile/Profile";

const About = () => <h1>About</h1>;

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavbarProvider>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/authenticate"
            element={<Authenticate />}
          />
          <Route
            path="/signout"
            element={<SignOut />}
          />
          <Route
            path="/campaign/*"
            element={<CampaignApp />}
          />
          <Route
            path="/campaign/:id/:name?/:public?/:catId?/:tabId?"
            element={<CampaignApp />}
          />
          <Route
            path="/demo-campaign/:id/:name?/:public?/:catId?/:tabId?"
            element={<CampaignApp />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </NavbarProvider>
    </BrowserRouter>
  );
}
