import React from 'react';

function Project({ project }) {
    return (
        <div>
            <img className="projectImage" src={project.image} alt="Display" />
            <div>
                <div>
                    {project.name}
                </div>
                <a href={project.link}>
                    {project.link}
                </a>
            </div>
            <div>
                {project.tech.map((tech, index) => {
                    return <span key={index}>{tech}, </span>
                })}
            </div>
        </div>
    );
}

export default Project;
