import React, { useState } from 'react';
import './LayoutStyle.css';
import {BrowserRouter, Route,Link, Outlet} from 'react-router-dom';


function Layout() {
  const [playerName, setPlayerName] = useState('playerName');
  const nameOfPlayer = document.querySelector(".nameOfPlayer");

  const handlePlayerName = (e) => {
    setPlayerName(e.target.value);
	}

  return (
    <>
      <div className="home">
        <h1>Tic Tac Toe</h1>
        <input type="text" placeholder="Player Name" />
        <p className='nameOfPlayer'>{playerName}</p>
        <button to="gamearea" onChange={handlePlayerName()}>
          <Link to="/gamearea">Next</Link>
        </button>
        
        <Outlet />
      </div> 
    </>
  )
}

export default Layout