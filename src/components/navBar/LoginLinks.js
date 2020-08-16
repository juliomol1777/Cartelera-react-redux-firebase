import React from 'react';
import {NavLink} from 'react-router-dom';

const LoginLinks= () => {
    return(
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <NavLink className="nav-link" to="/registro">Registrarse</NavLink>
            </li>
            <li className="nav-item active">
                <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
        </ul>              
    );
}

export default LoginLinks;