import { useEffect, useState } from 'react';
import React from 'react';

function Home(props) {
	const [rate, setRate] = useState(null);

	function getData() {
		fetch(`https://api.exchangerate.host/latest`)
			.then((res) => res.json())
			.then((data) => {
				setRate(data);
				console.log(data);
			})
			.catch((err) => {
				console.log('Something went wrong ', err);
			});
	}

	useEffect(() => {
		getData();
	}, []);

	// console.log(rate.base);
	// console.log(rate.date);
	// console.log(rate.rates.USD);

	if (!rate) {
		return <p>Loading information ...</p>;
	}

	return (
		<div>
			<h2>The base currency is: {rate.base}O </h2>
			<p>The current rate of USD is: {rate.rates.USD}</p>
			<p>The current rate of CAD is: {rate.rates.CAD}</p>
			<p>The current rate of AUD is: {rate.rates.AUD}</p>
			<p>The current rate of Pound is: {rate.rates.GBP}</p>
		</div>
	);
}

export default Home;
