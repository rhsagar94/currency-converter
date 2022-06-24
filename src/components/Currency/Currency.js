import React from 'react';
import { useState } from 'react';
import './Currency.css';

function Currency(props) {
	const initialFormState = {
		from: '',
		to: '',
		amount: '',
	};

	const [formState, setFormState] = useState(initialFormState);
	const [data, setData] = useState(null);

	const [confirm, setConfirm] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		getData();
		setConfirm(true);
	}

	function getData() {
		const url = `https://api.exchangerate.host/convert?from=${formState.from}&to=${formState.to}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				return setData(res);
			})

			.catch((err) => console.log('Something went wrong', err));
	}

	return (
		<div>
			<h2>TYPE YOUR CURRENCY CODE</h2>
			<form onSubmit={handleSubmit}>
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
				<button type='submit'> Confirm</button>
			</form>

			<h2>
				THE CONVERTED AMOUNT IS: {confirm && data?.info.rate * formState.amount}{' '}
				{confirm && formState.to}
			</h2>
		</div>
	);
}

export default Currency;
