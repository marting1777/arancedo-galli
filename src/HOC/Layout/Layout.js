import React, { useState } from 'react';
import './Layout.scss';
import Toolbar from '../../components/NavigationComponent/Toolbar/Toolbar';
import SideDrawer from '../../components/NavigationComponent/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import FooterIT from '../../components/FooterIT/FooterIT';


const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => setShowSideDrawer(false);
    const sideDrawerToggleHandler = () => setShowSideDrawer(!showSideDrawer);

    return (
        <>
            <select style={{position: 'fixed', zIndex: 100}} className="selectpicker" data-width="fit" onChange={props.changeLanguageHandler}>
                <option value="es" data-content='<span className="flag-icon flag-icon-mx"></span> Español'>Español</option>
                <option value="it" data-content='<span className="flag-icon flag-icon-us"></span> English'>Italiano</option>
                <option value="en" data-content='<span className="flag-icon flag-icon-us"></span> English'>English</option>
            </select>
            <Toolbar
                languageTypeSel={props.languageRol}
                drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer 
                closed={sideDrawerClosedHandler} 
                open={showSideDrawer}/>
            <main className="Content">
                {props.children} 
            </main>
            {props.languageRol === 'es' ? <Footer /> : <FooterIT />}
        </>
    );
};

export default Layout;