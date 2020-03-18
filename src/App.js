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
import ProfesionalesIT from './containers/ProfesionalesIT/ProfesionalesIT';
import Contacto from './containers/Contacto/Contacto';
import ContactoIT from './containers/ContactoIT/ContactoIT';

const App = props => {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/contacto" exact component={Contacto}/>
                    <Route path="/profesionales" exact component={Profesionales}/>
                    <Route path="/servicios" exact component={Services}/>
                    <Route path="/quienes-somos" exact component={QuienesSomos}/>

                    <Route path="/contatto" exact component={ContactoIT}/>
                    <Route path="/i-professionisti" exact component={ProfesionalesIT}/>
                    <Route path="/servizi" exact component={Services}/>
                    <Route path="/chi-siamo" exact component={QuienesSomos}/>

                    <Route path="/home-it" exact component={Home}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;