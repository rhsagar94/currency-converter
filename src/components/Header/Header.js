import React from 'react';
import { Link } from 'react-router-dom';
import background from './header1.jpeg';

function Header(props) {
	return (
		<div
			style={{
				backgroundImage: `url(${background})`,

				height: '100%',
				width: '100%',
				resizeMode: 'contain'
			}}>
			<Link style={{ textDecoration: 'none' }} to='/'>
				<h1>Currency Conversion Site</h1>
			</Link>
		</div>
	);
}

export default Header;
