import React, { Component } from 'react';
import './NavBar.css';

import Aux from '../../HOC/Auxiliar/Auxiliar';
import NavItem from './NavItem/NavItem';
import HamburgerIcon from '../UI/HamburgerIcon/HamburgerIcon';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                {id: 1, name: 'Quienes Somos', link: '/quienes-somos'},
                {id: 2, name: 'Servicios', link: '/servicios'},
                {id: 3, name: 'Profesionales', link: '/profesionales'},
                {id: 4, name: 'Contacto', link: '/contacto'},
            ],
            showSideDrawer: false,
        };
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {

        let navigationList;
        if (this.state.navItems) {
            navigationList = this.state.navItems.map(item => (
                <NavItem 
                    key={item.id} 
                    navItemHref={item.link}
                    navItemValue={item.name}/>
            ));
        }

        let hamburgerClass;
        if (this.state.showSideDrawer) {
            hamburgerClass = 'NavContainer Open';
        } else {
            hamburgerClass = 'NavContainer Close';
        }

        return (
            <Aux>
                <HamburgerIcon clicked={this.sideDrawerToggleHandler}/>
                <nav className={hamburgerClass}>
                    <ul className="NavBar">
                        {navigationList}
                    </ul>
                </nav>
            </Aux>
        );
    };
}

export default NavBar;