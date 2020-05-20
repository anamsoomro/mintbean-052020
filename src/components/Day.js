import React from 'react';
import { Chart } from "react-google-charts";


function Day() {
  return (
    <div style={{display: "inline-block"}}>
    
      <Chart
        width={'700px'}
        height={'400px'}
        chartType="PieChart"
        // loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['toy with code', 6],
          ['job hunt', 2],
          ['harass my housemates', 3],
          ['sleep', 6],
          ['eat', 2],
          ['watch videos of cute dogs', 1],
        ]}
        options={{
          legend: 'none',
          pieSliceText: 'data',
          // pieSliceText: 'label',
          title: '',
          pieStartAngle: 100,
          slices: {
            0: {color: '#547881'},
            1: {color: '#364d53'},
            2: {color: '#608893'},
            3: {color: '#7ca0aa'},
            4: {color: '#567a84'},
            5: {color: '#7d95aa'},
            6: {color: '#607c94'},
          }
        }}
        rootProps={{ 'data-testid': '4' }}
      />
    </div>
        
  )
}

export default Day;
