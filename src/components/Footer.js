import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    FiLinkedin,
    FiMail,
    FiGithub,
    FiFile
} from 'react-icons/fi';


function Footer() {
    return (
        <Container fluid className='footer'>
            <Row>
                <Col md="4" className='footer-copyright'>
                    <h3>Designed and Developed by Tommy Lee</h3>
                </Col>
                <Col md="4" className='footer-copyright'>
                    <h3>Copyright © 2022 Tommy Lee</h3>
                </Col>
                <Col md="4" className='footer-body'>
                    <ul className='footer-icons'>    
                        <li className='social-icons'>
                            <a href="mailto: t.k.hobbes43@gmail.com">
                            <FiMail/>
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a href="https://github.com/tkhobbes43" 
                            target="_blank" 
                            rel="noreferrer noopener">
                            <FiGithub/>
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a href="https://www.linkedin.com/in/thomas-lee-29a033b2/" target="_blank"
                            rel="noreferrer noopener">
                            <FiLinkedin/>
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a href="https://docs.google.com/document/d/1U2hZsREZIIE2-TiM1Z9EYZIfEq5h5BeK/edit?usp=sharing&ouid=105605796702403291415&rtpof=true&sd=true" 
                            target="_blank" 
                            rel="noreferrer noopener">
                            <FiFile/>
                            </a>
                        </li>
                    </ul>    
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
