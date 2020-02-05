import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { getEntry, deleteEEntry, updateEntry} from '../actions';
// import AddEntry from './AddExercise';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AddSleepEntry from './AddSleepEntry';

import {  H2, SleepListTitle, ListContainer } from './SleepListStyles';


const SleepList = (props) => {
    console.log("this is props in SleepList", props);
    
    useEffect(() => {
        // console.log('blerp')
        // props.getExercises();
    }, [])

    return (
        <div>
           
            <ListContainer>
                <SleepListTitle>
                    <H2>Week of DD/MM - DD/MM</H2>
                </SleepListTitle>
            </ListContainer>
            
            {/* <NewEntry /> */}
            <div>
                {/* {props.data.map((e) => {
                    return (
                        <div key={e.id}>
                            <p>Sleep Start</p>
                            <p>{e.date}</p>
                            <p>{e.sleep-start}<p>
                            <p>Sleep End</p>
                            <p>{e.date}</p>
                            <p>{e.sleep-end}<p>
                            <p>Mood In Bed</p>
                            <p>Mood In The Morning</p>
                            
                            <button>Delete</button>
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}

export default SleepList;