import React from 'react';
import { Chart } from "react-google-charts";


function WhoAmI() {
  return (
    <div style={{pointerEvents: "none",   display: "inline-block"}}>
    <Chart
      width={'90vw'}
      height={'300px'}
      chartType="TreeMap"
      loader={<div>Loading Chart</div>}
      data={[
        [
          'Location',
          'Parent',
          'Market trade volume (size)',
          'Market increase/decrease (color)',
        ],
        [' ', null, 0, 0],

        ['designer', ' ', 0, 0],
        ['full-stack developer', ' ', 0, 0],
        ['wanderer', ' ', 0, 0],
        ['builder', ' ', 0, 0],
        ['problem solver', ' ', 0, 0],
        ['coffee addict', ' ', 0, 0],



        ['Brazil', 'designer', 11, 10],
        ['blah', 'coffee addict', 24, -15],

        ['France', 'full-stack dev', 42, -11],
        ['China', 'wanderer', 12, 1],
        ['Egypt', 'problem solver', 21, 0],
        ['blah1', 'builder', 4, 1],


      ]}
      options={{
        minColor: "#547881",
        midColor: '#ddd',
        maxColor: "#364d53",
        headerHeight: 15,
        fontColor: 'white',
        // showScale: true,
        // titel: "false"
      }}
      rootProps={{ 'data-testid': '1' }}
    />

  </div>
        
  )
}

export default WhoAmI;
