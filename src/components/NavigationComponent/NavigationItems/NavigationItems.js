import React from 'react';
import './NavigationItems.scss';
import NavItem from './NavItem/NavItem';

const navLinks = [
    {id: 1, name: 'HOME', url: '/'},
    {id: 2, name: 'QUIENES SOMOS', url: '/quienes-somos'},
    {id: 3, name: 'SERVICIOS', url: '/servicios'},
    {id: 4, name: 'PROFESIONALES', url: '/profesionales'},
    {id: 5, name: 'CONTACTO', url: '/contacto'},
];

const navigationItems = props => (
    <ul className="NavigationItems">
        {navLinks.map(item => (
            <NavItem 
                key={item.id}
                link={item.url} 
                exact>{item.name}</NavItem>
        ))}
    </ul>
);

export default navigationItems;