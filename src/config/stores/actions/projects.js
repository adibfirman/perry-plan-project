export const CREATE_PROJECT = 'CREATE_PROJECT'

export const createProject = project => dispatch => {
  return dispatch({ type: CREATE_PROJECT, project })
}
