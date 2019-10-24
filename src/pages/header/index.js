import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {

    onSignOutClick = () => window.gapi.auth2.getAuthInstance().signOut();

    render() {
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
