/* Importar los componentes de las pantallas y el Navbar desde sus respectivos archivos
 En este caso, la aplicación tiene varias pantallas o componentes que se importan desde 
 diferentes archivos, y se muestra un Navbar en la parte superior que permite navegar 
 entre estas pantallas.
 En este código, se importan los componentes de diferentes pantallas y el componente 
 Navbar desde sus archivos correspondientes. Luego, en la función App, se renderizan 
 estos componentes uno tras otro en el orden en que aparecen. Esto significa que el 
 Navbar se mostrará en la parte superior de la página, seguido de los componentes 
 Home, Servicios, Trabajamos, Beneficios y Contact.

Cada uno de estos componentes es un fragmento de la interfaz de usuario de la aplicación. 
Por lo tanto, se renderizarán en la página según el orden en que se encuentren en el código.*/

import Home from "./Screens/Home";
import Servicios from "./Screens/Services";
import Trabajamos from "./Screens/Trabajamos";
import Beneficios from "./Screens/Benefits";
import Contact from "./Screens/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      {/* Renderizar el Navbar en la parte superior */}
      <Navbar/>

      {/* Renderizar el componente Home */}
      <Home/>

      {/* Renderizar el componente Servicios */}
      <Servicios/>

      {/* Renderizar el componente Trabajamos */}
      <Trabajamos/>

      {/* Renderizar el componente Beneficios */}
      <Beneficios/>

      {/* Renderizar el componente Contact */}
      <Contact/>
    </div>
  );
}

export default App;
