import React from 'react';

import GoogleAuth from '../googleAuth';

import './style.scss';

const Login = () => {
    return (
        <div className="container vh-100">
            <div className="row align-items-center h-100">
                <div className="col-6 mx-auto">
                    <div className='text-center'>
                        <div className="ui placeholder segment">
                            <div className="ui icon header text-danger">
                                <i className="google icon"></i>
                            </div>
                            <GoogleAuth />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;