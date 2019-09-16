import React, {useState} from 'react';
import { connect } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {updateWeekAction} from './redux-actions';


const workoutConstants = [
  [ [0.85, 0.65], [0.95, 0.85], [0.90, 0.80], [0.90, 0.75], [0.85, 0.675], [0.95, 0.925] ], //Week 1
  [ [0.95, 0.85], [0.90, 0.75], [0.95, 0.90], [0.85, 0.65], [0.95, 0.875], [0.85, 0.75] ], //Week 2
  [ [0.90, 0.75], [0.85, 0.65], [0.85, 0.70], [0.95, 0.85], [0.90, 0.775], [0.90, 0.825] ], //Week 3
  [ [0.865, 0.66], [0.965, 0.85], [0.915, 0.810], [0.915, 0.76], [0.865, 0.685], [0.965, 0.935] ], //Week 4
  [ [0.965, 0.860], [0.915, 0.75], [0.965, 0.910], [0.865, 0.66], [0.965, 0.885], [0.865, 0.760] ], //Week 5
  [ [0.915, 0.760], [0.865, 0.650], [0.865, 0.710], [0.965, 0.860], [0.915, 0.785], [0.925, 0.835] ], //Week 6
  [ [0.88, 0.67], [0.98, 0.87], [0.93, 0.82], [0.93, 0.77], [0.88, 0.695], [0.98, 0.945] ], //Week 7
  [ [0.98, 0.87], [0.93, 0.77], [0.98, 0.93], [0.88, 0.67], [0.98, 0.895], [0.88, 0.77] ], //Week 8
  [ [0.93, 0.77], [0.88, 0.67], [0.88, 0.72], [0.98, 0.87], [0.93, 0.795], [0.930, 0.845] ]  //Week 9
]



class WorkoutWeek extends React.Component{

//onClick = {this.props.onUpdateWeek0(setWeek)}


_onClick = (weekindex, event) => {

  this.props.onUpdateWeek(weekindex)
}

  render(){
    const {SquatWeight, BenchWeight, DeadWeight, OHPWeight, setWeek} = this.props






  return(
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0" onClick = {this._onClick.bind(this, 0)}> WEEK 1 </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" >
               <Card.Body>
               <div>

               <h1>Legs #1</h1>
               <h1>Squat     5 Rep Max:{SquatWeight * workoutConstants[setWeek][0][0]}</h1>
               <h1>Squat     4x12:{SquatWeight * workoutConstants[setWeek][0][1]}</h1>

               <h1>Push #1</h1>
               <h1>Bench     1 Rep Max:{BenchWeight * workoutConstants[setWeek][1][0]}</h1>
               <h1>Bench     4x4:{BenchWeight * workoutConstants[setWeek][1][1]}</h1>

               <h1>Pull #1</h1>
               <h1>Deadlift     3 Rep Max:{DeadWeight * workoutConstants[setWeek][2][0]}</h1>
               <h1>Deadlift     4x6:{DeadWeight * workoutConstants[setWeek][2][1]}</h1>


               <h1>Legs #2</h1>
               <h1>Squat     3 Rep Max:{SquatWeight * workoutConstants[setWeek][3][0]}</h1>
               <h1>Squat     4x8:{SquatWeight * workoutConstants[setWeek][3][1]}</h1>


               <h1> Push #2</h1>
               <h1>OHP     5 Rep Max:{OHPWeight * workoutConstants[setWeek][4][0]}</h1>
               <h1>OHP     4x12:{OHPWeight * workoutConstants[setWeek][4][1]}</h1>


               <h1> Pull #2 </h1>
               <h1>Deadlift     1 Rep Max:{DeadWeight * workoutConstants[setWeek][5][0]}</h1>
               <h1>Deadlift     4x2:{DeadWeight * workoutConstants[setWeek][5][1]}</h1>

               </div>

               </Card.Body>
            </Accordion.Collapse>
      </Card>


      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2" onClick = {this._onClick.bind(this, 1)} >
          WEEK 2
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3" >
          WEEK 3
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>


      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="4" >
          WEEK 4
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>



      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="5" >
          WEEK 5
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>



      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="6" >
          WEEK 6
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>



      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="7" >
          WEEK 7
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="7">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>



      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="8" >
          WEEK 8
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="8">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>



      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="9" >
          WEEK 9
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="9">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>



    </Accordion>

    //LegsNumOne(SquatWeight)
    //PushNumOne(BenchWeight),
    //PullNumOne(DeadWeight)
    //LegsNumTwo(SquatWeight),
    //PushNumTwo(OHPWeight)
  );
}
};


const mapStateToProps = (state) => {
  console.log(state);
  return {
    SquatWeight: state.user.SquatWeight,
    BenchWeight: state.user.BenchWeight,
    DeadWeight: state.user.DeadWeight,
    OHPWeight: state.user.OHPWeight,
    setWeek: state.user.setWeek
  }
};

const mapDispatchToProps = {
    onUpdateWeek: updateWeekAction
  }



export default connect(mapStateToProps, mapDispatchToProps)(WorkoutWeek)
