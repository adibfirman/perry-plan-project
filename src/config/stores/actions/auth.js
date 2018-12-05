import {
  LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_FAILED,
  LOGOUT_SUCCESS
} from '../reducers/auth';

export const signIn = ({ email, password }) => async (dispatch, getState, { getFirebase }) => {
  try {
    const firebase = getFirebase()

    await firebase.auth().signInWithEmailAndPassword(email, password)
    dispatch({ type: LOGIN_SUCCESS })
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, error })
  }
}

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  try {
    const firebase = getFirebase()

    await firebase.auth().signOut()
    dispatch({ type: LOGOUT_SUCCESS })
  } catch (error) {
    dispatch({ type: LOGOUT_FAILED, error })
  }
}
