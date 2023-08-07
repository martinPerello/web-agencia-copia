/*Atributo "alt" en la imagen:
Es importante agregar un atributo "alt" a la etiqueta <img> para proporcionar una descripción 
textual de la imagen. Esto es útil para accesibilidad y SEO. En el ejemplo anterior, he agregado
 el atributo "alt" con un texto de ejemplo, pero deberías reemplazarlo con una descripción 
 adecuada para tu imagen.

Espaciado consistente:
Asegúrate de mantener un espaciado consistente en todo el código para mejorar la legibilidad. 
Por ejemplo, podrías añadir un salto de línea después de la etiqueta <img>.*/

import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div name="Servicios" className={styles.services}>
      <p>
        Solucionamos los problemas de tu empresa creando increíbles páginas web.
      </p>
      <img
        className={styles.webImage}
        src={require("../assets/webImage.jpg")}
        alt="Imagen de ejemplo"
      />
    </div>
  );
};

export default Services;
