import React, { useState } from 'react';
import Input from '../commons/Input';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions';

const SignUp = (props) => {

    const [cuentaReg, setCuentaReg] = useState({
        email: '',
        password: '',
        nombre: '',
        apellido: ''
    });

    function handleChange(e) {
        setCuentaReg({
            ...cuentaReg,
            [e.target.name]: e.target.value
        }
        );
    }

    function handleSubmit(e) {
        e.preventDefault();
        //console.log(cuentaReg)
        const regisro = props.signUp(cuentaReg);
        console.log('registro: ' + regisro)
    }

    const {auth, authError} = props;
    if(auth.uid) return <Redirect to="/"/>
    return (
        <div className="col md-6 ">
            <div className="card card-body">
                <h4>Registrarse</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Input atributo={{
                            id: 'email',
                            name: 'email',
                            type: 'email',
                            placeholder: 'Ingrese su email'
                        }}
                            handleChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input atributo={{
                            id: 'password',
                            name: 'password',
                            type: 'password',
                            placeholder: 'Ingrese su password'
                        }}
                            handleChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <Input atributo={{
                            id: 'nombre',
                            name: 'nombre',
                            type: 'text',
                            placeholder: 'Ingrese su Nombre'
                        }}
                            handleChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellido">Apellido</label>
                        <Input atributo={{
                            id: 'apellido',
                            name: 'apellido',
                            type: 'text',
                            placeholder: 'Ingrese su Apellido'
                        }}
                            handleChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                    <div className="text-red">
                        {authError? <p>{authError}</p> : null}
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);