import React from 'react';
import { connect } from 'react-redux'

function Name(props){
  return <h1>{`I can squat ${props.name}lbs`}</h1>;
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    name: state.user.SquatWeight
  }
}

export default connect(mapStateToProps)(Name);
