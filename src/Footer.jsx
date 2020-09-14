import { OverlayTrigger, Tooltip } from "react-bootstrap";
import React from 'react';
import './Footer.css';

class NavBar extends React.Component {

	toolTip = (title) => (
		<Tooltip id="button-tooltip">{title}</Tooltip>
	)

	render() {
		return (
			<footer>
				<OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={this.toolTip('Join Support Server')}>
					<a href="https://discord.gg/ppuppun">
						<i className="fab fa-discord" />
					</a>
				</OverlayTrigger>

				<OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={this.toolTip('Visit GitHub')}>
					<a href="https://github.com/clashperk">
						<i className="fab fa-github" />
					</a>
				</OverlayTrigger>

				<OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={this.toolTip('Support us on Patreon')}>
					<a href="https://www.patron.com/join/clashperk">
						<i className="fab fa-patreon" />
					</a>
				</OverlayTrigger>

				<p>&copy; {new Date().getFullYear()} ClashPerk LLC</p>
			</footer>
		);
	}
}

export default NavBar;