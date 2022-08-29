import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project({ project }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.image} alt="Display" />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                    Technologies Used: {project.tech.map((tech, index) => {
                    return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2">{tech}</span>
                })} 
                </Card.Text>
                <Button variant="link">{project.link}</Button>
            </Card.Body>
        </Card>
    );
}

export default Project;
