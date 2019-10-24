import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signOut, signIn } from '../services/googleOauth';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '13004417870-6tvprqjkgo0fl0ndpdpamvtka0u8f641.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthCahnge(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthCahnge);
            })
        })
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    onAuthCahnge = isSignedIn => {
        const { signIn, signOut } = this.props;
        console.log(isSignedIn);
        if (isSignedIn) signIn();
        else signOut();
    }

    onSignInClick = () => this.auth.signIn();

    onSignOutClick = () => this.auth.signOut();

    renderAuthButton = () => {
        const { auth } = this.props;

        if (auth === null) {
            return null
        }
        else if (auth) {
            return <div className="ui red button" onClick={this.onSignOutClick}>Sign Out</div>
        } else {
            return <div className="ui green button" onClick={this.onSignInClick}>Login With Google</div>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth: auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);