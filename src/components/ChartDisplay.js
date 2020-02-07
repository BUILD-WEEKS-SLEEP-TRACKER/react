import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ChartContainer, H2, ChartTitle, Span } from './ChartStyles';
// import { fetchChartData } from '../utils/actions'
import Chart from './Chart';

import { getSleepEntries } from '../utils/actions';





class ChartDisplay extends Component {
    constructor() {
        super();
        this.state = {

            totalTimeSlept: 0

    }
}

    componentWillMount() {
        getSleepEntries();
        console.log('This is state of Chart Display: ',this.state);
    }


    
    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,0, 600, 550);
        gradient.addColorStop(0, color);
        return gradient;
    }    

    getChartData = canvas => {
        const data = this.state.totalTimeSlept;
        if(data.datasets) {
            let colors = [];
            data.datasets.foreach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);

            })
        }
    this.setState({
        //AXIOS CALL GOES HERE
        data: {
            labels: [
                'S', 'M', 'T', 'W', 'T', 'F', 'S'
            ],
            datasets: [
                {
                    label: 'Hours slept',
                    data: 6 
                }
            ],
            backgroundColor: [
                'green',
                'green',
                'green',
                'green',
                'green',
                'green',
                'green'
            ]
        }
    })
    
}

     render() {
         return (
             <ChartContainer>
                 <ChartTitle>
                     <H2>Hours Slept</H2>
                 </ChartTitle>
                 <div>
                     <Chart totalTimeSlept = {this.state.totalTimeSlept} />
                 </div>
                 <div style = {{color: 'white'}}>
                     <NavLink to = '/add-sleep-entry' className="add-entry">
                        <Span>Add Entry</Span>
                    </NavLink>
                </div>
            </ChartContainer>
            )
}
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        totalTimeSlept: state.totalTimeSlept
    }
};

export default connect(
    mapStateToProps
)(ChartDisplay)
