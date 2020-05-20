import React from 'react';
import { Chart } from "react-google-charts";


function Places() {
  return (
    <div style={{display: "inline-block"}}>
    <Chart
      width={600}
      height={'600px'}
      chartType="Sankey"
      loader={<div>Loading Chart</div>}
      data={[
        ['From', 'To', 'Weight'],
        ['United States', 'California', 1],

        ['California', 'San Francisco', 1],
        ['California', 'San Diego', 1],
        ['California', 'L.A', 1],

        ['United States', 'Texas', 1],
        ['Texas', 'Houston', 1],
        ['Texas', 'Austin', 1],
        ['Texas', 'Dallas', 1],

        ['Netherlands', 'North Holland', 1],
        ['North Holland', 'Amsterdam', 1],
        ['North Holland', 'Arnhem', 1],
        ['North Holland', 'Rotterdam', 1],

        ['Switzerland', 'Basel', 1],
        ['Switzerland', 'Grindelwald', 1],


        ['Belgium', 'Brussels', 1],

        // ['Pakistan', 'Sindh', 1],

        // ['Sindh', 'Karachi', 1],
        // ['Sindh', 'Shikarpur', 1],
        


        ['Turkey', 'Istanbul', 1],

        ['United Kingodm', 'London', 1],

        ['Canada', 'Alberta', 1],
        ['Alberta', 'Jasper', 1],



      ]}
      rootProps={{ 'data-testid': '2' }}
      options={{
        sankey: {
          node: {
            colors: [ '#547881', '#364d53', '#608893', '#7ca0aa', '#567a84', '#7d95aa', '#607c94']
          }
        }
      }}
    />
    </div>
        
  )
}

export default Places;
