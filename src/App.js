import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import User from './User';
import AdminLogin from './AdminLogin';
import ResetLogin from './ResetLogin';
import ResetLogin1 from './ResetLogin1';
import Main from './Main';
import AddUser from './AddUser';
import EditUser from './EditUser';
import Users from './Users';
import LoginInfo from './AdminLoginInfo';
import UserPage from './UserPage';
import CreditAmount from './CreditAmount';
import CurrentBalance from './CurrentBalance';
import DebitAmount from './DebitAmount';
import CurrentWithBalance from './CurrentWithBalance';
import UserView from './UserView';

import Home from './Home';
// import bankLogo from './bankImage.jpg';



function App() {
  return (
    <Fragment>
      <Router>
        <div className="App">
          <Navbar>
            <Navbar.Brand href='#home'>Welcome to ABC Retail Banking</Navbar.Brand>
            <nav className="nav-links">
              <Nav.Link>
                <Link to='/loginInfo'>
                  <li>Home</li>
                </Link>
              </Nav.Link>
            </nav>
            <Navbar.Text>{this.props.userData}</Navbar.Text>
            <Nav.Link>
              <Link to='/main'>
                <li>LogOut</li>
              </Link>
            </Nav.Link>
          </Navbar>


          <Switch>
            <Route exact path="/"><Redirect to="/main"/></Route>
            <Route path="/user" component={User} />
            <Route path="/main" component={Main} />
            <Route path="/adminLogin" component={AdminLogin} />
            <Route path="/ResetLogin" component={ResetLogin} />
            <Route path="/ResetLogin1" component={ResetLogin1} />
            <Route path="/loginInfo" component={LoginInfo} />
            <Route path="/userPage" component={UserPage} />
            <Route path="/creditAmount" component={CreditAmount} />
            <Route path="/currentAdd" component={CurrentBalance} />
            <Route path="/debitAmount" component={DebitAmount}/>
            <Route path="/currentSub" component={CurrentWithBalance}/>
            <Route path="/home" component={Home}/>
            <Route path="/view/:id" component={UserView}/>
            <Route path="/users/:id" component={Users}/>
            <Route path="/edit/:id" component={EditUser}/>
            <Route path="add" component={AddUser}/>

          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

const mapStateToProps = (state) =>{
  return({userData : state.userData})
}

export default connect(mapStateToProps)(App);
