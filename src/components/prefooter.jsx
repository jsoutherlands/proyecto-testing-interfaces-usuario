import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PinMapFill, TelephoneFill, EnvelopeFill, Facebook } from "react-bootstrap-icons";

export default function PreFooter() {
	return(
		<div className="prefooter">
			<Container>
				<Row>
					<Col lg={3}>
						<h5 className="prefooter-titles">Campus Casa Central Valparaíso</h5>
						<div>
							<PinMapFill />
							<span className="prefooter-span">Av. España 1680, Edificio R, Valparaíso</span>
						</div>
						<div>
							<TelephoneFill />
							<span className="prefooter-span">(+56 32) 2652 889</span>
						</div>
						<div>
							<EnvelopeFill />
							<span className="prefooter-span">info.rree@usm.cl</span>
						</div>
						<div style={{display: "inline-block"}}>
							<Facebook className="socialmedia" />
							<Facebook className="socialmedia" />
						</div>
					</Col>
					<Col lg={2}>
						<h5 className="prefooter-titles">Campus San Joaquín</h5>
						<div>
							<PinMapFill />
							<span className="prefooter-span">Av. Vicuña Mackenna 3939, Edificio F, San Joaquín, Santiago</span>
						</div>
						<div>
							<TelephoneFill />
							<span className="prefooter-span">(+56-2) 23037070</span>
						</div>
						<div>
							<EnvelopeFill />
							<span className="prefooter-span">rree.cssj@usm.cl</span>
						</div>
						<div style={{display: "inline-block"}}>
							<Facebook className="socialmedia" />
							<Facebook className="socialmedia" />
						</div>
					</Col>
					<Col lg={2}>
						<h5 className="prefooter-titles">Campus Vitacura</h5>
						<div>
							<PinMapFill />
							<span className="prefooter-span">Av. Santa María 6400, Edificio A, Vitacura, Santiago</span>
						</div>
						<div>
							<TelephoneFill />
							<span className="prefooter-span">(+56-2) 32028070</span>
						</div>
						<div>
							<EnvelopeFill />
							<span className="prefooter-span">rree.csv@usm.cl</span>
						</div>
						<div style={{display: "inline-block"}}>
							<Facebook className="socialmedia" />
							<Facebook className="socialmedia" />
						</div>
					</Col>
					<Col lg={3}>
						<h5 className="prefooter-titles">Sede Viña del Mar</h5>
						<div>
							<PinMapFill />
							<span className="prefooter-span">Av. Federico Santa María 6090, Edificio B, Viña del Mar</span>
						</div>
						<div>
							<TelephoneFill />
							<span className="prefooter-span">(+56-32) 2277881</span>
						</div>
						<div>
							<TelephoneFill />
							<span className="prefooter-span">(+56-32) 2277891</span>
						</div>
						<div>
							<EnvelopeFill />
							<span className="prefooter-span">consultasbienestar.jmc@usm.cl</span>
						</div>
						<div style={{display: "inline-block"}}>
							<Facebook className="socialmedia" />
							<Facebook className="socialmedia" />
						</div>
					</Col>
					<Col lg={2}>
						<h5 className="prefooter-titles">Sede Concepción</h5>
						<div>
							<PinMapFill />
							<span className="prefooter-span">Arteaga Alemparte 943, Edificio H, Hualpén, Concepción</span>
						</div>
						<div>
							<TelephoneFill />
							<span className="prefooter-span">(+56-41) 2407622</span>
						</div>
						<div>
							<EnvelopeFill />
							<span className="prefooter-span">rree.concepcion@usm.cl</span>
						</div>
						<div style={{display: "inline-block"}}>
							<Facebook className="socialmedia" />
							<Facebook className="socialmedia" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}