import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

export default function ExternalLinks() {
	return(
		<div>
			{/*<h5>Enlaces externos</h5>
			<Row>
				<Col lg="auto">
					<Button className="external-button external-links-button" href="https://portal.beneficiosestudiantiles.cl">Portal Beneficios Mineduc</Button>
				</Col>
				<Col lg="auto">
					<Button className="external-button external-links-button" href="https://portal.ingresa.cl">Crédito con Aval del Estado</Button>
				</Col>
				<Col lg="auto">
					<Button className="external-button external-links-button" href="https://www.junaeb.cl">Portal JUNAEB</Button>
				</Col>
				<Col lg="auto">
					<Button className="external-button external-links-button" href="https://www.junaeb.cl/tarjeta-tne/">Portal TNE </Button>
				</Col>
			</Row>*/}
			<h5>Portales externos</h5>
			<Row className="external-row">
				<Col lg="auto">
					<Button className="external-button external-links-yellow-button" href="https://sireb.usm.cl" >SIREB</Button>
				</Col>
				<Col lg="auto">
					<Button className="external-button external-links-yellow-button" href="https://fondos.usm.cl">Fondos Concursables</Button>
				</Col>
				<Col lg="auto">
					<Button className="external-button external-links-yellow-button" href="https://actividadextracurricular.usm.cl/ActExtra/index.jsf" >Desarrollo Estudiantil</Button>
				</Col>
			</Row>
			<Row className="external-row">
				<Col lg="auto">
					<Button className="external-button external-links-button" href="https://portal.beneficiosestudiantiles.cl">Beneficios Mineduc</Button>
				</Col>
				<Col lg="auto">
					<Button className="external-button external-links-button" href="https://portal.ingresa.cl">Crédito con Aval del Estado</Button>
				</Col>
				<Col lg="auto">
					<Button className="external-button external-links-button" href="https://www.junaeb.cl">JUNAEB</Button>
				</Col>
				<Col lg="auto">
					<Button className="external-button external-links-button" href="https://www.junaeb.cl/tarjeta-tne/">TNE </Button>
				</Col>
			</Row>
		</div>
	)
}