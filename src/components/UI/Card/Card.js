import React from 'react';
import './Card.css';

const card = props => (
    <div className="Card">
        <div className="CardShadow">
            <div className="CardImage" style={props.cardImageStyle}></div>
            <p>{props.cardText}</p>
        </div>
    </div>
);

export default card;