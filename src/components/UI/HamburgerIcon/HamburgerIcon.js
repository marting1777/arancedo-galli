import React from 'react';
import './HamburgerIcon.css';

const hamburgerIcon = props => (
    <div className="HamburgerIcon" onClick={props.clicked}>
        <span></span>
        <span></span>
        <span></span>
    </div>
);

export default hamburgerIcon;