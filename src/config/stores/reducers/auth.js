export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

const initState = {
  authError: null
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
    default:
      return state
  }
}
