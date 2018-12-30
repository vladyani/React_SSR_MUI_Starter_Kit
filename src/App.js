import React from 'react';
import { Switch, Route } from 'react-router';

import Navbar from './layout/Navbar/Navbar';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import NotFound from './pages/NotFound/NotFound';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <Switch>
                        <Route exact path="/"
                            render={props => <Home {...props} />} />
                        <Route path="/services" component={Services} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </React.Fragment >
        )
    }
}