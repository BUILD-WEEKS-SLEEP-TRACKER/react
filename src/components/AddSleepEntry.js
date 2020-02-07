import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { addEntry } from "../utils/actions/index";
import { useParams, Link } from "react-router-dom";

import { useForm } from "react-hook-form";

// import { Header } from "./AddSleepEntryStyle";

const initialFormValues = {
  date: `${moment().format("MMM Do YY")}`,
  wakeUpRating: "",
  wokeUp: "",
  nightRating: "",
  fellAsleep: "",
  dayRating: "",
  timeCreated: "",
  totalTimeSlept: 0
};

const AddSleepEntry = props => {
    console.log("this is props in add entry", props);
  const [payload, setPayload] = useState(initialFormValues);
  const { id } = useParams();
  const { register, handleSubmit, errors } = useForm();

 

  const Submit = data => {
    // console.log("this is data", data);
    
    const _p = {
      ...data,
      user_id: localStorage.getItem("id")
    };
    props.addEntry(_p);
    // props.history.push("/main-page")
  };

  return (
    <form onSubmit={handleSubmit(Submit)}>
      <h3>Sleep Start</h3>
      <label htmlFor="Sleep Start">
      
        <input 
        name="date" 
        type="date" 
        ref={register} 
        placeholder="date" />
        <input
          name="fellAsleep"
          type="time"
          ref={register}
          placeholder="Bed time."
        />
        <input
          name="nightRating"
          ref={register}
          type="integer"
          placeholder="Bed rating"
        />
      </label>
      <h3>Sleep End</h3>
      <label htmlFor="Sleep End">
      
        <input
          name="wokeUp"
          type="time"
          ref={register}
          placeholder="Time you woke up."
        />
        <input
          name="wakeUpRating"
          type="integer"
          ref={register}
          placeholder="Wake up mood"
        />
      </label>
      <h3>Daily Mood</h3>
      <label htmlFor="Daily Mood">
       
        <input
          name="timeCreated"
          type="date"
          ref={register}
          placeholder="Day time."
        />
        <input
          name="dayRating"
          type="integer"
          ref={register}
          placeholder="day mood"
        />
        <input
          name="totalTimeSlept"
          type="integer"
          ref={register}
          placeholder="time slept"
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
};

const mapStateToProps = state => {
  //   console.log("this is state in addsleep entry", state);
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, { addEntry })(AddSleepEntry);
