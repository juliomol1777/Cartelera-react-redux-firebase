export const createProject= (projectNew) => {
    //toma lo que envia el componente (CreateProject) y lo envia al reducer (ProjectReducer)
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //hace llamada async a base de datos
        const firestore= getFirestore();
        const profile = getState().firebase.profile;
        const autorId = getState().firebase.auth.uid;
        console.log(profile);

        //pongo el nombre de la coleccion guardada en firestore
        firestore.collection('projects').add({
            ...projectNew,
            autorNombre: profile.autorNombre ,
            autorApellido: profile.autorApellido,
            autorId: autorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', projectActn: projectNew});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};