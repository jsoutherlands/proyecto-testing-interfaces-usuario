import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { blueColor, yellowColor } from "@/stylesheets/constants";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

const PreNavLinkUSM = styled.a`
	font-family: "Montserrat", Sans-serif;
	font-size: 11px;
	font-weight: 700;
	color: white;
	text-decoration: none; 
	background-color: transparent;
	`;

const PreNavButton = styled(Button)`
	font-family: "Montserrat", Sans-serif;
	font-size: 13px;
	font-weight: 500;
	color: white;
	text-decoration: none; 
	background-color: ${yellowColor};
	border-color: ${yellowColor};
	text-shadow: 0px 0px 10px rgba(0,0,0,0.3);
	`;

const StyledNavbar = styled(Navbar)`
	padding: 30px 0;
	font-family: "Montserrat", Sans-serif;
	font-size: 14px;
	font-weight: 600;
	`

const StyledNavDropdown = styled(NavDropdown.Item)`
	font-weight: 100;
	font-size: 14px;
	background-color: ${blueColor};
	`
	
export default function HomeNavbar() {
	return (
		<div>
			<Navbar style={{backgroundColor: `${blueColor}`, marginY: "10px", paddingX: "10px"}}>
				<Container>
					<PreNavLinkUSM className="link-usmcl" href="https://usm.cl/">USM.cl</PreNavLinkUSM>
					<PreNavButton className="yellow-button" href="https://forms.office.com/pages/responsepage.aspx?id=dlZiAicyCkScaLttKd5CBp1V6uTZ5MZNtR_4Hn33Q91URVVPS0dUSlBYRlI4SlhNREdIOUlJRlFHUS4u">Activación BAES - JUNAEB 2023</PreNavButton>
				</Container>
			</Navbar>
			<StyledNavbar style={{backgroundColor:"white"}} variant="light" expand="lg">
				<Container style={{paddingY: "40px"}}>
					<Navbar.Brand href="/">
						<img src="https://rree.usm.cl/wp-content/uploads/2021/11/rree.svg" alt="Logo" height="45"/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="/">Quiénes Somos</Nav.Link>
							<Nav.Link href="/">Punto de Encuentro</Nav.Link>
							<Nav.Link href="/">Servicio Médico</Nav.Link>
							<NavDropdown href="/" title={"Beneficios Estudiantiles"} id="basic-nav-dropdown">
								<div className="nav-drop-menu">
									<StyledNavDropdown className="nav-dropdown">
										Gratuidad
									</StyledNavDropdown>
									<StyledNavDropdown className="nav-dropdown">
										Becas y créditos MINEDUC
									</StyledNavDropdown>
									<StyledNavDropdown className="nav-dropdown">
										Becas USM
									</StyledNavDropdown>
									<StyledNavDropdown className="nav-dropdown">
										Becas JUNAEB
									</StyledNavDropdown>
									<StyledNavDropdown className="nav-dropdown">
										Tarjeta Nacional Estudiantil
									</StyledNavDropdown>
									<StyledNavDropdown className="nav-dropdown">
										Crédito con Aval del Estado
									</StyledNavDropdown>
								</div>
							</NavDropdown>
							<Nav.Link href="/">Iniciativas estudiantiles</Nav.Link>
							<Nav.Link href="/">Normativas</Nav.Link>
							<Nav.Link href="/">Contacto</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</StyledNavbar>
		</div>
	)
}