import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../dashboard';
import Header from '../header';
import Login from '../login';

class App extends PureComponent {
    render() {
        const { isSignedIn } = this.props;

        if (isSignedIn) {
            return (
                <BrowserRouter>
                    <Header />
                    <Route path="/" exact component={Dashboard} />
                </BrowserRouter>
            )
        } else {
            return (
                <div><Login /></div>
            )
        }
    }
}

const mapStateToProps = ({ auth }) => {
    return { isSignedIn: auth.isSignedIn };
};

export default connect(mapStateToProps, {})(App);
