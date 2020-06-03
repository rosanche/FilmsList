import React from 'react';

import Title from '../../../../components/title/title';
import Category from '../../../../components/category/category';
import Gauge from '../../../../components/gauge/gauge';
import SVG from '../../../../assets/SVGs';

import './cart.scss';
// import Category from '../../../components/category/category';

const Cart = (props) => {
    const { film } = props;
    const allLikes = film.likes + film.dislikes;
    console.log(film.title + ':' + allLikes);

    return (
        <div className="cart">
            <Title title={film.title} />
            <SVG.Delete />
            <Category category={film.category} />
            <Gauge likes={film.likes} dislikes={film.dislikes} />
        </div>
    );
}

export default Cart;