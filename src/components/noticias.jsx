import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { yellowColor, greyColor } from '@/stylesheets/constants';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';

  const NoticeCard = styled(Card)`
    border-radius: 10px;
    flex: 1;
    margin-bottom: 8px;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px 0 rgb(0 0 0 / 60%);
    }
  `

  const NoticeCardOverlay = styled(Card.ImgOverlay)`
    font-weight: bold;
    color: #fff;
    padding-left: 0.5rem;
    background-color: rgba(0, 0, 0, 0.7);
  `

  const NoticeCardTitle = styled(Card.Title)`
    font-weight: bold;
    border-left: 3px solid ${yellowColor};
    color: #fff;
    padding-left: 0.5rem;
    position: float;
    bottom: 0;
  `

  const NoticeCardText = styled(Card.Text)`
    color: #fff;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 12px;
    padding: 0.2rem;
  `

  const NoticeCardMini = styled(Card)`
    border-radius: 10px;
    height: 6rem;
    margin-bottom: 10px;
    flex: 1;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px 0 rgb(0 0 0 / 60%);
    }
  `;

const NoticeCardMiniImg = styled(Card.Img)`
    height: 100%;
    object-fit: cover;
    
  `;

const NoticeCardMiniOverlay = styled(Card.ImgOverlay)`
  font-weight: bold;
  color: #fff;
  padding-left: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
`;

const NoticeCardMiniTitle = styled(Card.Title)`
  font-weight: bold;
  border-left: 3px solid ${yellowColor};
  color: #fff;
  padding-left : 0.5rem;
  font-size: 14.5px; /* Tamaño de fuente deseado */
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NoticeCardMiniText = styled(Card.Text)`
  color: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 11px;
  padding: 0.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

  const Title = styled.h2`
    font-family: "Montserrat", Sans-serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    color: ${greyColor};
  `;

  const VerTodo = styled.a`
    font-family: "Montserrat", Sans-serif;
    font-size: 21px;
    font-weight: 600;
    color: #6c757d;
    text-decoration: none; 
    background-color: transparent;
    float: right;
    margin-left: auto;
  `;
  
  const Noticias = () => {
    return (
        <Container>
          <Title>Noticias</Title>
          <Row>
          <Col xs={12} sm={7}>
            <a href="https://rree.usm.cl/noticias/con-exito-se-desarrollo-festigeek-2023-en-campus-san-joaquin/">
              <NoticeCard className="bg-dark text-dar">
                <NoticeCard.Img src = "https://usm.cl/wp-content/uploads/2023/06/Festigeek-10.jpg" alt="NoticeCard image" />
                <NoticeCardOverlay>
                  <NoticeCardTitle>Con éxito se desarrolló Festigeek 2023 en Campus San Joaquín</NoticeCardTitle>
                  <NoticeCardText>09 - Junio - 2023</NoticeCardText>
                </NoticeCardOverlay>
              </NoticeCard>
            </a>
            {/*<img src={noticia.imagen} alt='Hola' />*/}
          </Col>
          <Col xs={12} sm={5}>
            {/* Segunda columna */}
            <Row>
              {/* Primera fila */}
              <a href="https://rree.usm.cl/noticias/equipo-de-relaciones-estudiantiles-campus-casa-central-valparaiso-se-capacita-en-taller-de-primeros-auxilios-psicologicos/">
                <NoticeCardMini className="bg-dark text-dar">
                  <NoticeCardMiniImg src = "https://rree.usm.cl/wp-content/uploads/2023/05/IMG_5359-2-300x225.png" alt="NoticeCardMini image" />
                  <NoticeCardMiniOverlay>
                    <NoticeCardMiniTitle>Equipo de Relaciones Estudiantiles Campus Casa Central Valparaíso se capacita en taller de primeros auxilios psicológicos</NoticeCardMiniTitle>
                    <NoticeCardMiniText>15 - Junio - 2023</NoticeCardMiniText>
                  </NoticeCardMiniOverlay>
                </NoticeCardMini>
              </a>
            </Row>
            <Row>
              {/* Segunda fila */}
              <a href="https://rree.usm.cl/noticias/primer-encuentro-de-iniciativas-estudiantiles-usm-santiago-se-desarrollo-en-campus-san-joaquin/">
                <NoticeCardMini className="bg-dark text-dar">
                  <NoticeCardMiniImg src = "https://usm.cl/wp-content/uploads/2023/06/encuentro-iniciativas-Stgo-2.jpeg" alt="NoticeCardMini image" />
                  <NoticeCardMiniOverlay>
                    <NoticeCardMiniTitle>Primer Encuentro de Iniciativas Estudiantiles USM Santiago se desarrolló en Campus San Joaquín</NoticeCardMiniTitle>
                    <NoticeCardMiniText>1 - Junio - 2023</NoticeCardMiniText>
                  </NoticeCardMiniOverlay>
                </NoticeCardMini>
              </a>
            </Row>
            <Row>
              {/* Tercera fila */}
              <a href="https://rree.usm.cl/noticias/sociedad-de-debates-inicia-cuarta-edicion-de-torneo-nacional-de-debate-usm/">
                <NoticeCardMini className="bg-dark text-dar">
                  <NoticeCardMiniImg src = "https://rree.usm.cl/wp-content/uploads/2022/12/Diseno-sin-titulo-300x225.png" alt="NoticeCardMini image" />
                  <NoticeCardMiniOverlay>
                    <NoticeCardMiniTitle>Sociedad de Debates inicia cuarta edición de Torneo Nacional de Debate USM</NoticeCardMiniTitle>
                    <NoticeCardMiniText>23 - Mayo - 2023</NoticeCardMiniText>
                  </NoticeCardMiniOverlay>
                </NoticeCardMini>
              </a>
            </Row>
            </Col>
          </Row>
        </Container>
    );
  };
  
  
  export default Noticias;

