import { Container, Col, Row, } from "react-bootstrap";
import React from 'react';
import './Privacy.css';
import Navbar from './Navbar'

class App extends React.Component {
	render() {
		return (
			<>
				<Navbar />
				<div id="privacy">
					<Container id="heading">
						<Row>
							<Col sm>
								<h1 style={{ textAlign: 'center', fontSize: '30px' }}>Privacy Policy</h1>
								<h2 style={{ textAlign: 'center', fontSize: '20px' }}>This document entails the privacy policy and agreement that you accept when adding ClashPerk to your server, or as a member or any server in which ClashPerk is on.</h2>
							</Col>
						</Row>
					</Container>

					<Container id="content">
						<Row>
							<Col className="items">
								<h1>Data Collected By Command</h1>
								<h4>
									The following may be collected via user run command, and may be entered by the user, voluntarily. This data is not collected automatically. When providing data in this way, you forego any rights to the content of the data provided.
								</h4>
								<ul>
									<li>
										Server Configurations (Region, Name, ID)
									</li>
									<li>
										Server Ownership
									</li>
									<li>
										User ID
									</li>
								</ul>
							</Col>
						</Row>
						<Row>
							<Col className="items">
								<h1>Data Collected When Features Are Enabled</h1>
								<h4>
									The following will be collected automatically when a server administrator configures the bot to perform checks for news or another automated feature within ClashPerk. These features are not enabled automatically, and therefore the following will not be collected automatically unless the corresponding feature is enabled.
								</h4>
								<ul>
									<li>
										Server Configurations (Name, ID)
									</li>
									<li>
										Channel ID
									</li>
									<li>
										Role ID
									</li>
									<li>
										User ID
									</li>
								</ul>
							</Col>
						</Row>
						<Row>
							<Col className="items">
								<h1>Data Collected Automatically</h1>
								<h4>
									The following is collected automatically when ClashPerk joins a server. This data is used to provide statistics or server information.
								</h4>

								<ul>
									<li>
										Server Configurations (Region, Name, ID, Creation Date, Large Status)
									</li>
									<li>
										Server Ownership
									</li>
									<li>
										Server Member Count
									</li>
									<li>
										Server Channel Count
									</li>
								</ul>
							</Col>
						</Row>
						<Row>
							<Col className="items">
								<h1>Data Storage and Protection</h1>
								<h4>
									All data is stored on secured servers. Maximum efforts are taken to keep collected data, as defined above, protected, but absolute security cannot be guaranteed. We are not liable for any damages or stolen information, in which we collect, from our servers.
								</h4>
							</Col>
						</Row>
						<Row>
							<Col className="items">
								<h1>Server Member Agreement</h1>
								<h4>
									By being a member of a server which uses ClashPerk's services or features, you are consenting to the policies outlined in this agreement. If you, the server member, do not agree with any policies outlined in this agreement, you have the right to leave the server in which this bot is a part of.
								</h4>
							</Col>
						</Row>
						<Row>
							<Col className="items">
								<h1>Server Administrator Agreement</h1>
								<h4>
									By adding ClashPerk to your server, you are consenting to the policies outlined in this agreement. If you, the server administrator, do not agree with any of the policies outlined in this agreement, you have the right to remove ClashPerk from your server.
								</h4>
							</Col>
						</Row>
						<Row>
							<Col className="items">
								<h1>Service User Agreement</h1>
								<h4>
									By being a member of the ClashPerk Team and having access to the ClashPerk Admin Web Panel, you are consenting to the policies outlined in this agreement. If you, the service user, do not agree with any policies outlined in this agreement, you have the right to ask for removal of your access to the services.
								</h4>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}

export default App;
