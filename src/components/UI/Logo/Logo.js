import React from 'react';
import { NavLink } from 'react-router-dom'

const logo = props => (
    <NavLink className={props.logoClass} to={props.logoHref}>{props.logoText}</NavLink>
);

export default logo;