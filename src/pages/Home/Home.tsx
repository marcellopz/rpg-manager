// import { useTranslation } from "react-i18next";
import "./home.css";

const Home = () => {
  // const { t } = useTranslation();

  return (
    <main>
      <header>
        <div id="dark-gradient"></div>
        <div className="header-content">
          <div className="header-text">
            <h1>RPG Manager</h1>
            <p>
              RPG Manager is a tool for managing your RPG campaigns. It allows
              you to create and manage your characters, campaigns, and more.
            </p>
            <div className="header-buttons">
              <button>Sign Up</button>
              <button>Try the demo Campaign</button>
            </div>
          </div>
        </div>
      </header>
      <div style={{ height: 1000 }}>xd2</div>
    </main>
  );
};

export default Home;
