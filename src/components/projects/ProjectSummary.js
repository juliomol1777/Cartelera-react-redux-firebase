import React from 'react';
import moment from 'moment';

const ProjectSummary = ({projectSmry}) => {
    return(
        <div>
            <p>{projectSmry.titulo}</p>
            <p>Creado por {projectSmry.autorNombre} {projectSmry.autorApellido} </p>
            <p>{moment(projectSmry.createdAt.toDate()).calendar()}</p>
        </div>
    );
}

export default ProjectSummary;