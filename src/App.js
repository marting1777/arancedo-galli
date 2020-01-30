import React, { Component } from 'react';
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

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/contacto" exact component={Contacto}/>
                        <Route path="/profesionales" exact component={Profesionales}/>
                        <Route path="/servicios" exact component={Services}/>
                        <Route path="/quienes-somos" exact component={QuienesSomos}/>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;