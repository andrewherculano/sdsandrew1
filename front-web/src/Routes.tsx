import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Records from './assets/pages/Records';
import Charts from './assets/pages/Charts';
import Header from './components/Header';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/records">
                <Records />
            </Route>
            <Route path="/charts">
                <Charts />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;