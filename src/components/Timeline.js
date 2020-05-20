import React from 'react';
import { Chart } from "react-google-charts";


function Timeline() {
  return (
    <Chart
      width={'100%'}
      height={'300px'}
      chartType="Timeline"
      loader={<div>Loading Chart</div>}
      data={[
        [
          { type: 'string', id: 'President' },
          { type: 'date', id: 'Start' },
          { type: 'date', id: 'End' },
        ],
        ['engineering', new Date(2015, 6, 1), new Date(2018, 4, 1)],
        ['architecture', new Date(2018, 3, 1), new Date(2019, 5, 1)],
        ['construction', new Date(2019, 3, 1), new Date(2020, 1, 1)],
        ['development', new Date(2020, 1, 1), new Date(2020, 5, 1)],
        ['problem solver', new Date(2015, 5, 1), new Date(2020, 5, 1)],

      ]}
      options={{
        showRowNumber: true,

        timeline: { singleColor: "#547881"}
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
}

export default Timeline;
