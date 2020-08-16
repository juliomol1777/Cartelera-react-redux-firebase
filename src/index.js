import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import CombReducers from './store/reducers/CombReducers';
import {Provider, useSelector} from 'react-redux';
import thunk from 'redux-thunk';
import {createFirestoreInstance, reduxFirestore, getFirestore} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase, isLoaded} from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig';
import firebase from './config/firebaseConfig';
//import firebase from 'firebase/app';
//import 'firebase/database';


//agrego el uso de perfiles al config de reactReduxFirebase  
const rrfConfig = {
   useFirestoreForProfile: true,
   userProfile: 'users',
   attachAuthIsReady: true,
}

const store = createStore(CombReducers,
  compose( 
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebaseConfig)
    //reactReduxFirebase(firebaseConfig)
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

//agrego la funcion para que no renderize nada hasta que haga la autenticacion
//con esta funcion envuelvo a App
function AuthIsLoaded({children}) {
  const auth= useSelector(state => state.firebase.auth);
  if(!isLoaded(auth)) return <div> Cargando..... </div>;
    return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
