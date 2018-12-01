import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../actions/projects';

const initState = {
  projects: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return state
    case CREATE_PROJECT_ERROR:
      return state
    default:
      return state
  }
}
