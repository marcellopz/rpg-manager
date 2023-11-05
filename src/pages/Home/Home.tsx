import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useNavbarContext } from "../../contexts/navbarContext";
import "./home.css";

const itemsUnderCastle = [
  {
    id: 1,
    name: "Lorem Ipsum",
    description: "Lorem Ipsum",
    img: "public/assets/img/icone.svg",
  },
  {
    id: 2,
    name: "Lorem Ipsum",
    description: "Lorem Ipsum",
    img: "public/assets/img/icone.svg",
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    description: "Lorem Ipsum",
    img: "public/assets/img/icone.svg",
  },
  {
    id: 4,
    name: "Lorem Ipsum",
    description: "Lorem Ipsum",
    img: "public/assets/img/icone.svg",
  },
];

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const n = useNavbarContext();
  console.log(n, isAuthenticated);

  return (
    <main>
      <section id="section-one">
        <div id="child-one">
          <div id="knife-and-text">
            <img src="public/assets/faca.svg" id="knife" alt="faca" />
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
          <img src="public/assets/castelo.png" id="castle" alt="castelo" />
        </div>
      </section>
      <section id="section-two">
        <div id="items-names">
          {itemsUnderCastle.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
        <div id="element-bar-img">
          {itemsUnderCastle.map((item) => (
            <div key={item.id}>
              <img
                src="public/assets/barra_elemento.svg"
                className="element-bar"
                alt="element-bar"
              />
            </div>
          ))}
        </div>
        <div id="habilities-img">
          <img src="public/assets/icone.svg" className="img" alt="habilidade" />
          <img src="public/assets/icone.svg" className="img" alt="habilidade" />
          <img src="public/assets/icone.svg" className="img" alt="habilidade" />
          <img src="public/assets/icone.svg" className="img" alt="habilidade" />
        </div>
      </section>
    </main>
  );
};

export default Home;
