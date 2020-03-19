import React, { useState } from 'react';
import './Layout.scss';
import Toolbar from '../../components/NavigationComponent/Toolbar/Toolbar';
import SideDrawer from '../../components/NavigationComponent/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import FooterIT from '../../components/FooterIT/FooterIT';
import FooterEN from '../../components/FooterEN/FooterEN';


const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => setShowSideDrawer(false);
    const sideDrawerToggleHandler = () => setShowSideDrawer(!showSideDrawer);

    let footerSp, footerIt, footerEn;

    if (props.languageRol === 'es') {
        footerSp = <Footer />;
    } else if (props.languageRol === 'it') {
        footerIt = <FooterIT />;
    } else {
        footerEn = <FooterEN />;
    }

    return (
        <>
            <select className="selectpicker" data-width="fit" onChange={props.changeLanguageHandler}>
                <option value="es" data-content='<span className="flag-icon flag-icon-mx"></span> Español'>ES</option>
                <option value="it" data-content='<span className="flag-icon flag-icon-us"></span> English'>IT</option>
                <option value="en" data-content='<span className="flag-icon flag-icon-us"></span> English'>EN</option>
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
            {props.languageRol === 'es' && footerSp}
            {props.languageRol === 'it' && footerIt}
            {props.languageRol === 'en' && footerEn}
        </>
    );
};

export default Layout;