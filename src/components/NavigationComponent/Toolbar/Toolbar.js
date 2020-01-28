import React from 'react';
import './Toolbar.scss';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


const toolbar = props => (
    <header className="Toolbar">
        <div className="Logo">
            <Logo />
        </div>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;