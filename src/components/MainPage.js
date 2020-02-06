import React from "react";
import ChartDisplay from "./ChartDisplay";
import SleepList from "./SleepList";
import { Link, Route } from "react-router-dom";


import PrivateRoute from "./PrivateRoute";


import { MainPageContainer } from "./MainPageStyles";

import AddSleepEntry from "./AddSleepEntry";
import EditSleepEntry from "./EditSleepEntry";


const MainPage = () => {
  return (
    <MainPageContainer className="main-page-container">
      <ChartDisplay />
      <PrivateRoute  path="/edit-sleep-entry/:id">
        <EditSleepEntry/>
      </PrivateRoute>

    
       
      <PrivateRoute  path="/main-page" component={SleepList} />
    </MainPageContainer>
  );
};

export default MainPage;
