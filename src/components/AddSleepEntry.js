import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { addEntry } from "../utils/actions/index";
import { useParams } from "react-router-dom";


const initialFormValues = {

    date: `${moment().format("MMM Do YY")}`,
    wakeUpRating: "",
    wokeUp:"",
    nightRating: "",
    fellAsleep:"",
    dayRating: "",
    timeCreated: "",
    totalTimeSlept: 0,  
   
 
};



const AddSleepEntry = props => {
  console.log("this is props in add entry", props);
  const [payload, setPayload] = useState(initialFormValues);
  const { id } = useParams();



  const handleInputChange = event => {
    setPayload({ ...payload, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addEntry(payload);
    setPayload({
        date: `${moment().format("MMM Do YY")}`,
        wakeUpRating: "",
        wokeUp:"",
        nightRating: "",
        fellAsleep:"",
        dayRating: "",
        timeCreated: "",
        totalTimeSlept: 0,  
       
        
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sleep Start</h3> 
      <label htmlFor = 'Sleep Start'>
        <input 
            name = 'time'
            type="integer"
            value = {props.fellAsleep}
            onChange = {handleInputChange}
            placeholder = 'Bed time.'
        />
        <input
            name="nightRating"
            value={props.nightRating}
            type="text"
            placeholder = 'Bed rating'
            onChange={handleInputChange}
        />
      </label>
      <h3>Sleep End</h3>
      <label htmlFor = 'Sleep End'>
      <input
        name="time"
        value={props.wokeUp}
        type="text"
        onChange={handleInputChange}
        placeholder = 'Time you woke up.'
      />
      <input
        name="wakeUpRating"
        value={props.wakeUpRating}
        type="text"
        onChange={handleInputChange}
        placeholder = 'Wake up mood'
      />
      </label>
      <h3>Daily Mood</h3>
      <label htmlFor = 'Daily Mood'>
      <input
        name="time"
        value={props.timeCreated}
        type="text"
        onChange={handleInputChange}
        placeholder = 'Day time.'
      />
      <input
        name="dayRating"
        value={props.dayRating}
        type="text"
        onChange={handleInputChange}
        placeholder = 'day mood'
      />
      </label>
      <button>Accept</button>
    </form>
  );
};

const mapStateToProps = state => {
  console.log("this is state in addsleep entry", state)
    return {
    data :[{
     date: `${moment().format("MMM Do YY")}`,
      wakeUpRating: state.wakeUpRating,
      wokeUp: state.wokeUp,
      nightRating: state.nightRating,
      fellAsleep: state.fellAsleep,
      dayRating: state.dayRating,
      timeCreated: state.timeCreated,
      totalTimeSlept: 0, 
    }
  ]
  };
};

export default connect(mapStateToProps, { addEntry })(AddSleepEntry);
