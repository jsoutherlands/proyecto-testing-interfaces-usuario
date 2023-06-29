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
			<h5>Enlaces externos</h5>
			<Row className="external-row">
				<Col lg="auto">
					<Button className="external-button" href="https://sireb.usm.cl" variant='warning'>Portal SIREB</Button>
				</Col>
				<Col lg="auto">
					<Button className="external-button" href="https://fondos.usm.cl" variant='warning'>Portal Fondos Concursables</Button>
				</Col>
				<Col lg="auto">
					<Button className="external-button" href="https://actividadextracurricular.usm.cl/ActExtra/index.jsf" variant='warning'>Portal De Desarrollo Estudiantil</Button>
				</Col>
			</Row>
			<Row className="external-row">
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
			</Row>
		</div>
	)
}