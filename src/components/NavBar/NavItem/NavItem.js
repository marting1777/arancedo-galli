import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavItem.css';

const navItem = props => (
    <li className="NavItem">
        <NavLink exact to={props.navItemHref}>{props.navItemValue}</NavLink>
    </li>
);

export default navItem;