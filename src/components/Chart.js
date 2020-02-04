import React, { Component } from 'react';
import { fetchChartData } from '../utils/actions'

import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';

class Chart extends Component {
    constructor(props) {
        super(props)
            this.state = {
                chartData: props.chartData
            }
    }

    render() {
        return (
            <div className = 'chart'>
                <Bar 
                    data = {this.state.chartData}
                    width = {50}
                    height = {5}
                    options = {{
                        title: {
                            display: true,
                            text: 'Your week of sleep',
                            fontSize: 30
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return({
        chartData: state.chartData
    })
};

export default connect(
    mapStateToProps,
    fetchChartData
)(Chart);