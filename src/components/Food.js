import React from 'react';
import { Chart } from "react-google-charts";


function Food() {
  return (
    <div style={{width: "100vh",display: "inline-block"}}>
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="BarChart"
      loader={<div>analyzing ... </div>}
      data={[
        ['Food', 'Spice', {role: 'style'}],
        ['Tacos', 7, "#7ca0aa"],
        ['Cookies', 0, "#7ca0aa"],
        ['Pizza', 2, "#7ca0aa"],
        ['Pho', 5, "#7ca0aa"],
        ['Briyani', 10, "#7ca0aa"],
        ['Papusas', 5, "#7ca0aa"],
        ['Watermelon', 0, "#7ca0aa"],
        ['Drunken-Noodles', 10, "#7ca0aa"],
        ['Empanadas', 2, "#7ca0aa"],
        ["Hot-Chicken", 9, "#7ca0aa"]
      ]}
      rootProps={{ 'data-testid': '6' }}
      chartPackages={['corechart', 'controls']}
      render={({ renderControl, renderChart }) => {
        return (
          <div>
            <div style={{ width: '100%' }}>{renderControl(() => true)}</div>
            <div style={{ width: '100%' }}>{renderChart()}</div>
          </div>
        )
      }}
      controls={[
        {
          controlType: 'NumberRangeFilter',
          controlID: 'Spice-filter',
          options: {
            filterColumnIndex: 1,
            ui: {
              labelStacking: 'vertical',
              label: 'spice',
              allowTyping: false,
              allowMultiple: false,
            },
            
            color: "#7ca0aa"
          },
  
        },
      ]}
      options={{
        legend: "none"
      }}
   
    />

</div>
  )
}

export default Food;
