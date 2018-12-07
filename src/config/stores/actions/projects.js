export const CREATE_PROJECT = 'CREATE_PROJECT'
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR'

const capitalizeString = string => {
  return string.split(' ').map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(' ')
}

export const createProject = project => async (dispatch, getState, { getFirebase, getFirestore }) => {
  try {
    const firestore = getFirestore()
    const { firebase } = getState()

    await firestore.collection('projects').add({
      ...project,
      title: capitalizeString(project.title),
      authorFirstName: firebase.profile.firstName,
      authorLastName: firebase.profile.lastName,
      authorId: firebase.auth.uid,
      createdAt: new Date()
    })

    dispatch({ type: CREATE_PROJECT, project })
  } catch (error) {
    dispatch({ type: CREATE_PROJECT_ERROR, error })
  }
}
