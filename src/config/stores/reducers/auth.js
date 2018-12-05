export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'

const initState = {
  authError: '',
  logoutFail: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case LOGIN_FAILED:
      return {
        ...state,
        authError: 'Login Failed'
      }
    case LOGOUT_FAILED:
      return {
        ...state,
        logoutFail: 'Logout Failed'
      }
    default:
      return state
  }
}
