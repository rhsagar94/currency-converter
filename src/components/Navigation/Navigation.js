import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
	return (
		<ul>
			<li>
				<h2>
					<Link style={{ textDecoration: 'none' }} to='/'>
						<p>Home</p>
					</Link>
				</h2>
			</li>
			<li>
				<h2>
					<Link style={{ textDecoration: 'none' }} to='/currency'>
						<p>Currency Conversion</p>
					</Link>
				</h2>
			</li>
		</ul>
	);
}

export default Navigation;
