import React, { useState, Fragment, useEffect } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';

import Email from './Email';
import Password from './Password';

import { userDetails } from './Action';
import './App.css';
import { connect } from 'react-redux';


function AdminLogin(props) {
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [admin, setAdmin] = useState([]);

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }
    useEffect(() => {
        loadAdmin();
    }, []);

    const loadAdmin = async () => {
        const result = await axios.get("http://localhost:3003/admin");
        setAdmin(result.data.reverse());
    }

    const onSubmit = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passwordVal);
    
        if (isEmailValid && isPasswordValid) {
            for(let i=0; i< admin.length; i++){
                debugger
                if(emailVal === admin[i].email && passwordVal === admin[i].password){
                     return props.history.push('/home');
                
                }else{
                   if(i === admin.length -1){
                    alert("User name and password not matched");

                    } 
                }
            }
        } 
        else {
            alert("Invalid Credentials");
        }
    }

    const goToForgot = () => {
        props.history.push('/ResetLogin');
    }
    return (
        <Fragment>
            <div className="admin">
            <Card style={{ width: '22rem' }}>
                <Card.Body style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7C7nF7qzDqlU_kAykRg3KkiNYNgXnPVOQAQ&usqp=CAU")` ,backgroundSize: 'cover'}}>
                    <Card.Title className=''>Admin Login</Card.Title><br />
                    <Card.Subtitle className="mb-2 text-muted"><small>Please check that you are visiting the correct URL</small></Card.Subtitle>
                    <Card.Text>
                        <br />
                        <small className="lock1">
                            <img
                                alt="Lock Logo"
                                src="https://tse3.mm.bing.net/th/id/OIP.lKFi4olpYEI9_6lBcWGIowHaHa?w=175&h=180&c=7&o=5&dpr=1.5&pid=1.7"
                                width="20"
                                height="22"
                                className="d-inline-block align-top"
                            />{' '}
                            <b className="lock2">http://</b>ABC Banking.com/LOGIN</small><br></br><br></br>
                        <Form>
                            <div style={{ marginRight: '200px' }}>
                               
                            </div>
                            <Email emailVal={emailVal}
                                emailValueChange={emailValueChange} />

                            <Password
                                passwordVal={passwordVal}
                                passwordChange={passwordValueChange} />

                            <Button variant="warning" size="sm" onClick={onSubmit} block>Log In</Button>
                            {
                                showAlert === true && (
                                    <Alert variant="success">Success</Alert>
                                )}{(showAlert === false &&
                                    <Alert variant="warning">Failure</Alert>
                                )}
                            <br />

                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br /><br />
            </div>
        </Fragment>
        
    )
}

const mapStateToProps = (state) => ({userData: state.userData});

function mapDispatchToProps (dispatch) {
    return {
        userDetails: function (userData) {
            return dispatch(userDetails(userData))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
