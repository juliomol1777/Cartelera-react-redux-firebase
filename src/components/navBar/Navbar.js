import React from 'react';
import {Link} from 'react-router-dom';
import LoginLinks from './LoginLinks';
import LogoutLinks from './LogoutLinks';
import {connect} from 'react-redux';

const Navbar= (props) => {
    const {auth, profile} = props; 
    //uid es un id cuando estas logueado, biene con el auth desde firebase
    // si existe estas logueado y en el
    //navbar se muestran los link de Logout sino los otros
    const links= auth.uid ? <LogoutLinks profile={profile}/> : <LoginLinks/>;
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    NotesApp
                </Link>
                {links}
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps) (Navbar);