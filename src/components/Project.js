import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project({ project }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.image} alt="Display" />
            <Card.Body>
                <Card.Title className="project">{project.name}</Card.Title>
                <Card.Text>
                    Technologies Used: {project.tech.map((tech, index) => {
                    return <span className="project-tech"key={index}>{tech}</span>
                })} 
                </Card.Text>
                <Button variant="link">{project.link}</Button>
            </Card.Body>
        </Card>
    );
}

export default Project;
