import './App.css';
import Home from '../Home/Home';
import Currency from '../Currency/Currency';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

function App() {
	return (
		<div>
			<Header />
			<Navigation />

			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/currency' element={<Currency />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
