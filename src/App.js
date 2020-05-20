import React from 'react';
// import logo from './logo.svg';
import './App.css';
import WhoAmI from './components/WhoAmI.js'
import History from './components/Timeline.js'
import Day from './components/Day.js'
import Food from './components/Food.js'
import Places from './components/Places.js'
import Values from './components/Values.js'


function App() {
  return (
    <div className="App">
      <h1>hey, I'm anam. heres some data about me..</h1>
      <div class="item">
        <h2> identity</h2>
        <WhoAmI/>
      </div>

      <div class="item">
        <h2>my background</h2>
        <History />
      </div>

      <div class="item">
        <h2> a day in the life </h2>
        <Day />
      </div>

      <div class="item">
        <h2>food i enjoy</h2>
        <Food />
      </div>

      <div class="item">
          <h2> things  I value</h2>
          <Values />
      </div>

      <div class="item">
          <h2> places i've been</h2>
          <h6>p.s. my geography is whack</h6>
          <Places />
      </div>

      <div class="item">
        <h1><a href="https://anamsoomro.com/"> wanna know more? </a> </h1>
      </div>

    </div>
  );
}

export default App;
