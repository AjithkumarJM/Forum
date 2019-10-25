import React, { Component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

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
            }, error => console.log(error))
        })
    }

    onAuthCahnge = isSignedIn => {
        const { signIn, signOut } = this.props;

        if (isSignedIn) {
            signIn(this.auth.currentUser.get().getId());
            cookie.save('isAuthenticated', isSignedIn);
            window.location.reload()
        }
        else {
            signOut();
            cookie.remove('isAuthenticated', { path: '/' })
        }
    }

    onSignInClick = () => this.auth.signIn();

    render() {
        return <div className="ui green button" onClick={this.onSignInClick}>Login With Google</div>
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth: auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);