import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<div>
			<Link style={{ textDecoration: 'none' }} to='/'>
				<h1>Currency Conversion Site</h1>
			</Link>
		</div>
	);
}

export default Header;
