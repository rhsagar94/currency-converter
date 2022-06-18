import React, { useEffect, useState } from 'react';
import React from 'react';

function Home(props) {
	const [rate, setRate] = useState(null);

	useEffect(() => {
		const url = `https://api.exchangerate.host/latest`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setRate(data));
	}, []);

	return <div>{rate}</div>;
}

export default Home;
