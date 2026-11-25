
import { useEffect, useState } from "react";
import "./SplashScren.css";

function SplashScreen({ onFinish, duration = 6500 }) {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setFinished(true);
      onFinish?.();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [duration, onFinish]);

  return (
    <main
      className={`splash-screen ${
        finished ? "splash-screen--finished" : ""
      }`}
    >
      {/* Logo SENA y nombre de la aplicación */}
      <section className="splash-brand">
        <img
          className="splash-logo"
          src="./src/assets/images/logo.png"
          alt="Logo SENA"
        />

        <h1 className="splash-wordmark">
          <span>Vota</span>
          <strong>Sena</strong>
        </h1>
      </section>

      {/* Bienvenida */}
      <section className="splash-welcome">
        <h2>Sistema de Votación Institucional</h2>

        <p>
          “En el SENA, decidir también es formarse”
        </p>

        <h3>Bienvenidos</h3>
      </section>
      <section className="splash-footer">
        <img
          className="splash-footer-logos"
          src="./src/assets/images/Elecciones.png"
          alt="Logos institucionales"
        />
      </section>
      
    </main>
  );
}

export default SplashScreen;
