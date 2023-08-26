import React from 'react';

export const Editar = ({film, getFilms, setEditFilm, setListState}) => {
    const componentTitle = 'Editar Pelicula';

    const saveEditedFilm = (e, id) => {
        e.preventDefault();
        let target = e.target;

        //Obtención de peliculas e indice dentro del array
        const savedFilms = getFilms();
        const index = savedFilms.findIndex(film => film.id === id);

        //Pelicula actualizada
        let updatedFilm = {
            id,
            title: target.title.value,
            description: target.description.value
        }

        //Actualización del array
        savedFilms[index] = updatedFilm;

        localStorage.setItem('films', JSON.stringify(savedFilms));

        setListState(savedFilms);
        setEditFilm(0);
    }

    return (
        <div className='lateral' id='editForm'>
            <h3 className='title'>{componentTitle}</h3>
            <form onSubmit={ e => saveEditedFilm(e, film.id)}>
                <input type='text' name='title' className='edited_title' defaultValue={film.title} />
                <textarea name='description' className='edited_description' defaultValue={film.description} />
                <input type='submit' className='edit' value='Actualizar' />
            </form>
        </div>
    )
}
