import React, {useState} from 'react';
import { connect } from 'react-redux';
import {updateNameAction, updateBenchAction, updateDeadAction, updateOHPAction} from './redux-actions';
import './App.css';

class WeightInput extends React.Component {

  _onSquat = (e) => {
    this.setState({SquatWeight: e.target.value})
  };

  _onBench = (e) => {
    this.setState({BenchWeight: e.target.value})
  };

  _onDead = (e) => {
    this.setState({DeadWeight: e.target.value})
  };

  _onOHP = (e) => {
    this.setState({OHPWeight: e.target.value})
  };

  _updateWeight = () => {
    const {SquatWeight, BenchWeight, DeadWeight, OHPWeight} = this.state;
    this.props.onUpdateName(SquatWeight);
    this.props.onUpdateBench(BenchWeight);
    this.props.onUpdateDead(DeadWeight);
    this.props.onUpdateOHP(OHPWeight);
  };

  render() {
    const {SquatWeight, BenchWeight, DeadWeight, OHPWeight} = this.props;
    return (
      <div className="WeightInput">
        {/*
        <h3>{SquatWeight}</h3>
        <h3>{BenchWeight}</h3>
        <h3>{DeadWeight}</h3>
        <h3>{OHPWeight}</h3>
            */}
        <h3>Please enter your PB</h3>
        <h3>on each lift</h3>
        <input type="integer" placeholder={"Squat Max"} onChange={this._onSquat}/>
        <input type="integer" placeholder={"Bench Press Max"} onChange={this._onBench}/>
        <input type="integer" placeholder={"Deadlift Max"} onChange={this._onDead}/>
        <input type="integer" placeholder={"OHP Max"} onChange={this._onOHP}/>
        <button onClick={this._updateWeight}>Update Weight</button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    SquatWeight: state.user.SquatWeight,
    BenchWeight: state.user.BenchWeight,
    DeadWeight: state.user.DeadWeight,
    OHPWeight: state.user.OHPWeight
  }
};

const mapDispatchToProps = {
  onUpdateName: updateNameAction,
  onUpdateBench: updateBenchAction,
  onUpdateDead: updateDeadAction,
  onUpdateOHP: updateOHPAction
};

export default connect(mapStateToProps, mapDispatchToProps)(WeightInput);
