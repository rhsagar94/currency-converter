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

	return (
		<div>
			<h2>The base currency is: {rate.base} </h2>
			<p>The current rate is: {rate.rates.USD}</p>
		</div>
	);
}

export default Home;
