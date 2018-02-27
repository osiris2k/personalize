import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" type="text" className="validate" />
                                <label for="email">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="password" type="password" name="password" className="validate" />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <button className="waves-effect waves-light btn-large red">
                                    <i className="fa fa-key left"></i> Login 
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;