import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useNavbarContext } from "../../contexts/navbarContext";
import "./home.css";

type ItemProps = {
  id: number;
  name: string;
  description: string;
  img: string;
};

const itemsUnderCastle = [
  {
    id: 1,
    name: "Gerencie Inventários",
    description: "Lorem Ipsum",
    img: "/assets/icone.svg",
  },
  {
    id: 2,
    name: "Registre suas sessões",
    description: "Lorem Ipsum",
    img: "/assets/icone.svg",
  },
  {
    id: 3,
    name: "Controle suas habilidades",
    description: "Lorem Ipsum",
    img: "/assets/icone.svg",
  },
  {
    id: 4,
    name: "Área do mestre",
    description: "Lorem Ipsum",
    img: "/assets/icone.svg",
  },
];

const Item = ({ name, img }: ItemProps) => {
  return (
    <div className="home-item">
      <p>{name}</p>
      <img
        src="/assets/barra_elemento.svg"
        className="element-bar"
        alt="element-bar"
      />
      <img className="medium" src={img} alt="icone" />
    </div>
  );
};

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const n = useNavbarContext();
  console.log(n, isAuthenticated);

  return (
    <main>
      <section id="section-one">
        <div id="child-one">
          <div id="knife-and-text">
            <img src="/assets/faca.svg" id="knife" alt="faca" />
            <div id="h3-and-h1">
              <h3>RPG Manager</h3>
              <h1>Comece Agora!</h1>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            porro molestiae sit, voluptas quas, perspiciatis accusantium nobis
            alias vitae.
          </p>
          <div id="input-container">
            <input placeholder="Username" />
            <input placeholder="Email" />
            <input placeholder="Password" />
          </div>
        </div>
        <div id="child-two">
          <img src="/assets/castelo.png" id="castle" alt="castelo" />
        </div>
      </section>
      <section id="section-two">
        {itemsUnderCastle.map((i) => (
          <Item key={i.id} {...i} />
        ))}
      </section>
    </main>
  );
};

export default Home;
