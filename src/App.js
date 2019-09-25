import React, {useState} from 'react';
import WeightInput from './WeightInput';
import About from './about.js'
import WorkoutWeek from './week.js';

function App(){
  return(
    <div className = "app">

     <About/>
      <WeightInput />
      <WorkoutWeek/>


    </div>
  );

}


export default App;
