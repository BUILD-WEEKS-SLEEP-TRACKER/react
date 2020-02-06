import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const SleepCard = (props) => {
    console.log("this is the props in Sleep-Card", props)
    return (
    
      <div>
        <p>{props.name}</p>
        <p>Region: {props.region}</p>
        <p>ID: {props.id}</p>
        {/* <button> <Link to ={`/edit-entry/${props.id}`}>Edit Entry</Link></button> */}
      </div>
    
  )
}

export default SleepCard;