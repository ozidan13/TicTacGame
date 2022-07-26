import React, { useState } from 'react';
import './LayoutS.css';
import Nav from '../Nav/Nav';
// import {BrowserRouter as Router,Router, Switch, Route, Link, Outlet} from 'react-router-dom';
import { Route, Routes, Outlet } from 'react-router-dom'


function Layout() {

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default Layout