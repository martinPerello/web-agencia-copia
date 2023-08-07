/*La primera sección contiene el título principal de la página.
La segunda sección es la llamada a la acción (CTA) que contiene los enlaces de "Ponerse en contacto" y 
"Obtener un presupuesto".
El primer enlace "Ponerse en contacto" redirige a la sección "Contact" usando la función smooth y
 una duración de animación de 500 milisegundos.

El segundo enlace "Obtener un presupuesto" también redirige a la sección "Contact" con una animación
 suave y una duración de 500 milisegundos.
Ambos enlaces utilizan la clase de estilo styles.callToAction definida en el archivo "Home.module.css".*/

import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      {/* Sección del título */}
      <div className={styles.titleContainer}>
        <p>
          Expande tu <br />
          <b>NEGOCIO</b>
        </p>
        <p>
          con la mejor <br />
          <b>presencia ONLINE</b>
        </p>
      </div>

      {/* Sección de llamada a la acción (CTA) */}
      <div className={styles.ctaContainer}>
        {/* Enlace para "Ponerse en contacto" */}
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Ponerse en contacto
        </Link>

        {/* Enlace para "Obtener un presupuesto" */}
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Obtener un presupuesto
        </Link>
      </div>
    </div>
  );
};

export default Home;
