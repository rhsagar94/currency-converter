import './App.css';
import Home from './Home';

function App() {
	return (
		<div>
			<Home newUser={true} name='Rabbi' bio={{ age: 27, height: 6.6 }} />
		</div>
	);
}

export default App;
