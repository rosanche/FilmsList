import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movies$ as movies } from '../../assets/movies';

import Carts from './carts/carts';

import './films.scss';

const Films = () => {
    const dispatch = useDispatch();
    const films = useSelector(state => state.films);

    useEffect(() => {
        movies.then(
            (response) => {
        return (JSON.stringify(response))
        })
        .then(datas => {return (JSON.parse(datas))})
        .then(array => dispatch({ type: 'FILMS_RECEIVED', value: array}))
    }, [])

    return (
        <div className="films">
            <Carts films={films} />
        </div>
    );
}

export default Films;