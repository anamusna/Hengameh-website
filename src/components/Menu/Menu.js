import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Menu.css';

class Menu extends React.Component {
	state = {
		isOpen : false
	};

	toggle = () => {
		this.setState({
			isOpen : !this.state.isOpen
		});
	};

	closeMenu = () => {
		/* if (this.props.width < 766) { */
		this.toggle();
	};
	render() {
		return (
			<React.Fragment>
				<Navbar light expand="md" className=" animated zoomIn">
					<NavbarBrand className="App-header">
						<a className="text-dark" href="/">
							Hengameh Irani
						</a>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} className="icon text-dark" />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto " navbar>
							{/* 	<NavItem onClick={this.closeMenu}>
								<NavLink exact className="nav-link text-dark"  to="/">
									Home
								</NavLink>
							</NavItem> */}
							{/* 		<NavItem onClick={this.closeMenu}>
								<NavLink className="nav-link  text-dark" to="/books">
									Books
								</NavLink>
							</NavItem> */}
							<NavItem onClick={this.closeMenu}>
								<NavLink className="nav-link text-dark" /* activeClassName="active" */ to="/contact">
									Contact
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default Menu;
