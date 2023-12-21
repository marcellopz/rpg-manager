import { useTranslation } from "react-i18next";
import "./home.css";

type ItemProps = {
  id: number;
  name: string;
  description: string;
  img: string;
};

const itemsUnderCastle = [
  {
    id: 4,
    name: "HOME_STORE_CAMPAIGNS",
    description: "Lorem Ipsum",
    img: "/assets/icone.svg",
  },
  {
    id: 1,
    name: "HOME_MANAGE_INVENTORY",
    description: "Lorem Ipsum",
    img: "/assets/icone.svg",
  },
  {
    id: 2,
    name: "HOME_MANAGE_SESSIONS",
    description: "Lorem Ipsum",
    img: "/assets/icone.svg",
  },
  {
    id: 3,
    name: "HOME_MANAGE_SKILLS",
    description: "Lorem Ipsum",
    img: "/assets/icone.svg",
  },
];

const Item = ({ name, img }: ItemProps) => {
  const { t } = useTranslation();
  return (
    <div className="home-item">
      <p>{t(name)}</p>
      <img
        src="/assets/barra_elemento.svg"
        className="element-bar"
        alt="element-bar"
      />
      <img
        className="medium"
        src={img}
        alt="icone"
      />
    </div>
  );
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section id="section-one">
        <div id="child-one">
          <div id="knife-and-text">
            <img
              src="/assets/faca.svg"
              id="knife"
              alt="faca"
            />
            <div id="h3-and-h1">
              <h3>{t("APP_NAME")}</h3>
              <h1>{t("HOME_START_NOW")}</h1>
            </div>
          </div>
          <p>{t("HOME_DESCRIPTION")}</p>
        </div>
        <div id="child-two">
          <img
            src="/assets/castelo.png"
            id="castle"
            alt="castelo"
          />
        </div>
      </section>
      <section id="section-two">
        {itemsUnderCastle.map((i) => (
          <Item
            key={i.id}
            {...i}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
