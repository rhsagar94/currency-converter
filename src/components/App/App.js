import './App.css';
import Home from '../Home/Home';
import Currency from '../Currency/Currency';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

function App() {
	return (
		<div className='parent'>
			<div className='header'>
				<Header />
			</div>
			<div className='nav'>
				<Navigation />
			</div>

			<div className='body'>
				<Routes>
					<Route path='/' element={<Home />} />

					<Route path='/' element={<Home />} />

					<Route path='/currency' element={<Currency />} />
				</Routes>
			</div>

			<div className='footer'>
				<Footer />
			</div>
		</div>
	);
}

export default App;
