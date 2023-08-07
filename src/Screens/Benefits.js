/*define el componente Benefits, que muestra una lista de beneficios de tener 
una web profesional junto con íconos representativos para cada beneficio. 
El componente Benefits muestra una lista de beneficios relacionados con tener una web profesional. 
Cada beneficio se muestra en un párrafo (<p>) junto con el ícono asociado. 
Los íconos son importados de las librerías react-icons/bs, react-icons/fa, react-icons/ai, 
y react-icons/fi, y se utilizan para dar una representación visual a cada beneficio.

En el CSS (Benefits.module.css), se pueden definir estilos adicionales para el componente, 
como el color, tamaño de fuente y espaciado entre elementos.

Es importante mencionar que el componente utiliza el atributo name="Beneficios" en el 
contenedor principal (<div>) para proporcionar un nombre a la sección. 
Esto puede ser útil cuando se utiliza un enlace para navegar a esta sección específica en la página.

En resumen, el componente Benefits representa una lista de beneficios con íconos 
que destacan las ventajas de tener una web profesional. 
Estos beneficios pueden ser personalizados y adaptados según las necesidades del proyecto.*/

import React from "react";
import styles from "./Benefits.module.css";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";

const Benefits = () => {
  return (
    <div name="Beneficios" className={styles.benefits}>
      {/* Título de la sección de beneficios */}
      <h2 className={styles.benefitTitle}>
        Beneficios de tener una web profesional
      </h2>
      {/* Lista de beneficios con íconos */}
      <p>
        Te abres al mundo <BsFillDoorOpenFill />
      </p>
      <p>
        Nuevos clientes <FaPeopleCarry />
      </p>
      <p>
        Costos mucho más bajos <FaMoneyBillAlt />
      </p>
      <p>
        Sin horarios <AiOutlineSchedule />
      </p>
      <p>
        Marketing ultrasegmentado + alta conversión <AiOutlineRise />
      </p>
      <p>
        Automatización, menos trabajo, más rendimiento <FiRepeat />
      </p>
    </div>
  );
};

export default Benefits;
