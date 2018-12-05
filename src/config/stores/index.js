import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';

import RootReducers from './reducers'
import FirebaseConfig from '../firebase'

const middleware = [thunk.withExtraArgument({ getFirestore, getFirebase })]
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export default createStore(RootReducers,
  compose(
    applyMiddleware(...middleware),
    reduxFirestore(FirebaseConfig),
    reactReduxFirebase(FirebaseConfig, { attachAuthIsReady: true })
  )
)
