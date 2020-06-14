import React from 'react';

import './page-title.scss';

const PageTitle = ({ title }) => {
    return (
        <span className='page-title'>
            {title}
        </span>
    )
}

export default PageTitle;