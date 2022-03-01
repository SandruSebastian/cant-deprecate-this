import React from 'react';
import './ProjectCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Project} from './ProjectsConstants';

export default function ProjectCard(props: {project: Project}) {
    return (
        <div className="card hvr-grow">
            <img src={props.project.image} className="card__image" alt="brown couch" />
            <div className="card__content">
                <time dateTime="2021-03-30" className="card__date">
                    {props.project.date}
                </time>
                <span className="card__title">{props.project.title}</span>
                <p>{props.project.description}</p>
                {props.project.press ? props.project.press : null}
            </div>
        </div>
    );
}
