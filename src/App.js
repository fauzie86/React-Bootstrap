import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const App = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={0}>
          {}
          <Image src="pict1.jpg" alt="Image" fluid />
        </Col>
        <Col xs={12} sm={12} md={12}>
          {}
          <Image src="pict2.jpg" alt="Image" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default App;


