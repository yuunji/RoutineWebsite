import React from 'react';
import WeightInput from './WeightInput';
import Name from './Name';
import WorkoutWeek from './week.js';

function App(){
  return(
    <div className = "app">
      
      <WeightInput message="123TestMessage456"/>
      <WorkoutWeek/>
    </div>
  );

}


export default App;
