import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
	constructor() {
		super();
		this.state = { scrollY: 0 };
	}

	onScroll = () => {
		this.setState({ scrollY: window.scrollY });
	}

	scrollTo = () => {
		window.scrollTo(0, this.props.scrollRef);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	render() {
		let { background, color } = { background: 'transparent', color: 'white' };
		if (window.innerWidth < 700 || this.state.scrollY > 0) {
			background = 'white';
			color = 'black';
		} else {
			background = 'transparent';
			color = 'white';
		}

		return (
			<Navbar collapseOnSelect variant="light" expand="lg" fixed="top" style={{ background }}>
				<Navbar.Brand as={Link} style={{ fontSize: '16px', color }} to="/" onClick={() => window.scrollTo(0, 0)}>
					CLASHPERK
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				{/* Collapse Navbar */}
				<Navbar.Collapse id="basic-navbar-nav">

					{/* Left Side Menu */}
					<Nav className="mr-auto">
						<Nav.Link style={{ color }} href="#" disabled="true" hidden>HOME</Nav.Link>
					</Nav>

					{/* Right Side Menu */}
					<Nav hidden={this.props.hide}>
						<Nav.Link href="/invite" style={{ color }}>INVITE</Nav.Link>
						<Nav.Link href="/support" style={{ color }}>SUPPORT</Nav.Link>
						<Nav.Link as={Link} style={{ color }} to="/" onClick={this.scrollTo}>FEATURES</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;