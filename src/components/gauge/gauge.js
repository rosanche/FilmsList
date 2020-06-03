import React from 'react';

import './gauge.scss';

const Gauge = (props) => {
    const { likes, dislikes } = props;

    const guessGauge = (number) => {
        const allLikes = likes + dislikes;
        const width = number / allLikes * 100;
        
        return (`${width}%`)
    }

    return (
        <div className='gauge' >
            <div className='likes' style={{width: guessGauge(likes)}}/>
            <div className='dislikes' style={{width: guessGauge(dislikes)}}/>
        </div>
    );
}

export default Gauge;