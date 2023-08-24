import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";

function App() {
  return (
    <div class='layout'>
      {/*Cabecera*/}
      <header class='header'>
        <div class='logo'>
          <div class='play'></div>
        </div>
        <h1>Mis pelis</h1>
      </header>

      {/*Menú de navegación*/}
      <nav class='nav'>
        <ul>
          <li>
            <a href='/#'>Inicio</a>
            <a href='/#'>Películas</a>
            <a href='/#'>Blog</a>
            <a href='/#'>Contacto</a>
          </li>
        </ul>
      </nav>

      {/*Contenido principal*/}
      <section class='content'>
        {/*Listado de peliculas*/}
        <Listado />
      </section>

      {/*Barra lateral*/}
      <aside class='lateral'>
        <Buscador />
        <Crear />
      </aside>

      {/*Footer de la página*/}
      <footer class='footer'>
        &copy; Master en React y JavaScript
      </footer>
    </div>
  );
}

export default App;
