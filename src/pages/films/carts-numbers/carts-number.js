import React, { useState } from 'react';

import SVGs from '../../../assets/SVGs';

import './carts-numbers.scss';

const CartsNumber = ({ filmsNb, changeFilmsNb }) => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className={clicked ? 'carts-numbers clicked' : 'carts-numbers'}>
            <span className='title-number' onClick={() => setClicked(!clicked)}>
                Nb films : {filmsNb}<div className='arrow'><SVGs.Arrow /></div>
            </span>
            <ul className='list-nb'>
                <li className='number' onClick={() => changeFilmsNb(4)}>
                    <div className= 'checked'>
                        {filmsNb === 4 ? <SVGs.Checked /> : null}
                    </div>
                    4
                </li>
                <li className='number' onClick={() => changeFilmsNb(8)}>
                    <div className= 'checked'>
                        {filmsNb === 8 ? <SVGs.Checked /> : null}
                    </div>
                    8
                </li>
                <li className='number' onClick={() => changeFilmsNb(12)}>
                    <div className= 'checked'>
                        {filmsNb === 12 ? <SVGs.Checked /> : null}
                    </div>
                    12
                </li>
            </ul>
        </div>
    );
}

export default CartsNumber;