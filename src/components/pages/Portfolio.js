import React from 'react';
import Project from '../Project';

const projects = [
    {   
        name: "Tiny Triumphs",
        link: "https://tinytriumphs.herokuapp.com/", 
        image: "https://github.com/tinyTriumphs/tinyTriumphs/blob/main/public/assets/images/tinyTriumps%20Homepage.png",
        tech: ["Node.js", "Express.js", "Bcrypt", "MySQL", "Sequelize", "jQuery", "Handlebars.js", "Moment.js", "Multer"]
    }, 
    {   
        name: "Productivity Tiles",
        link: "https://anacecyflores1.github.io/ProductivityTiles/",
        image: "https://github.com/anacecyflores1/ProductivityTiles/blob/main/screenshot.jpg",
        tech: ["JavaScript", "HTML", "CSS", "jQuery", "jQuery UI", "Google Fonts API", "Images API", "Quotes Rapid API"]
    }, 
    {   
        name: "Weather Dashboard",
        link: "https://tkhobbes43.github.io/weather-dashboard/",
        image: "https://github.com/tkhobbes43/weather-dashboard/blob/main/assets/images/Capture.PNG",
        tech: ["HTML", "CSS", "JavaScript", "Moment.js", "Open Weather API", "Google Fonts API", "Bootstrap", "jQuery"]
    }, 
    { 
        name: "My Work Day Scheduler",
        link: "https://tkhobbes43.github.io/my-work-day-scheduler/",
        image: "https://github.com/tkhobbes43/my-work-day-scheduler/blob/main/assets/images/Capture.PNG",
        tech: ["HTML", "CSS", "JavaScript", "Moment.js", "Font Awesome API", "Bootstrap", "Google Fonts API", "jQuery"]
    }
];

function Portfolio() {
    return (
        <>
            <h2>Portfolio</h2>
            <div>
                {projects.map((project) => (
                    <Project project={project} />
                ))}
            </div>
        </>
    );
}

export default Portfolio;
