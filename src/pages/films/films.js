import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movies$ as movies } from '../../assets/movies';

import Carts from './carts/carts';
import Categories from './categories/categories';
import PageTitle from '../../components/page-title/page-title';
import BackNext from '../../components/backnext/back-next';
import CartsNumber from './carts-numbers/carts-number';

import './films.scss';

const Films = () => {
    const dispatch = useDispatch();
    const dataFilms = useSelector(state => state.films.films);
    const categoriesChecked = useSelector(state => state.categories.checkedCategories);
    const [films, setFilms] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage, setFilmsPerPage] = useState(4)

    useEffect(() => {
        movies.then(
            (response) => {
        return (JSON.stringify(response))
        })
        .then(datas => {return (JSON.parse(datas))})
        .then(array => dispatch({ type: 'FILMS_RECEIVED', value: array}))
    }, [dispatch])

    useEffect(() => {
        let films;
        if (categoriesChecked.length > 0)
            films = dataFilms.filter(film => 
                categoriesChecked.findIndex(item => item === film.category) !== -1
            )
        else
            films = dataFilms;
        setFilms(films);
        setCurrentPage(1);
    }, [categoriesChecked, dataFilms, filmsPerPage])

    const lastIndexFilms = currentPage * filmsPerPage;
    const firstIndexFilms = lastIndexFilms - filmsPerPage;
    const currentFilms = films.slice(firstIndexFilms, lastIndexFilms);

    const changePage = (action) => {
        if (action === 'back')
            setCurrentPage(currentPage - 1);
        else if (action === 'next')
            setCurrentPage(currentPage + 1);
    }

    const changeFilmsPerPage = (number) => {
        setFilmsPerPage(number);
    }

    return (
        <div className="films">
            <div className='header'>
                <PageTitle title='Films' />
                <Categories films={dataFilms} />
                <CartsNumber filmsNb={filmsPerPage} changeFilmsNb={changeFilmsPerPage}/>
                <BackNext 
                    filmsPerPage={filmsPerPage}
                    totalFilms={films.length}
                    changePage={changePage}
                    currentPage={currentPage}
                />
            </div>
            <Carts films={currentFilms}/>
        </div>
    );
}

export default Films;