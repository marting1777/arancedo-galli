import React from 'react';
import './Toolbar.scss';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = props => (
    <header className="Toolbar">
        <div>
            <Logo logoClass="Logo"/>
        </div>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <nav className="DesktopOnly">
            <NavigationItems languageType={props.languageTypeSel} />
        </nav>
    </header>
);

export default toolbar;