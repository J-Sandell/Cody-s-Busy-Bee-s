import React, { Fragment } from "react";
import { Nav } from "reactstrap";





function Header() {
	return (
		<Fragment>
			<div className="container fixed-top">
				<div className="row">
					<div className="col fixed-top">
						<img src="/assests\images/codybee2.png" height="100" width="100" alt="bee" />
					</div>
					<div>
						<h1>Cody's</h1>
						<h2>Busy Bee's</h2>
					</div>
				</div>
			</div>

			<Nav dark shadow sticky="top" >

			</Nav>
		</Fragment>
	);
}


export default Header;