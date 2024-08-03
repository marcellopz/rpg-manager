import { useEffect } from "react";
import AuthProvider from "./contexts/authContext";
import { uploadError } from "./contexts/firebase/database";
import AppRoutes from "./routes/routes";

function App() {
  useEffect(() => {
    window.onerror = (message, source, lineno, colno, error) => {
      console.log("error", { message, source, lineno, colno, error });
      uploadError({
        message,
        source,
        lineno,
        colno,
        error,
      });
    };
  }, []);

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
