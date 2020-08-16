const initState= {
    authError: null
};

const AuthReducers = (state= initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login erroneo');
            return {
                ...state,
                authError: 'Login erroneo'
            };
        case 'LOGIN_SUCCESS':
            console.log('login exitoso');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('logout exitoso');
            return state; 
        case 'SIGNUP_SUCCESS':
            console.log('registro exitoso');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Error de registro');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
};

export default AuthReducers;