/*Define un hook personalizado llamado useScrollPosition, que se utiliza para obtener y mantener 
la posición de desplazamiento vertical (scroll) de la página. 
Funcionamiento del hook useScrollPosition:

Al utilizar este hook, obtendrás la posición de desplazamiento vertical de la página en tiempo real. 
El valor de la posición de desplazamiento se almacenará en el estado local scrollPosition.

El hook utiliza el efecto secundario useEffect para realizar la suscripción al evento de 
desplazamiento (scroll) del navegador cuando el componente que utiliza el hook se monta en el DOM.

Dentro del efecto useEffect, se define la función updatePosition, que se encarga de actualizar el estado
scrollPosition con el valor actual del desplazamiento vertical (window.scrollY).

Al montar el componente, se llama a updatePosition inmediatamente para establecer el estado scrollPosition 
con el valor inicial de la posición de desplazamiento.

Al desmontar el componente (cuando se elimina del DOM), se eliminará el evento de escucha del evento de 
desplazamiento (window.removeEventListener("scroll", updatePosition)) para evitar posibles fugas de memoria.

Finalmente, el hook useScrollPosition devuelve la posición de desplazamiento actual, que puede ser utilizada en el componente que utiliza el hook para realizar diferentes acciones basadas en la posición de desplazamiento.

En resumen, este hook personalizado useScrollPosition facilita la obtención de la posición de desplazamiento 
vertical de la página y su actualización en tiempo real cada vez que ocurre un evento de desplazamiento. 
Es útil para crear componentes y comportamientos que respondan al desplazamiento del usuario en la página.*/

import { useEffect, useState } from "react";

export const useScrollPosition = () => {
    // Estado local para almacenar la posición de desplazamiento
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // Función para actualizar la posición de desplazamiento
        const updatePosition = () => {
            // Obtener la posición de desplazamiento vertical de la página
            setScrollPosition(window.scrollY);
        };

        // Agregar un evento de escucha para el evento "scroll" del navegador
        window.addEventListener("scroll", updatePosition);

        // Actualizar la posición de desplazamiento al montar el componente
        updatePosition();

        // Eliminar el evento de escucha al desmontar el componente para evitar fugas de memoria
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    // Devolver la posición de desplazamiento actual
    return scrollPosition;
};
