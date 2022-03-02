import React, {ReactElement} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../contact/Contact.css';
import ProjectCard from '../../components/projects/ProjectCard';
import '../../components/projects/ProjectModal.css';
import {Project, PROJECTS} from '../../components/projects/ProjectsConstants';
import {useRouteMatch} from 'react-router';

export default function Projects(): ReactElement {
    const [project, setProject] = React.useState<Project>();

    let {url} = useRouteMatch();
    return (
        <div className="">
            {PROJECTS.map((el, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => {
                            setProject(el);
                            window.location.href = url + '#popup-article';
                        }}
                    >
                        <ProjectCard project={el} />
                    </div>
                );
            })}
            {project !== undefined ? (
                <div id="popup-article" className="popup">
                    <div className="popup__container">
                        <a href={`${url}#`} className="popup__close">
                            <span className="screen-reader">close</span>
                        </a>
                        <div className="popup__content">
                            <h1 className="popup__title r-title">{project.title}</h1>
                            {project.longDescription}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
