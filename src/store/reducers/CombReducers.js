import AuthReducers from './AuthReducers';
import ProjectReducers from './ProjectReducers';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const CombReducers = combineReducers({
    auth: AuthReducers,
    project: ProjectReducers,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default CombReducers;