import React, { useState } from 'react';
import './AboutS.css';
// import {BrowserRouter as Router,Router, Switch, Route, Link, Outlet} from 'react-router-dom';
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'


function About() {

  return (
    <> 
        <div className="about">
            <div className='container'>
                <h1>About</h1>
                <h2>This a task for a job opportunity - Reactjs Project</h2>
                <h3>Created By : Osama Zinhom</h3>
                <p>This is a game where you can play against a computer or another player.</p>
                <p>The game is played on a grid that is 3x3. You can choose to play as X or O.</p>
                <p>You can choose to play against the computer or another player.</p>
                
            </div>
        </div>
    </>
  )
}

export default About