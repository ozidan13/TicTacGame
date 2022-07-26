import React, { useState } from 'react';
import './PlayerTwoS.css';
import {BrowserRouter, Route,Link, Outlet} from 'react-router-dom';


function PlayerTwo() {

  const [playerTwoFirstName, setPlayerTwoFirstName] = useState('');
  const [playerTwoLastName, setPlayerTwoLasttName] = useState('');
  const playerTwoName = `${playerTwoFirstName}  ${playerTwoLastName}`;
  return (
    <>
      <div className="container">
        <h1>Welcome to Tic Tac Toe Game</h1>
        <h2>Player Name is : {playerTwoName} </h2>
        <div className='form' >
          <form>
            <h2><label>Add Second Player:</label></h2>
            <div className='inputs'>
              <div className='field'> 
                <label>First Name</label>
                <input onChange={(e) => setPlayerTwoFirstName(e.target.value)} type="text" name="playerOneFirstName" placeholder="First Name" />
              </div>
              <div className='field'> 
                <label>Last Name</label>
                <input onChange={(e) => setPlayerTwoLasttName(e.target.value)} type="text" name="playerOneLastName" placeholder="Last Name" />
              </div>
            </div>
            <button><Link className='link' to='/gamearea'>Start The Game</Link></button>
          </form>
        </div>
      </div> 
    </>
  )
}

export default PlayerTwo