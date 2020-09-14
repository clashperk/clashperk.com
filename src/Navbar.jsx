import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends React.Component {
	constructor() {
		super();
		this.state = { scrollY: 0 };
	}

	onScroll = () => {
		const scrollY = window.scrollY;
		this.setState({ scrollY });
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	render() {
		const { scrollY } = this.state;
		let { background, color } = { background: 'transparent', color: 'white' };
		if (window.innerWidth < 700 || scrollY > 0) {
			background = 'white';
			color = 'black';
		} else {
			background = 'transparent';
			color = 'white';
		}

		return (
			<Navbar variant="light" expand="lg" fixed="top" style={{ background }}>
				<Navbar.Brand href="#header" style={{ fontSize: '16px', color }}>CLASHPERK</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				{/* Collapse Navbar */}
				<Navbar.Collapse id="basic-navbar-nav">

					{/* Left Side Menu */}
					<Nav className="mr-auto" >
						<Nav.Link style={{ color }} href="#" disabled="true" hidden="true">3712 SERVERS</Nav.Link>
					</Nav>

					{/* Right Side Menu */}
					<Nav>
						<Nav.Link style={{ color }} href="#features">FEATURES</Nav.Link>
						<Nav.Link style={{ color }} href="#login" disabled="true">LOGIN</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;