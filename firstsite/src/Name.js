import React from 'react';
import { connect } from 'react-redux'

function Name(props){
  return <h1>{`My name is ${props.name}`}</h1>;
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    name: state.user.name
  }
}

export default connect(mapStateToProps)(Name);
