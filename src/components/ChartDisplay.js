import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ChartContainer, H2, ChartTitle } from './ChartStyles';
// import { fetchChartData } from '../utils/actions'
import Chart from './Chart';




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


    
    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,0, 600, 550);
        gradient.addColorStop(0, color);
        return gradient;
    }    

    getChartData = canvas => {
        const data = this.state.data;
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
                    data: [
                        6,
                        6.5,
                        7,
                        8,
                        6,
                        6,
                        9
                    ]
                }
            ],
            backgroundColor: [
                'white'
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
                 {/* <div>
                     <Chart data = {this.state.data} />
                 </div> */}
                 <div style = {{color: 'white'}}>
                     <NavLink to = '/add-sleep-entry'>
                        Add Entry
                    </NavLink>
                </div>
            </ChartContainer>
            )
}
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        data: state.data
    }
};

export default connect(
    mapStateToProps
)(ChartDisplay)
