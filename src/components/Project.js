import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project({ project }) {
    return (
        <Card className="project-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.image} alt="Display" />
            <Card.Body>
                <Card.Title className="project">{project.name}</Card.Title>
                <Card.Text>
                    Technologies Used: {project.tech.map((tech, index) => {
                    return <span className="project-tech"key={index}>{tech}</span>
                })} 
                </Card.Text>
                <Button className="project-button" variant="primary" href={project.link}>Link to deployed app</Button>
            </Card.Body>
        </Card>
    );
}

export default Project;
