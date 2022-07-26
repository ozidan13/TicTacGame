import React, { useState } from 'react';
import './GameAreaStyle.css';
import PlayerOne from '../SelectPlayers/PlayerOne';
import {playerOneName} from '../SelectPlayers/PlayerOne';

const GameArea = () => {
	const [playerName, setPlayerName] = useState('osama Zinhom');
	const [player1Name, setPlayer1Name] = useState('osama Zinhom');
	const [player2Name, setPlayer2Name] = useState('Ahmed Zinhom');
	const [turn, setTurn] = useState('x');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();
	const [WinningsX, setWinningsX] = useState(0);
	const [WinningsO, setWinningsO] = useState(0);

	
	
	const checkForWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
					squares[pattern[2]] === ''
				) {
					// do nothing
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]]);
				}
			});
		}
	};

	const handleClick = (num) => {
		if (cells[num] !== '') {
			alert('already clicked');
			return;
		}

		let squares = [...cells];

		if (turn === 'x') {
			squares[num] = 'x';
			setTurn('o');
		} else {
			squares[num] = 'o';
			setTurn('x');
		}

		// CREATE FUNCTION TO ADD 1 TO WIINER
		const addWinning = (winner) => {
			if (winner === 'x') {
				setWinningsX(WinningsX + 1);
			} else if (winner === 'o') {
				setWinningsO(WinningsO + 1);
			} // run function to add 1 to winner
		}
		addWinning(winner);
		checkForWinner(squares);
		setCells(squares);
	};

	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
	};

	
	return (
		<div className='container'>
			<div className='players-container'>
				<h1>Welcome to tic tac Toe Game</h1>
				
				<div className='players-detials'>
					<div className='player-one'>
						<h3>Player 1 Name : {player1Name}</h3>
						<p>Winnings O : {WinningsO}</p>
					</div>
					<div className='player-now'>
						<p>Player Now: {turn}</p>
					</div>
					<div className='player-two'>
						<h3>Player 2 Name : {player2Name}</h3>
						<p>Winnings X : {WinningsX} </p>
					</div>
					
					
				</div>
			</div>
			
			{winner && (
				<>
					<h2>{winner}</h2>
					<p>Player Name is {playerName}</p>
				</>
			)}

			<table>
				
				<tbody>
					<tr>
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
			<button onClick={() => handleRestart()}>Reset the Game</button>
			{winner && (
				<>
					<button onClick={() => handleRestart()}>Start the Game</button>
				</>
			)}
			
		</div>
	);
};

export default GameArea;
