const initState = {
    authError: null,
    isLogedIn: false,
}

const authReduser = (state = initState, action, payload) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state, 
        authError: 'Login failed'
    }
    case 'LOGIN':
      return {
        ...state,
        isLogedIn: true,
        authError: null,
      }
    case 'LOGOUT': 
      return {
        ...state,
        isLogedIn: false,
      }
    case 'ONCHANGE': 
      return {
        ...state,
        isLogedIn: payload,
      }
    case 'SIGNUP': 
      return {
        ...state,
        authError: null,
      }
    case 'SIGNUP_ERROR': 
      return {
        ...state,
        authError: action.err.message,
      }

    default:
      return state      
  }
}

export default authReduser