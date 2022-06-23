import React from 'react';
import { Link } from 'react-router-dom';
import background from '/home/rabbi/Desktop/sei/homework/week6/currency-converter/src/components/Header/header1.jpeg';

function Header(props) {
	return (
		<div
			style={{
				backgroundImage: `url(${background})`,

				height: '300px',
				width: '700px',
			}}>
			<Link style={{ textDecoration: 'none' }} to='/'>
				<h1>Currency Conversion Site</h1>
			</Link>
		</div>
	);
}

export default Header;
