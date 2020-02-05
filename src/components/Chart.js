import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Bar } from 'react-chartjs-2';

const Chart = props => {
        return (
            <div style = {{ position: 'relative', width: 578, height: 650 }} className = 'chart'>
                <Bar 
                    // data = {this.state.data}
                    // options = {{
                    //     title: {
                    //         display: true,
                    //         text: 'Your week of sleep',
                    //         fontSize: 13
                    //     },
                    //     legend: {
                    //         display: false
                    //     },
                    //     scales: {
                    //         yAxes: [{
                    //             ticks: {
                    //                 beginAtZero: true
                    //             }
                    //         }]
                    //     }
                    // }}
                />
            </div>
        )
    }

  const mapStateToProps = state => {
        console.log(state)
        return({
            chartData: state.data
        })
    }

    export default connect(
        mapStateToProps,
        
    )(Chart)


