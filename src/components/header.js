import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    renderLinks() {

    }
    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Auth</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}


export default Header;
