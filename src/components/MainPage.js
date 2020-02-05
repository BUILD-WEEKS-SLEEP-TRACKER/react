import React from 'react';
import ChartDisplay from './ChartDisplay';
import SleepList from './SleepList';

import { MainPageContainer } from './MainPageStyles';


const MainPage = () => {
    return (
    <MainPageContainer>
        <ChartDisplay />
        <SleepList />
        <button>Add Entry</button>
    </MainPageContainer>
    )
}

export default MainPage;