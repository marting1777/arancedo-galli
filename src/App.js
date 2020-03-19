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

const App = props => {

    const [language, setLanguage] = useState('es');
    const changeLanguageHandler = event => setLanguage(event.target.value);

    return (
        <div className="App">
            <Layout 
                changeLanguageHandler={changeLanguageHandler} 
                languageRol={language} 
                languageRolFooter={language}>
                <Switch>
                    <Route path="/contacto" exact component={Contacto}/>
                    <Route path="/profesionales" exact component={Profesionales}/>
                    <Route path="/servicios" exact component={Services}/>
                    <Route path="/quienes-somos" exact component={QuienesSomos}/>

                    <Route path="/contatto" exact component={ContactoIT}/>
                    <Route path="/la-nostra-gente" exact component={ProfesionalesIT}/>
                    <Route path="/servizi-legali" exact component={ServicesIT}/>
                    <Route path="/la-nostra-firma" exact component={QuienesSomosIT}/>

                    <Route path="/" exact component={language === 'es' ? Home : HomeIT}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;