import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import SVGs from '../../../../assets/SVGs';

import './category.scss';

const Category = ({ category, checkedCategories}) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const categoryToggle = () => {
        dispatch({type: 'TOGGLE_CATEGORIE', value: category})
        setChecked(!checked);
    }

    return (
        <li className='category' onClick={() => categoryToggle()}>
            <div className= 'checked'>
                {checked ? <SVGs.Checked /> : null}
            </div>
            {category}
        </li>
    )
}

export default Category;