import React, { Component } from 'react';

import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props)
            this.state = {
                data: props.data
            }
    }

    render() {
        return (
            <div style = {{ position: 'relative', width: 578, height: 650 }} className = 'chart'>
                <Bar 
                    data = {this.state.data}
                    options = {{
                        title: {
                            display: true,
                            text: 'Your week of sleep',
                            fontSize: 13
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

export default Chart;
