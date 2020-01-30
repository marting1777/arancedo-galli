import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.scss';

const navItem = props => (
    <li className="NavItem">
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName="active">{props.children}</NavLink>
    </li>
);

export default navItem;