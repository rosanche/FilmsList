import React from 'react';
import Cart from './cart/cart';

import './carts.scss';

const Carts = ({films}) => {

    return (
        <ul className='carts'>
            {films.map((film) =>{
                return (
                    <Cart key={film.id} film={film}/>
                );
            })}
        </ul>
    );
}

export default Carts;