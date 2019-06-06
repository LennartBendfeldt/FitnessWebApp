export const createExercise = (workout) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('workouts').add({
            ...workout,
            authorFirstName: 'Lennart',
            authorLastName: 'Bendfeldt',
            authorID: 38525,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_WORKOUT', workout});
        }).catch((err) => {
            dispatch({type: 'CREATE_WORKOUT_ERROR', err});
        })
        
    }
};