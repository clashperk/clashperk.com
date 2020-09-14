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
				<Navbar.Brand style={{ fontSize: '16px', color }} onClick={() => window.scrollTo(0, 0)}>CLASHPERK</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				{/* Collapse Navbar */}
				<Navbar.Collapse id="basic-navbar-nav">

					{/* Left Side Menu */}
					<Nav className="mr-auto">
						<Nav.Link style={{ color }} href="#" disabled="true" hidden>HOME</Nav.Link>
					</Nav>

					{/* Right Side Menu */}
					<Nav>
						<Nav.Link style={{ color }} href="#" onClick={() => window.scrollTo(0, this.props.scrollRef)}>FEATURES</Nav.Link>
						<Nav.Link style={{ color }} href="#">LOGIN</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;