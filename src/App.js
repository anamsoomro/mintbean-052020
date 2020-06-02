import React from 'react';
// import logo from './logo.svg';
import './App.css';
import WhoAmI from './components/WhoAmI.js'
import History from './components/Timeline.js'
import Day from './components/Day.js'
import Food from './components/Food.js'
import Places from './components/Places.js'
import Values from './components/Values.js'
import Map from './components/Map.js'


function App() {
  return (
    <div className="App">
      {/* <h1> who's anam? </h1> */}
      <p>
        My name is Anam, I'm an engineer and love data. Data visualization is a strong tool that can tramslate numbers to stories. <a href="https://developers.google.com/chart/interactive/docs">Google charts</a> is offered in their developers library. Here's a little bit about me told through data... 
      </p>

      <div class="item">
        <h2>Identity</h2>
        <WhoAmI/>
      </div>

      <div class="item">
        <h2>My Background</h2>
        <History />
      </div>

      <div class="item">
        <h2> A Day In the Life </h2>
        <Day />
      </div>



      <div class="item">
        <h2>Food I Enjoy</h2>
        <Food />
      </div>

      <div class="item">
          <h2>Things I Value</h2>
          <Values />
      </div>

      <div class="item">
          <h2>Places I've Been</h2>
          <Map />
          {/* <Places /> */}
      </div>

      {/* <div class="item">
        by: <a href="https://anamsoomro.com/"> Anam Soomro </a> 
      </div> */}

      <footer class="header">
        by: <a href="https://anamsoomro.com/"> Anam Soomro </a> 
      </footer>

    </div>
  );
}

export default App;
