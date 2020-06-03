import React from 'react';
import Cart from './cart/cart';

const Carts = (props) => {
    return (
        props.films.map(film =>{
            return (
                <Cart film={film}/>
            );
        })
    );
}

export default Carts;