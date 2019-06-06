import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const WorkoutDetails = (props) => {
    const { workout } = props;
    if (workout) {
        return (
            <div className="container section workout-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{workout.title}</span>
                        <p>{workout.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {workout.authorFirstName}{workout.authorLastName}</div>
                        <div>30th May, 6pm</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }


}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const workouts = state.firestore.data.workouts;
    const workout = workouts ? workouts[id] : null;
    return {
        workout: workout
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'workouts' }
    ])
)(WorkoutDetails);
