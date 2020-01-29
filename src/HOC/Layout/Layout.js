import React, { Component } from 'react';
import './Layout.scss';
import Toolbar from '../../components/NavigationComponent/Toolbar/Toolbar';
import SideDrawer from '../../components/NavigationComponent/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';


class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <>
                <Toolbar
                    drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    closed={this.sideDrawerClosedHandler} 
                    open={this.state.showSideDrawer}/>
                <main className="Content">
                    {this.props.children} 
                </main>
                <Footer />
            </>
        );
    };
}

export default Layout;