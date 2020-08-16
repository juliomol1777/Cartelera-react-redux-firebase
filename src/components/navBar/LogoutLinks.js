import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions'

const LogoutLinks= (props) => {
    return(
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/create">Proyecto Nuevo</NavLink>
                </li>
                <li className="nav-item active">
                    <button type="button" className="link-button"  onClick={props.signOut}>
                        Salir
                    </button>
                </li>
                <li className="nav-item">
                <NavLink className="btn btn-primary" to="/">
                    {props.profile.iniciales}
                </NavLink>
                </li>
            </ul>
    );
}

const mapDispatchToProps= (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps ) (LogoutLinks);