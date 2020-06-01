import React from 'react';
import { Chart } from "react-google-charts";


function Values() {
  return (
    <div style={{display: "inline-block"}}>
      <Chart
        width={'900px'}
        height={'600px'}
        chartType="BubbleChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['ID', 'professionally', 'personally', 'weight'],
          [' ', 12, 12,  0],
          ['growth', 10, 10,  10],
          ['inclusion', 9, 6, 8],
          ['authenticity', 8, 10,  10],
          ['dialouge', 7, 7,  6],
          ['diversity', 10, 1.7, 8],
          ['fun', 5, 5, 5],
          ['drama', 0, 0, 0.00001],

        ]}
        options={{
          title: ' ',
          hAxis: { title: 'personally' },
          vAxis: { title: 'professionally' },
          bubble: { textStyle: { fontSize: 11 } },
          colorAxis: {colors: ['#547881', 'e1e6eb']}
        }}
        rootProps={{ 'data-testid': '1' }}
      />


    </div>
        
  )
}

export default Values;
