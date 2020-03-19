import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './flaticon.css';
import './iconmoon.css';
import './App.css';

import Layout from './HOC/Layout/Layout';
import Home from './containers/Home/Home';
import QuienesSomos from './containers/QuienesSomos/QuienesSomos';
import Services from './containers/Services/Services';
import Profesionales from './containers/Profesionales/Profesionales';
import Contacto from './containers/Contacto/Contacto';

import HomeIT from './containers/HomeIT/HomeIT';
import QuienesSomosIT from './containers/QuienesSomosIT/QuienesSomosIT';
import ProfesionalesIT from './containers/ProfesionalesIT/ProfesionalesIT';
import ContactoIT from './containers/ContactoIT/ContactoIT';
import ServicesIT from './containers/ServicesIT/ServicesIT';
import ScrollToTop from './HOC/ScrollToTop/ScrollToTop';

import HomeEN from './containers/HomeEN/HomeEN';
import ContactoEN from './containers/ContactoEN/ContactoEN';
import ProfesionalesEN from './containers/ProfesionalesEN/ProfesionalesEN';
import QuienesSomosEN from './containers/QuienesSomosEN/QuienesSomosEN';
import ServicesEN from './containers/ServicesEN/ServicesEN';


const App = props => {

    const [language, setLanguage] = useState('es');
    const changeLanguageHandler = event => setLanguage(event.target.value);

    let spanish, italian, english;
    if (language === 'es') {
        spanish = (
            <>
                <ScrollToTop />
                <Switch>
                    <Route path="/contact-us" exact component={Contacto}/>
                    <Route path="/professionals" exact component={Profesionales}/>
                    <Route path="/services" exact component={Services}/>
                    <Route path="/about-us" exact component={QuienesSomos}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </>
        );
    } else if (language === 'it') {
        italian = (
            <>
                <ScrollToTop />
                <Switch>
                    <Route path="/contact-us" exact component={ContactoIT}/>
                    <Route path="/professionals" exact component={ProfesionalesIT}/>
                    <Route path="/services" exact component={ServicesIT}/>
                    <Route path="/about-us" exact component={QuienesSomosIT}/>
                    <Route path="/" exact component={HomeIT}/>
                </Switch>
            </>
        );
    } else {
        english = (
            <>
                <ScrollToTop />
                <Switch>
                    <Route path="/contact-us" exact component={ContactoEN}/>
                    <Route path="/professionals" exact component={ProfesionalesEN}/>
                    <Route path="/services" exact component={ServicesEN}/>
                    <Route path="/about-us" exact component={QuienesSomosEN}/>
                    <Route path="/" exact component={HomeEN}/>
                </Switch>
            </>
        );
    }

    return (
        <div className="App">
            <Layout 
                changeLanguageHandler={changeLanguageHandler} 
                languageRol={language} 
                languageRolFooter={language}>
                
                {language === 'es' && spanish}
                {language === 'it' && italian}
                {language === 'en' && english}
            </Layout>
        </div>
    );
}

export default App;