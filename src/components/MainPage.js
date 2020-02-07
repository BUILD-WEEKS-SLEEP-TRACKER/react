import React, { useState, useEffect } from "react";
import ChartDisplay from "./ChartDisplay";
import SleepList from "./SleepList";
import { Link, Route } from "react-router-dom";


import PrivateRoute from "./PrivateRoute";


import { MainPageContainer } from "./MainPageStyles";

import AddSleepEntry from "./AddSleepEntry";

import { getSleepEntries } from '../utils/actions';



const MainPage = props => {
  const chartData = useState({
    ...props,
    date: '',
    totalTimeSlept: 0
  });

  useEffect(() => {
    getSleepEntries(chartData);
  })

  return (
    <MainPageContainer className="main-page-container">
      <ChartDisplay data = {chartData} />
      

    
       
    <PrivateRoute  path="/main-page" component={SleepList} />
    </MainPageContainer>
  );
};

export default MainPage;
