import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Layout from './HOC/Layout/Layout';
import HomeContainer from './containers/HomeContainer/HomeContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        {/* <Route path="/checkout" component={asyncCheckout}/>
                        <Route path="/checkout" component={asyncCheckout}/>
                        <Route path="/checkout" component={asyncCheckout}/>
                        <Route path="/checkout" component={asyncCheckout}/> */}
                        <Route path="/" exact component={HomeContainer}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;