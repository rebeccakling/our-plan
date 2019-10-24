export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore()
        const state = getState()
        const profile = state.firebase.profile

        const authorId = state.firebase.auth.uid
        firestore.collection('projects').add({
          ...project, 
          authorFirstName: profile.displayName.split(' ')[0],
          authorLastName: profile.displayName.split(' ')[1],
          authorID: authorId,
          createAt: new Date()
        }).then(() => {
          dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
          dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
}