import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends React.Component {
	render() {
		return (
			<Navbar variant="dark" expand="lg" fixed="top" style={{ background: 'transparent' }}>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				{/* Collapse Navbar */}
				<Navbar.Collapse id="basic-navbar-nav">

					{/* Left Side Menu */}
					<Nav className="mr-auto" >
						<Nav.Link style={{ color: 'white' }} href="/">HOME</Nav.Link>
						<Nav.Link style={{ color: 'white' }} href="#features">FEATURES</Nav.Link>
					</Nav>

					{/* Right Side Menu */}
					<Nav>
						<Nav.Link style={{ color: 'white' }} href="#teams">TEAMS</Nav.Link>
						<Nav.Link style={{ color: 'white' }} href="#login">LOGIN</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;