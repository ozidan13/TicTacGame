import React, { useState } from 'react';
import './NavS.css';
// import {BrowserRouter as Router,Router, Switch, Route, Link, Outlet} from 'react-router-dom';
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'


function Nav() {

  return (
    <>
      <nav className="nav">
        <h3>Tic Tac</h3>
        <ul className='nav-links'>
            <li><Link className='li-link' to="/gamearea">Quick Start</Link></li>
            <li><Link className='li-link' to="/playerone">Select Player</Link></li>
            <li><Link className='li-link' to="/about">About</Link></li>
        </ul>
      </nav> 
    </>
  )
}

export default Nav