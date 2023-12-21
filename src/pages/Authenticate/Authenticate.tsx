import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "./authenticate.css";
import { useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { t } from "i18next";

export default function Authenticate() {
  const { authUser, signInGoogle, signInEmailPwd, signUpEmailPwd } =
    useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [registered, setRegistered] = useState<boolean>(true);

  if (authUser) {
    return <Navigate to="/" />;
  }

  const handleSignUp = () => {
    if (email && password && password === repeatPassword) {
      signUpEmailPwd(email, password);
    }
  };

  const handleSignIn = () => {
    if (email && password) {
      signInEmailPwd(email, password);
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSignIn();
    }
  };

  if (registered) {
    return (
      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-header">
            <Link to="/">
              <img
                className="small invert"
                src="assets/dado.svg"
              />
            </Link>
            <h1>{t("LOGIN")}</h1>
          </div>
          <div className="auth-fields">
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeydown}
            />
          </div>
          <div className="auth-footer1">
            <div
              className="cursor-pointer"
              onClick={() => {
                setRegistered(false);
              }}
            >
              {t("NOT_REGISTERED")}
            </div>
            <button
              onClick={handleSignIn}
              className="auth-btn"
            >
              {t("LOGIN")}
            </button>
          </div>
          <div className="divider">
            <p>{t("OR")}</p>
          </div>
          <div className="auth-footer2">
            <button onClick={signInGoogle}>
              <img
                src="data:image/svg+xml;charset=utf8;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjEwIDEwIDI4IDI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzUuOTk5OSAyNC4yNzQxQzM1Ljk5OTkgMjMuNDU4NCAzNS45MzI0IDIyLjYzODQgMzUuNzg4NCAyMS44MzU5SDI0LjI0MTdWMjYuNDU2NUgzMC44NTRDMzAuNTc5NiAyNy45NDY3IDI5LjY5NzkgMjkuMjY0OSAyOC40MDcgMzAuMTAyNlYzMy4xMDA3SDMyLjM1MTlDMzQuNjY4NCAzMS4wMTA4IDM1Ljk5OTkgMjcuOTI0NiAzNS45OTk5IDI0LjI3NDFaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0yNC4yNDE3IDM1Ljk5ODRDMjcuNTQzNCAzNS45OTg0IDMwLjMyNzcgMzQuOTM1OSAzMi4zNTY0IDMzLjEwMThMMjguNDExNSAzMC4xMDM3QzI3LjMxNCAzMC44MzU2IDI1Ljg5NzEgMzEuMjUgMjQuMjQ2MiAzMS4yNUMyMS4wNTI2IDMxLjI1IDE4LjM0NDcgMjkuMTM4MiAxNy4zNzMxIDI2LjI5ODhIMTMuMzAyMlYyOS4zODk1QzE1LjM4MDQgMzMuNDQxMiAxOS42MTMxIDM1Ljk5ODQgMjQuMjQxNyAzNS45OTg0WiIgZmlsbD0iIzM0QTg1MyIvPgo8cGF0aCBkPSJNMTcuMzY4NSAyNi4yOThDMTYuODU1NyAyNC44MDc4IDE2Ljg1NTcgMjMuMTk0MSAxNy4zNjg1IDIxLjcwMzlWMTguNjEzM0gxMy4zMDIyQzExLjU2NTkgMjIuMDAzNyAxMS41NjU5IDI1Ljk5ODIgMTMuMzAyMiAyOS4zODg2TDE3LjM2ODUgMjYuMjk4WiIgZmlsbD0iI0ZCQkMwNCIvPgo8cGF0aCBkPSJNMjQuMjQxNyAxNi43NDkyQzI1Ljk4NyAxNi43MjI3IDI3LjY3MzggMTcuMzY2NCAyOC45Mzc4IDE4LjU0OEwzMi40MzI5IDE1LjEyMjNDMzAuMjE5OCAxMy4wODU0IDI3LjI4MjUgMTEuOTY1NSAyNC4yNDE3IDEyLjAwMDhDMTkuNjEzMSAxMi4wMDA4IDE1LjM4MDQgMTQuNTU4IDEzLjMwMjIgMTguNjE0MkwxNy4zNjg2IDIxLjcwNDhDMTguMzM1NyAxOC44NjExIDIxLjA0ODEgMTYuNzQ5MiAyNC4yNDE3IDE2Ljc0OTJaIiBmaWxsPSIjRUE0MzM1Ii8+Cjwvc3ZnPgo="
                alt="google icon"
              />
              <p>{t("SIGN_WITH_GOOGLE")}</p>
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="auth-main">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/">
            <img
              className="small invert"
              src="assets/dado.svg"
            />
          </Link>
          <h1>{t("REGISTER")}</h1>
        </div>
        <div className="auth-fields">
          {/* <input placeholder="Username" /> */}
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Repeat Password"
            type="password"
            onChange={(e) => setRepeatPassword(e.target.value)}
            onKeyDown={handleKeydown}
          />
        </div>
        <div className="auth-footer1">
          <div
            className="cursor-pointer"
            onClick={() => {
              setRegistered(true);
            }}
          >
            {t("ALREADY_REGISTERED")}
          </div>
          <button
            onClick={handleSignUp}
            className="auth-btn"
          >
            {t("REGISTER")}
          </button>
        </div>
        <div className="divider">
          <p>{t("OR")}</p>
        </div>
        <div className="auth-footer2">
          <button onClick={signInGoogle}>
            <img
              src="data:image/svg+xml;charset=utf8;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjEwIDEwIDI4IDI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzUuOTk5OSAyNC4yNzQxQzM1Ljk5OTkgMjMuNDU4NCAzNS45MzI0IDIyLjYzODQgMzUuNzg4NCAyMS44MzU5SDI0LjI0MTdWMjYuNDU2NUgzMC44NTRDMzAuNTc5NiAyNy45NDY3IDI5LjY5NzkgMjkuMjY0OSAyOC40MDcgMzAuMTAyNlYzMy4xMDA3SDMyLjM1MTlDMzQuNjY4NCAzMS4wMTA4IDM1Ljk5OTkgMjcuOTI0NiAzNS45OTk5IDI0LjI3NDFaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0yNC4yNDE3IDM1Ljk5ODRDMjcuNTQzNCAzNS45OTg0IDMwLjMyNzcgMzQuOTM1OSAzMi4zNTY0IDMzLjEwMThMMjguNDExNSAzMC4xMDM3QzI3LjMxNCAzMC44MzU2IDI1Ljg5NzEgMzEuMjUgMjQuMjQ2MiAzMS4yNUMyMS4wNTI2IDMxLjI1IDE4LjM0NDcgMjkuMTM4MiAxNy4zNzMxIDI2LjI5ODhIMTMuMzAyMlYyOS4zODk1QzE1LjM4MDQgMzMuNDQxMiAxOS42MTMxIDM1Ljk5ODQgMjQuMjQxNyAzNS45OTg0WiIgZmlsbD0iIzM0QTg1MyIvPgo8cGF0aCBkPSJNMTcuMzY4NSAyNi4yOThDMTYuODU1NyAyNC44MDc4IDE2Ljg1NTcgMjMuMTk0MSAxNy4zNjg1IDIxLjcwMzlWMTguNjEzM0gxMy4zMDIyQzExLjU2NTkgMjIuMDAzNyAxMS41NjU5IDI1Ljk5ODIgMTMuMzAyMiAyOS4zODg2TDE3LjM2ODUgMjYuMjk4WiIgZmlsbD0iI0ZCQkMwNCIvPgo8cGF0aCBkPSJNMjQuMjQxNyAxNi43NDkyQzI1Ljk4NyAxNi43MjI3IDI3LjY3MzggMTcuMzY2NCAyOC45Mzc4IDE4LjU0OEwzMi40MzI5IDE1LjEyMjNDMzAuMjE5OCAxMy4wODU0IDI3LjI4MjUgMTEuOTY1NSAyNC4yNDE3IDEyLjAwMDhDMTkuNjEzMSAxMi4wMDA4IDE1LjM4MDQgMTQuNTU4IDEzLjMwMjIgMTguNjE0MkwxNy4zNjg2IDIxLjcwNDhDMTguMzM1NyAxOC44NjExIDIxLjA0ODEgMTYuNzQ5MiAyNC4yNDE3IDE2Ljc0OTJaIiBmaWxsPSIjRUE0MzM1Ii8+Cjwvc3ZnPgo="
              alt="google icon"
            />
            <p>{t("SIGN_WITH_GOOGLE")}</p>
          </button>
        </div>
      </div>
    </main>
  );
}
