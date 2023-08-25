import React, {useEffect, useState} from 'react';

export const Listado = ({listState, setListState}) => {

  const [listState, setListState] = useState([]);

  /* Función que se ejecuta una sola vez al cargar la página
  *  y que se encarga de obtener todas las peliculas del local
  *  storage y las muestra como código HTML */
  useEffect(() => {
    console.log('Componente cargado correctamente');
    getFilms();
  }, []);

  //Obtención de las peliculas
  const getFilms = () => {
    let films = JSON.parse(localStorage.getItem('films'));
    setListState(films);
    return films;
  }

  //Eliminación de peliculas
  const deleteFilm = (id) => {
    let filmList = getFilms();
    let newFilmList = filmList.filter(film => film.id !== parseInt(id));

    setListState(newFilmList);

    localStorage.setItem('films', JSON.stringify(newFilmList));
  }

  return (
    <>
      {listState != null ?
        listState.map(film => {
          return (
            <article key={film.id} className='peli-item'>
              <h3 className='titlte'>{film.title}</h3>
              <p className='description'>{film.description}</p>

              <button className='edit'>Editar</button>
              <button className='delete' onClick={() => {deleteFilm(film.id)}}>Borrar</button>
            </article>
          );
        }): <h2>No hay peliculas disponibles</h2>
      }
    </>
  )
}
