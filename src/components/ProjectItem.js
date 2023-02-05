import React from "react";
import { Link } from "react-router-dom";
import {GitHub as GitHubIcon} from "@material-ui/icons";

function ProjectItem(props){
    return (
        <div className="projectItem">
            <div style={{backgroundImage: `url(${props.image})` }} className="bgImage" />
            <h1>{props.name}</h1>
            <h3>{props.technology}</h3>
             <Link to={props.githubLink}>
                <GitHubIcon />
            </Link>   
        </div>
    );
}

export default ProjectItem;