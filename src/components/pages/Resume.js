import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const frontEnd = ['HTML', 'CSS', 'Bootstrap', 'Bulma', 'JavaScript', 'React', 'Handlebars.js', 'jQuery', 'Progressive Web Apps', 'Service Workers', 'Webpack'];
const backEnd = ['Node.js', 'Express.js', 'mySQL/Sequelize', 'MongoDB/Mongoose', 'Web APIs', 'Third-party APIs', 'Server-Side APIs', 'indexedDB'];

function Resume() {
    return (
        <>
            <Container>
                <Row>
                    <h2>Resume</h2>
                    <Col>
                        <p>You can download a PDF of my resume by clicking on the button below, otherwise you can find a link to a Google Doc version of it in the footer</p>
                        
                    </Col>
                    <Col>
                        <h3>Front-End Skills</h3>
                        <ul>
                            {frontEnd.map((skill, index) => {
                                return <li className='frontEndSkills' key={index}>{skill}</li>
                            })}
                        </ul>
                    </Col>
                    <Col>
                        <h3>Back-End Skills</h3>
                        <ul>
                            {backEnd.map((skill, index) => {
                                return <li className='backEndSkills' key={index}>{skill}</li>
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Resume;