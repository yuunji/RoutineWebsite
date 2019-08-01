import React from 'react';

function WeekOne(WeightObject) {
  LegsNumOne(WeightObject.SquatMax)
  PushNumOne(WeightObject.BenchMax)
  PullNumOne(WeightObject.DeadMax)
  LegsNumTwo(WeightObject.SquatMax)
  PushNumTwo(WeightObject.PressMax)
  PullNumTwo(WeightObject.DeadMax)
}


function LegsNumOne(SquatWeight) {
  return(
  <div>
  <h1>Squat     5 Rep Max:{SquatWeight * 0.85}</h1>
  <h1>Squat     4x12:{weight * 0.65}</h1>
  <h1>Romanian DL 3x10</h1>
  <h1>Lunges 3x10 each leg</h1>
  <h1>Glute Ham Raise</h1>
  </div>
);
}

function PushNumOne(BenchWeight) {
  return(
  <div>
  <h1>Bench     1 Rep Max:{BenchWeight * 0.95}</h1>
  <h1>Bench     4x4:{weight * 0.85}</h1>
  <h1>Push Press 3x4</h1>
  <h1>Weighted Dips 3x10</h1>
  <h1>Cable Flyes</h1>
  <h1>DB Lateral Raise</h1>
  <h1>Skull Crusher</h1>
  <h1>DB Tricep Extensions</h1>
  </div>
);
}


function PullNumOne(DeadWeight){
  return(
  <div>
  <h1>Deadlift     3 Rep Max:{DeadWeight * 0.90}</h1>
  <h1>Deadlift     4x6:{DeadWeight * 0.80}</h1>
  <h1>Stiff Leg Deadlift 3x10</h1>
  <h1>Pull Ups 3x8-10</h1>
  <h1>Yates Row 3x10</h1>
  <h1>Shrugs 3x10</h1>
  <h1>Barbell Curl 3x10</h1>
  <h1>Seated Hammer Curl 3x10</h1>
  </div>
);
}



function LegsNumTwo(SquatWeight) {
  return(
  <div>
  <h1>Squat     3 Rep Max:{SquatWeight * 0.90}</h1>
  <h1>Squat     4x8:{SquatWeight * 0.75}</h1>
  <h1>Romanian DL 3x10</h1>
  <h1>Lunges 3x10 each leg</h1>
  <h1>Glute Ham Raise</h1>
  </div>
);
}


function PushNumTwo(PressWeight) {
  return(
  <div>
  <h1>OHP     5 Rep Max:{PressWeight * 0.85}</h1>
  <h1>OHP     4x12:{PressWeight * 0.65}</h1>
  <h1>BB Incline Bench 3x12</h1>
  <h1>Weighted Dips 3x10</h1>
  <h1>DB Lateral Raise</h1>
  <h1>Skull Crusher</h1>
  <h1>DB Tricep Extensions</h1>
  </div>
);
}

function PullNumTwo(DeadWeight){
  return(
  <div>
  <h1>Deadlift     1 Rep Max:{DeadWeight * 0.95}</h1>
  <h1>Deadlift     4x2:{DeadWeight * 0.90}</h1>
  <h1>Stiff Leg Deadlift 3x10</h1>
  <h1>Pull Ups 3x8-10</h1>
  <h1>Yates Row 3x10</h1>
  <h1>Shrugs 3x10</h1>
  <h1>Barbell Curl 3x10</h1>
  <h1>Seated Hammer Curl 3x10</h1>
  </div>
);
}
