import React from 'react';
import './NavigationItems.scss';
import NavItem from './NavItem/NavItem';

const navLinks = [
    {id: 1, name: 'HOME', url: '/'},
    {id: 2, name: 'QUIENES SOMOS', url: '/about-us'},
    {id: 3, name: 'SERVICIOS', url: '/services'},
    {id: 4, name: 'PROFESIONALES', url: '/professionals'},
    {id: 5, name: 'CONTACTO', url: '/contact-us'},
];

const navLinksIt = [
    {id: 1, name: 'HOME', url: '/'},
    {id: 2, name: 'LA NOSTRA FIRMA', url: '/about-us'},
    {id: 3, name: 'SERVIZI LEGALI', url: '/services'},
    {id: 4, name: 'LA NOSTRA GENTE', url: '/professionals'},
    {id: 5, name: 'CONTATTO', url: '/contact-us'},
];

const navLinksEn = [
    {id: 1, name: 'HOME', url: '/'},
    {id: 2, name: 'ABOUT US', url: '/about-us'},
    {id: 3, name: 'SERVICES', url: '/services'},
    {id: 4, name: 'PROFESSIONALS', url: '/professionals'},
    {id: 5, name: 'CONTACT US', url: '/contact-us'},
]

const navigationItems = props => {
    let menuContent;
    if (props.languageType === 'es') {
        menuContent = (
            <ul className="NavigationItems">
                {navLinks.map(item => (
                    <NavItem 
                        key={item.id}
                        link={item.url} 
                        exact>{item.name}</NavItem>
                ))}
            </ul>
        );
    } else if (props.languageType === 'it') {
        menuContent = (
            <ul className="NavigationItems">
                {navLinksIt.map(item => (
                    <NavItem 
                        key={item.id}
                        link={item.url} 
                        exact>{item.name}</NavItem>
                ))}
            </ul>
        );
    } else {
        menuContent = (
            <ul className="NavigationItems">
                {navLinksEn.map(item => (
                    <NavItem 
                        key={item.id}
                        link={item.url} 
                        exact>{item.name}</NavItem>
                ))}
            </ul>
        );
    }
    return menuContent;
};

export default navigationItems;