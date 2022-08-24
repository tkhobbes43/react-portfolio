import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myPic from '../../assets/images/mypic.jpg';

function About() {
    return (
        <Container className='title'>
            <Row>
                <Col>
                <center><img src={myPic} className="my-pic" alt="Tommy's Profile"/></center>
                </Col>
            </Row>
        </Container>
    );
}

export default About;