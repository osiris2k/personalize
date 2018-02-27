import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <h1>Register</h1>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                <label for="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" name="email" type="email" className="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" name="password" type="password" className="validate" />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s3">
                                <input id="contry_code" name="contry_code" type="text" className="validate" />
                                <label for="contry_code">Country code</label>
                            </div>
                            <div className="input-field col s9">
                                <input id="tel" type="text" className="validate" />
                                <label for="tel">Telephone</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="waves-effect waves-light btn-large red">
                                    <i className="fa fa-save left"></i> Save
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default Register;