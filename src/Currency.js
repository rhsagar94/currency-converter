import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Currency(props) {
	const { currency1 } = useParams();
	const { currency2 } = useParams();
	const [data, setData] = useState(null);

	function getData() {
		const url = `https://api.exchangerate.host/convert?from=USD&to=EUR`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setData(res);
			})
			.catch((err) => console.log('Something went wrong', err));
	}

	useEffect(() => {
		getData();
	}, []);

	console.log(data);

	if (!data) {
		return <p>Loading information ...</p>;
	}

	return (
		<div>
			<h1>usd to euro is: {data.info.rate}</h1>
		</div>
	);
}

export default Currency;
