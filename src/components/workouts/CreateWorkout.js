import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createExercise } from '../../store/actions/workoutActions';
import { Redirect } from 'react-router-dom';

class CreateWorkout extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createExercise(this.state);
    }

    render() {

        //destructuring to receive auth from props
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Add a Workout</h5>
                    <div className="input-field">
                        <input type="text" id="title" onChange={this.handleChange} />
                        <label htmlFor="title">Workout Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Workout Details</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Get Swole!</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createExercise: (workout) => dispatch(createExercise(workout))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkout);