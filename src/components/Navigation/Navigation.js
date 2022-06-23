import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
	return (
		<div>
			<Link style={{ textDecoration: 'none' }} to='/'>
				<h2>Home</h2>
			</Link>
			<Link style={{ textDecoration: 'none' }} to='/currency'>
				<h2>Currency Conversion</h2>
			</Link>
		</div>
	);
}

export default Navigation;
