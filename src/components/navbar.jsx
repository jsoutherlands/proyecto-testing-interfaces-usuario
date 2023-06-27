import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/next.svg";

export default function HomeNavbar() {
    
	return (
		<Navbar>
			<Container>
				<Navbar.Brand href="/">
					<img src="https://rree.usm.cl/wp-content/uploads/2021/11/rree.svg" alt="Logo" height="75"/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/">Quiénes Somos</Nav.Link>
						<Nav.Link href="/">Punto de Encuentro</Nav.Link>
						<Nav.Link href="/">Servicio Médico</Nav.Link>
						<Nav.Link href="/">Beneficios Estudiantiles</Nav.Link>
						<Nav.Link href="/">Iniciativas estudiantiles</Nav.Link>
						<Nav.Link href="/">Normativas</Nav.Link>
						<Nav.Link href="/">Contacto</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}