"use client";

import '../App.scss';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeNavbar from '../components/navbar';
import Noticias from '../components/noticias';
import Info from '@/components/info';
import PreFooter from '@/components/prefooter';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import Footer from '@/components/footer';

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

export default function Home() {
	return (
		<div>
			<HomeNavbar/>
			<Container>
				<Row>
					<Col lg={8}>
						<Noticias/>
					</Col>
					<Col lg={4}>
						<Info/>
					</Col>
				</Row>
				<Row>
					<Col lg={8}>
						<VerTodo className="icon-arrow" href="https://rree.usm.cl/noticias/">
							<span> Ver todo </span>
							<ArrowRightCircleFill/>
						</VerTodo>
					</Col>
					<Col lg={4}>
						<VerTodo className="icon-arrow" href="https://rree.usm.cl/info/">
							<span> Ver todo </span>
							<ArrowRightCircleFill/>
						</VerTodo>
					</Col>
				</Row>
			</Container>
			<PreFooter/>
			<Footer />
		</div>
	);
}