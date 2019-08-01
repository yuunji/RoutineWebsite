import React, {useState} from 'react';
import { connect } from 'react-redux'

import {updateNameAction} from './redux-actions';

import './App.css';

class Tweet extends React.Component {
  state = {
    name: '',
    age: 0,
  };

  _onChange = (e) => {
    this.setState({name: e.target.value});
  };

  _updateName = () => {
    const {name} = this.state;
    this.props.onUpdateName(name);
  };

  render() {
    const {name, message} = this.props;
    return (
      <div className="tweet">
        <h3>{name}</h3>
        <p>{message}</p>
        <h3>Third Line</h3>
        <input type="text" placeholder={name} onChange={this._onChange}/>
        <button onClick={this._updateName}>Update Name</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    name: state.user.name
  }
}

const mapDispatchToProps = {
  onUpdateName: updateNameAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
