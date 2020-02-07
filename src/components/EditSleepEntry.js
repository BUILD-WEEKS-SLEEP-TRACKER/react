import React, { useState, useEffect } from "react";
import moment from "moment";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { editEntry, deleteEntry } from "../utils/actions";

import { useForm } from "react-hook-form";

import { Form, Header, Label, Input, Button, TotalTimeInput, H2 } from './AddSleepEntryStyle'

const initialItem = {
  date: `${moment().format("MMM Do YY")}`,
  wakeUpRating: "",
  wokeUp: "",
  nightRating: "",
  fellAsleep: "",
  dayRating: "",
  timeCreated: "",
  totalTimeSlept: 0
};

const EditSleepEntry = props => {
  const [entry, setEntry] = useState(initialItem);
  console.log("this is props in edit sleep-entry", props);
  const { register, handleSubmit, errors } = useForm();
  const { id } = useParams();

  useEffect(() => {
    // console.log("this is data", props.data);

    // console.log('this is id', id)
    localStorage.setItem("id", id)
    
    const entryToUpdate = props.data.find(item => item.id == id);

    console.log("this is the entryToUpdate", entryToUpdate)
    if (entryToUpdate) {
      setEntry(entryToUpdate);
    }
   
  }, [id]);

  const Submit = entry => {
    console.log("this is entry in edit submit", entry);

    // const _p = {
    //   ...entry,
    //   user_id: localStorage.getItem("id")
    // };
    

    props.editEntry(entry);
  };

  return (
    <Form onSubmit={handleSubmit(Submit)}>
      <h2>
        Edit Entry{" "}
        <Link to= "/main-page">
        <button onClick ={e => {
            props.deleteEntry(id)
            
        }}>
          <i class="far fa-trash-alt 5x"></i>
        </button>
        </Link>
      </h2>
      
      <Header>Sleep Start</Header>
      <Label htmlFor="Sleep Start">
        <Input 
          name="date" 
          type="date" 
          ref={register} 
          placeholder="date" />
        <Input
          name="fellAsleep"
          type="time"
          ref={register}
          placeholder= {entry.fellAsleep}
        />
        <Input
          name="nightRating"
          ref={register}
          type="integer"
          placeholder= {entry.nightRating}
          />
      </Label>
      <Header>Sleep End</Header>
      <Label htmlFor="Sleep End">
        <input
          name="wokeUp"
          type="time"
          ref={register}
          placeholder={entry.wokeUp}
        />
        <input
          name="wakeUpRating"
          type="integer"
          ref={register}
          placeholder={entry.wakeUpRating}
        />
      </Label>
      <Header>Daily Mood</Header>
      <Label htmlFor="Daily Mood">
        <Input
          name="timeCreated"
          type="date"
          ref={register}
          placeholder="time"
        />
        <Input
          name="dayRating"
          type="integer"
          ref={register}
          placeholder="day mood"
        />
      </Label>
      <Header>Total Time Slept</Header>
      <TotalTimeInput htmlFor="Total Time Slept">
        <Input
          name="totalTimeSlept"
          type="time"
          ref={register}
          placeholder="time-slept"
        />
      </TotalTimeInput>
      <Button type="submit">Save</Button>
    </Form>
  );
};

const mapStateToProps = state => {
  console.log("this is the mapstate to props in edit", state);
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, { editEntry, deleteEntry })(EditSleepEntry);
