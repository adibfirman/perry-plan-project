import {
  LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_FAILED,
  LOGOUT_SUCCESS, SIGNUP_FAILED, SIGNUP_SUCCESS
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

export const signUp = ({ email, password, firstName, lastName }) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  try {
    const firebase = getFirebase()
    const firestore = getFirestore()

    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password)
    await firestore.collection('users').doc(user.uid).set({
      firstName, lastName,
      initials: firstName[0].toUpperCase() + lastName[0].toUpperCase()
    })

    dispatch({ type: SIGNUP_SUCCESS })
  } catch (error) {
    dispatch({ type: SIGNUP_FAILED, error })
  }
}
