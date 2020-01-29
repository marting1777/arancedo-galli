import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './flaticon.css';
import './iconmoon.css';
import './App.css';

import Layout from './HOC/Layout/Layout';
import Home from './containers/Home/Home';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;