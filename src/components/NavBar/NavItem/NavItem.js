import React from 'react';
import './NavItem.css';

const navItem = props => (
    <li className="NavItem">
        <a href={props.navItemHref}>{props.navItemValue}</a>
    </li>
);

export default navItem;