import React, { useState } from 'react';
import { GuardarEnStorage } from './helpers/GuardarEnStorage';

export const Crear = () => {
    const componentTitle = 'Añadir pelicula';
    const [filmState, setFilmState] = useState({
        title: '',
        description: ''
    });

    const {title, description} = filmState;

    //Obtención de información del formulario
    const getFormData = e => {
        e.preventDefault();

        let target = e.target;
        let filmTitle = target.title.value;
        let filmDescription = target.description.value;

        let film = {
            id: new Date().getTime(),
            title: filmTitle,
            description: filmDescription
        }

        //Guardado del estado
        setFilmState(film);

        //Guardado en el LocalStorage
        GuardarEnStorage('films', film);
    }

    return (
        <div class='add'>
            <h3 class='title'>{componentTitle}</h3>

            {/*Confirmación a la hora de crear la pelicula*/}
            {(title && description) && 'Se ha creado la pelicula ' + title}
            <form onSubmit={getFormData}>
                <input type='text' id='title' name='title' placeholder='Título' />
                <textarea id='description' name='description' placeholder='Descripción' />
                <input type='submit' id='save' name='save' value='Guardar' />
            </form>
        </div>
    )
}
