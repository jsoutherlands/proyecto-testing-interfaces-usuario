import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Footer() {
	return (
		<div>
			<div className="footer">
				<Container>
					<Row>
						<Col lg={3}>
							<h5 className="footer-title">Universidad</h5>
							<a href="/">Nuestra Historia</a>
							<h5 className="footer-title">Campus y Sedes</h5>
						</Col>
						<Col lg={3}>
							<h5 className="footer-title">Extensión y Cultura</h5>
								<div><a href="/">Dirección General de Comunicaciones</a></div>
								<div><a href="/">Dirección General de Vinculación con el Medio</a></div>
								<div><a href="/">Oficina de Asuntos Internacionales</a></div>
								<div><a href="/">Red de Ex-Alumnos</a></div>
								<div><a href="/">Noticias USM</a></div>
								<div><a href="/">Eventos USM</a></div>
								<div><a href="/">Radio USM</a></div>
								<div><a href="/">Cultura USM</a></div>
						</Col>
						<Col lg={3}>
							<h5 className="footer-title">Servicios</h5>
						</Col>
						<Col lg={3}>
							<img src="https://rree.usm.cl/wp-content/uploads/2021/11/sello-acreditacion-2028.svg" width={200}/>
							<img src="https://rree.usm.cl/wp-content/uploads/2021/11/usm_cl.svg" width={200}/>
							<p>[Redes sociales]</p>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="footer2">
				<Container>
					<img src="https://rree.usm.cl/wp-content/uploads/2021/11/logo_acceso.svg" height={60}></img>
					<img src="https://rree.usm.cl/wp-content/uploads/2021/11/logo_consejorectores.svg" height={60}></img>
					<img src="https://rree.usm.cl/wp-content/uploads/2021/11/logo_g9.svg" height={60}></img>
					<img src="https://rree.usm.cl/wp-content/uploads/2021/11/logo_aur.svg" height={60}></img>
					<img src="https://rree.usm.cl/wp-content/uploads/2021/11/LOGO-CRUV-BLANCO.svg" height={60}></img>
					<img src="https://rree.usm.cl/wp-content/uploads/2021/11/logo_reuna.svg" height={60}></img>
					<img src="https://rree.usm.cl/wp-content/uploads/2021/11/logo_universia.svg" height={60}></img>
				</Container>
			</div>
			<div className="footer3">
				<Container>
					<p>Sitio web administrado por la <a href="/">Dirección de Relaciones Estudiantiles</a></p>
				</Container>
			</div>
		</div>
	)
}