import React from 'react';
import Project from '../Project';
import TinyTriumphs from '../../assets/images/tinytriumphs.png';
import ProductivityTiles from '../../assets/images/ProductivityTiles.jpg';
import WeatherDashboard from '../../assets/images/weather-dashboard.PNG';
import MyWorkDayScheduler from '../../assets/images/my-work-day-scheduler.PNG';
import TextEditor from '../../assets/images/text-editor.png';
import MySocialNetworkAPI from '../../assets/images/Capture.PNG';
import Grid from '@mui/material/Grid';

const projects = [
    {   
        name: "Tiny Triumphs",
        link: "https://tinytriumphs.herokuapp.com/", 
        image: TinyTriumphs,
        tech: ["Node.js", "Express.js", "Bcrypt", "MySQL", "Sequelize", "jQuery", "Handlebars.js", "Moment.js", "Multer"]
    }, 
    {   
        name: "Productivity Tiles",
        link: "https://anacecyflores1.github.io/ProductivityTiles/",
        image: ProductivityTiles,
        tech: ["JavaScript", "HTML", "CSS", "jQuery", "jQuery UI", "Google Fonts API", "Images API", "Quotes Rapid API"]
    }, 
    {   
        name: "Weather Dashboard",
        link: "https://tkhobbes43.github.io/weather-dashboard/",
        image: WeatherDashboard,
        tech: ["HTML", "CSS", "JavaScript", "Moment.js", "Open Weather API", "Google Fonts API", "Bootstrap", "jQuery"]
    }, 
    { 
        name: "My Work Day Scheduler",
        link: "https://tkhobbes43.github.io/my-work-day-scheduler/",
        image: MyWorkDayScheduler,
        tech: ["HTML", "CSS", "JavaScript", "Moment.js", "Font Awesome API", "Bootstrap", "Google Fonts API", "jQuery"]
    },
    { 
        name: "Text Editor",
        link: "https://rocky-brushlands-15740.herokuapp.com/",
        image: TextEditor,
        tech: ["indexedDB", "Progressive Web App", "Service Worker", "Webpack", "Workbox", "JavaScript", "Node.js", "Express.js", "Concurrently"]
    },
    { 
        name: "My Social Network API",
        link: "https://github.com/tkhobbes43/my-social-network-api",
        image: MySocialNetworkAPI,
        tech: ["MongoDB", "Mongoose", "JavaScript", "Node.js", "Express.js", "API Routes"]
    }
];

function Portfolio() {
    return (
        <>
        <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
        ><h2>Portfolio</h2></Grid>
        <Grid
            container
            columnSpacing={ 2 }
            direction="row"
            alignItems="stretch"
            justifyContent="center"
        >
            {projects.map((project, index) => (
                <Project project={project} key={index}/>
            ))}
        </Grid>
        </>
    );
}

export default Portfolio;
