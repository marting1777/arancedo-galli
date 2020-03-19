import React from 'react';
import './SideDrawer.scss';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = props => {
    let attachedClasses = "SideDrawer Close";
    if (props.open) {
        attachedClasses = "SideDrawer Open";
    }

    return (
        <>
            <Backdrop
                show={props.open}
                clicked={props.closed}/>
            <div className={attachedClasses} onClick={props.closed}>
                <div className="Logo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems languageType={props.languageSel}/>
                </nav>
            </div>
        </>
    );
}

export default sideDrawer;