/*El componente llamado Navbar que muestra una barra de navegación con enlaces que permiten desplazarse a 
diferentes secciones de la página usando react-scroll.
Este componente Navbar muestra un menú de navegación en la parte superior de la página. 
En dispositivos móviles, el menú se muestra inicialmente colapsado, y al hacer clic en el ícono del menú, 
se despliega el menú completo. En dispositivos de escritorio, el menú se muestra completamente sin 
necesidad de hacer clic en ningún ícono.*/

import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useScrollPosition } from "../Hooks/scrollPosition";

const Navbar = () => {
  // Estado para controlar si el menú desplegable está abierto o cerrado
  const [navBarOpen, setNavBarOpen] = useState(false);

  // Estado para almacenar el ancho y altura de la ventana
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Función para detectar cambios en las dimensiones de la ventana
  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // useEffect para agregar y quitar el listener para el cambio de tamaño de la ventana
  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);

  // Datos de los enlaces de navegación
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Servicios",
    },
    {
      id: 3,
      link: "Trabajamos",
    },
    {
      id: 4,
      link: "Beneficios",
    },
  ];

  // Obtener la posición de desplazamiento vertical usando el custom hook useScrollPosition
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    >
      {!navBarOpen && <p className={styles.logo}>LOGO de Pagina</p>}
      {!navBarOpen && windowDimension.width < 800 ? (
        // Renderizar el ícono del menú en dispositivos móviles cuando el menú está cerrado
        <AiOutlineMenu
          color="#f1f1f1"
          onClick={() => setNavBarOpen(!navBarOpen)}
          size={35}
        />
      ) : (
        // Renderizar el ícono para cerrar el menú en dispositivos móviles cuando el menú está abierto
        windowDimension.width < 800 && (
          <AiOutlineClose
            color="#f1f1f1"
            onClick={() => setNavBarOpen(!navBarOpen)}
            size={35}
          />
        )
      )}

      {/* Renderizar el menú de navegación en dispositivos móviles */}
      {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map(({ id, link }) => (
            <div key={id}>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "Trabajamos" ? "Como trabajamos" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}

      {/* Renderizar el menú de navegación en dispositivos de escritorio */}
      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}>
          {links.map(({ link, id }) => (
            <div key={id}>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "Trabajamos" ? "Como trabajamos" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
          <Link
            onClick={() => setNavBarOpen(false)}
            to="Contact"
            smooth
            duration={500}
            className={styles.contactLink}
          >
            Contacto
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
