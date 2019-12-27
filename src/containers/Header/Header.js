import React, { Component } from 'react';
import './Header.css';

import Logo from '../../components/UI/Logo/Logo';
import NavBar from '../../components/NavBar/NavBar';
import Aux from '../../HOC/Auxiliar/Auxiliar';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: {
                class: 'Logo',
                link: '/',
                value: 'Arancedo - Galli',
            },
            showSideDrawer: false,
        };
    }    

    render() {
        return (
            <Aux>
                <header className="Header">
                    <Logo 
                        logoClass={this.state.logo.class}
                        logoHref={this.state.logo.link}
                        logoText={this.state.logo.value}/>
                    <NavBar />
                </header>
            </Aux>
        );
    };
}

export default Header;