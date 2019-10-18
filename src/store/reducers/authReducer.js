const initState = {
    authError: null,
    isLogedIn: false,
}

const authReduser = (state = initState, action, payload) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
        return {
            ...state, 
            authError: 'Login failed'
        }
        case 'LOGIN':
            console.log('login success')
            return {
                ...state,
                isLogedIn: true,
                authError: null,
            }
        case 'LOGOUT': 
            console.log('sigout success')
            return {
                ...state,
                isLogedIn: false,
            }

        case 'ONCHANGE': 
            return {
                ...state,
                isLogedIn: payload,
            }

        default:
            return state      
    }
}

export default authReduser