import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

  const Noticias = () => {
    return (
      <Container>
        <Row>
        <Col xs={12} sm={6}>

          {/*<img src={noticia.imagen} alt='Hola' />*/}
          <div className="titulo">
            <h4>Con éxito se desarrolló Festigeek 2023 en Campus San Joaquín</h4>
            <p>09 - Junio - 2023</p>
          </div>
        </Col>
        <Col xs={12} sm={6}>
          {/* Segunda columna */}
          <Row>
            {/* Primera fila */}
            <div className="fila">
              <div className="titulo">
                <h6>Equipo de Relaciones Estudiantiles Campus Casa Central Valparaíso se capacita en taller de primeros auxilios psicológicos</h6>
                <p>24 - Mayo - 2023</p>
              </div>
            </div>
          </Row>
          <Row>
            {/* Segunda fila */}
            <div className="fila">
            
              <div className="titulo">
                <h6> Sociedad de Debates inicia cuarta edición de Torneo Nacional de Debate USM </h6>
                <p>22 - Mayo - 2023</p>
              </div>
            </div>
          </Row>
          <Row>
            {/* Tercera fila */}
            <div className="fila">
              <div className="titulo">
                <h6>Primer Encuentro de Iniciativas Estudiantiles USM Santiago se desarrolló en Campus San Joaquín </h6>
                <p>19 - mayo - 2023</p>
              </div>
            </div>
          </Row>
          </Col>
        </Row>
      </Container>
    );
  };
  
  
  export default Noticias;

