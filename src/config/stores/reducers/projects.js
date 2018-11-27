import { CREATE_PROJECT } from '../actions/projects';

const initState = {
  projects: [
    {id: 1, title: 'This is a title One', content: 'blah blah blah this is a content'},
    {id: 2, title: 'This is a title Two', content: 'blah blah blah this is a content'},
    {id: 3, title: 'This is a title Three', content: 'blah blah blah this is a content'}
  ]
}

export default (state = initState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return action.project
    default:
      return state
  }
}
