import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { combineReducers } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultUserState = {
  SquatWeight: 0,
  BenchWeight: 0,
  DeadWeight: 0,
  OHPWeight: 0,
  setWeek: 5
};

const userReducer = (state = defaultUserState, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'UPDATE_SQUAT':
      return {
        ...state,
        SquatWeight: action.payload
      };
    case 'UPDATE_BENCH':
    return {
      ...state,
      BenchWeight: action.payload
    }
    case 'UPDATE_DEAD':
    return {
      ...state,
      DeadWeight: action.payload
    }
    case 'UPDATE_OHP':
    return {
      ...state,
      OHPWeight: action.payload
    }

    case 'UPDATE_WEEK':
    return {
      ...state,
      setWeek: action.payload
    }


    default:
      return state
  }
}

const reducers = combineReducers({
  user: userReducer
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
