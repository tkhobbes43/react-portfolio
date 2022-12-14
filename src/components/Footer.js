import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FiLinkedin,
    FiMail,
    FiGithub,
    FiFile
} from 'react-icons/fi';

function Footer() {
    return (
        <Container className='footer'>
            <Row>
                <Col className='footer-copyright'>
                    <h3>Copyright © 2022 Tommy Lee</h3>
                </Col>
                <Col className='footer-body'>
                    <ul className='footer-icons'>    
                        <li className='social-icons'>
                            <a href="mailto: t.k.hobbes43@gmail.com"
                            title="My Email Address">
                            <FiMail/>
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a href="https://github.com/tkhobbes43" 
                            target="_blank" 
                            rel="noreferrer noopener"
                            title="My GitHub">
                            <FiGithub/>
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a href="https://www.linkedin.com/in/thomas-lee-29a033b2/" target="_blank"
                            rel="noreferrer noopener"
                            title="My LinkedIn">
                            <FiLinkedin/>
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a href="https://docs.google.com/document/d/1U2hZsREZIIE2-TiM1Z9EYZIfEq5h5BeK/edit?usp=sharing&ouid=105605796702403291415&rtpof=true&sd=true" 
                            target="_blank" 
                            rel="noreferrer noopener"
                            title="My Resume">
                            <FiFile/>
                            </a>
                        </li>
                    </ul>    
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
