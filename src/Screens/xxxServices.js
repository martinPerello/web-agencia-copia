import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div name="Servicios" className={styles.services}>
      <p>Solucionamos los problemas de tu empresa creando increíbles páginas web.</p>
      <img
        className={styles.webImage}
        src={require("../assets/webImage.jpg")}
      ></img>
    </div>
  );
};

export default Services;
