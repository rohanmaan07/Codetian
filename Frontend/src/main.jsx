import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Loader } from "./components/Loader.jsx";

const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={
        <Loader/>
      }
    >
      <App />
    </Suspense>
  </StrictMode>
);
