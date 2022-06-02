import React from "react";
import { Navbar, Nav, NavLink, NavItem } from 'reactstrap';






function Header() {
	return (
		<React.Fragment>
			<div className="container-fluid fixed-top">
				<div className="row">
					<div className="col text-light bg-dark">
						<div className="d-flex shadow">
							<img src="/assests\images/codybee2.png" height="100" width="100" alt="bee" />
							<h1>Cody's</h1>
							<h2>Busy Bee's</h2>
						</div>
					</div>
				</div>
			</div>
			<Navbar>
				<div className="container">
					<Nav>
						<NavItem>
							<NavLink href="./HomeComponent">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="./AboutComponent.js">Missons</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Contact</NavLink>
						</NavItem>
					</Nav>
				</div>
			</Navbar>




		</React.Fragment>
	);
}


export default Header;