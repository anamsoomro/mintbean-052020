import React from 'react';
import { Chart } from "react-google-charts";


function Map() {
  return (
    <div  style={{display: "inline-block"}}>

      <Chart
        width={'700px'}
        height={'600px'}
        chartType="GeoChart"
        loader={<div>analyzing ... </div>}
        data={[
          ['Country', 'Popularity'],
          ['Germany', 300],
          ['United States', 300],
          ['Pakistan', 300],
          ['Canada', 300],
          ['France', 300],
          ['Germany', 300],
          ['Switzerland', 300],
          ['Belgium', 300],
          ['Netherlands', 300],
          ['Turkey', 300],
          ['United Arab Emirates', 300],
          ['Saudi Arabia', 300],
        ]}
        options={{

          legend: 'none',
          colorAxis: { colors: ['#547881', '#547881'] },
        }}
        mapsApiKey={process.env.GOOGLE_API_KEY}
        rootProps={{ 'data-testid': '1' }}
      />

    </div>
        
  )
}

export default Map;
