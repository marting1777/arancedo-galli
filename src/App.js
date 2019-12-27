import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './containers/Header/Header';
import Home from './components/Home/Home';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default App;
