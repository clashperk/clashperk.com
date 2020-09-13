import { Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Navbar from './Navbar';
import React from 'react';
import './App.css';

const ParticleOption = {
	particles: {
		number: {
			value: 60
		},
		size: {
			value: 2
		}
	},
	interactivity: {
		events: {
			onhover: {
				enable: true,
				mode: "repulse"
			}
		}
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar /> {/* Import Navbar */}

				<Particles id="particles" params={ParticleOption} /> {/*Import Particles */}

				<section id="header" style={{ background: 'linear-gradient(135deg, #305af3 10%, #7b30f3)' }}>
					<div className="details">
						<Image id="logo" src="https://clashperk.com/images/icon.png" rounded />
						<h1>
							<Flip top cascade>ClashPerk</Flip>
						</h1>
						<h2><Fade bottom cascade>Feature-Rich and Powerful Clash of Clans Discord Bot</Fade></h2>
						<p>
							<Flip bottom cascade>
								<a href="https://clashperk.com/invite" target="_blank" rel="noopener noreferrer">
									<Button id="button" >Invite ClashPerk</Button>
								</a>
								<a href="https://discord.gg/ppuppun" target="_blank" rel="noopener noreferrer">
									<Button id="button" >Official Discord</Button>
								</a>
							</Flip>
						</p>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
