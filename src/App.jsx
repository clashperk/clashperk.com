import { Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Fearure from './pages/Feature';
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

				{/* Import Feature */}
				<Fearure />

				{/* Inport Footer */}
				<Footer />
			</div>
		);
	}
}

export default App;
