import React from 'react';
import { movies$ as movies } from '../../assets/movies'; 
import { useDispatch } from 'react-redux';

// export const deleteFilm = props => {
//     dispatch({ type: 'DELETE', value: props })
// }

// export const receiveFilms = () => {
//     const dispatch = useDispatch();

//     movies.then(
//         (response) => {
//     return (JSON.stringify(response))
//     })
//     .then(datas => {return (JSON.parse(datas))})
//     .then(array => dispatch({ type: 'FILMS_RECEIVED', value: array}))
// }