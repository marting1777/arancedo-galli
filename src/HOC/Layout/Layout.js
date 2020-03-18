import React, { useState } from 'react';
import './Layout.scss';
import Toolbar from '../../components/NavigationComponent/Toolbar/Toolbar';
import SideDrawer from '../../components/NavigationComponent/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';


const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => setShowSideDrawer(false);
    const sideDrawerToggleHandler = () => setShowSideDrawer(!showSideDrawer);

    const [language, setLanguage] = useState('es');
    const changeLanguageHandler = event => setLanguage(event.target.value);

    return (
        <>
            <select className="selectpicker" data-width="fit" onChange={changeLanguageHandler}>
                <option value="es" data-content='<span className="flag-icon flag-icon-mx"></span> Español'>Español</option>
                <option value="it" data-content='<span className="flag-icon flag-icon-us"></span> English'>Italiano</option>
                <option value="en" data-content='<span className="flag-icon flag-icon-us"></span> English'>English</option>
            </select>
            <Toolbar
                languageTypeSel={language}
                drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer 
                closed={sideDrawerClosedHandler} 
                open={showSideDrawer}/>
            <main className="Content">
                {props.children} 
            </main>
            <Footer />
        </>
    );
};

export default Layout;