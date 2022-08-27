import React from 'react';
import Project from '../Project';

const projects = [
    {   
        name: "Tiny Triumphs",
        link: "https://tinytriumphs.herokuapp.com/", 
        image: "./assets/images/tinytriumphs.png",
        tech: ["Node.js", "Express.js", "Bcrypt", "MySQL", "Sequelize", "jQuery", "Handlebars.js", "Moment.js", "Multer"]
    }, 
    {   
        name: "Productivity Tiles",
        link: "https://anacecyflores1.github.io/ProductivityTiles/",
        image: "./assets/images/ProductivityTiles.jpg",
        tech: ["JavaScript", "HTML", "CSS", "jQuery", "jQuery UI", "Google Fonts API", "Images API", "Quotes Rapid API"]
    }, 
    {   
        name: "Weather Dashboard",
        link: "https://tkhobbes43.github.io/weather-dashboard/",
        image: "./assets/images/weather-dashboard.PNG",
        tech: ["HTML", "CSS", "JavaScript", "Moment.js", "Open Weather API", "Google Fonts API", "Bootstrap", "jQuery"]
    }, 
    { 
        name: "My Work Day Scheduler",
        link: "https://tkhobbes43.github.io/my-work-day-scheduler/",
        image: "./assets/images/my-work-day-scheduler.PNG",
        tech: ["HTML", "CSS", "JavaScript", "Moment.js", "Font Awesome API", "Bootstrap", "Google Fonts API", "jQuery"]
    },
    { 
        name: "Text Editor",
        link: "https://rocky-brushlands-15740.herokuapp.com/",
        image: "./assets/images/text-editor.png",
        tech: ["indexedDB", "Progressive Web App", "Service Worker", "Webpack", "Workbox", "JavaScript", "Node.js", "Express.js", "Concurrently"]
    },
    { 
        name: "My Social Network API",
        link: "https://github.com/tkhobbes43/my-social-network-api",
        image: "./assets/images/Capture.PNG",
        tech: ["MongoDB", "Mongoose", "JavaScript", "Node.js", "Express.js", "API Routes"]
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
