import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ChartContainer, H2, ChartTitle } from './ChartStyles';
// import { fetchChartData } from '../utils/actions'
import Chart from './Chart'




class ChartDisplay extends Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }


//   setGradientColor = (canvas, color) => {
//         const ctx = canvas.getContext('2d');
//         const gradient = ctx.createLinearGradient(0,0, 600, 550);
//         gradient.addColorStop(0, color);
//         return gradient;
//     }        
  

    getChartData = canvas => {
        const data = this.state.data;
        console.log(data);
        if(data.datasets) {
            let colors = [];
            data.datasets.foreach((set, i) => {
                set.backgroundColor = 'green';

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
                    data: [
                        this.state.hours_slept
                    ]
                }
            ],
            backgroundColor: [
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
                     <Chart data = {this.state.data} />
                 </div>
             </ChartContainer>
         )
     }
}

const mapStateToProps = state => {
    console.log(state)
    return({
        data: state.data
    })
};

export default connect(
    mapStateToProps,
    // fetchChartData
)(ChartDisplay);
