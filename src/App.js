import React, {useState} from 'react';
import WeightInput from './WeightInput';
import About from './about.js'
import WorkoutWeek from './week.js';

function App(){
  return(
    <div className="app">
      <div className="layout">
        <div className="sidebar">
          <About/>
        </div>
        <div className="content">
          <WeightInput />
          <WorkoutWeek/>
        </div>
      </div>
    </div>
  );

}


export default App;
