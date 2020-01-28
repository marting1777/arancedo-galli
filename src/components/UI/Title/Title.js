import React from 'react';
import './Title.scss';

const title = props => (
    <h1 className={props.titleClass}>{props.title}</h1>
);

export default title;