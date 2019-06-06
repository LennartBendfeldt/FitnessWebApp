import React from 'react';

const WorkoutSummary = ({workout}) => {

    return(
        <div className="card z-depth-1 workout-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{workout.title}</span>
                    <p>Posted by LB</p>
                    <p className="grey-text">30th of May, 6pm</p>
                </div>
            </div>
    )
}

export default WorkoutSummary;