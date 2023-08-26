import React, { useState } from 'react';

export const Buscador = ({listState, setListState}) => {

  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);

  const searchFilm = (e) => {
    setSearch(e.target.value);

    //Filtro para buscar peliculas
    let foundFilms = listState.filter(film => {
      return film.title.toLowerCase().includes(search.toLowerCase());
    });


    if(search.length <= 1 || foundFilms <= 0) {
      foundFilms = JSON.parse(localStorage.getItem('films'));
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    
    setListState(foundFilms);
  }

  return (
    <div className='search'>
        <h3 className='title'>Buscador</h3>
        {(notFound === true && search.length > 1) && (
          <span className='notFound'>No se ha encontrado ningún resultado</span>
        )}
        <form>
          <input type='text' id='search_text'
                 name='search' autoComplete='off'
                 value={search} placeholder='Título'
                 onChange={searchFilm}
              />
          <button>Buscar</button>
        </form>
    </div>
  )
}
