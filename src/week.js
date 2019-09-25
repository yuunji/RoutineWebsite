import React, {useState} from 'react';
import { connect } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
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

function round5(x)
{
    return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
}



class WorkoutWeek extends React.Component{


_onClick = (weekindex, event) => {

  this.props.onUpdateWeek(weekindex)
}



render(){

  const {SquatWeight, BenchWeight, DeadWeight, OHPWeight, setWeek} = this.props

  return(


    <Alert variant= "primary" className = "Accordion">
    <Alert.Heading> 6 DAY PUSH PULL LEGS - FULL BODY SPLIT </Alert.Heading>
    <p>
    <Accordion>

    {workoutConstants.map((constants, index) => (
    <Card border = "primary"  style={ {width: '50rem' }   }>

      <Accordion.Toggle as={Card.Header} eventKey={index} size ="sm" onClick = {this._onClick.bind(this, index)}>{`WEEK ${index + 1}`} </Accordion.Toggle>
          <Accordion.Collapse eventKey={index}>
             <Card.Body>
             <Table striped bordered hover size="sm" >
               <thead>
                 <tr>

                   <th>LEGS #1</th>
                   <th>PUSH #1</th>
                   <th>PULL #1</th>
                   <th>LEGS #2</th>
                   <th>PUSH #2</th>
                   <th>PULL #2</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>

                   <td>Squat 5RM: {round5(SquatWeight * constants[0][0])} </td>
                   <td>Bench Press 1RM: {round5(BenchWeight * constants[1][0])}</td>
                   <td>Deadlift 3RM: {round5(DeadWeight * constants[2][0])}</td>
                   <td>Squat 3RM: {round5(SquatWeight * constants[3][0])}</td>
                   <td>Overhead Press 5RM: {round5(OHPWeight * constants[4][0])}</td>
                   <td>Deadlift 1RM: {round5(DeadWeight * constants[5][0])}</td>

                 </tr>
                 <tr>

                   <td>Squat 4x12: {round5(SquatWeight * constants[0][1])}</td>
                   <td>Bench Press 4x4: {round5(BenchWeight * constants[1][1])}</td>
                   <td>Deadlift 4x6: {round5(DeadWeight * constants[2][1])}</td>
                   <td>Squat 4x8: {round5(SquatWeight * constants[3][1])}</td>
                   <td>Overhead Press 4x12: {round5(OHPWeight * constants[4][1])}</td>
                   <td>Deadlift 4x2: {round5(DeadWeight * constants[5][1])}</td>
                 </tr>
                 <tr>

                   <td>Accessories: Quads, Hamstrings, Calves</td>
                   <td>Accessories: Chest, Shoulders, Triceps</td>
                   <td>Accessories: Back, Biceps</td>
                   <td>Accessories: Quads, Hamstrings, Calves</td>
                   <td>Accessories: Chest, Shoulders, Triceps</td>
                   <td>Accessories: Back, Biceps</td>
                 </tr>
               </tbody>

             </Table>
             </Card.Body>
          </Accordion.Collapse>
      </Card>
    )
  )
}
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
