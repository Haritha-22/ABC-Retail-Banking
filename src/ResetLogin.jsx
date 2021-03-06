import React,  {useState, Fragment } from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import Email from './Email';
import Password from './Password';

function ResetLogin(props) {
    
    const [changeEmail, setChangeEmail] = useState(false);
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const showEmail = () => {
        
    }

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }

    const onSubmit = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      
        const isPasswordValid = passwordRegex.test(passwordVal);
        if ( isPasswordValid) {
            
            props.history.push('/home');
            
        } else {
            
            setShowAlert(false);
        }
    }


    return (
        <Fragment>
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title className='demo'> Reset Login Password</Card.Title><br />
                <Alert variant="warning"><small>For security purposes, no withdrawals are permitted for 24 hours after modification of security methods</small></Alert>
                <Card.Text>
                    <Form>
                        <div style={{ marginRight: '200px' }}>
                            <Button variant="light" size="sm" onClick={showEmail}>Email</Button>{' '}

                        </div>
                        
                        <Password 
                           passwordVal={passwordVal}
                           passwordChange={passwordValueChange}/>
                       
                        
                            <Button variant="warning" size="sm"onClick={onSubmit} block >
                                Next
                            </Button>
                            {
                                showAlert === true && (
                                    <Alert variant="success">Success</Alert>
                                )}{(showAlert === false &&
                                    <Alert variant="warning">Failure</Alert>
                                )}
                            <br />
                            <br />
                        
                            
                    </Form>
                </Card.Text>
                </Card.Body>
            </Card>
            
            <br /><br />
            <small><footer className="foot">&copy; 2020 - 2021 Snehitha.com. All rights reserved</footer></small>
    
    </Fragment>
    )

}
export default ResetLogin;