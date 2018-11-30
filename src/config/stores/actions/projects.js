export const CREATE_PROJECT = 'CREATE_PROJECT'
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR'

export const createProject = project => async (dispatch, getState, { getFirebase, getFirestore }) => {
  try {
    const firestore = getFirestore()
    await firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Adib',
      authorLastName: 'Firman'
    })

    dispatch({ type: CREATE_PROJECT, project })
  } catch (error) {
    dispatch({ type: CREATE_PROJECT_ERROR, error })
  }
}
