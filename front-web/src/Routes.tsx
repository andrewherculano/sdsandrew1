import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Records from './assets/pages/Records';
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
        </Switch>
    </BrowserRouter>
);

export default Routes;