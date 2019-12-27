import React from 'react';
import './Title.css';

const title = props => (
    <h1 className={props.titleClass}>{props.titleText}</h1>
);

export default title;