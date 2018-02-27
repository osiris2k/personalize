import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo center">Personalize</a>
                        <a href="#" data-activates="mobile-demo" className="button-collapse">
                            <i className="fa fa-bars fa-2x"></i>
                            </a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a href="/"><i className="fa fa-home fa-2x"></i></a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><a href="/"><i className="fa fa-home fa-2x"></i> Homepage </a></li>
                            <li><a href="/register"><i className="fa fa-user-circle-o fa-2x"></i> Register</a></li>
                            <li><a href="/login"><i className="fa fa-key fa-2x"></i> Login</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;