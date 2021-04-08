import './App.css';
import React, { Component, Fragment } from 'react';
import { Card } from 'react-bootstrap';

class Main extends Component {
    render() {
        return (
            <div className="main"style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69jIsh3MPHXSxcoE-TB6SSf_qTkvr7X14uA&usqp=CAU")`}}>
            <Fragment>
                <Card className="card1">
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxc_sUEbnvmOhg3VIPzMuK6IaTUn_U3x4L4A&usqp=CAU" height='200px' />
                    <Card.ImgOverlay>
                        <Card.Title style={{ color: 'white', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '50px' }}>Welcome to our bank!</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card className="card2">
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tjPUfl1kTv_EtE6D993OS6ATJEqUoAGrBQ&usqp=CAU" height='200px' />
                </Card>
                <br />
            </Fragment>
            </div>
        )
    }
}
export default Main;