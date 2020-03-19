import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.scss';

const logo = props => (
    <div className={props.logoClass}>
        <NavLink className="LogoLink" to="/"><p>ARANCEDO - GALLI</p></NavLink>
    </div>
);

export default logo;