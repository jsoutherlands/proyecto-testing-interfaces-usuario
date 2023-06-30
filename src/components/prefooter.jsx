import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PinMapFill, TelephoneFill, EnvelopeFill, Facebook, Instagram } from "react-bootstrap-icons";

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
							<span className="prefooter-span"><a href="tel:+56 32 265 2889">+56 32 265 2889</a></span>
						</div>
						<div>
							<EnvelopeFill />
							<span className="prefooter-span"><a href="mailto:info.rree@usm.cl">info.rree@usm.cl</a></span>
						</div>
						<div clasName="socialmedia-div" style={{display: "inline-block"}}>
							<a href="https://www.facebook.com/rreeusm.casacentral/"><Facebook className="socialmedia" /></a>
							<a href="https://www.instagram.com/rreeusm/"><Instagram className="socialmedia" /></a>
						</div>
					</Col>
					<Col lg={3}>
						<h5 className="prefooter-titles">Campus San Joaquín</h5>
						<div>
							<PinMapFill />
							<span className="prefooter-span">Av. Vicuña Mackenna 3939, Edificio F, San Joaquín, Santiago</span>
						</div>
						<div>
							<TelephoneFill />
							<span className="prefooter-span"><a href="tel:+56 2 2303 7070">+56 2 2303 7070</a></span>
						</div>
						<div>
							<EnvelopeFill />
							<span className="prefooter-span"><a href="mailto:rree.cssj@usm.cl">rree.cssj@usm.cl</a></span>
						</div>
						<div clasName="socialmedia-div" style={{display: "inline-block"}}>
							<a href="https://www.facebook.com/rreeusm.sanjoaquin"><Facebook className="socialmedia" /></a>
							<a href="https://www.instagram.com/rreeusm_sanjoaquin/"><Instagram className="socialmedia" /></a>
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
							<span className="prefooter-span"><a href="tel:+56 2 3202 8070">+56 2 3202 8070</a></span>
						</div>
						<div>
							<EnvelopeFill />
							<span className="prefooter-span"><a href="mailto:rree.csv@usm.cl">rree.csv@usm.cl</a></span>
						</div>
						<div clasName="socialmedia-div" style={{display: "inline-block"}}>
							<a href="https://www.facebook.com/rreeusm.vitacura"><Facebook className="socialmedia" /></a>
							<a href="https://www.instagram.com/rreeusm_vitacura/"><Instagram className="socialmedia" /></a>
						</div>
					</Col>
					<Col lg={2}>
						<h5 className="prefooter-titles">Sede Viña del Mar</h5>
						<div>
							<PinMapFill />
							<span className="prefooter-span">Av. Federico Santa María 6090, Edificio B, Viña del Mar</span>
						</div>
						<div>
							<TelephoneFill />
							<span className="prefooter-span"><a href="tel:+56 32 227 7881">+56 32 227 7881</a></span>
						</div>
						<div>
							<TelephoneFill />
							<span className="prefooter-span"><a href="tel:+56 32 227 7891">+56 32 227 7891</a></span>
						</div>
						<div>
							<EnvelopeFill />
							<span className="prefooter-span"><a href="mailto:consultasbienestar.jmc@usm.cl">consultasbienestar.jmc@usm.cl</a></span>
						</div>
						<div clasName="socialmedia-div" style={{display: "inline-block"}}>
							<a href="https://www.facebook.com/rreeusm.jmc/"><Facebook className="socialmedia" /></a>
							<a href="https://www.instagram.com/rreeusm_vina/"><Instagram className="socialmedia" /></a>
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
							<span className="prefooter-span"><a href="tel:+56 41 240 7622">+56 41 240 7622</a></span>
						</div>
						<div>
							<EnvelopeFill />
							<span className="prefooter-span"><a href="mailto:rree.concepcion@usm.cl">rree.concepcion@usm.cl</a></span>
						</div>
						<div clasName="socialmedia-div" style={{display: "inline-block"}}>
							<a href="https://www.facebook.com/rreeusm.concepcion/"><Facebook className="socialmedia" /></a>
							<a href="https://www.instagram.com/rreeusm_concepcion/"><Instagram className="socialmedia" /></a>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}