/*Define un componente Step que muestra un paso o elemento en una lista o proceso. 
El componente Step recibe dos propiedades (props) desde su componente padre:

text: El texto del paso que se mostrará.
step: El número del paso que se mostrará.
Dentro del componente Step, se usa el archivo de estilos CSS Step.module.css para aplicar estilos
específicos. 
Los estilos CSS se utilizan para dar formato al diseño del paso, mostrando el número del paso y el 
texto del paso en un diseño específico.

La etiqueta <div> con la clase styles.container es el contenedor principal del componente Step.
Dentro de este contenedor, hay otro div con la clase styles.stepContainer que contiene el 
número del paso (<p className={styles.stepNumber}>{step}</p>)
y el texto del paso (<p className={styles.text}>{text}</p>).

Finalmente, el componente Step muestra una línea decorativa debajo del paso utilizando la etiqueta <div> 
con la clase styles.stepBorder.

En resumen, este componente Step puede ser utilizado para mostrar una serie de pasos en una lista o 
proceso, donde cada paso tiene un número y un texto asociado.*/

import React from "react";
import styles from "./Step.module.css";

const Step = ({ text, step }) => {
  return (
    <div className={styles.container}>
      {/* Contenedor para mostrar el número de paso y el texto del paso */}
      <div className={styles.stepContainer}>
        {/* Muestra el número del paso */}
        <p className={styles.stepNumber}>{step}</p>
        {/* Muestra el texto del paso */}
        <p className={styles.text}>{text}</p>
      </div>
      {/* Línea decorativa que se muestra debajo del paso */}
      <div className={styles.stepBorder}></div>
    </div>
  );
};

export default Step;
