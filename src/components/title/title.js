import React from 'react';

import './title.scss';

const Title = (props) => {
    return (
    <span className="title">{props.title}</span>
    );
}

export default Title;