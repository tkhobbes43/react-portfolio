import React, { useState } from 'react';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-copyright'>
                <h3>Designed and developed by Tommy Lee</h3>
            </div>
            <div className='footer-copyright'>
                <h3>Copyright © 2022</h3>
            </div>
            <div className='footer-body'>
                <ul className='footer-icons'>
                    <li className='social-icons'>
                        <a href="mailto: t.k.hobbes43@gmail.com">Email Me</a>
                    </li>
                    <li className='social-icons'>
                        <a href="https://github.com/tkhobbes43" target="_blank" rel="noreferrer noopener">My GitHub</a>
                    </li>
                    <li className='social-icons'>
                        <a href="https://www.linkedin.com/in/thomas-lee-29a033b2/" target="_blank" rel="noreferrer noopener">My LinkedIn</a>
                    </li>
                    <li className='social-icons'>
                        <a href="https://docs.google.com/document/d/1U2hZsREZIIE2-TiM1Z9EYZIfEq5h5BeK/edit?usp=sharing&ouid=105605796702403291415&rtpof=true&sd=true" target="_blank" rel="noreferrer noopener">My Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
