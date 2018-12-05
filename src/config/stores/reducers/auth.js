export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILED = 'SIGNUP_FAILED'

const initState = {
  error: {
    signin: '',
    signup: '',
    logout: ''
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: {
          ...state.error,
          signin: ''
        }
      }
    case LOGIN_FAILED:
      return {
        ...state,
        error: {
          ...state.error,
          signin: 'Login Failed'
        }
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        error: {
          ...state.error,
          logout: ''
        }
      }
    case LOGOUT_FAILED:
      return {
        ...state,
        error: {
          ...state.error,
          logout: 'Logout Failed'
        }
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: {
          ...state.error,
          signup: ''
        }
      }
    case SIGNUP_FAILED:
      return {
        ...state,
        error: {
          ...state.error,
          signup: action.error.message
        }
      }
    default:
      return state
  }
}
