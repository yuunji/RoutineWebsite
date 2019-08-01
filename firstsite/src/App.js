import React from 'react';
import Tweet from './tweet';
import Name from './Name';

function App(){
  return(
    <div className = "app">
      <Name />
      <Tweet message="123TestMessage456"/>
    </div>
  );

}


export default App;
