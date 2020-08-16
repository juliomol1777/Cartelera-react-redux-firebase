import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
    //const id= props.match.params.id;
    const {project, auth} = props;
    if(!auth.uid) return <Redirect to="/login"/>
    if (project){
        return (
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    {project.titulo}
                </div>
                <div className="card-body">
                    <div>
                        <p>{project.contenido}</p>
                    </div>
                    <div>
                        <p>Publicado por {project.autorNombre} {project.autorApellido}</p>
                    </div>
                </div>
                <div className="card-footer">
                    <p>{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
        );
    } else{
        return (
            <div className="container-center">
                Cargando Proyecto.....
            </div>
        )

    }
    
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id= ownProps.match.params.id;
    const projects= state.firestore.data.projects;
    const project= projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);