import React, { useState } from 'react';
import './PlayerOneS.css';
import PlayerTwo from './PlayerTwo';
import {BrowserRouter, Route,Link, Outlet} from 'react-router-dom';


function PlayerOne() {

  const [playerOneFirstName, setPlayerOneFirstName] = useState('');
  const [playerOneLastName, setPlayerOneLastName] = useState('');
  const playerOneName = `${playerOneFirstName}  ${playerOneLastName}`;
  

  return (
    <>
      <div className="container">
        <h1>Welcome to Tic Tac Toe Game</h1>
        <h2>Player Name is : {playerOneName} </h2>
        <div className='form' >
          <form>
            <h2><label>Add First Player:</label></h2>
            <div className='inputs'>
              <div className='field'> 
                <label>First Name</label>
                <input onChange={(e) => setPlayerOneFirstName(e.target.value)} type="text" name="playerOneFirstName" placeholder="First Name" />
              </div>
              <div className='field'> 
                <label>Last Name</label>
                <input onChange={(e) => setPlayerOneLastName(e.target.value)} type="text" name="playerOneLastName" placeholder="Last Name" />
              </div>
            </div>
            <button><Link className='link' to='/playertwo'>Continue</Link></button>
          </form>
        </div>
      </div> 
    </>
  )
}

export default PlayerOne