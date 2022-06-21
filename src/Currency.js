import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Currency(props) {
	const initialFormState = {
		from: 'USD',
		to: 'EUR',
	};

	const [formState, setFormState] = useState(initialFormState);
	const { currency1 } = useParams();
	const { currency2 } = useParams();
	const [data, setData] = useState(null);

	function handleSubmit(event) {
		event.preventDefault();
		console.log('You clicked me');
		console.log(formState);
		setFormState(initialFormState);
	}

	function getData() {
		const url = `https://api.exchangerate.host/convert?from=${currency1}&to=${currency2}`;
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
			<form onSubmit={handleSubmit}>
				<h2>Type your currency</h2>
				<label htmlFor='from'>From: </label>
				<input type='text' id='from' value={formState.from} onChange={(event) => setFormState({ ...formState, from: event.target.value })} />
				<label htmlFor='to'>To:</label>
				<input type='text' id='to' value={formState.to} onChange={(event) => setFormState({ ...formState, to: event.target.value })} />
				<button type='submit'>Confirm</button>
			</form>
			<h1>USD to Euro is: {data.info.rate}</h1>
		</div>
	);
}

export default Currency;
