import { Button, Image } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import Feature from './Feature';
import Navbar from './Navbar';
import React from 'react';
import './Home.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = { offset: 0 };
		this.scrollRef = React.createRef();
	}

	componentDidMount() {
		this.setState({ offset: this.scrollRef.current.offsetTop });
	}

	render() {
		return (
			<>
				<Navbar scrollRef={this.state.offset} hide={false} /> {/* Import Navbar */}
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
									<Button id="button" style={{ width: '200px' }} >INVITE CLASHPERK</Button>
								</a>
								<a href="https://www.patreon.com/join/clashperk" target="_blank" rel="noopener noreferrer">
									<Button id="button" style={{ width: '200px' }} >SUPPORT US</Button>
								</a>
							</p>
						</Fade>
					</div>
				</section>

				{/* Import Feature */}
				<div ref={this.scrollRef}>
					<Feature/>
				</div>
			</>
		);
	}
}

export default App;
