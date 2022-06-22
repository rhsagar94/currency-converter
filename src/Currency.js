// Insert code between the backticks
import React from 'react';
import { useState, useEffect } from 'react';

function Currency(props) {
	const initialFormState = {
		from: '',
		to: '',
		amount: '',
	};

	const [formState, setFormState] = useState(initialFormState);
	const [data, setData] = useState(null);
	const [converted, setConvert] = useState(null);
	const [confirm, setConfirm] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		getData();
		setConfirm(true);
		console.log('You clicked me');
		console.log(formState.from);
		console.log(formState.to);
		console.log(formState.amount);
		console.log(confirm);
		// console.log(converted);

		// setFormState(initialFormState);
	}

	function getData() {
		console.log('get data is running');
		const url = `https://api.exchangerate.host/convert?from=${formState.from}&to=${formState.to}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				// setData(res);
				return setData(res);
			})
			.then((res) => {
				const newData = data?.info.rate * formState.amount;

				setConvert(newData);
				console.log(newData);
			})
			.catch((err) => console.log('Something went wrong', err));
	}

	useEffect(() => {
		// getData();
	}, []);

	// console.log(data);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Type your currency</h2>
				<label htmlFor='from'>From: </label>
				<input
					type='text'
					id='from'
					value={formState.from}
					onChange={(event) => {
						setConfirm(false);
						setFormState({ ...formState, from: event.target.value });
					}}
				/>
				<label htmlFor='to'>To: </label>
				<input
					type='text'
					id='to'
					value={formState.to}
					onChange={(event) => {
						setConfirm(false);
						setFormState({ ...formState, to: event.target.value });
					}}
				/>
				<button type='submit'>Confirm</button>
				<label htmlFor='amount'>Amount: </label>
				<input
					type='text'
					id='amount'
					value={formState.amount}
					onChange={(event) => {
						setConfirm(false);
						setFormState({ ...formState, amount: event.target.value });
					}}
				/>
			</form>

			<h1>
				The converted amount is: {confirm && data?.info.rate * formState.amount}{' '}
				{confirm && formState.to}
			</h1>
		</div>
	);
}

export default Currency;
