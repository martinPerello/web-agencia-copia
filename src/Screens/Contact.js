/*Componente Contact, que muestra un formulario de contacto. 
En este componente, se define un formulario de contacto con tres campos: Nombre y Apellido, Email y 
Mensaje. 
Cuando el usuario envía el formulario, los datos se enviarán a la URL especificada en el atributo 
action del formulario.

Cada campo del formulario está definido dentro de un elemento label que proporciona una etiqueta 
descriptiva para el campo. 
El atributo htmlFor del elemento label se utiliza para asociar la etiqueta con el campo correspondiente
 mediante el uso del atributo id del campo.

Los estilos para este componente se encuentran en el archivo Contact.module.css, y se aplicarán 
a los elementos del formulario y el contenedor principal (div) del componente.

En resumen, el componente Contact muestra un formulario de contacto donde los usuarios pueden ingresar 
su nombre, correo electrónico y mensaje, y enviarlo al servidor especificado en el atributo action. 
Esto permite que los visitantes se pongan en contacto con el propietario del sitio web.*/

import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      {/* Título de la sección de contacto */}
      <h2>Contactos</h2>
      {/* Formulario de contacto */}
      <form
        className={styles.form}
        method="POST"
        action="https://getform.io/f/e82286a8-46e5-424b-8a0d-8054b577521b"
      >
        {/* Campo de Nombre y Apellido */}
        <label htmlFor="Nombre">Nombre y Apellido</label>
        <input
          id="Nombre"
          name="Nombre"
          className={styles.ingreso}
        ></input>
        {/* Campo de Email */}
        <label htmlFor="Email">E-Mail</label>
        <input
          id="Email"
          name="Email"
          type="email"
          className={styles.ingreso}
        ></input>
        {/* Campo de Mensaje */}
        <label htmlFor="Mensaje">Mensaje</label>
        <textarea
          id="Mensaje"
          name="Mensaje"
          type="text"
          className={styles.textArea}
        ></textarea>
        {/* Botón para enviar el formulario */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
