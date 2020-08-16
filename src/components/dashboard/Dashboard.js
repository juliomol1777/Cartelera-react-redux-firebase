import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
    render(){
        const {projectsProps, auth, notifications} = this.props;
        //si el usuario no tiene uid es pq no esta logueado y se lo redirige a login
        if(!auth.uid) return <Redirect to="/login"/>
        return(
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <ProjectList projectLst={projectsProps} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <Notifications notifications= {notifications}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        projectsProps: state.firestore.ordered.projects,
        //paso a props desde firebase para saber si el usuario esta logueado 
        auth: state.firebase.auth,
        //projectsProps: state.project.miProjects
        //las notificaciones de Cloud firestore function en la carpeta functions
        notifications: state.firestore.ordered.notifications
    }
};

export default compose( 
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects', orderBy: ['createdAt', 'desc']},
        //las notificaciones vinen de Cloud firestore function en la carpeta functions
        {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard);