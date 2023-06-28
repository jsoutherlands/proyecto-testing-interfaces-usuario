import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import {blueColor, greyColor, purpleColor, yellowColor} from '../stylesheets/constants.js'


const PurpleListItem = styled(ListGroup.Item)`
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${purpleColor};
  padding: 0.8rem;
  font-size: 18px;
  text-decoration: none; 

  &:hover {
    opacity: 0.9;
  }
`;

const BlueListItem = styled(ListGroup.Item)`
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${blueColor};
  padding: 0.8rem;
  font-size: 16px;
  text-decoration: none; 

  &:hover {
    opacity: 0.9;
  }
`;

const ListItemText = styled.div`
  font-weight: bold;
  border-left: 3px solid ${yellowColor};
  color: #fff;
  padding-left: 0.5rem;
`;

const VerTodo = styled.a`
  font-family: "Montserrat", Sans-serif;
  font-size: 21px;
  font-weight: 600;
  color: #6c757d;
  text-decoration: none; 
  background-color: transparent;
  margin-left: auto;
`;

const Title = styled.h2`
  font-family: "Montserrat", Sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  color: ${greyColor};
`;


export default function Info() {
  return (
    <ListGroup>
      <Title>Información importante</Title>
      <PurpleListItem as='a' href="https://forms.office.com/pages/responsepage.aspx?id=dlZiAicyCkScaLttKd5CBjN45gTJJIJFg0dOyLbVt4RUNThMNTkwTzNZRzFDRVpWQlBOVUxNUDNQOS4u">
        <ListItemText>
          Ciclo de actividades 2023
        </ListItemText>
      </PurpleListItem>
      <BlueListItem as='a' href="https://rree.usm.cl/info/evaluacion-socioeconomica-mineduc-2023-para-postulantes-a-fuas-en-segundo-proceso/">
        <ListItemText>
          Evaluación socioeconómica MINEDUC 2023 para postulantes a FUAS en segundo proceso
        </ListItemText>
      </BlueListItem>
      <BlueListItem as='a' href="https://rree.usm.cl/info/renovacion-de-fondo-solidario-credito-universitario-mineduc-2023-3/">
        <ListItemText>
          Renovación de Fondo Solidario Crédito Universitario MINEDUC 2023
        </ListItemText>
      </BlueListItem>
      <BlueListItem as='a' href="https://rree.usm.cl/info/postulacion-a-becas-de-desayuno-materiales-y-fotocopias-campus-casa-central-valparaiso/">
        <ListItemText>
          Postulación a becas de apoyo: desayuno, materiales y fotocopias Campus Casa Central Valparaíso
        </ListItemText>
      </BlueListItem>
    </ListGroup>

    
  );
}