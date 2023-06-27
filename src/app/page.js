"use client";

import '../App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeNavbar from '../components/navbar';
import Noticias from '../components/noticias';
import Info from '@/components/info';

export default function Home() {
  return (
    <Container>
      <HomeNavbar/>
      <Row>
        <Col lg={8}>
          <Noticias/>
        </Col>
        <Col lg={4}>
          <Info/>
        </Col>
      </Row>
    </Container>
  );
}