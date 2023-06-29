import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ExternalPortals(){
  return (
    <div>
      <Container>
        <h5>Portales Externos RREE</h5>
        <Row>
          <Col lg="auto">
            <Button className="external-button" href="https://sireb.usm.cl" variant='warning'>Portal SIREB</Button>
          </Col>
          <Col lg="auto">
          <Button className="external-button" href="https://fondos.usm.cl" variant='warning'>Portal Fondos Concursables</Button>
          </Col>
          <Col lg="auto">
            <Button className="external-button" href="https://actividadextracurricular.usm.cl/ActExtra/index.jsf" variant='warning'>Portal De Desarrollo Estudiantil</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}