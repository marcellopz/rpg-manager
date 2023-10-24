import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useNavbarContext } from "../../contexts/navbarContext";

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
    <div>
      <img
        src="src/assets/home-background.webp"
        alt="background"
        width="100%"
        style={{
          zIndex: -1,
          maxHeight: "500px",
        }}
      />
      <h1>Home {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Home;
