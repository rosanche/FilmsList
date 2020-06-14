import React from 'react';

import SVGs from '../../assets/SVGs';

import './back-next.scss';

const BackNext = ({ changePage, filmsPerPage, totalFilms, currentPage }) => {
    const lastPage = Math.ceil(totalFilms / filmsPerPage);

    return (
        <div className='back-next'>
            {currentPage > 1 ? 
                <div className='button' onClick={() => changePage('back')}>
                    <SVGs.Back />
                </div> 
                : null
            }
            {currentPage < lastPage ?
                <div className='button' onClick={() => changePage('next')}>
                    <SVGs.Next 
                        color={currentPage < lastPage ? 'grey' : 'black'}
                    />
                </div> 
                : null
            }
        </div>
    )
}

export default BackNext;