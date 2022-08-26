import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myPic from '../../assets/images/mypic.jpg';

function About() {
    return (
        <Container className='title'>
            <Row>
                <h2>About Me</h2>
                <Col>
                    <p>Hello, my name is Tommy Lee. No I am not the famous drummer most famously dated an actress who played a TV lifeguard.  This Tommy Lee is from Schaumburg, IL, and I am an aspiring full stack web developer who wants to build more intuitive user experiences on the web.
                    </p>
                    <p>I am currently attending Northwestern University's Coding Bootcamp to earn a certificate in full stack web development.  With my newly developed skills, I hope to start fresh and gain as much insight as I possibly can.
                    </p>
                    <p>Known as an adaptable and motivated problem solver passionate about scalable production services and design to implement user-facing products.  I applied aspects of agile development in 2 of my main projects. I worked on a team of four for Productivity Tiles and a team of three for Tiny Triumphs.  I am excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                    </p>
                </Col>
                <Col>
                <center><img src={myPic} className="my-pic" alt="Tommy's Profile"/></center>
                </Col>
            </Row>
        </Container>
    );
}

export default About;