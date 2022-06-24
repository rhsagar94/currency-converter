import { useEffect, useState } from 'react';
import React from 'react';
import './Home.css';

function Home(props) {
	const [rate, setRate] = useState(null);

	function getData() {
		fetch(`https://api.exchangerate.host/latest`)
			.then((res) => res.json())
			.then((data) => {
				setRate(data);
			})
			.catch((err) => {
				console.log('Something went wrong ', err);
			});
	}

	useEffect(() => {
		getData();
	}, []);

	if (!rate) {
		return <p>Loading information ...</p>;
	}

	return (
		<div>
			<p className='rate'>The current rate of USD is: {rate.rates.USD}</p>
			<p className='rate'>The current rate of CAD is: {rate.rates.CAD}</p>
			<p className='rate'>The current rate of AUD is: {rate.rates.AUD}</p>
			<p className='rate'>The current rate of Pound is: {rate.rates.GBP}</p>
			<br />
			<h2>The base currency is: {rate.base}O </h2>
		</div>
	);
}

export default Home;
