import { Button, Image, Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer'
import React from 'react';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar /> {/* Import Navbar */}
				<section id="header" style={{ background: 'linear-gradient(135deg, #305af3 10%, #7b30f3)' }}>
					<div className="details">
						<Image id="logo" src="./icon-large.png" rounded />
						<Fade top>
							<h1>ClashPerk</h1>
						</Fade>

						{/* <Spinner animation="border" /> */}

						<Fade bottom>
							<h2>Feature-Rich and Powerful Clash of Clans Discord Bot</h2>
						</Fade>

						<Fade left>
							<p>
								<a href="https://clashperk.com/invite" target="_blank" rel="noopener noreferrer">
									<Button id="button" >Invite ClashPerk</Button>
								</a>
								<a href="https://discord.gg/ppuppun" target="_blank" rel="noopener noreferrer">
									<Button id="button" >Official Discord</Button>
								</a>
							</p>
						</Fade>
					</div>
				</section>

				<section id="features" style={{ background: '#4a82f1' }}>
					<Container>
						<Bounce left>
							<h1 style={{ textAlign: 'center', padding: '30px' }}>
								Features
							</h1>
						</Bounce>

						<Fade left>
							<Row>
								<Col className="items" sm>
									<i className="fas fa-search"></i>
									<h2>Clash Search</h2>
									<h3>
										Search Players, Clans <br />
									Or Anything in the Game
            						</h3>
								</Col>
								<Col className="items" sm>
									<i className="fas fa-rss"></i>
									<h2>Clan Feed</h2>
									<h3>
										See when Players Join or Leave,<br />
                					Troops Donations or Receives
            						</h3>
								</Col>
								<Col className="items" sm>
									<i className="fas fa-user-check"></i>
									<h2>User Friendly</h2>
									<h3>
										No Complex Setup. It Requires <br />Only One Command to get Started
									</h3>
								</Col>
							</Row>
							<Row>
								<Col className="items" sm>
									<i className="fas fa-award"></i>
									<h2>Best Players</h2>
									<h3>
										Top Donations, Heroes, Trophies,<br />Clan Games
									</h3>
								</Col>
								<Col className="items" sm>
									<i className="fas fa-trophy"></i>
									<h2>War</h2>
									<h3>
										CWL, War Log, Roster,<br />
                					Missed Attacks, Current Attacks
            						</h3>
								</Col>
								<Col className="items" sm>
									<i className="fas fa-bolt"></i>
									<h2>Stable</h2>
									<h3>
										Stable and Always Online <br />
                					ClashPerk will Always be there for You.
            						</h3>
								</Col>
							</Row>
						</Fade>
					</Container>
				</section>

				{/* Inport Footer */}
				<Footer />
			</div>
		);
	}
}

export default App;
