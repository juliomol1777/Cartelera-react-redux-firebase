import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjectList = ({projectLst}) => {
    return (
        <div>
            {projectLst && projectLst.map(projectOne => {
                return(
                    <Link to={'/project/' + projectOne.id} key={projectOne.id}>
                        <ProjectSummary projectSmry={projectOne} />
                    </Link>
                );
            })
            } 
        </div>
    );
}

export default ProjectList;