import React from 'react';

import SVGs from '../../assets/SVGs';

import './likes-dislikes.scss'

const LikesDislikes = ({ liked, disliked, likeToggle, dislikeToggle }) => {
    return (
        <div className='likes-dislikes'>
            <div className='icon' onClick={() => likeToggle()}>
                <SVGs.Like color={liked ? 'green' : 'grey'}/>
            </div>
            <div className='icon' onClick={() => dislikeToggle()}>
                <SVGs.Dislike color={disliked ? 'red' : 'grey'}/>
            </div>
        </div> 
    )
}

export default LikesDislikes;