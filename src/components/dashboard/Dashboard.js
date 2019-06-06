import React, { Component } from 'react';
import Notifications from './Notifications';
import WorkoutList from '../workouts/WorkoutList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {

    render() {
        // console.log(this.props);
        const { workouts } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <WorkoutList workouts={workouts} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        workouts: state.firestore.ordered.workouts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'workouts' }
    ])
)(Dashboard);