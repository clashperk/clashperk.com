import { OverlayTrigger, Tooltip, Container, Col, Row } from "react-bootstrap";
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

	toolTip = (title) => (
		<Tooltip id="button-tooltip">{title}</Tooltip>
	)

	render() {
		return (
			<footer>
				<Container>
					<div id="icons">
						<OverlayTrigger placement="top" delay={{ show: 150, hide: 400 }} overlay={this.toolTip('Join Support Server')}>
							<a href="https://discord.gg/ppuppun">
								<i className="fab fa-discord" />
							</a>
						</OverlayTrigger>

						<OverlayTrigger placement="top" delay={{ show: 150, hide: 400 }} overlay={this.toolTip('Visit GitHub')}>
							<a href="https://github.com/clashperk">
								<i className="fab fa-github" />
							</a>
						</OverlayTrigger>

						<OverlayTrigger placement="top" delay={{ show: 150, hide: 400 }} overlay={this.toolTip('Support us on Patreon')}>
							<a href="https://www.patreon.com/join/clashperk">
								<i className="fab fa-patreon" />
							</a>
						</OverlayTrigger>
					</div>

					<Row>
						<Col>
							<p>&copy; {new Date().getFullYear()} ClashPerk LLC</p>
						</Col>
						<Col>
							<div id="legal">
								<Link to="/privacy">PRIVACY</Link>
								<Link to="/rules">RULES</Link>
								<Link to="/guide">GUIDE</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}

export default NavBar;