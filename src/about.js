import React from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';


class About extends React.Component {

  render()
  {

  return (

    <Card className= "about">
      {/*<Card.Img variant="top" src="./thumbsup.png" /> */}
      <Card.Body>
      <Alert variant="primary">
        <Alert.Heading>About</Alert.Heading>

        <p>
          Thanks for using my app! Made by a third year Computer Engineering student at Cal Poly SLO.
        </p>

        <hr />

        <p className="mb-0">
          Github: https://github.com/yuunji/RoutineWebsite
        </p>

        <p>
        Email: yereiqat@gmail.com
        </p>

      </Alert>

      </Card.Body>
    </Card>
  );
};
};

export default About;
