import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { getEntry, deleteEEntry, updateEntry} from '../actions';
// import AddEntry from './AddExercise';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SleepCard from "./SleepCard";

import EditSleepEntry from "./EditSleepEntry";

import {
  H2,
  SleepListTitle,
  ListContainer,
  EntryContainer,
  SleepDisplay
} from "./SleepListStyles";

import { getSleepEntries } from "../utils/actions";

const SleepList = props => {
  console.log("this is props in SleepList", props.data);

  function routeToItem(ev, entry) {
    ev.preventDefault();
    props.history.push(`/edit-sleep-entry/${entry.id}`);
  }

  useEffect(() => {
    props.getSleepEntries();
  }, []);

  return (
    <div>
      <ListContainer>
        <SleepListTitle>
          <H2>Week of DD/MM - DD/MM</H2>
        </SleepListTitle>

        <EntryContainer className="entry-container">
          {props.data.map(entry => {
            return (
              <SleepDisplay
                key={entry.id}
                data={props.data}
                onClick={ev => routeToItem(ev, entry)}
              >
                <p>{entry.date}</p>

              </SleepDisplay>
            );
          })}
        </EntryContainer>
       
      </ListContainer>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, { getSleepEntries })(SleepList);
