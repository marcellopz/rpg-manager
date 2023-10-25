import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useNavbarContext } from "../../contexts/navbarContext";
import "./home.css";

const Home = () => {
  const [count, setCount] = useState<number>(0);
  const { isAuthenticated } = useContext(AuthContext);
  const n = useNavbarContext();
  console.log(n);
  console.log(isAuthenticated);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="home">
      <section className="home__header">
        <div className="home__backdrop">
          <div>
            <h1>Lorem Ipsum</h1>
            <h2>
              titulo lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam
            </h2>
          </div>
        </div>
      </section>

      <div style={{ display: "flex" }}>
        <h1>Home {count}</h1>
        <button onClick={increment}>increment</button>
      </div>
    </div>
  );
};

export default Home;
