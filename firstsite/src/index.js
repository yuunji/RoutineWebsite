import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { combineReducers } from 'redux'

const defaultWorkoutState = {
  pushups: 10
};

const workoutReducer = (state = defaultWorkoutState, action) => {
  switch (action.type) {
    case 'UPDATE_PUSH_UP_COUNT':
      return state;
    default:
      return state
  }
}

const defaultUserState = {
  name: 'Arkady Pevzner'
};

const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      console.log('>>>>>');
      console.log(action);
      return {
        ...state,
        name: action.payload,
      };
      return state;
    default:
      return state
  }
}

const reducers = combineReducers({
  workout: workoutReducer,
  user: userReducer,
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />    
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
