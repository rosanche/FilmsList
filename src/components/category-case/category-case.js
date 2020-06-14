import React from 'react';

import './category-case.scss';

const Category = ({ category }) => {
    return (
        <div className='category-case'>
            <span className='name'>{category}</span>
        </div>
    );
}

export default Category;