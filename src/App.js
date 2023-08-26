import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { useState } from "react";

function App() {
  const [listState, setListState] = useState([]);

  return (
    <div className='layout'>
      {/*Cabecera*/}
      <header className='header'>
        <div className='logo'>
          <div className='play'></div>
        </div>
        <h1>Mis pelis</h1>
      </header>

      {/*Menú de navegación*/}
      <nav className='nav'>
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
      <section className='content'>
        {/*Listado de peliculas*/}
        <Listado listState={listState} setListState={setListState} />
      </section>

      {/*Barra lateral*/}
      <aside className='lateral'>
        <Buscador listState={listState} setListState={setListState} />
        <Crear setListState={setListState} />
      </aside>

      {/*Footer de la página*/}
      <footer className='footer'>
        &copy; Master en React y JavaScript
      </footer>
    </div>
  );
}

export default App;
