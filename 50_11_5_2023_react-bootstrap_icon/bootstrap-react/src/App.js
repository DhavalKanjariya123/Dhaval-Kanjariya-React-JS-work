import React from 'react';
import './App.css';
import {Container,Row, Button} from "react-bootstrap";

function App() {
  return (
    <>
      <Button className='btn btn-lg bg-danger'>Click</Button>
      <Container>
        <Row>
          <div className='col-6 bg-primary'>
            <p>I am Dhaval Kanjariya</p>
          </div>
          <div className='col-6 bg-secondary'>
            <p>I am Dhaval Kanjariya</p>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default App;
