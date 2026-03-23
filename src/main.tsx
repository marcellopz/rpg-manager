import ReactDOM from "react-dom/client";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import App from "./App.tsx";
import "./i18n.ts";
import "./index.css";
import "./reset.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <>
    <App />
    <Analytics />
    <SpeedInsights />
  </>
  // </React.StrictMode>,
);

if (window.location.pathname === "/newhome") {
  document.getElementById("root")!.classList.add("root-home");
}
