import React, { useState } from 'react';

import { AddEntry } from "../utils/actions/index";

const initialFormValues = {
    date: 0,
    wakeUpRating: '',
    dayRating: '',
    nightRating: '',
    wokeUp: "",
    fellAsleep: ""
    
}

const AddSleepEntry = (props) => {
    console.log("this is props in add entry", props)
    const [input, setInput] = useState(initialFormValues)

    const handleInputChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };
}

export default AddSleepEntry;