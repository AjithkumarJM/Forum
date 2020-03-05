import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import cookie from 'react-cookies';

import Dashboard from '../dashboard';
import Header from '../header';
import Login from '../login';

export default class App extends PureComponent {

    render() {
        const isAuthenticated = cookie.load('isAuthenticated')

        if (!isAuthenticated) {
            return (
                <div><Login /></div>
            )
        } else if (isAuthenticated) {
            return (
                <BrowserRouter>
                    <Header />
                    <Route path="/" exact component={Dashboard} />
                </BrowserRouter>
            )
        } else {
            return (
                <div className="ui segment">
                    <p></p>
                    <div className="ui active dimmer">
                        <div className="ui loader"></div>
                    </div>
                </div>
            )
        }
    }
}
