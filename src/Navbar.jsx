import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <div className="App">
                    <Navbar bg="dark" sticky="top">
                        <Navbar.Brand href="home">ABC Retail Banking</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
                            <Nav.Link><Link to="/user">User</Link></Nav.Link>
                        </Nav>
                        <Nav.Link><Link to="/user">Logout</Link></Nav.Link>
                    </Navbar>
                </div>
            </Fragment>
        )
    }
}
export default Navbar;