import React from 'react';

import './category.scss';

const Category = (props) => {
    return (
        <div className='category'>
            <span className='name'>{props.category}</span>
        </div>
    );
}

export default Category;