/*El código proporcionado es un componente React llamado Trabajamos que muestra una sección de 
"Cómo trabajamos" en un sitio web.
En general, este componente renderiza una sección llamada "Cómo trabajamos" y muestra una lista
de pasos utilizando el componente Step. Cada paso se pasa como una prop llamada text al 
componente Step, y también se le asigna una clave única (key) para el mapeo en el bucle. 
Cada paso se muestra con el número de paso correspondiente.*/

import React from "react";
import styles from "./HowWeWork.module.css";
import Step from "../Components/Step";

const Trabajamos = () => {
  const steps = [
    {
      id: 1,
      text: "Tú nos cuentas tu propuesta.",
    },
    {
      id: 2,
      text: "Diseñamos tu sitio y hacemos una revisión.",
    },
    {
      id: 3,
      text: "Desarrollamos tu sitio web.",
    },
    {
      id: 4,
      text: "Implementamos tu sitio web.",
    },
    {
      id: 5,
      text: "Disfrutas de todos los beneficios de tener un sitio web para tu empresa.",
    },
  ];

  return (
    <div name="Trabajamos" className={styles.howWeWork}>
      <h2 className={styles.title}>Cómo trabajamos</h2>
      {steps.map(({ id, text }) => (
        <Step key={id} text={text} step={id} />
      ))}
    </div>
  );
};

export default Trabajamos;
