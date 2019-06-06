const initState = {
    workouts: [
        {id: '1', title: 'running', content: 'ran for 20 minutes'},
        {id: '2', title: 'swimming', content: 'swam for 20 minutes'},
        {id: '3', title: 'cycling', content: 'cycled for 20 minutes'}
    ]
}

const workoutReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_WORKOUT':
            console.log('created project', action.workout);
            return state;
        case 'CREATE_WORKOUT_ERROR':
            console.log('create workout error', action.err);
            return state;
        default:
            return state;
    }
};

export default workoutReducer;