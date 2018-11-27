import { combineReducers } from 'redux';

import project from './projects'
import auth from './auth'

export default combineReducers({
  project, auth
})
