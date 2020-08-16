import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import Navbar from './components/navBar/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

const Routes= () => {
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/project/:id' component={ProjectDetails} />
                <Route path='/login' component={SignIn} />
                <Route path='/registro' component={SignUp} />
                <Route path='/create' component={CreateProject} />
            </Switch>
        </Router>

    );
}

export default Routes;