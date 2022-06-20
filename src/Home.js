import { useEffect, useState } from 'react';
import React from 'react';

function Home(props) {
	const [rate, setRate] = useState(null);

	useEffect(() => {
		fetch(`https://api.exchangerate.host/latest`)
			.then((res) => res.json())
			.then((rate) => {
				setRate(rate);
				console.log(rate);
			})
			.catch((err) => {
				console.log('Something went wrong ', err);
			});
	}, []);

	return (
		<div>
			<h2>This is the current rate: {props.rates}</h2>
			<p></p>
		</div>
	);
}

export default Home;
