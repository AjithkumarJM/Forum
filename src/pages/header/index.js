import React, { Component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

class Header extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '13004417870-6tvprqjkgo0fl0ndpdpamvtka0u8f641.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
            }, error => console.log(error))
        })
    }

    onSignOutClick = () => {
        this.auth.signOut();
        cookie.remove('isAuthenticated', { path: '/' })
        window.location.reload();
    }

    render() {
        console.log(this.auth)
        return (
            <div className="ui secondary  menu shadow">
                <div className="header item">
                    Brand
                </div>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                    <button className="item" onClick={this.onSignOutClick}>
                        Logout
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
