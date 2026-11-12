
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";
import "./styles/variables.css";

import Perfil from "./pages/perfil/perfil.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Perfil />
  </StrictMode>
);

