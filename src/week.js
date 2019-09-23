import React, {useState} from 'react';
import { connect } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
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


_onClick = (weekindex, event) => {

  this.props.onUpdateWeek(weekindex)
}

render(){

  const {SquatWeight, BenchWeight, DeadWeight, OHPWeight, setWeek} = this.props

  return(


    <Alert variant= "primary">
    <Alert.Heading> 6 DAY PUSH PULL LEGS - FULL BODY SPLIT </Alert.Heading>
    <p>
    <Accordion>
        <Card.Title>

        </Card.Title>
        {workoutConstants.map((constants, index) => (
        <Card border = "primary"  style={ {width: '50rem' }   }>

          <Accordion.Toggle as={Card.Header} eventKey={index} onClick = {this._onClick.bind(this, index)}>{`WEEK ${index + 1}`} </Accordion.Toggle>
              <Accordion.Collapse eventKey={index}>
                 <Card.Body>



                 <Card.Header>LEGS #1
                 </Card.Header>
                 <ListGroup className = "days">
                 <ListGroup.Item className="Exercises">Barbell Squat     5 Rep Max: {SquatWeight * constants[0][0]}</ListGroup.Item>
                 <ListGroup.Item className="Exercises">Barbell Squat     4x12: {SquatWeight * constants[0][1]}</ListGroup.Item>
                 <ListGroup.Item className="Exercises">Acessories: Quads, Hamstrings, Calves</ListGroup.Item>
                 </ListGroup>

                 <Card.Header>PUSH #1</Card.Header>
                 <ListGroup className = "days">
                 <ListGroup.Item className="Exercises">Barbell Bench Press    1 Rep Max: {BenchWeight * constants[1][0]}</ListGroup.Item>
                 <ListGroup.Item className="Exercises">Barbell Bench Press    4x4: {BenchWeight * constants[1][1]}</ListGroup.Item>
                 <ListGroup.Item className="Exercises">Acessories: Chest, Shoulders, Triceps </ListGroup.Item>
                 </ListGroup>

                 <Card.Header>PULL #1</Card.Header>
                 <ListGroup className = "days">
                 <ListGroup.Item className="Exercises">Barbell Deadlift     3 Rep Max: {DeadWeight * constants[2][0]}</ListGroup.Item>
                 <ListGroup.Item className="Exercises">Barbell Deadlift     4x6: {DeadWeight * constants[2][1]}</ListGroup.Item>
                 <ListGroup.Item className="Exercises">Acessories: Back, Biceps </ListGroup.Item>
                 </ListGroup>

                 <Card.Header>LEGS #2</Card.Header>
                 <ListGroup active className = "days">
                 <ListGroup.Item className="Exercises">Barbell Squat     3 Rep Max: {SquatWeight * constants[3][0]}</ListGroup.Item>
                 <ListGroup.Item className="Exercises">Barbell Squat     4x8: {SquatWeight * constants[3][1]}</ListGroup.Item>
                 <ListGroup.Item className="Exercises">Acessories: Quads, Hamstrings, Calves</ListGroup.Item>
                 </ListGroup>



                 <Card.Header>PUSH #2</Card.Header>
                 <ListGroup  className = "days">
                 <ListGroup.Item>Barbell Overhead Press     5 Rep Max: {OHPWeight * constants[4][0]}</ListGroup.Item>
                 <ListGroup.Item>Barbell Overhead Press     4x12: {OHPWeight * constants[4][1]}</ListGroup.Item>
                 <ListGroup.Item>Acessories: Chest, Shoulders, Triceps </ListGroup.Item>
                 </ListGroup>


                 <Card.Header>PULL #2 </Card.Header>
                 <ListGroup className = "days">
                 <ListGroup.Item>Barbell Deadlift     1 Rep Max: {DeadWeight * constants[5][0]}</ListGroup.Item>
                 <ListGroup.Item>Barbell Deadlift     4x2: {DeadWeight * constants[5][1]}</ListGroup.Item>
                 <ListGroup.Item>Acessories: Back, Biceps </ListGroup.Item>
                 </ListGroup>


                 </Card.Body>
              </Accordion.Collapse>
          </Card>
        ))}
    </Accordion>
    </p>

    </Alert>


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
