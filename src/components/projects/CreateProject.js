import React, { useState } from 'react';
import Input from '../commons/Input';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';

const CreateProject = (props) => {

    const [nuevoProyecto, setNuevoProyecto] = useState({
        titulo:'',
        contenido: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        //console.log(nuevoProyecto)
        //pasa el proyecto a crear usando mapDispachtToProps a la action (projectActions)
        props.createProject(nuevoProyecto);
        props.history.push('/');
    }

    function handleChange(e) {
        setNuevoProyecto({
            ...nuevoProyecto,
            [e.target.name]: e.target.value
        });
    }

    const {auth}= props;
    if(!auth.uid) return <Redirect to="/login"/>
    return (
        <div className="col md-6 ">
            <div className="card card-body">
                <h4>Nuevo Proyecto</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="titulo">Titulo</label>
                        <Input atributo={{
                            id: 'titulo',
                            name: 'titulo',
                            type: 'text',
                            placeholder: 'Ingrese el titulo'
                        }}
                            handleChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contenido">Texto</label>
                        <textarea
                            id= "contenido"
                            name= "contenido"
                            type= "text"
                            placeholder= "Ingrese el texto...."
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (newProyect) => dispatch(createProject(newProyect))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (CreateProject);