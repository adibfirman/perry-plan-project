import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducers from './reducers'

const middleware = [thunk]
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export default createStore(RootReducers, applyMiddleware(...middleware))
