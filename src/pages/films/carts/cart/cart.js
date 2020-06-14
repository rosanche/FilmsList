import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import Title from '../../../../components/title/title';
import Category from '../../../../components/category-case/category-case';
import Gauge from '../../../../components/gauge/gauge';
import LikesDislikes from '../../../../components/likes-dislikes/likes-dislikes';
import SVG from '../../../../assets/SVGs';

import './cart.scss';

const Cart = ({ film }) => {
    const dispatch = useDispatch();

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const likeToggle = () => {
        setLiked(!liked);
        if (disliked) {
            setDisliked(!disliked);
            film.dislikes--;
            film.likes++;
        }
        else
            film.likes += liked ? -1 : 1;
    }

    const dislikeToggle = () => {
        setDisliked(!disliked);
        if (liked) {
            setLiked(!liked);
            film.likes--;
            film.dislikes++;
        }
        else
            film.dislikes += disliked ? -1 : 1;
    }

    return (
        <li className="cart">
            <div className='title-delete'>
                <Title title={film.title} />
                <div className='delete' onClick={() => dispatch({type: 'DELETE', value: film})}>
                    <SVG.Delete />
                </div>
            </div>
            <div className='category-likes'>
                <Category category={film.category} />
                <LikesDislikes 
                    liked={liked} 
                    disliked={disliked} 
                    likeToggle={likeToggle}
                    dislikeToggle={dislikeToggle}
                />
            </div>
            <Gauge likes={film.likes} dislikes={film.dislikes} />
        </li>
    );
}

export default Cart;