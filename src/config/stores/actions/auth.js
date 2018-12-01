import { LOGIN_FAILED, LOGIN_SUCCESS } from '../reducers/auth';

export const signIn = ({ email, password }) => async (dispatch, getState, { getFirebase }) => {
  try {
    const firebase = getFirebase()

    await firebase.auth().signInWithEmailAndPassword(email, password)
    dispatch({ type: LOGIN_SUCCESS })
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, error })
  }
}
