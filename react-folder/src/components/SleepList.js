import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { getEntry, deleteEEntry, updateEntry} from '../actions';
// import AddEntry from './AddExercise';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import EditEntry from './EditEntry';


const SleepList = (props) => {
    // console.log();
    
    useEffect(() => {
        // console.log('blerp')
        // props.getExercises();
    }, [])

    return (
        <div>
            <Link to='/'><button>Logout</button></Link>
            <Link to='/journal'><button>Journals</button></Link>
            <h1>Edit Entry</h1>
            {/* <ExerciseEdit/> */}
            <h1>Add Exercises to Journal</h1>
            {/* <AddExercise/> */}
            <h1>Journal Exercises</h1>
            <div>
                {props.data.map((e) => {
                    return (
                        <div key={e.id}>
                            <p>{e.name}</p>
                            <p>Weight: {e.weight}</p>
                            <p>Reps: {e.reps}</p>
                            <p>Sets: {e.sets}</p>
                            <button>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     // console.log(state);
//     return {
//         data: state.data,
//         isEditing: state.isEditing
//     }
// }

export default SleepList;