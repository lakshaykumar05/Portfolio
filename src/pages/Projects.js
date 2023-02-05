import React from 'react';
import '../styles/Projects.css';
import ProjectItem from '../components/ProjectItem';
import {ProjectList} from '../helpers/ProjectList';

function Projects() {
    return (
        <div className='projects'>
            <h1>My Personal Projects</h1>
            <div className='projectList'>
                {
                    ProjectList.map((project) => {
                       return <ProjectItem name={project.name} image={project.image} githubLink={project.githubLink} technology={project.technology}/>
                    })
                }
            </div>
        </div>
    );
}

export default Projects;