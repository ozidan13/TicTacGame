import './App.css';
import { Route, Routes } from 'react-router-dom'
import GameArea from './components/GameArea';
import Layout from './components/Layout';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<GameArea />} />
				</Route>
			</Routes>	
		</div>
	);
}

export default App;
