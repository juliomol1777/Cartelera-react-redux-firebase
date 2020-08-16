import React, { useState } from 'react';
import Input from '../commons/Input';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

const SignIn = (props) => {

    const [cuenta, setCuenta] = useState({
        email:'',
        password: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        //console.log(cuenta)
        props.signIn(cuenta)

    }

    function handleChange(e) {
        setCuenta({
            ...cuenta,
            [e.target.name]: e.target.value
        });
    }

    const {authError, auth} = props;
    if(auth.uid) return <Redirect to="/"/>
    return (
        <div className="col md-6 ">
            <div className="card card-body">
                <h4>Iniciar Sesión</h4>
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
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
                    <button type="submit" className="btn btn-primary">Enviar</button>
                    <div className="text-red">
                        {authError? <p>{authError}</p> : null}
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SignIn);