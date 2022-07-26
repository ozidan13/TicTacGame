import './App.css';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import GameArea from './components/GameArea/GameArea';
import PlayerOne from './components/SelectPlayers/PlayerOne';
import PlayerTwo from './components/SelectPlayers/PlayerTwo';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
	return (
		<div className='App'>
			<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="playerone" index  element={<PlayerOne />} />
					<Route path="playertwo" element={<PlayerTwo />} />
					<Route path="gamearea" element={<GameArea />} />
					<Route path="about" element={<About />} />
				</Route>
			</Routes>
			</BrowserRouter>
		</div>
	);
}

/*

<div className='App'>
			<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="playerone" index  element={<PlayerOne />} />
					<Route path="playertwo" element={<PlayerTwo />} />
					<Route path="gamearea" element={<GameArea />} />
				</Route>
			</Routes>
			</BrowserRouter>
		</div>
*/
export default App;
