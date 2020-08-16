const initState= {
    miProjects: [
        {id: '1', titulo: 'primero 1', contenido: 'bla bla ba'},
        {id: '2', titulo: 'segundo 2', contenido: 'bla bla ba'},
        {id: '3', titulo: 'tercero 3', contenido: 'bla bla ba'}
    ]
};

const ProjectReducers = (state= initState, action) => {
    //dependiendo de la action es lo que hace
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('proyecto creado', action.projectActn)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('proyecto error', action.err)
            return state;
        default:
            return state;
    } 
};

export default ProjectReducers;