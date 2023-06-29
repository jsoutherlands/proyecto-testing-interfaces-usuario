import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { blueColor, yellowColor } from "@/stylesheets/constants";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { UniversalAccessCircle } from "react-bootstrap-icons";

const PreNavLinkUSM = styled.a`
	font-family: "Montserrat", Sans-serif;
	font-size: 11px;
	font-weight: 700;
	color: white;
	text-decoration-color: #ca9e00;
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
	padding: 50px 0;
	font-family: "Montserrat", Sans-serif;
	font-size: 14px;
	font-weight: 600;
	`

const StyledNavDropdown = styled(NavDropdown.Item)`
	font-size: 14px;
	background-color: ${blueColor};
	`

const Accesibility = styled.div`
	font-family: "Montserrat", Sans-serif;
	font-size: 11px;
	display: inline;
	margin-right: auto;
	margin-left: 10px;
	color: #B3CFDE;
	font-weight: 700;
	`
	
export default function HomeNavbar() {
	return (
		<div>
			<Navbar style={{backgroundColor: `${blueColor}`, marginY: "10px", paddingX: "10px"}}>
				<Container>
					<PreNavLinkUSM className="link-usmcl" href="https://usm.cl/">USM.cl</PreNavLinkUSM>
					<Accesibility>
						<NavDropdown href="/" title={<div><UniversalAccessCircle /> <span>Accesibilidad</span></div>} id="basic-nav-dropdown">
							<StyledNavDropdown className="nav-dropdown">
								Aa
							</StyledNavDropdown>
							<StyledNavDropdown className="nav-dropdown">
								A-
							</StyledNavDropdown>
							<StyledNavDropdown className="nav-dropdown">
								A+
							</StyledNavDropdown>
							<StyledNavDropdown className="nav-dropdown">
								Escala de grises
							</StyledNavDropdown>
							<StyledNavDropdown className="nav-dropdown">
								Tonos oscuros
							</StyledNavDropdown>
						</NavDropdown>
					</Accesibility>
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
							<Nav.Link href="https://rree.usm.cl/quienes-somos/">Quiénes Somos</Nav.Link>
							<Nav.Link href="https://rree.usm.cl/apoyo-acompanamiento/">Punto de Encuentro</Nav.Link>
							<Nav.Link href="https://rree.usm.cl/equipo-atencion-salud/">Servicio Médico</Nav.Link>
							<NavDropdown href="/" title={"Beneficios Estudiantiles"} id="basic-nav-dropdown">
								<div className="nav-drop-menu">
									<StyledNavDropdown className="nav-dropdown" href="https://portal.beneficiosestudiantiles.cl/gratuidad">
										Gratuidad
									</StyledNavDropdown>
									<StyledNavDropdown className="nav-dropdown" href="https://portal.beneficiosestudiantiles.cl/">
										Becas y créditos MINEDUC
									</StyledNavDropdown>
									<StyledNavDropdown className="nav-dropdown" href="https://rree.usm.cl/beneficios/becas-usm/">
										Becas USM
									</StyledNavDropdown>
									<StyledNavDropdown className="nav-dropdown" href="https://rree.usm.cl/beneficios/becas-junaeb/">
										Becas JUNAEB
									</StyledNavDropdown>
									<StyledNavDropdown className="nav-dropdown" href="https://rree.usm.cl/beneficios/tne/">
										Tarjeta Nacional Estudiantil
									</StyledNavDropdown>
									<StyledNavDropdown className="nav-dropdown" href="https://rree.usm.cl/beneficios/credito-con-garantia-estatal-credito-cae/">
										Crédito con Aval del Estado
									</StyledNavDropdown>
								</div>
							</NavDropdown>
							<Nav.Link href="https://rree.usm.cl/fomento-iniciativas-estudiantiles/">Iniciativas Estudiantiles</Nav.Link>
							<Nav.Link href="https://rree.usm.cl/publicaciones/">Normativas</Nav.Link>
							<Nav.Link href="https://rree.usm.cl/contacto/">Contacto</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</StyledNavbar>
		</div>
	)
}