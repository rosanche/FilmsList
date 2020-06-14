import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Category from './category/category';
import SVGs from '../../../assets/SVGs';

import './categories.scss';

const Categories = ({ films }) => {
    const [categories, setCategories] = useState([]);
    const [clicked, setClicked] = useState(false);
    const checkedCategories = useSelector(state => state.categories.checkedCategories)
    const dispatch = useDispatch();
    
    useEffect(() => {
        let filmCategories = [];
        films.forEach((film) => {
            if (filmCategories.findIndex(item => item === film.category) === -1)
                filmCategories.push(film.category);
        })
        setCategories(filmCategories);
        checkedCategories.forEach(category => {
            if (filmCategories.findIndex(item => item === category) === -1)
                dispatch({type: 'TOGGLE_CATEGORIE', value: category})
        })
    }, [films, checkedCategories, dispatch]);


    return (
        <div className={clicked ? 'categories clicked' : 'categories'}>
            <span className='title-category' onClick={() => setClicked(!clicked)}>
                Category<div className='arrow'><SVGs.Arrow /></div>
            </span>

            <ul className='list-categories'>
                {categories.map((category, index) => {
                    return (
                        <Category key={category.length} category={category} checkedCategories={checkedCategories}/>
                    )
                })}
            </ul>
        </div>
    );
}

export default Categories;