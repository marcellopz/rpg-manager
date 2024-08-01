// import { useTranslation } from "react-i18next";
import CombatTrackerSection from "./CombatTrackerSection";
import HomeHeader from "./HomeHeader";
import ManageInfoSection from "./ManageInfoSection";
import ManageInventorySection from "./ManageInventorySection";
import MobileSection from "./MobileSection";
import "./home.css";

const Home = () => {
  // const { t } = useTranslation();
  document.title = "RPG Manager";

  return (
    <main id="home">
      <HomeHeader />
      <ManageInfoSection />
      <ManageInventorySection />
      <CombatTrackerSection />
      <MobileSection />
    </main>
  );
};

export default Home;
